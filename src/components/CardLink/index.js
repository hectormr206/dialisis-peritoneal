import React from 'react'
import {
  CardLinkElement,
  CardLinkIcon,
  CardLinkBody,
  CardLinkTitle,
  CardLinkDescription
} from './styles'

export { CardLinkGrid } from './styles'

// Big icon+text card used by the Home hub sections and the 3 group index
// pages (/procedimientos, /cuidados, /alimentacion) — R4.1, R4.2.
// section: 'procedimientos' | 'cuidados' | 'comida' — opcional, tiñe el
// chip del ícono con la identidad de color del grupo (R "más color").
export const CardLink = ({ to, icon: Icon, title, description, section }) => (
  <CardLinkElement to={to}>
    <CardLinkIcon aria-hidden='true' $section={section}>
      <Icon size='24px' />
    </CardLinkIcon>
    <CardLinkBody>
      <CardLinkTitle>{title}</CardLinkTitle>
      {description && <CardLinkDescription>{description}</CardLinkDescription>}
    </CardLinkBody>
  </CardLinkElement>
)
