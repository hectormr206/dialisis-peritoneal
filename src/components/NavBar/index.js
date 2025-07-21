import React from 'react'
import { Nav, NavLink } from './styles'
import { MdHome } from 'react-icons/md'
import {
  GiVacuumCleaner,
  GiRoughWound,
  GiWaterRecycling
} from 'react-icons/gi'

export const NavBar = () => {
  return (
    <Nav role='navigation' aria-label='Navegación principal'>
      <NavLink
        exact
        to='/'
        aria-label='Inicio - Horarios de diálisis'
        title='Inicio'
      >
        <MdHome size='32px' aria-hidden='true' />
        <span className='sr-only'>Inicio</span>
      </NavLink>

      <NavLink
        exact
        to='/aseo-general'
        aria-label='Aseo general - Limpieza del área'
        title='Aseo general'
      >
        <GiVacuumCleaner size='32px' aria-hidden='true' />
        <span className='sr-only'>Aseo general</span>
      </NavLink>

      <NavLink
        exact
        to='/limpieza-herida'
        aria-label='Limpieza de herida - Curación'
        title='Limpieza de herida'
      >
        <GiRoughWound size='32px' aria-hidden='true' />
        <span className='sr-only'>Limpieza de herida</span>
      </NavLink>

      <NavLink
        exact
        to='/realizar-dialisis'
        aria-label='Realizar diálisis - Proceso completo'
        title='Realizar diálisis'
      >
        <GiWaterRecycling size='32px' aria-hidden='true' />
        <span className='sr-only'>Realizar diálisis</span>
      </NavLink>
    </Nav>
  )
}
