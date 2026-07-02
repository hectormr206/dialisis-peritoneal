import React from 'react'
import { render, screen } from '@testing-library/react'
import { EscalationTable } from '../src/components/EscalationTable'

const items = [
  { id: 'cloudy-fluid', symptom: 'Líquido turbio o nublado', action: 'er' },
  {
    id: 'mild-redness',
    symptom: 'Enrojecimiento leve en la salida',
    action: 'clinic'
  }
]

// EscalationTable: structured "llama a tu clínica" vs. "ve a urgencias"
// distinction — R5.1, R5.3. Real <table> semantics, icon + visible text per
// row so the distinction never relies on color alone — R5.4.
describe('EscalationTable', () => {
  it('renders a table with column headers and an optional caption', () => {
    render(
      <EscalationTable items={items} caption='Cuándo llamar o ir a urgencias' />
    )

    expect(screen.getByRole('table')).toBeInTheDocument()
    expect(
      screen.getByRole('columnheader', { name: 'Señal' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('columnheader', { name: 'Qué hacer' })
    ).toBeInTheDocument()
    expect(
      screen.getByText('Cuándo llamar o ir a urgencias')
    ).toBeInTheDocument()
  })

  it('renders each symptom row with its resolved action as visible icon+text', () => {
    render(<EscalationTable items={items} />)

    expect(screen.getByText('Líquido turbio o nublado')).toBeInTheDocument()
    expect(
      screen.getByText('Enrojecimiento leve en la salida')
    ).toBeInTheDocument()
    expect(screen.getByText('Ve a urgencias')).toBeInTheDocument()
    expect(screen.getByText('Llama a tu clínica')).toBeInTheDocument()
  })

  it('renders no rows when items is empty', () => {
    render(<EscalationTable items={[]} />)

    expect(screen.getByRole('table')).toBeInTheDocument()
    expect(screen.queryAllByRole('row')).toHaveLength(1) // header row only
  })
})
