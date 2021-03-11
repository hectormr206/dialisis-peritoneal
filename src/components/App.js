import React, { Suspense } from 'react'
import { GlobalStyle } from '../styles/GlobalStyle'
import { Loader } from './Loader'
import { Routes } from '../routes'

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <GlobalStyle />
      <Routes />
    </Suspense>
  )
}
