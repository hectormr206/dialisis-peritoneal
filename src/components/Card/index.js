import React from 'react'
import { CardComponent } from './styles'

// section: 'procedimientos' | 'cuidados' | 'comida' — opcional, tiñe la
// tarjeta con la identidad de color del grupo de contenido (ver
// GlobalStyle.js para los tokens y su contraste medido). Sin section, Card
// se ve como siempre (fondo blanco neutro).
export const Card = ({ children, section }) => (
  <CardComponent $section={section}>
    {children}
  </CardComponent>
)
