import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { RouteList } from '../src/routes/RouteList'

const renderAt = (path) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <RouteList />
    </MemoryRouter>
  )

// Every route in this suite renders through Layout, whose <main id="main-content">
// landmark is the target of the skip-link (routes/index.js) — R6.2. Asserting
// the landmark exists on each new route is the pragmatic proxy for "renders
// correctly under Layout" without duplicating Layout's own rendering details.
describe('RouteList', () => {
  it('renders Home at /', () => {
    renderAt('/')
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it.each([
    ['/aseo-general', 'Aseo General'],
    ['/limpieza-herida', 'Limpieza de Herida'],
    ['/realizar-dialisis', 'Realizar Diálisis']
  ])('keeps the legacy procedure route %s working', (path, heading) => {
    renderAt(path)
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getAllByText(heading, { exact: false }).length).toBeGreaterThan(0)
  })

  it.each([
    ['/procedimientos', 'Procedimientos'],
    ['/cuidados', 'Higiene y señales de alarma'],
    ['/alimentacion', 'Comida y líquidos']
  ])('renders the new index page at %s under Layout', (path, headingText) => {
    renderAt(path)
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getAllByText(headingText, { exact: false }).length).toBeGreaterThan(0)
  })

  it.each([
    '/alimentacion/nutricion'
  ])('renders the topic placeholder at %s under Layout', (path) => {
    renderAt(path)
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByText(/preparando esta guía/)).toBeInTheDocument()
  })

  it('renders the real Higiene content page at /cuidados/higiene under Layout', () => {
    renderAt('/cuidados/higiene')
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Higiene', level: 1 })
    ).toBeInTheDocument()
    expect(screen.queryByText(/preparando esta guía/)).not.toBeInTheDocument()
  })

  it('renders the real Señales de alarma content page at /cuidados/senales-de-alarma under Layout', () => {
    renderAt('/cuidados/senales-de-alarma')
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Señales de alarma', level: 1 })
    ).toBeInTheDocument()
    expect(screen.queryByText(/preparando esta guía/)).not.toBeInTheDocument()
  })

  it('renders the real Líquidos content page at /alimentacion/liquidos under Layout', () => {
    renderAt('/alimentacion/liquidos')
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Líquidos', level: 1 })
    ).toBeInTheDocument()
    expect(screen.queryByText(/preparando esta guía/)).not.toBeInTheDocument()
  })

  it('falls back to NoMatch on an unknown route', () => {
    renderAt('/does-not-exist')
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByText(/No encontramos esta página/)).toBeInTheDocument()
  })
})
