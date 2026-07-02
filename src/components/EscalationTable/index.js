import React from 'react'
import { MdPhone, MdLocalHospital } from 'react-icons/md'
import { TableWrapper, Table, Caption, ActionBadge } from './styles'

const ACTIONS = {
  clinic: { label: 'Llama a tu clínica', Icon: MdPhone },
  er: { label: 'Ve a urgencias', Icon: MdLocalHospital }
}

// EscalationTable: structured "cuándo llamar a tu clínica" vs. "cuándo ir a
// urgencias" distinction — R5.1, R5.3. A real <table> (not two separate
// styled lists) keeps the symptom -> action mapping tabular and gives
// screen readers `scope="col"` headers; the action column always pairs an
// icon with a visible text label so the distinction never relies on color
// alone — R5.4. `items` shape: `[{ id, symptom, action: 'clinic' | 'er' }]`.
export const EscalationTable = ({ caption, items = [] }) => (
  <TableWrapper>
    <Table>
      {caption && <Caption>{caption}</Caption>}
      <thead>
        <tr>
          <th scope='col'>Señal</th>
          <th scope='col'>Qué hacer</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, symptom, action }) => {
          const config = ACTIONS[action] || ACTIONS.clinic
          const Icon = config.Icon

          return (
            <tr key={id}>
              <td data-label='Señal'>{symptom}</td>
              <td data-label='Qué hacer'>
                <ActionBadge $action={action}>
                  <Icon aria-hidden='true' />
                  {config.label}
                </ActionBadge>
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  </TableWrapper>
)
