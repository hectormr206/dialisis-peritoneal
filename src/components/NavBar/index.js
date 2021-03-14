import React from 'react'
import { Nav, NavLink } from './styles'
import { MdHome } from 'react-icons/md'
import { GiVacuumCleaner, GiRoughWound, GiWaterRecycling } from 'react-icons/gi'

export const NavBar = () => {
  return (
    <Nav>
      <NavLink exact to='/'><MdHome size='32px' /></NavLink>
      <NavLink exact to='/aseo-general'><GiVacuumCleaner size='32px' /></NavLink>
      <NavLink exact to='/limpieza-herida'><GiRoughWound size='32px' /></NavLink>
      <NavLink exact to='/realizar-dialisis'><GiWaterRecycling size='32px' /></NavLink>
    </Nav>
  )
}
