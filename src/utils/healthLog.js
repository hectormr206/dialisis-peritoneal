// healthLog: private, on-device daily weight/notes log (design section 7,
// content-research #5086 section 3c — daily weight monitoring is an
// IMSS-797-16 self-care checklist item). No accounts, no servers: every
// entry lives only in this browser's localStorage, under `healthlog:v1`.
//
// R5.5 (hard rule): this module stores exactly the raw numbers the user
// typed. It never judges, flags, or interprets a value as good/bad/normal —
// no thresholds live here. `computeDelta` below is a plain arithmetic diff
// between two entries, not a clinical assessment; the UI that consumes it
// (src/components/HealthLog) is responsible for keeping that framing.
//
// Corrupt-data-safe, mirroring src/utils/progressStorage.js's approach:
// every read path is wrapped so a disabled/unavailable localStorage, invalid
// JSON, or an unexpected shape falls back to an empty log instead of
// throwing. History is capped at MAX_ENTRIES (90 days, ~3 months) so a
// device that never clears its data doesn't grow storage unbounded.
//
// Because the PWA offline service worker (PR10, registerServiceWorker.js)
// precaches the app shell, this page — and the localStorage read/write below
// — works the same with no network connection; nothing here needed a
// network round-trip to begin with.

export const STORAGE_KEY = 'healthlog:v1'
const VERSION = 1
export const MAX_ENTRIES = 90
const MAX_NOTES_LENGTH = 140

const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/

const isValidEntry = (entry) =>
  typeof entry === 'object' &&
  entry !== null &&
  typeof entry.date === 'string' &&
  DATE_PATTERN.test(entry.date) &&
  (entry.weightKg === null || typeof entry.weightKg === 'number') &&
  (entry.notes === null || typeof entry.notes === 'string')

const readEntries = () => {
  let raw
  try {
    raw = window.localStorage.getItem(STORAGE_KEY)
  } catch (error) {
    // localStorage unavailable (private mode, disabled, etc.)
    return []
  }

  if (!raw) return []

  let parsed
  try {
    parsed = JSON.parse(raw)
  } catch (error) {
    return []
  }

  if (
    typeof parsed !== 'object' ||
    parsed === null ||
    parsed.version !== VERSION ||
    !Array.isArray(parsed.entries)
  ) {
    return []
  }

  return parsed.entries.filter(isValidEntry)
}

const writeEntries = (entries) => {
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ version: VERSION, entries })
    )
  } catch (error) {
    // localStorage unavailable — fail silently, same best-effort contract
    // as progressStorage.saveProgress.
  }
}

const sortDescending = (entries) =>
  [...entries].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))

const normalizeWeight = (weightKg) =>
  typeof weightKg === 'number' && Number.isFinite(weightKg) && weightKg > 0
    ? weightKg
    : null

const normalizeNotes = (notes) => {
  if (typeof notes !== 'string') return null
  const trimmed = notes.trim()
  return trimmed.length > 0 ? trimmed.slice(0, MAX_NOTES_LENGTH) : null
}

/**
 * Loads the saved history, newest entry first.
 * @returns {Array<{date: string, weightKg: number|null, notes: string|null}>}
 */
export const loadEntries = () => sortDescending(readEntries())

/**
 * Saves (or updates, if `date` already has an entry) a single day's log.
 * One entry per calendar day — saving the same `date` twice replaces the
 * first entry rather than creating a duplicate.
 *
 * @param {{date: string, weightKg?: number, notes?: string}} payload
 * @returns {Array<{date: string, weightKg: number|null, notes: string|null}>} updated history, newest first
 */
export const saveEntry = ({ date, weightKg, notes } = {}) => {
  if (typeof date !== 'string' || !DATE_PATTERN.test(date)) {
    throw new Error('[healthLog] saveEntry requires a date in YYYY-MM-DD format')
  }

  const entry = {
    date,
    weightKg: normalizeWeight(weightKg),
    notes: normalizeNotes(notes)
  }

  const withoutSameDay = readEntries().filter((existing) => existing.date !== date)
  const updated = sortDescending([...withoutSameDay, entry]).slice(0, MAX_ENTRIES)

  writeEntries(updated)

  return updated
}

/** Deletes the entire log — used by the "borrar todo mi registro" action. */
export const clearAll = () => {
  try {
    window.localStorage.removeItem(STORAGE_KEY)
  } catch (error) {
    // localStorage unavailable — nothing to clear
  }
}

/**
 * Today's date as YYYY-MM-DD in the device's local time. `now` is
 * injectable for tests, mirroring registerServiceWorker.js's pattern of
 * accepting its environment dependencies as parameters.
 */
export const todayISO = (now = new Date()) => {
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

// UTC noon avoids DST-related off-by-one errors when diffing two
// YYYY-MM-DD calendar dates — only whole-day granularity matters here.
const toUTCNoon = (isoDate) => new Date(`${isoDate}T12:00:00Z`)

/**
 * Plain arithmetic difference between two entries — NOT a clinical
 * judgment (R5.5). Returns null when either entry has no weight recorded,
 * so the UI never renders a delta computed from a missing value.
 *
 * @param {{date: string, weightKg: number|null}} current
 * @param {{date: string, weightKg: number|null}|null} previous
 * @returns {{kg: number, isConsecutiveDay: boolean}|null}
 */
export const computeDelta = (current, previous) => {
  if (!current || !previous) return null
  if (typeof current.weightKg !== 'number' || typeof previous.weightKg !== 'number') {
    return null
  }

  const msPerDay = 24 * 60 * 60 * 1000
  const dayGap = Math.round(
    (toUTCNoon(current.date) - toUTCNoon(previous.date)) / msPerDay
  )

  return {
    kg: current.weightKg - previous.weightKg,
    isConsecutiveDay: dayGap === 1
  }
}
