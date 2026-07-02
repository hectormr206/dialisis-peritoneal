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
export const CardLink = ({ to, icon: Icon, title, description }) => (
  <CardLinkElement to={to}>
    <CardLinkIcon aria-hidden='true'>
      <Icon size='32px' />
    </CardLinkIcon>
    <CardLinkBody>
      <CardLinkTitle>{title}</CardLinkTitle>
      {description && <CardLinkDescription>{description}</CardLinkDescription>}
    </CardLinkBody>
  </CardLinkElement>
)
