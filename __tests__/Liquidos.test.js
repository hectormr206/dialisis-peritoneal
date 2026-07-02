import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { RouteList } from '../src/routes/RouteList'

const renderLiquidos = () =>
  render(
    <MemoryRouter initialEntries={['/alimentacion/liquidos']}>
      <RouteList />
    </MemoryRouter>
  )

// A fluid-volume number would violate R5.5's hard rule for this page (no
// fixed mL/oz-per-day limit — content-research section 3c confirms no
// PD-specific source states a universal figure). Matches "<digits> ml",
// "<digits> mililitros", "<digits> litros/L", "<digits> oz/onzas", whether
// or not "por día" follows, so any invented threshold is caught regardless
// of phrasing.
const FLUID_VOLUME_NUMBER = /\d+\s?(ml|mililitros?|litros?|l\b|oz|onzas?)\b/i

// Liquidos: real content page at /alimentacion/liquidos (PR8) — R5.1, R5.5,
// R5.6, R5.7.
describe('Liquidos page', () => {
  it('renders under Layout at its route with the page title', () => {
    renderLiquidos()

    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Líquidos', level: 1 })
    ).toBeInTheDocument()
  })

  it('places fluid-overload warning signs before the misconception-loop explanation', () => {
    renderLiquidos()

    const headings = screen
      .getAllByRole('heading', { level: 3 })
      .map((heading) => heading.textContent)

    const signsIndex = headings.findIndex((text) =>
      text.includes('retención de líquido')
    )
    const whyIndex = headings.findIndex((text) => text.includes('Por qué'))
    const whatIndex = headings.findIndex((text) =>
      text.includes('Qué puedes hacer')
    )

    expect(signsIndex).toBe(0)
    expect(whyIndex).toBeGreaterThan(signsIndex)
    expect(whatIndex).toBeGreaterThan(whyIndex)
  })

  it('renders the fluid-overload sign list as icon+text items (NKF)', () => {
    renderLiquidos()

    expect(screen.getByText(/pies, tobillos, muñecas o cara/)).toBeInTheDocument()
    expect(
      screen.getByText(/[Ff]alta de aire|dificultad para respirar/)
    ).toBeInTheDocument()
    expect(screen.getByText(/[Cc]alambres/)).toBeInTheDocument()
    expect(screen.getByText(/[Dd]olor de cabeza/)).toBeInTheDocument()
    expect(screen.getByText(/hinchazón \(distensión\) abdominal/i)).toBeInTheDocument()
  })

  it('warns urgently on a change in swelling pattern or trouble breathing, directing to the clinic (R5.6)', () => {
    renderLiquidos()

    expect(screen.getByText('Urgente')).toBeInTheDocument()
    expect(
      screen.getByText(/cambio en cómo se hincha tu cuerpo/)
    ).toBeInTheDocument()
    expect(screen.getByText(/cuesta trabajo respirar/)).toBeInTheDocument()
    expect(screen.getAllByText(/llama a tu clínica/i).length).toBeGreaterThan(0)
  })

  it('presents non-behavioral causes of swelling without blaming the patient (R5.6)', () => {
    renderLiquidos()

    // No-blame: the page must not default to "you drank too much" framing.
    expect(screen.queryByText(/tomaste demasiado líquido/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/tomar demasiado líquido/i)).not.toBeInTheDocument()

    // Non-behavioral cause 1: sodium makes the body retain water.
    expect(
      screen.getByRole('button', { name: 'sal (sodio)', hidden: true })
    ).toBeInTheDocument()
    expect(screen.getByText(/retenga agua/)).toBeInTheDocument()

    // Non-behavioral cause 2: ultrafiltration can vary/fail for medical reasons.
    expect(
      screen.getByRole('button', { name: 'ultrafiltración', hidden: true })
    ).toBeInTheDocument()
    expect(screen.getByText(/uremia/i)).toBeInTheDocument()

    // Non-behavioral cause 3: the membrane's filtering can change over years.
    expect(screen.getByText(/con los años/i)).toBeInTheDocument()
  })

  it('frames the fluid goal as individualized with no fixed daily number (R5.5)', () => {
    renderLiquidos()

    expect(
      screen.getAllByText(/nutriólogo|dietista/i).length
    ).toBeGreaterThan(0)
    expect(
      screen.getAllByText(/meta (diaria )?de líquidos/i).length
    ).toBeGreaterThan(0)

    const main = screen.getByRole('main')
    expect(main.textContent).not.toMatch(FLUID_VOLUME_NUMBER)
  })

  it('mentions daily weight monitoring as self-care (IMSS-797-16)', () => {
    renderLiquidos()

    expect(screen.getByText(/[Pp]ésate todos los días/)).toBeInTheDocument()
  })

  it('resolves citations and always shows the clinic/nephrologist disclaimer', () => {
    renderLiquidos()

    expect(
      screen.getByRole('link', { name: /Fluid Overload in a Dialysis Patient/ })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /Ultrafiltration/ })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /Alimentación y nutrición/ })
    ).toBeInTheDocument()
    expect(
      screen.getByText(/no reemplaza las indicaciones de tu clínica/)
    ).toBeInTheDocument()
  })

  it('never uses a fixed mL/oz-per-day fluid number anywhere on the page (R5.5 hard rule)', () => {
    renderLiquidos()

    const main = screen.getByRole('main')
    expect(main.textContent).not.toMatch(FLUID_VOLUME_NUMBER)
  })
})
