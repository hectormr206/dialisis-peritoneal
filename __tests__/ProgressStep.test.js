import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ProgressStep } from '../src/components/ProgressStep'

const pageId = 'test-procedure'

const steps = [
  { title: 'Paso uno', description: 'Descripción del paso uno' },
  { title: 'Paso dos', description: 'Descripción del paso dos' },
  { title: 'Paso tres', description: 'Descripción del paso tres' }
]

const storageKey = `progress-${pageId}`

beforeEach(() => {
  window.localStorage.clear()
})

describe('ProgressStep', () => {
  it('renders step 1 on first load', () => {
    render(<ProgressStep steps={steps} pageId={pageId} />)

    expect(screen.getByText('Paso uno')).toBeInTheDocument()
    expect(screen.getByText('Descripción del paso uno')).toBeInTheDocument()
    expect(screen.getByText('1', { exact: true })).toBeInTheDocument()
  })

  it('advances to the next step once the current one is marked complete', async () => {
    const user = userEvent.setup()
    render(<ProgressStep steps={steps} pageId={pageId} />)

    await user.click(
      screen.getByRole('button', { name: /Marcar como completado: Paso uno/i })
    )
    await user.click(screen.getByRole('button', { name: 'Ir al siguiente paso' }))

    expect(screen.getByText('Paso dos')).toBeInTheDocument()
  })

  it('persists progress-{pageId} to localStorage when a step is completed', async () => {
    const user = userEvent.setup()
    render(<ProgressStep steps={steps} pageId={pageId} />)

    await user.click(
      screen.getByRole('button', { name: /Marcar como completado: Paso uno/i })
    )

    const saved = JSON.parse(window.localStorage.getItem(storageKey))
    expect(saved.completed).toEqual([0])
    expect(saved.current).toBe(0)
  })

  it('resumes at the step saved in localStorage on reload', () => {
    window.localStorage.setItem(
      storageKey,
      JSON.stringify({ completed: [0], current: 1, timestamp: Date.now() })
    )

    render(<ProgressStep steps={steps} pageId={pageId} />)

    expect(screen.getByText('Paso dos')).toBeInTheDocument()
    expect(screen.getByText(/1 de 3 pasos completados/)).toBeInTheDocument()
  })

  it('reset modal: confirming clears storage and returns to step 1', async () => {
    const user = userEvent.setup()
    window.localStorage.setItem(
      storageKey,
      JSON.stringify({ completed: [0], current: 1, timestamp: Date.now() })
    )
    render(<ProgressStep steps={steps} pageId={pageId} />)

    await user.click(screen.getByRole('button', { name: 'Reiniciar el proceso' }))
    await user.click(screen.getByRole('button', { name: 'Sí, reiniciar' }))

    expect(window.localStorage.getItem(storageKey)).toBeNull()
    expect(screen.getByText('Paso uno')).toBeInTheDocument()
  })

  it('reset modal: cancelling leaves progress unchanged', async () => {
    const user = userEvent.setup()
    window.localStorage.setItem(
      storageKey,
      JSON.stringify({ completed: [0], current: 1, timestamp: Date.now() })
    )
    render(<ProgressStep steps={steps} pageId={pageId} />)

    await user.click(screen.getByRole('button', { name: 'Reiniciar el proceso' }))
    await user.click(screen.getByRole('button', { name: 'Cancelar' }))

    expect(screen.getByText('Paso dos')).toBeInTheDocument()
    expect(window.localStorage.getItem(storageKey)).not.toBeNull()
  })

  it('does not throw on a malformed/legacy localStorage value and falls back to step 1', () => {
    window.localStorage.setItem(storageKey, 'not-valid-json{')

    expect(() => {
      render(<ProgressStep steps={steps} pageId={pageId} />)
    }).not.toThrow()

    expect(screen.getByText('Paso uno')).toBeInTheDocument()
  })
})
