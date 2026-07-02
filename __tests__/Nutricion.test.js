import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { RouteList } from '../src/routes/RouteList'

const renderNutricion = () =>
  render(
    <MemoryRouter initialEntries={['/alimentacion/nutricion']}>
      <RouteList />
    </MemoryRouter>
  )

// A mg/day-style numeric ceiling would violate R5.5's hard rule for this
// page (no source states a universal mg/day threshold for sodium,
// potassium, or phosphorus — content-research section 3d confirms this
// explicitly for potassium/phosphorus via NKF's own individualized/
// lab-driven framing). Source-stated portion examples like "1/2 taza" or
// "1 rebanada delgada" are NOT numeric ceilings and must NOT trip this
// guard — it targets mg/miligramos specifically, mirroring PR8's
// FLUID_VOLUME_NUMBER guard pattern for its own unit.
const MG_NUMBER = /\d+\s?(mg|miligramos?)\b/i

// Meta-test: guards the guard — confirms the regex itself would catch an
// invented mg ceiling before relying on it to scan the rendered page.
describe('MG_NUMBER regex', () => {
  it('matches mg/miligramos numbers, not fraction-based portion phrasing', () => {
    expect('800 mg al día').toMatch(MG_NUMBER)
    expect('500 miligramos por día').toMatch(MG_NUMBER)
    expect('1/2 taza de leche').not.toMatch(MG_NUMBER)
  })
})

// Nutricion: real content page at /alimentacion/nutricion (PR9) — R5.1,
// R5.2, R5.4, R5.5, R5.7. Final medical-content topic page of the chain.
describe('Nutricion page', () => {
  it('renders under Layout at its route with the page title', () => {
    renderNutricion()

    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Nutrición', level: 1 })
    ).toBeInTheDocument()
  })

  it('orders sections as protein -> minerals -> calories -> supplements', () => {
    renderNutricion()

    const headings = screen
      .getAllByRole('heading', { level: 3 })
      .map((heading) => heading.textContent)

    const proteinIndex = headings.findIndex((text) =>
      text.includes('proteína')
    )
    const sodiumIndex = headings.findIndex((text) => text.includes('sal'))
    const potassiumIndex = headings.findIndex((text) =>
      text.includes('Potasio')
    )
    const phosphorusIndex = headings.findIndex((text) =>
      text.includes('fósforo')
    )
    const caloriesIndex = headings.findIndex((text) =>
      text.includes('calorías')
    )
    const supplementsIndex = headings.findIndex((text) =>
      text.includes('suplementos')
    )

    expect(proteinIndex).toBe(0)
    expect(sodiumIndex).toBeGreaterThan(proteinIndex)
    expect(potassiumIndex).toBeGreaterThan(sodiumIndex)
    expect(phosphorusIndex).toBeGreaterThan(potassiumIndex)
    expect(caloriesIndex).toBeGreaterThan(phosphorusIndex)
    expect(supplementsIndex).toBeGreaterThan(caloriesIndex)
  })

  it('encourages high-quality protein with a source-stated portion image, without the unverified PD-vs-HD comparison', () => {
    renderNutricion()

    expect(screen.getByText(/carne, pollo, pescado y huevo/)).toBeInTheDocument()
    expect(
      screen.getByText(/baraja de cartas/)
    ).toBeInTheDocument()

    // R5.5/research hard rule: NIDDK's own PD nutrition page does not state
    // a "PD needs more protein than HD" comparison — must not appear.
    expect(screen.queryByText(/hemodiálisis/i)).not.toBeInTheDocument()
  })

  it('gives sodium guidance to cook from scratch and avoid processed/fast food', () => {
    renderNutricion()

    expect(
      screen.getByRole('button', { name: 'sal (sodio)', hidden: true })
    ).toBeInTheDocument()
    expect(screen.getByText(/enlatados, empacados, congelados/)).toBeInTheDocument()
  })

  it('presents the PD-specific potassium nuance prominently: some patients may need MORE potassium', () => {
    renderNutricion()

    expect(
      screen.getByRole('button', { name: 'potasio', hidden: true })
    ).toBeInTheDocument()
    expect(screen.getByText(/necesitan comer MÁS alimentos con potasio/)).toBeInTheDocument()
    expect(screen.getByText(/plátano, la naranja, la papa y el jitomate/)).toBeInTheDocument()

    // Never presented as a blanket restriction — always paired with the
    // individualized/ask-your-clinic caveat.
    expect(
      screen.getAllByText(/clínica.*nutriólogo|nutriólogo.*clínica/i).length
    ).toBeGreaterThan(0)
  })

  it('gives phosphorus guidance with source-stated portion examples and the PHOS additive label tip', () => {
    renderNutricion()

    expect(
      screen.getByRole('button', { name: 'fósforo', hidden: true })
    ).toBeInTheDocument()
    expect(screen.getByText(/lácteos.*nueces.*frijoles secos/i)).toBeInTheDocument()
    expect(screen.getByText(/media taza de leche o yogur/)).toBeInTheDocument()
    expect(screen.getByText(/FOS.*FÓS|FÓS.*FOS/)).toBeInTheDocument()
  })

  it('frames frijoles as a portion-guidance conversation, not a food to avoid (Mexican diet note)', () => {
    renderNutricion()

    expect(
      screen.getByText(/dieta mexicana/i)
    ).toBeInTheDocument()
    expect(screen.queryByText(/evita los frijoles/i)).not.toBeInTheDocument()
    expect(screen.getByText(/no significa que debas evitarlos/i)).toBeInTheDocument()
  })

  it('explains dialysate calories from dextrose', () => {
    renderNutricion()

    expect(screen.getByText(/dextrosa/)).toBeInTheDocument()
    expect(screen.getByText(/calorías extra/)).toBeInTheDocument()
  })

  it('warns against OTC supplements and points to clinic-prescribed ones', () => {
    renderNutricion()

    expect(screen.getByText(/suplemento pensado para personas en diálisis/)).toBeInTheDocument()
    expect(screen.getByText(/sin indicación médica/)).toBeInTheDocument()
  })

  it('never publishes a fixed mg/miligramos ceiling for sodium, potassium, or phosphorus (R5.5 hard rule)', () => {
    renderNutricion()

    const main = screen.getByRole('main')
    expect(main.textContent).not.toMatch(MG_NUMBER)
  })

  it('resolves citations and always shows the clinic/nephrologist disclaimer', () => {
    renderNutricion()

    expect(
      screen.getByRole('link', { name: /Alimentación y nutrición/ })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /Potassium in Your CKD Diet/ })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /Phosphorus and Your Diet/ })
    ).toBeInTheDocument()
    expect(
      screen.getByText(/no reemplaza las indicaciones de tu clínica/)
    ).toBeInTheDocument()
  })
})
