import { Suspense } from 'react'
import { GlobalStyle } from '../styles/GlobalStyle'
import { Loader } from './Loader'

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <GlobalStyle />
      Welcome to React!
    </Suspense>
  )
}