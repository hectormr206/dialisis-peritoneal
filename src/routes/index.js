import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { Home } from '../pages/Home'
import { GeneralCleaning } from '../pages/GeneralCleaning'
import { WoundHealing } from '../pages/WoundHealing'
import { GiWaterRecycling } from '../pages/GiWaterRecycling'
import { NoMatch } from '../pages/NoMatch'

export const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/aseo-general' component={GeneralCleaning} />
        <Route exact path='/limpieza-herida' component={WoundHealing} />
        <Route exact path='/realizar-dialisis' component={GiWaterRecycling} />
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  )
}
