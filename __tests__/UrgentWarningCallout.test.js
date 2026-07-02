import React from 'react'
import { render, screen } from '@testing-library/react'
import { UrgentWarningCallout } from '../src/components/UrgentWarningCallout'

// UrgentWarningCallout: safety-critical callout — icon + visible text
// label, never color alone — R4.4.
describe('UrgentWarningCallout', () => {
  it('renders the urgent icon+text label by default', () => {
    render(
      <UrgentWarningCallout>Llama a tu clínica ahora.</UrgentWarningCallout>
    )

    expect(screen.getByText('⚠')).toBeInTheDocument()
    expect(screen.getByText('Urgente')).toBeInTheDocument()
    expect(screen.getByText('Llama a tu clínica ahora.')).toBeInTheDocument()
  })

  it('renders the caution icon+text label when level="caution"', () => {
    render(
      <UrgentWarningCallout level='caution'>
        Consulta a tu clínica si esto continúa.
      </UrgentWarningCallout>
    )

    expect(screen.getByText('Precaución')).toBeInTheDocument()
    expect(screen.queryByText('Urgente')).not.toBeInTheDocument()
  })

  it('hides the icon from assistive tech since the text label carries the meaning', () => {
    render(<UrgentWarningCallout>Texto de ejemplo.</UrgentWarningCallout>)

    expect(screen.getByText('⚠')).toHaveAttribute('aria-hidden', 'true')
  })
})
