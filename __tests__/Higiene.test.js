import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { RouteList } from '../src/routes/RouteList'

const renderHigiene = () =>
  render(
    <HelmetProvider>
      <MemoryRouter initialEntries={['/cuidados/higiene']}>
        <RouteList />
      </MemoryRouter>
    </HelmetProvider>
  )

// Higiene: real content page at /cuidados/higiene (PR6) — R5.1, R5.7.
describe('Higiene page', () => {
  it('renders under Layout at its route with the page title', () => {
    renderHigiene()

    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Higiene', level: 1 })
    ).toBeInTheDocument()
  })

  it('places the exit-site infection warning high on the page', () => {
    renderHigiene()

    expect(
      screen.getByRole('heading', {
        name: 'Señales de infección en el sitio de salida'
      })
    ).toBeInTheDocument()
    expect(screen.getByText('Urgente')).toBeInTheDocument()
    expect(
      screen.getByText(/enrojecimiento, hinchazón, dolor, calor o pus/)
    ).toBeInTheDocument()
  })

  it('renders every core guidance section', () => {
    renderHigiene()

    expect(
      screen.getByRole('heading', {
        name: 'Lávate las manos antes de cada intercambio'
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Cuida el sitio de salida y el catéter' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: 'Mantén limpio tu espacio de intercambio'
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Prepara tus alimentos con higiene' })
    ).toBeInTheDocument()
  })

  it('states the source-verified numbers only (70% alcohol gel, ~2 week healing)', () => {
    renderHigiene()

    expect(screen.getByText(/al 70%/)).toBeInTheDocument()
    expect(screen.getByText(/alrededor de 2 semanas/)).toBeInTheDocument()
  })

  it('renders the WHO five keys to safer food', () => {
    renderHigiene()

    expect(screen.getByText('Mantén la limpieza.')).toBeInTheDocument()
    expect(
      screen.getByText('Separa los alimentos crudos de los cocinados.')
    ).toBeInTheDocument()
    expect(screen.getByText('Cocina completamente los alimentos.')).toBeInTheDocument()
    expect(
      screen.getByText('Mantén los alimentos a temperaturas seguras.')
    ).toBeInTheDocument()
    expect(screen.getByText('Usa agua y materias primas seguras.')).toBeInTheDocument()
  })

  it('resolves citations and always shows the clinic/nephrologist disclaimer', () => {
    renderHigiene()

    expect(
      screen.getByRole('link', { name: /Guía de práctica clínica IMSS-797-16/ })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /Diálisis - peritoneal/ })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', {
        name: /Manual sobre las cinco claves para la inocuidad de los alimentos/
      })
    ).toBeInTheDocument()
    expect(
      screen.getByText(/no reemplaza las indicaciones de tu clínica/)
    ).toBeInTheDocument()
  })

  it('glossary-links peritonitis, sitio de salida, catéter and clorhexidina on first use', () => {
    renderHigiene()

    expect(
      screen.getByRole('button', { name: 'peritonitis' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'sitio de salida' })
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'catéter' })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'clorhexidina' })
    ).toBeInTheDocument()
  })
})
