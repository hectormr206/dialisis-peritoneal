import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { GeneralCleaning } from '../pages/GeneralCleaning'
import { WoundHealing } from '../pages/WoundHealing'
import { WaterRecycling } from '../pages/WaterRecycling'
import { ProcedimientosIndex } from '../pages/ProcedimientosIndex'
import { CuidadosIndex } from '../pages/CuidadosIndex'
import { AlimentacionIndex } from '../pages/AlimentacionIndex'
import { Higiene } from '../pages/Higiene'
import { TopicComingSoon } from '../pages/TopicComingSoon'
import { NoMatch } from '../pages/NoMatch'

// Extracted from routes/index.js (which also wraps BrowserRouter + NavBar)
// so it can be rendered under a MemoryRouter in tests without pulling in
// the real browser history.
export const RouteList = () => (
  <Routes>
    <Route path='/' element={<Home />} />

    {/* Legacy procedure URLs — unchanged, R4.2 */}
    <Route path='/aseo-general' element={<GeneralCleaning />} />
    <Route path='/limpieza-herida' element={<WoundHealing />} />
    <Route path='/realizar-dialisis' element={<WaterRecycling />} />

    <Route path='/procedimientos' element={<ProcedimientosIndex />} />

    <Route path='/cuidados' element={<CuidadosIndex />} />
    <Route path='/cuidados/higiene' element={<Higiene />} />
    <Route
      path='/cuidados/senales-de-alarma'
      element={
        <TopicComingSoon
          title='Señales de alarma'
          description='Qué observar y cuándo buscar ayuda.'
        />
      }
    />

    <Route path='/alimentacion' element={<AlimentacionIndex />} />
    <Route
      path='/alimentacion/liquidos'
      element={
        <TopicComingSoon
          title='Líquidos'
          description='Qué tomar en cuenta sobre líquidos e ingresos.'
        />
      }
    />
    <Route
      path='/alimentacion/nutricion'
      element={
        <TopicComingSoon
          title='Nutrición'
          description='Alimentación saludable para diálisis peritoneal.'
        />
      }
    />

    <Route path='*' element={<NoMatch />} />
  </Routes>
)
