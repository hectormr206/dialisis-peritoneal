import { assertValidSteps, assertUniqueStepIds } from '../src/content/validateSteps'

describe('content-validation (R3.1)', () => {
  it('passes through a well-formed step array unchanged', () => {
    const steps = [
      { id: 'a', title: 'Título', description: 'Descripción' }
    ]

    expect(assertValidSteps(steps, 'test')).toBe(steps)
  })

  it('fails loudly when a step is missing a title', () => {
    const steps = [{ id: 'a', description: 'Descripción' }]

    expect(() => assertValidSteps(steps, 'test')).toThrow(/missing a non-empty "title"/)
  })

  it('fails loudly when a step is missing a description', () => {
    const steps = [{ id: 'a', title: 'Título' }]

    expect(() => assertValidSteps(steps, 'test')).toThrow(/missing a non-empty "description"/)
  })

  it('fails loudly when a step is missing an id', () => {
    const steps = [{ title: 'Título', description: 'Descripción' }]

    expect(() => assertValidSteps(steps, 'test')).toThrow(/missing a non-empty "id"/)
  })

  it('fails when media is present but incomplete (only webm, no poster)', () => {
    const steps = [
      { id: 'a', title: 'Título', description: 'Descripción', media: { webm: 'clip.webm' } }
    ]

    expect(() => assertValidSteps(steps, 'test')).toThrow(/must include both "webm" and "poster"/)
  })

  it('allows a step with no media at all', () => {
    const steps = [{ id: 'a', title: 'Título', description: 'Descripción' }]

    expect(() => assertValidSteps(steps, 'test')).not.toThrow()
  })
})

describe('assertUniqueStepIds', () => {
  it('passes when all ids are unique', () => {
    const steps = [{ id: 'a' }, { id: 'b' }]
    expect(assertUniqueStepIds(steps, 'test')).toBe(steps)
  })

  it('throws when a step id repeats', () => {
    const steps = [{ id: 'a' }, { id: 'a' }]
    expect(() => assertUniqueStepIds(steps, 'test')).toThrow(/duplicate step id "a"/)
  })
})
