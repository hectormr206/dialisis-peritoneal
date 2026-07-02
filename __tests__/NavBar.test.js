import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { NavBar } from '../src/components/NavBar'

const renderNavBar = (initialPath) =>
  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <NavBar />
    </MemoryRouter>
  )

describe('NavBar', () => {
  it('renders the 4 group tabs with visible text labels', () => {
    renderNavBar('/')

    // Visible labels (not sr-only) — R4.2: low-literacy users navigate by
    // icon + word, so the label text must be real rendered content.
    expect(screen.getByText('Inicio')).toBeVisible()
    expect(screen.getByText('Procedimientos')).toBeVisible()
    expect(screen.getByText('Cuidados')).toBeVisible()
    expect(screen.getByText('Comida y líquidos')).toBeVisible()
  })

  it('marks only Inicio active on the home route', () => {
    renderNavBar('/')

    expect(screen.getByRole('link', { name: /Inicio/ })).toHaveAttribute(
      'aria-current',
      'page'
    )
    expect(
      screen.getByRole('link', { name: /Procedimientos/ })
    ).not.toHaveAttribute('aria-current')
  })

  it('marks Procedimientos active on a legacy procedure route', () => {
    renderNavBar('/aseo-general')

    expect(
      screen.getByRole('link', { name: /Procedimientos/ })
    ).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('link', { name: /^Inicio/ })).not.toHaveAttribute(
      'aria-current'
    )
  })

  it('marks Procedimientos active on the new /procedimientos index route', () => {
    renderNavBar('/procedimientos')

    expect(
      screen.getByRole('link', { name: /Procedimientos/ })
    ).toHaveAttribute('aria-current', 'page')
  })

  it('marks Cuidados active on a nested /cuidados/* topic route', () => {
    renderNavBar('/cuidados/senales-de-alarma')

    expect(screen.getByRole('link', { name: /Cuidados/ })).toHaveAttribute(
      'aria-current',
      'page'
    )
  })

  it('marks Comida y líquidos active on a nested /alimentacion/* topic route', () => {
    renderNavBar('/alimentacion/nutricion')

    expect(
      screen.getByRole('link', { name: /Comida y líquidos/ })
    ).toHaveAttribute('aria-current', 'page')
  })

  it('marks Comida y líquidos active on the top-level /registro route', () => {
    renderNavBar('/registro')

    expect(
      screen.getByRole('link', { name: /Comida y líquidos/ })
    ).toHaveAttribute('aria-current', 'page')
  })

  it('does not mark any tab active on an unrelated route', () => {
    renderNavBar('/does-not-exist')

    for (const name of [
      /^Inicio/,
      /Procedimientos/,
      /Cuidados/,
      /Comida y líquidos/
    ]) {
      expect(screen.getByRole('link', { name })).not.toHaveAttribute(
        'aria-current'
      )
    }
  })
})
