import React from 'react'
import { useLocation } from 'react-router-dom'
import { Nav, NavLink, NavLabel } from './styles'
import { MdHome, MdChecklist, MdHealthAndSafety, MdRestaurant } from 'react-icons/md'

// 4 grupos de navegación (R4.1, R4.2, R4.3 del diseño): el hub de Inicio
// absorbe la navegación secundaria, así la barra se mantiene en 4 pestañas
// de nivel superior incluso cuando el contenido crece (higiene, alimentación,
// etc. viven dentro de estos grupos en lugar de sumar pestañas nuevas).
//
// "Procedimientos" incluye las URLs legacy de los 3 procedimientos
// (/aseo-general, /limpieza-herida, /realizar-dialisis) para que la pestaña
// se marque activa aunque esas rutas no vivan bajo /procedimientos — las
// URLs legacy no cambian (progreso guardado, analítica) pero conceptualmente
// pertenecen al grupo Procedimientos.
const NAV_ITEMS = [
  {
    to: '/',
    label: 'Inicio',
    ariaLabel: 'Inicio - Horarios de diálisis',
    Icon: MdHome,
    prefixes: ['/']
  },
  {
    to: '/procedimientos',
    label: 'Procedimientos',
    ariaLabel: 'Procedimientos - Aseo, curación y diálisis',
    Icon: MdChecklist,
    section: 'procedimientos',
    prefixes: [
      '/procedimientos',
      '/aseo-general',
      '/limpieza-herida',
      '/realizar-dialisis'
    ]
  },
  {
    to: '/cuidados',
    label: 'Cuidados',
    ariaLabel: 'Cuidados - Higiene y señales de alarma',
    Icon: MdHealthAndSafety,
    section: 'cuidados',
    prefixes: ['/cuidados']
  },
  {
    to: '/alimentacion',
    label: 'Comida y líquidos',
    ariaLabel: 'Comida y líquidos',
    Icon: MdRestaurant,
    section: 'comida',
    // '/registro' (the daily weight/fluid log, PR11) is a top-level route
    // like the legacy procedure routes above, but conceptually belongs to
    // this group — included here for the same active-tab-continuity reason.
    prefixes: ['/alimentacion', '/registro']
  }
]

// Coincidencia por prefijo (no exacta): una pestaña se marca activa si la
// ruta actual es exactamente su prefijo o un descendiente de él — R4.2.
const isPrefixActive = (pathname, prefixes) =>
  prefixes.some((prefix) =>
    prefix === '/'
      ? pathname === '/'
      : pathname === prefix || pathname.startsWith(`${prefix}/`)
  )

export const NavBar = () => {
  const { pathname } = useLocation()

  return (
    <Nav role='navigation' aria-label='Navegación principal'>
      {NAV_ITEMS.map(({ to, label, ariaLabel, Icon, section, prefixes }) => {
        const isActive = isPrefixActive(pathname, prefixes)

        return (
          <NavLink
            key={to}
            to={to}
            className={isActive ? 'active' : undefined}
            aria-current={isActive ? 'page' : undefined}
            aria-label={ariaLabel}
            title={label}
            data-section={section}
          >
            <Icon size='28px' aria-hidden='true' />
            <NavLabel>{label}</NavLabel>
          </NavLink>
        )
      })}
    </Nav>
  )
}
