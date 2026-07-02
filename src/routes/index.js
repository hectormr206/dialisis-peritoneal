import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { RouteList } from './RouteList'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <a href='#main-content' className='skip-link'>
        Ir al contenido principal
      </a>
      <NavBar />
      <RouteList />
    </BrowserRouter>
  )
}
