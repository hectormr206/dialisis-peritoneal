import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { RouteList } from '../src/routes/RouteList'

const renderSenalesAlarma = () =>
  render(
    <MemoryRouter initialEntries={['/cuidados/senales-de-alarma']}>
      <RouteList />
    </MemoryRouter>
  )

// SenalesAlarma: real content page at /cuidados/senales-de-alarma (PR7) —
// R5.1, R5.3, R5.7.
describe('SenalesAlarma page', () => {
  it('renders under Layout at its route with the page title', () => {
    renderSenalesAlarma()

    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Señales de alarma', level: 1 })
    ).toBeInTheDocument()
  })

  it('places the escalation table immediately after the intro, before the explanatory sign list (R5.3)', () => {
    renderSenalesAlarma()

    const headings = screen
      .getAllByRole('heading', { level: 3 })
      .map((heading) => heading.textContent)

    const immediateIndex = headings.indexOf('Llama a tu clínica de inmediato')
    const alsoIndex = headings.indexOf('También llama a tu clínica si...')
    const explanatoryIndex = headings.indexOf('Señales de alarma de peritonitis')

    expect(immediateIndex).toBe(0)
    expect(alsoIndex).toBe(1)
    expect(explanatoryIndex).toBeGreaterThan(alsoIndex)
  })

  it('renders both escalation tiers as tables with icon+text "Llama a tu clínica" actions', () => {
    renderSenalesAlarma()

    const tables = screen.getAllByRole('table')
    expect(tables).toHaveLength(2)

    expect(
      screen.getByText(/Enrojecimiento, hinchazón, dolor, calor o pus/)
    ).toBeInTheDocument()
    expect(
      screen.getByText('Líquido de diálisis turbio o de color anormal')
    ).toBeInTheDocument()
    expect(screen.getByText('Comezón intensa')).toBeInTheDocument()
    expect(
      screen.getByText('Cualquier molestia que dure más de 2 días')
    ).toBeInTheDocument()
    expect(screen.getAllByText('Llama a tu clínica').length).toBeGreaterThan(0)
    // No ER-specific criterion is invented on this page — every action is
    // "call your clinic", not "go to the ER".
    expect(screen.queryByText('Ve a urgencias')).not.toBeInTheDocument()
  })

  it('gives generic emergency-room navigation guidance if the clinic is unreachable', () => {
    renderSenalesAlarma()

    expect(
      screen.getByText(/no logras comunicarte con tu clínica/)
    ).toBeInTheDocument()
    expect(screen.getByText(/acude a un servicio de urgencias/)).toBeInTheDocument()
  })

  it('renders the explanatory IMSS-797-16 warning-sign list as icon+text items', () => {
    renderSenalesAlarma()

    expect(screen.getByText('Náusea')).toBeInTheDocument()
    expect(screen.getByText('Vómito')).toBeInTheDocument()
    expect(screen.getByText('Diarrea')).toBeInTheDocument()
    // "Fiebre" also appears once as an escalation-table symptom row —
    // both instances are expected on this page (tier 1 table + explanatory
    // sign list).
    expect(screen.getAllByText('Fiebre').length).toBe(2)
    expect(screen.getByText('Líquido de diálisis turbio')).toBeInTheDocument()
    expect(
      screen.getByText(/Dolor de panza \(abdominal\) generalizado/)
    ).toBeInTheDocument()
  })

  it('resolves citations and always shows the clinic/nephrologist disclaimer', () => {
    renderSenalesAlarma()

    expect(
      screen.getByRole('link', { name: /Guía de práctica clínica IMSS-797-16/ })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /Diálisis - peritoneal/ })
    ).toBeInTheDocument()
    expect(
      screen.getByText(/no reemplaza las indicaciones de tu clínica/)
    ).toBeInTheDocument()
  })

  it('glossary-links peritonitis, efluente and hiporexia on first use', () => {
    renderSenalesAlarma()

    expect(
      screen.getByRole('button', { name: 'peritonitis' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'líquido de diálisis (efluente)' })
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'hiporexia' })).toBeInTheDocument()
  })
})
