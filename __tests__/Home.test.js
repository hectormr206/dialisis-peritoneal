import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Home } from '../src/pages/Home'

const renderHome = () =>
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  )

// Home becomes a hub with 3 distinct grouped sections; daily schedules stay
// below the hub — R4.1.
describe('Home', () => {
  it('renders the 3 hub sections with distinct headings', () => {
    renderHome()

    expect(
      screen.getByRole('heading', { name: /Procedimientos/ })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Higiene y señales de alarma/ })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Comida y líquidos/ })
    ).toBeInTheDocument()
  })

  it('links each procedure card to its legacy route', () => {
    renderHome()

    expect(screen.getByRole('link', { name: /Aseo General/ })).toHaveAttribute(
      'href',
      '/aseo-general'
    )
    expect(
      screen.getByRole('link', { name: /Limpieza de Herida/ })
    ).toHaveAttribute('href', '/limpieza-herida')
    expect(
      screen.getByRole('link', { name: /Realizar Diálisis/ })
    ).toHaveAttribute('href', '/realizar-dialisis')
  })

  it('keeps the daily schedules below the hub sections', () => {
    renderHome()

    const headings = screen.getAllByRole('heading', { level: 2 })
    const headingText = headings.map((heading) => heading.textContent)

    const lastHubIndex = headingText.findIndex((text) =>
      text.includes('Comida y líquidos')
    )
    const firstScheduleIndex = headingText.findIndex((text) =>
      text.includes('Horario sugerido diario')
    )

    expect(lastHubIndex).toBeGreaterThan(-1)
    expect(firstScheduleIndex).toBeGreaterThan(lastHubIndex)
  })
})
