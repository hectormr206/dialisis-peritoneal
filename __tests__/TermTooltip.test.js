import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TermTooltip } from '../src/components/TermTooltip'

// TermTooltip: tap-to-expand glossary disclosure (R4.3) — must work via
// click AND keyboard, and expose state through aria-expanded instead of a
// hover-only tooltip.
describe('TermTooltip', () => {
  it('renders a closed trigger by default with the term as its label', () => {
    render(<TermTooltip termKey='heparina' />)

    const trigger = screen.getByRole('button', { name: 'Heparina' })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText(/coágulos/)).not.toBeInTheDocument()
  })

  it('opens the definition panel on click and updates aria-expanded', async () => {
    const user = userEvent.setup()
    render(<TermTooltip termKey='heparina' />)

    await user.click(screen.getByRole('button', { name: 'Heparina' }))

    expect(screen.getByRole('button', { name: 'Heparina' })).toHaveAttribute(
      'aria-expanded',
      'true'
    )
    expect(screen.getByText(/coágulos/)).toBeVisible()
  })

  it('opens the definition panel via keyboard activation (Tab + Enter)', async () => {
    const user = userEvent.setup()
    render(<TermTooltip termKey='peritonitis' />)

    await user.tab()
    await user.keyboard('{Enter}')

    expect(screen.getByText(/infección dentro del abdomen/)).toBeVisible()
  })

  it('closes when the trigger is activated again', async () => {
    const user = userEvent.setup()
    render(<TermTooltip termKey='heparina' />)
    const trigger = screen.getByRole('button', { name: 'Heparina' })

    await user.click(trigger)
    await user.click(trigger)

    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText(/coágulos/)).not.toBeInTheDocument()
  })

  it('closes via the explicit dismiss control and returns focus to the trigger', async () => {
    const user = userEvent.setup()
    render(<TermTooltip termKey='heparina' />)
    const trigger = screen.getByRole('button', { name: 'Heparina' })

    await user.click(trigger)
    await user.click(
      screen.getByRole('button', { name: /Cerrar definición/ })
    )

    expect(screen.queryByText(/coágulos/)).not.toBeInTheDocument()
    expect(trigger).toHaveFocus()
  })

  it('closes on Escape and returns focus to the trigger', async () => {
    const user = userEvent.setup()
    render(<TermTooltip termKey='heparina' />)
    const trigger = screen.getByRole('button', { name: 'Heparina' })

    await user.click(trigger)
    await user.keyboard('{Escape}')

    expect(screen.queryByText(/coágulos/)).not.toBeInTheDocument()
    expect(trigger).toHaveFocus()
  })

  it('renders custom trigger text via children while still resolving the glossary definition', async () => {
    const user = userEvent.setup()
    render(<TermTooltip termKey='exsept'>producto Exsept</TermTooltip>)

    await user.click(screen.getByRole('button', { name: 'producto Exsept' }))

    expect(screen.getByText(/desinfectante/)).toBeVisible()
  })

  it('throws for an unknown termKey instead of silently rendering nothing', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {})

    expect(() => render(<TermTooltip termKey='no-existe' />)).toThrow(
      /unknown glossary termKey/
    )

    spy.mockRestore()
  })
})
