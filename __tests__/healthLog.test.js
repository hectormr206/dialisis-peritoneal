import {
  loadEntries,
  saveEntry,
  clearAll,
  todayISO,
  computeDelta,
  MAX_ENTRIES,
  STORAGE_KEY
} from '../src/utils/healthLog'

beforeEach(() => {
  window.localStorage.clear()
})

describe('healthLog storage', () => {
  it('returns an empty history when nothing has been saved yet', () => {
    expect(loadEntries()).toEqual([])
  })

  it('saves a new entry and returns it newest-first', () => {
    saveEntry({ date: '2026-06-30', weightKg: 70.2, notes: 'Me sentí bien' })
    const entries = saveEntry({
      date: '2026-07-01',
      weightKg: 70.5,
      notes: ''
    })

    expect(entries).toEqual([
      { date: '2026-07-01', weightKg: 70.5, notes: null },
      { date: '2026-06-30', weightKg: 70.2, notes: 'Me sentí bien' }
    ])
  })

  it('upserts the same-day entry instead of creating a duplicate', () => {
    saveEntry({ date: '2026-07-01', weightKg: 70, notes: 'Primera' })
    const entries = saveEntry({
      date: '2026-07-01',
      weightKg: 71,
      notes: 'Actualizada'
    })

    expect(entries).toHaveLength(1)
    expect(entries[0]).toEqual({
      date: '2026-07-01',
      weightKg: 71,
      notes: 'Actualizada'
    })
  })

  it('allows an entry with only weight, only notes, or neither', () => {
    const entries = saveEntry({ date: '2026-07-01', weightKg: 70.5 })
    expect(entries[0]).toEqual({
      date: '2026-07-01',
      weightKg: 70.5,
      notes: null
    })

    const notesOnly = saveEntry({
      date: '2026-07-02',
      notes: 'Sin báscula hoy'
    })
    expect(notesOnly[0]).toEqual({
      date: '2026-07-02',
      weightKg: null,
      notes: 'Sin báscula hoy'
    })
  })

  it('ignores a non-positive or non-numeric weight instead of storing garbage', () => {
    const entries = saveEntry({ date: '2026-07-01', weightKg: -5, notes: '' })
    expect(entries[0].weightKg).toBeNull()

    const entries2 = saveEntry({
      date: '2026-07-02',
      weightKg: 'setenta',
      notes: ''
    })
    expect(entries2.find((e) => e.date === '2026-07-02').weightKg).toBeNull()
  })

  it('trims notes and caps them at 140 characters', () => {
    const longNote = 'a'.repeat(200)
    const entries = saveEntry({
      date: '2026-07-01',
      notes: `  ${longNote}  `
    })

    expect(entries[0].notes).toHaveLength(140)
    expect(entries[0].notes).toBe(longNote.slice(0, 140))
  })

  it('throws only for a missing/invalid date, never for the rest of the payload', () => {
    expect(() => saveEntry({ date: 'not-a-date' })).toThrow()
    expect(() => saveEntry({})).toThrow()
  })

  it('caps history at MAX_ENTRIES, dropping the oldest entries first', () => {
    const isoDatePlusDays = (offset) => {
      const base = new Date(2026, 0, 1)
      base.setDate(base.getDate() + offset)
      return todayISO(base)
    }

    const totalDays = MAX_ENTRIES + 5
    for (let offset = 0; offset < totalDays; offset++) {
      saveEntry({ date: isoDatePlusDays(offset), weightKg: 70 })
    }

    const entries = loadEntries()
    expect(entries).toHaveLength(MAX_ENTRIES)
    // The 5 oldest days were dropped; the most recent MAX_ENTRIES remain.
    expect(entries[0].date).toBe(isoDatePlusDays(totalDays - 1))
    expect(entries[entries.length - 1].date).toBe(isoDatePlusDays(5))
    expect(
      entries.some((entry) => entry.date === isoDatePlusDays(0))
    ).toBe(false)
  })

  it('never throws on corrupt localStorage JSON and falls back to an empty log', () => {
    window.localStorage.setItem(STORAGE_KEY, 'not valid json{')

    let entries
    expect(() => {
      entries = loadEntries()
    }).not.toThrow()
    expect(entries).toEqual([])
  })

  it('never throws on a malformed-shape stored value and falls back to an empty log', () => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ foo: 'bar' }))
    expect(loadEntries()).toEqual([])

    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ version: 1, entries: 'not-an-array' })
    )
    expect(loadEntries()).toEqual([])
  })

  it('filters out individually malformed entries without discarding the valid ones', () => {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        version: 1,
        entries: [
          { date: '2026-07-01', weightKg: 70, notes: null },
          { date: 'bad-date', weightKg: 70, notes: null },
          { weightKg: 70, notes: null }
        ]
      })
    )

    expect(loadEntries()).toEqual([
      { date: '2026-07-01', weightKg: 70, notes: null }
    ])
  })

  it('clearAll removes the entire log', () => {
    saveEntry({ date: '2026-07-01', weightKg: 70 })
    clearAll()

    expect(loadEntries()).toEqual([])
    expect(window.localStorage.getItem(STORAGE_KEY)).toBeNull()
  })
})

describe('todayISO', () => {
  it('formats an injected date as YYYY-MM-DD using local time', () => {
    expect(todayISO(new Date(2026, 6, 1))).toBe('2026-07-01') // July is month 6
    expect(todayISO(new Date(2026, 0, 5))).toBe('2026-01-05')
  })
})

describe('computeDelta', () => {
  it('returns null when either entry is missing a weight', () => {
    expect(
      computeDelta(
        { date: '2026-07-01', weightKg: null },
        { date: '2026-06-30', weightKg: 70 }
      )
    ).toBeNull()
    expect(computeDelta({ date: '2026-07-01', weightKg: 70 }, null)).toBeNull()
  })

  it('computes the kg difference and whether the previous entry was exactly one day earlier', () => {
    const delta = computeDelta(
      { date: '2026-07-01', weightKg: 70.8 },
      { date: '2026-06-30', weightKg: 70.2 }
    )
    expect(delta.kg).toBeCloseTo(0.6, 5)
    expect(delta.isConsecutiveDay).toBe(true)
  })

  it('flags a gap of more than one day so the UI does not falsely say "desde ayer"', () => {
    const delta = computeDelta(
      { date: '2026-07-05', weightKg: 70 },
      { date: '2026-06-30', weightKg: 72 }
    )
    expect(delta.isConsecutiveDay).toBe(false)
    expect(delta.kg).toBeCloseTo(-2, 5)
  })
})
