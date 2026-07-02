// progressStorage: versioned progress persistence for step-based procedures.
//
// Status: INERT in this PR — not wired into ProgressStep yet (that happens in
// PR3, per design section 6 "Utility inert until PR3"). ProgressStep keeps
// using its own bare `progress-${pageId}` read/write until then.
//
// Storage shape (v2): `progress:v2:${procedureId}` ->
//   { version: 2, completedIds, currentId, stepIds, timestamp, migrated? }
//
// `stepIds` is a snapshot of the full ordered step-id list at save time. It
// is required to run the append-only vs reorder/removal detection (R2.3) on
// a later load, once a procedure's step schema changes — this is a small
// addition to the wrapper shape sketched in the design doc (which only
// listed `completedIds`/`currentId`/`timestamp`), needed to make the
// ID-set-diff migration logic actually computable.

const VERSION = 2

export const progressKey = (procedureId) => `progress:v2:${procedureId}`

export const legacyProgressKey = (pageId) => `progress-${pageId}`

const readStoredValue = (key) => {
  let raw
  try {
    raw = window.localStorage.getItem(key)
  } catch (error) {
    // localStorage unavailable (private mode, disabled, etc.) — treat as absent
    return { present: false }
  }

  if (raw === null || raw === undefined) {
    return { present: false }
  }

  try {
    return { present: true, value: JSON.parse(raw) }
  } catch (error) {
    return { present: true, malformed: true }
  }
}

const isValidV2Shape = (value) =>
  typeof value === 'object' &&
  value !== null &&
  value.version === VERSION &&
  Array.isArray(value.completedIds) &&
  Array.isArray(value.stepIds)

const isValidLegacyShape = (value) =>
  typeof value === 'object' &&
  value !== null &&
  Array.isArray(value.completed) &&
  typeof value.current === 'number'

const safeDefault = (stepIds) => ({
  version: VERSION,
  completedIds: [],
  currentId: stepIds[0] || null,
  stepIds,
  timestamp: null
})

const resetResult = (stepIds, timestamp) => ({
  version: VERSION,
  completedIds: [],
  currentId: stepIds[0] || null,
  stepIds,
  timestamp: timestamp || Date.now(),
  migrated: 'reset'
})

// Append-only: every old id occupies the same position in the new list, and
// any new ids only appear after the old segment (no reorder, no removal).
const isAppendOnly = (oldIds, newIds) => {
  if (newIds.length < oldIds.length) return false
  return oldIds.every((id, index) => newIds[index] === id)
}

const arraysEqual = (a, b) =>
  a.length === b.length && a.every((id, index) => b[index] === id)

const migrateLegacy = (value, stepIds) => {
  const outOfRange = (index) =>
    typeof index !== 'number' || index < 0 || index >= stepIds.length

  if (value.completed.some(outOfRange) || outOfRange(value.current)) {
    return resetResult(stepIds, value.timestamp)
  }

  return {
    version: VERSION,
    completedIds: value.completed.map((index) => stepIds[index]),
    currentId: stepIds[value.current],
    stepIds,
    timestamp: value.timestamp || Date.now()
  }
}

const reconcileV2 = (value, newStepIds) => {
  const oldStepIds = value.stepIds

  if (arraysEqual(oldStepIds, newStepIds)) {
    return {
      version: VERSION,
      completedIds: value.completedIds,
      currentId: value.currentId,
      stepIds: newStepIds,
      timestamp: value.timestamp || Date.now()
    }
  }

  if (isAppendOnly(oldStepIds, newStepIds)) {
    return {
      version: VERSION,
      completedIds: value.completedIds.filter((id) => newStepIds.includes(id)),
      currentId: newStepIds.includes(value.currentId)
        ? value.currentId
        : newStepIds[0],
      stepIds: newStepIds,
      timestamp: value.timestamp || Date.now()
    }
  }

  return resetResult(newStepIds, value.timestamp)
}

/**
 * Loads progress for a procedure, migrating from the legacy bare
 * `progress-${pageId}` format or reconciling an existing v2 record against
 * the procedure's current step-id list.
 *
 * @param {{ id: string, steps: Array<{ id: string }> }} procedure
 * @returns {{ version: 2, completedIds: string[], currentId: string|null, stepIds: string[], timestamp: number|null, migrated?: 'reset' }}
 */
export const loadProgress = (procedure) => {
  const { id, steps } = procedure
  const stepIds = steps.map((step) => step.id)

  const v2 = readStoredValue(progressKey(id))
  if (v2.present) {
    if (v2.malformed || !isValidV2Shape(v2.value)) {
      return safeDefault(stepIds)
    }
    return reconcileV2(v2.value, stepIds)
  }

  const legacy = readStoredValue(legacyProgressKey(id))
  if (legacy.present) {
    if (legacy.malformed || !isValidLegacyShape(legacy.value)) {
      return safeDefault(stepIds)
    }
    return migrateLegacy(legacy.value, stepIds)
  }

  return safeDefault(stepIds)
}

/**
 * Persists progress for a procedure under the v2 key and clears the legacy
 * key so future loads don't re-run the legacy migration path.
 *
 * @param {{ id: string, steps: Array<{ id: string }> }} procedure
 * @param {{ completedIds: Iterable<string>, currentId: string }} progress
 */
export const saveProgress = (procedure, { completedIds, currentId }) => {
  const { id, steps } = procedure
  const stepIds = steps.map((step) => step.id)

  const payload = {
    version: VERSION,
    completedIds: Array.from(completedIds),
    currentId,
    stepIds,
    timestamp: Date.now()
  }

  try {
    window.localStorage.setItem(progressKey(id), JSON.stringify(payload))
    window.localStorage.removeItem(legacyProgressKey(id))
  } catch (error) {
    // localStorage unavailable — fail silently, matching ProgressStep's
    // existing best-effort persistence behavior
  }

  return payload
}
