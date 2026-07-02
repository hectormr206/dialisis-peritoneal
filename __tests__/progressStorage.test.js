import {
  loadProgress,
  saveProgress,
  progressKey,
  legacyProgressKey
} from '../src/utils/progressStorage'

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
})
