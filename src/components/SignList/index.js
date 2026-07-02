import React from 'react'
import { MdReportProblem } from 'react-icons/md'
import { List, ListItem, ItemIcon, ItemText } from './styles'

// SignList: plain-language symptom/warning-sign list — R5.4. Every item
// pairs a visible icon with visible text so meaning is never conveyed by
// icon or text alone, matching the icon+text redundancy pattern already
// used by UrgentWarningCallout and EscalationTable's action badges. One
// consistent icon per item (not a different icon per symptom) since this
// list carries no per-item severity distinction — it's a scanability aid,
// not a color/icon-coded warning system. `items` shape: `[{ id, text }]`.
export const SignList = ({ items = [] }) => (
  <List>
    {items.map(({ id, text }) => (
      <ListItem key={id}>
        <ItemIcon aria-hidden='true'>
          <MdReportProblem />
        </ItemIcon>
        <ItemText>{text}</ItemText>
      </ListItem>
    ))}
  </List>
)
