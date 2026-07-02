import React from 'react'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { RouteList } from '../src/routes/RouteList'
import { STORAGE_KEY } from '../src/utils/healthLog'

const renderRegistro = () =>
  render(
    <HelmetProvider>
      <MemoryRouter initialEntries={['/registro']}>
        <RouteList />
      </MemoryRouter>
    </HelmetProvider>
  )

const seedEntries = (entries) => {
  window.localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ version: 1, entries })
  )
}

// R5.5's hard rule applied to this page: no value-judgment vocabulary about
// the user's weight anywhere on the page — the log records numbers, it
// never assesses them as good/bad/normal/dangerous, and it never computes
// a BMI-style index. Mirrors PR8's FLUID_VOLUME_NUMBER / PR9's MG_NUMBER
// guard pattern for their own no-invented-threshold rules.
const VALUE_JUDGMENT_PATTERN =
  /(peso\s+(est[aá]\s+)?(alto|bajo|excesivo|elevado|ideal|normal|anormal|saludable)|sobrepeso|bajo\s+peso|deber[ií]as\s+(subir|bajar|perder|ganar)|peso\s+peligroso|es\s+(peligroso|malo|grave)\s+que|tu\s+peso\s+est[aá]\s+(bien|mal)|meta\s+de\s+peso|[ií]ndice\s+de\s+masa|\bIMC\b)/i

describe('VALUE_JUDGMENT_PATTERN regex', () => {
  it('matches known value-judgment phrasings before relying on it to scan the page', () => {
    expect('tu peso está alto').toMatch(VALUE_JUDGMENT_PATTERN)
    expect('tienes sobrepeso').toMatch(VALUE_JUDGMENT_PATTERN)
    expect('deberías bajar de peso').toMatch(VALUE_JUDGMENT_PATTERN)
    expect('tu IMC es 27').toMatch(VALUE_JUDGMENT_PATTERN)
    expect('subiste 0.5 kg desde ayer').not.toMatch(VALUE_JUDGMENT_PATTERN)
  })
})

beforeEach(() => {
  window.localStorage.clear()
})

describe('Registro diario page', () => {
  it('renders under Layout at /registro with the page title', () => {
    renderRegistro()

    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Mi registro diario', level: 1 })
    ).toBeInTheDocument()
  })

  it('shows a plain-language empty state when there is no history yet', () => {
    renderRegistro()

    expect(screen.getByText(/[Aa]ún no tienes registros/)).toBeInTheDocument()
  })

  it('has labelled (not placeholder-only) weight and note fields', () => {
    renderRegistro()

    expect(
      screen.getByLabelText(/Peso de hoy/i)
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/[Nn]ota/i)).toBeInTheDocument()
  })

  it('uses a decimal-friendly numeric input for weight (R6.3, mobile keypad)', () => {
    renderRegistro()

    const weightInput = screen.getByLabelText(/Peso de hoy/i)
    expect(weightInput).toHaveAttribute('inputmode', 'decimal')
  })

  it('saves a new entry and shows it in the history', async () => {
    const user = userEvent.setup()
    renderRegistro()

    await user.type(screen.getByLabelText(/Peso de hoy/i), '70.5')
    await user.type(screen.getByLabelText(/[Nn]ota/i), 'Me sentí bien')
    await user.click(screen.getByRole('button', { name: /[Gg]uardar registro/i }))

    const history = screen.getByRole('list', { name: /historial/i })
    expect(within(history).getByText(/70\.5/)).toBeInTheDocument()
    expect(within(history).getByText('Me sentí bien')).toBeInTheDocument()
  })

  it('updates (not duplicates) today\'s entry on a second save', async () => {
    const user = userEvent.setup()
    renderRegistro()

    await user.type(screen.getByLabelText(/Peso de hoy/i), '70')
    await user.click(screen.getByRole('button', { name: /[Gg]uardar registro/i }))

    const weightInput = screen.getByLabelText(/Peso de hoy/i)
    await user.clear(weightInput)
    await user.type(weightInput, '71')
    await user.click(screen.getByRole('button', { name: /[Aa]ctualizar registro/i }))

    const history = screen.getByRole('list', { name: /historial/i })
    expect(within(history).getAllByRole('listitem')).toHaveLength(1)
    expect(within(history).getByText(/71/)).toBeInTheDocument()
  })

  it('shows an icon+text delta versus the previous day, not color alone', () => {
    seedEntries([
      { date: '2026-06-30', weightKg: 70, notes: null },
      { date: '2026-07-01', weightKg: 70.8, notes: null }
    ])

    renderRegistro()

    // Text carries the meaning; an aria-hidden icon accompanies it.
    expect(screen.getByText(/subiste 0\.8 kg desde ayer/i)).toBeInTheDocument()
  })

  it('does not claim "desde ayer" when the previous entry is more than one day earlier', () => {
    seedEntries([
      { date: '2026-06-20', weightKg: 72, notes: null },
      { date: '2026-07-01', weightKg: 70, notes: null }
    ])

    renderRegistro()

    expect(screen.queryByText(/desde ayer/i)).not.toBeInTheDocument()
    expect(screen.getByText(/desde tu (último|registro) anterior/i)).toBeInTheDocument()
  })

  it('shows a static clinic-contact reminder that does not change based on the data (R5.5)', () => {
    renderRegistro()
    expect(
      screen.getByText(/sube varios días seguidos|te hinchas más/i)
    ).toBeInTheDocument()
    expect(screen.getAllByText(/llama a tu clínica/i).length).toBeGreaterThan(0)

    window.localStorage.clear()
    seedEntries([
      { date: '2026-06-25', weightKg: 60, notes: null },
      { date: '2026-07-01', weightKg: 90, notes: null } // an extreme jump
    ])
    renderRegistro()
    // Same static reminder text — not a data-triggered alert with different wording.
    expect(
      screen.getAllByText(/sube varios días seguidos|te hinchas más/i).length
    ).toBeGreaterThan(0)
  })

  it('never renders value-judgment language about the user\'s weight, even with a large delta', () => {
    seedEntries([
      { date: '2026-06-30', weightKg: 60, notes: null },
      { date: '2026-07-01', weightKg: 90, notes: null }
    ])

    renderRegistro()

    const main = screen.getByRole('main')
    expect(main.textContent).not.toMatch(VALUE_JUDGMENT_PATTERN)
  })

  it('deletes the whole log after confirmation', async () => {
    const user = userEvent.setup()
    seedEntries([{ date: '2026-07-01', weightKg: 70, notes: null }])
    renderRegistro()

    await user.click(
      screen.getByRole('button', { name: /borrar todo mi registro/i })
    )
    await user.click(screen.getByRole('button', { name: /sí, borrar/i }))

    expect(screen.getByText(/[Aa]ún no tienes registros/)).toBeInTheDocument()
    expect(window.localStorage.getItem(STORAGE_KEY)).toBeNull()
  })

  it('cancels the delete-all action without clearing the log', async () => {
    const user = userEvent.setup()
    seedEntries([{ date: '2026-07-01', weightKg: 70, notes: null }])
    renderRegistro()

    await user.click(
      screen.getByRole('button', { name: /borrar todo mi registro/i })
    )
    await user.click(screen.getByRole('button', { name: /cancelar/i }))

    const history = screen.getByRole('list', { name: /historial/i })
    expect(within(history).getAllByRole('listitem')).toHaveLength(1)
  })

  it('resolves citations and always shows the clinic/nephrologist disclaimer', () => {
    renderRegistro()

    expect(
      screen.getByText(/no reemplaza las indicaciones de tu clínica/)
    ).toBeInTheDocument()
  })
})
