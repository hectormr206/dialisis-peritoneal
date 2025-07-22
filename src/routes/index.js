import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { Home } from '../pages/Home'
import { GeneralCleaning } from '../pages/GeneralCleaning'
import { WoundHealing } from '../pages/WoundHealing'
import { WaterRecycling } from '../pages/WaterRecycling'
import { NoMatch } from '../pages/NoMatch'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aseo-general' element={<GeneralCleaning />} />
        <Route path='/limpieza-herida' element={<WoundHealing />} />
        <Route path='/realizar-dialisis' element={<WaterRecycling />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  )
}
