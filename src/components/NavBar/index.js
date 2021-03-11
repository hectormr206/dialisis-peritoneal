import React from 'react'
import { Nav, NavLink } from './styles'
import { MdHome } from 'react-icons/md'

export const NavBar = () => {
  return (
    <Nav>
      <NavLink exact to='/'><MdHome size='32px' /></NavLink>
    </Nav>
  )
}
