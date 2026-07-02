// validateSteps: module-load content-validation for the step schema (R3.1).
//
// A step missing a `title` or `description` must fail loudly rather than
// ship a silently blank instruction to a patient. Content modules call
// `assertValidSteps` right after building their step array so the failure
// happens at import time (build/dev-server crashes immediately, long before
// a user ever sees the page).

const isNonEmptyString = (value) => typeof value === 'string' && value.trim().length > 0

export const assertValidSteps = (steps, sourceLabel) => {
  if (!Array.isArray(steps)) {
    throw new Error(`[content-validation] ${sourceLabel}: steps must be an array`)
  }

  steps.forEach((step, index) => {
    const position = `${sourceLabel}[${index}]`

    if (!isNonEmptyString(step.id)) {
      throw new Error(`[content-validation] ${position}: missing a non-empty "id"`)
    }

    if (!isNonEmptyString(step.title)) {
      throw new Error(`[content-validation] ${position} ("${step.id}"): missing a non-empty "title"`)
    }

    if (!isNonEmptyString(step.description)) {
      throw new Error(`[content-validation] ${position} ("${step.id}"): missing a non-empty "description"`)
    }

    if (step.media) {
      if (!isNonEmptyString(step.media.webm) || !isNonEmptyString(step.media.poster)) {
        throw new Error(
          `[content-validation] ${position} ("${step.id}"): "media" must include both "webm" and "poster" when present`
        )
      }
    }
  })

  return steps
}

// assertUniqueStepIds: composed procedures must not repeat a step id — the
// migration/progress-storage logic relies on ids being unique per procedure.
export const assertUniqueStepIds = (steps, sourceLabel) => {
  const seen = new Set()

  steps.forEach((step) => {
    if (seen.has(step.id)) {
      throw new Error(`[content-validation] ${sourceLabel}: duplicate step id "${step.id}"`)
    }
    seen.add(step.id)
  })

  return steps
}
