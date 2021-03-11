import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { NavBar } from '../components/NavBar'
const Home = React.lazy(() => import('../pages/Home'))
const NoMatch = React.lazy(() => import('../pages/NoMatch'))

export const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  )
}
