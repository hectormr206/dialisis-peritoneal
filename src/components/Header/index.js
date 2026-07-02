import React from 'react'
import { HeaderComponent } from './styles'

export const Header = ({ children, section }) => (
  <HeaderComponent $section={section}>
    {children}
  </HeaderComponent>
)
