import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ProgressStep } from '../src/components/ProgressStep'
import { progressKey, legacyProgressKey } from '../src/utils/progressStorage'

const pageId = 'test-procedure'

// Legacy-shaped steps: no `id` field, exactly what WoundHealing/WaterRecycling
// still pass in this PR (dual-mode, gate-review item #2) — identity falls
// back to the array index.
const legacySteps = [
  { title: 'Paso uno', description: 'Descripción del paso uno' },
  { title: 'Paso dos', description: 'Descripción del paso dos' },
  { title: 'Paso tres', description: 'Descripción del paso tres' }
]

// Schema-shaped steps: stable `id`, what GeneralCleaning (via aseo-general.js)
// passes after this PR's migration.
const schemaSteps = [
  { id: 'step-a', title: 'Paso A', description: 'Descripción A' },
  { id: 'step-b', title: 'Paso B', description: 'Descripción B' },
  { id: 'step-c', title: 'Paso C', description: 'Descripción C' }
]

beforeEach(() => {
  window.localStorage.clear()
})

describe('ProgressStep — legacy (index-fallback) mode', () => {
  it('renders step 1 on first load', () => {
    render(<ProgressStep steps={legacySteps} pageId={pageId} />)

    expect(screen.getByText('Paso uno')).toBeInTheDocument()
    expect(screen.getByText('Descripción del paso uno')).toBeInTheDocument()
    expect(screen.getByText('1', { exact: true })).toBeInTheDocument()
  })

  it('advances to the next step once the current one is marked complete', async () => {
    const user = userEvent.setup()
    render(<ProgressStep steps={legacySteps} pageId={pageId} />)

    await user.click(
      screen.getByRole('button', { name: /Marcar como completado: Paso uno/i })
    )
    await user.click(screen.getByRole('button', { name: 'Ir al siguiente paso' }))

    expect(screen.getByText('Paso dos')).toBeInTheDocument()
  })

  it('persists progress under the versioned key, using the index as the fallback id', async () => {
    const user = userEvent.setup()
    render(<ProgressStep steps={legacySteps} pageId={pageId} />)

    await user.click(
      screen.getByRole('button', { name: /Marcar como completado: Paso uno/i })
    )

    const saved = JSON.parse(window.localStorage.getItem(progressKey(pageId)))
    expect(saved.completedIds).toEqual(['0'])
    expect(saved.currentId).toBe('0')
  })

  it('resumes at the step saved in a legacy (pre-migration) localStorage value', () => {
    window.localStorage.setItem(
      legacyProgressKey(pageId),
      JSON.stringify({ completed: [0], current: 1, timestamp: Date.now() })
    )

    render(<ProgressStep steps={legacySteps} pageId={pageId} />)

    expect(screen.getByText('Paso dos')).toBeInTheDocument()
    expect(screen.getByText(/1 de 3 pasos completados/)).toBeInTheDocument()
  })

  it('reset modal: confirming clears storage and returns to step 1', async () => {
    const user = userEvent.setup()
    window.localStorage.setItem(
      legacyProgressKey(pageId),
      JSON.stringify({ completed: [0], current: 1, timestamp: Date.now() })
    )
    render(<ProgressStep steps={legacySteps} pageId={pageId} />)

    await user.click(screen.getByRole('button', { name: 'Reiniciar el proceso' }))
    await user.click(screen.getByRole('button', { name: 'Sí, reiniciar' }))

    const saved = JSON.parse(window.localStorage.getItem(progressKey(pageId)))
    expect(saved.completedIds).toEqual([])
    expect(screen.getByText('Paso uno')).toBeInTheDocument()
  })

  it('reset modal: cancelling leaves progress unchanged', async () => {
    const user = userEvent.setup()
    window.localStorage.setItem(
      legacyProgressKey(pageId),
      JSON.stringify({ completed: [0], current: 1, timestamp: Date.now() })
    )
    render(<ProgressStep steps={legacySteps} pageId={pageId} />)

    await user.click(screen.getByRole('button', { name: 'Reiniciar el proceso' }))
    await user.click(screen.getByRole('button', { name: 'Cancelar' }))

    expect(screen.getByText('Paso dos')).toBeInTheDocument()
  })

  it('does not throw on a malformed/legacy localStorage value and falls back to step 1', () => {
    window.localStorage.setItem(legacyProgressKey(pageId), 'not-valid-json{')

    expect(() => {
      render(<ProgressStep steps={legacySteps} pageId={pageId} />)
    }).not.toThrow()

    expect(screen.getByText('Paso uno')).toBeInTheDocument()
  })
})

