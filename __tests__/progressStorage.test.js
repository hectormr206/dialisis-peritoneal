import {
  loadProgress,
  saveProgress,
  progressKey,
  legacyProgressKey
} from '../src/utils/progressStorage'
import { aseoGeneralSteps } from '../src/content/procedures/aseo-general'

const procedureId = 'test-procedure'

beforeEach(() => {
  window.localStorage.clear()
})

describe('progressStorage', () => {
  it('append-only step changes preserve the completed/current mapping exactly', () => {
    window.localStorage.setItem(
      progressKey(procedureId),
      JSON.stringify({
        version: 2,
        completedIds: ['a', 'b'],
        currentId: 'b',
        stepIds: ['a', 'b', 'c'],
        timestamp: 111
      })
    )

    const procedure = {
      id: procedureId,
      steps: [{ id: 'a' }, { id: 'b' }, { id: 'c' }, { id: 'd' }]
    }

    const result = loadProgress(procedure)

    expect(result.completedIds).toEqual(['a', 'b'])
    expect(result.currentId).toBe('b')
    expect(result.migrated).toBeUndefined()
  })

  it('reordering steps resets progress once and flags a migration notice', () => {
    window.localStorage.setItem(
      progressKey(procedureId),
      JSON.stringify({
        version: 2,
        completedIds: ['a', 'b'],
        currentId: 'b',
        stepIds: ['a', 'b', 'c'],
        timestamp: 111
      })
    )

    const procedure = {
      id: procedureId,
      steps: [{ id: 'a' }, { id: 'c' }, { id: 'b' }]
    }

    const result = loadProgress(procedure)

    expect(result.migrated).toBe('reset')
    expect(result.completedIds).toEqual([])
    expect(result.currentId).toBe('a')
  })

  it('removing a step resets progress once and flags a migration notice', () => {
    window.localStorage.setItem(
      progressKey(procedureId),
      JSON.stringify({
        version: 2,
        completedIds: ['a', 'b'],
        currentId: 'b',
        stepIds: ['a', 'b', 'c'],
        timestamp: 111
      })
    )

    const procedure = {
      id: procedureId,
      steps: [{ id: 'a' }, { id: 'c' }]
    }

    const result = loadProgress(procedure)

    expect(result.migrated).toBe('reset')
    expect(result.completedIds).toEqual([])
  })

  it('does not throw on a corrupt/malformed legacy value and falls back to a safe default', () => {
    window.localStorage.setItem(legacyProgressKey(procedureId), 'not-valid-json{')

    const procedure = { id: procedureId, steps: [{ id: 'a' }, { id: 'b' }] }

    let result
    expect(() => {
      result = loadProgress(procedure)
    }).not.toThrow()

    expect(result.completedIds).toEqual([])
    expect(result.currentId).toBe('a')
    expect(result.migrated).toBeUndefined()
  })

  it('does not throw on a corrupt/malformed v2 value and falls back to a safe default', () => {
    window.localStorage.setItem(progressKey(procedureId), '{not json')

    const procedure = { id: procedureId, steps: [{ id: 'a' }, { id: 'b' }] }

    let result
    expect(() => {
      result = loadProgress(procedure)
    }).not.toThrow()

    expect(result.completedIds).toEqual([])
  })

  it('migrates a legacy index-based record to the v2 id-based shape', () => {
    window.localStorage.setItem(
      legacyProgressKey(procedureId),
      JSON.stringify({ completed: [0, 1], current: 1, timestamp: 222 })
    )

    const procedure = {
      id: procedureId,
      steps: [{ id: 'a' }, { id: 'b' }, { id: 'c' }]
    }

    const result = loadProgress(procedure)

    expect(result.completedIds).toEqual(['a', 'b'])
    expect(result.currentId).toBe('b')
    expect(result.migrated).toBeUndefined()
  })

  it('saveProgress writes the v2 key and clears the legacy key', () => {
    window.localStorage.setItem(
      legacyProgressKey(procedureId),
      JSON.stringify({ completed: [0], current: 0, timestamp: 1 })
    )

    const procedure = {
      id: procedureId,
      steps: [{ id: 'a' }, { id: 'b' }]
    }

    saveProgress(procedure, { completedIds: ['a'], currentId: 'a' })

    expect(window.localStorage.getItem(legacyProgressKey(procedureId))).toBeNull()
    const stored = JSON.parse(window.localStorage.getItem(progressKey(procedureId)))
    expect(stored.completedIds).toEqual(['a'])
    expect(stored.currentId).toBe('a')
    expect(stored.stepIds).toEqual(['a', 'b'])
  })

  // R3.4: exercise the migration for real against GeneralCleaning's actual
  // before/after step arrays. Before this PR, GeneralCleaning had no step
  // ids at all — progress was stored under the legacy bare key with
  // index-based `completed`/`current`. The schema extraction (PR3) kept the
  // exact same 14 steps in the exact same order (see
  // src/content/procedures/aseo-general.js), so this is a direct legacy
  // index-to-id migration, not a v2-to-v2 reconciliation — every historical
  // index maps 1:1 onto the new step id at that position, and no reset is
  // triggered.
  describe('GeneralCleaning (aseo-general) real before/after migration', () => {
    const pageId = 'aseo-general'

    it('has 14 steps in the same order as the pre-migration inline page (fidelity check)', () => {
      expect(aseoGeneralSteps).toHaveLength(14)
      expect(aseoGeneralSteps.map((step) => step.id)).toEqual([
        'prep-materials',
        'prep-towel',
        'hand-wash-soap',
        'hand-wash-palms',
        'hand-wash-backs',
        'hand-wash-knuckles',
        'hand-wash-thumbs',
        'hand-wash-nails',
        'hand-dry-take-towel',
        'hand-dry-fingers',
        'hand-dry-back',
        'hand-dry-turn-towel',
        'hand-dry-second-hand',
        'clean-surface'
      ])
    })

    it('maps a real pre-migration legacy record onto the new ids with no reset (trailing-append is N/A here — this is a legacy-to-v2 index migration)', () => {
      // A user who had completed the hand-wash portion (indices 2-7) and was
      // on "Secado - Tomar toalla" (index 8) before this PR shipped.
      window.localStorage.setItem(
        legacyProgressKey(pageId),
        JSON.stringify({
          completed: [0, 1, 2, 3, 4, 5, 6, 7],
          current: 8,
          timestamp: 12345
        })
      )

      const procedure = { id: pageId, steps: aseoGeneralSteps }
      const result = loadProgress(procedure)

      expect(result.migrated).toBeUndefined()
      expect(result.completedIds).toEqual([
        'prep-materials',
        'prep-towel',
        'hand-wash-soap',
        'hand-wash-palms',
        'hand-wash-backs',
        'hand-wash-knuckles',
        'hand-wash-thumbs',
        'hand-wash-nails'
      ])
      expect(result.currentId).toBe('hand-dry-take-towel')
    })

    it('handles an all-steps-completed legacy record with no reset', () => {
      window.localStorage.setItem(
        legacyProgressKey(pageId),
        JSON.stringify({
          completed: Array.from({ length: 14 }, (_, i) => i),
          current: 13,
          timestamp: 999
        })
      )

      const procedure = { id: pageId, steps: aseoGeneralSteps }
      const result = loadProgress(procedure)

      expect(result.migrated).toBeUndefined()
      expect(result.completedIds).toHaveLength(14)
      expect(result.currentId).toBe('clean-surface')
    })
  })
})
