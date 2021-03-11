import React from 'react'
import { Nav, NavLink } from './styles'

export const NavBar = () => {
  return (
    <Nav>
      <NavLink exact to='/'>Home</NavLink>
    </Nav>
  )
}