describe('ProgressStep — schema (stable id) mode', () => {
  it('renders step 1 on first load', () => {
    render(<ProgressStep steps={schemaSteps} pageId={pageId} />)

    expect(screen.getByText('Paso A')).toBeInTheDocument()
  })

  it('persists progress keyed by the real step id, not the array index', async () => {
    const user = userEvent.setup()
    render(<ProgressStep steps={schemaSteps} pageId={pageId} />)

    await user.click(
      screen.getByRole('button', { name: /Marcar como completado: Paso A/i })
    )

    const saved = JSON.parse(window.localStorage.getItem(progressKey(pageId)))
    expect(saved.completedIds).toEqual(['step-a'])
    expect(saved.currentId).toBe('step-a')
    expect(saved.stepIds).toEqual(['step-a', 'step-b', 'step-c'])
  })

  it('resumes at the step saved in a v2 localStorage record', () => {
    window.localStorage.setItem(
      progressKey(pageId),
      JSON.stringify({
        version: 2,
        completedIds: ['step-a'],
        currentId: 'step-b',
        stepIds: ['step-a', 'step-b', 'step-c'],
        timestamp: Date.now()
      })
    )

    render(<ProgressStep steps={schemaSteps} pageId={pageId} />)

    expect(screen.getByText('Paso B')).toBeInTheDocument()
    expect(screen.getByText(/1 de 3 pasos completados/)).toBeInTheDocument()
  })
})

describe('ProgressStep — migration reset notice (R2.3)', () => {
  it('shows a dismissible notice when the step schema changed in a way that forced a reset', async () => {
    const user = userEvent.setup()
    window.localStorage.setItem(
      progressKey(pageId),
      JSON.stringify({
        version: 2,
        completedIds: ['step-a', 'step-b'],
        currentId: 'step-b',
        stepIds: ['step-a', 'step-b', 'step-c'],
        timestamp: Date.now()
      })
    )

    // Reordered steps relative to the saved stepIds — triggers the
    // reorder/removal reset path (R2.3), not append-preserve.
    const reorderedSteps = [
      { id: 'step-a', title: 'Paso A', description: 'Descripción A' },
      { id: 'step-c', title: 'Paso C', description: 'Descripción C' },
      { id: 'step-b', title: 'Paso B', description: 'Descripción B' }
    ]

    render(<ProgressStep steps={reorderedSteps} pageId={pageId} />)

    expect(
      screen.getByText(/Actualizamos esta guía; tu progreso en esta sección se reinició\./)
    ).toBeInTheDocument()

    // The reset is committed on load so it only shows once.
    const saved = JSON.parse(window.localStorage.getItem(progressKey(pageId)))
    expect(saved.completedIds).toEqual([])
    expect(saved.migrated).toBeUndefined()

    await user.click(screen.getByRole('button', { name: 'Cerrar aviso' }))

    expect(
      screen.queryByText(/Actualizamos esta guía/)
    ).not.toBeInTheDocument()
  })

  it('does not show the notice for an append-only step change', () => {
    window.localStorage.setItem(
      progressKey(pageId),
      JSON.stringify({
        version: 2,
        completedIds: ['step-a'],
        currentId: 'step-a',
        stepIds: ['step-a', 'step-b'],
        timestamp: Date.now()
      })
    )

    const appendedSteps = [
      { id: 'step-a', title: 'Paso A', description: 'Descripción A' },
      { id: 'step-b', title: 'Paso B', description: 'Descripción B' },
      { id: 'step-c', title: 'Paso C (nuevo)', description: 'Descripción C' }
    ]

    render(<ProgressStep steps={appendedSteps} pageId={pageId} />)

    expect(screen.queryByText(/Actualizamos esta guía/)).not.toBeInTheDocument()
    expect(screen.getByText(/1 de 3 pasos completados/)).toBeInTheDocument()
  })
})
