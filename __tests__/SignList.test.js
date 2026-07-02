import React from 'react'
import { render, screen } from '@testing-library/react'
import { SignList } from '../src/components/SignList'

const items = [
  { id: 'nausea', text: 'Náusea' },
  { id: 'fiebre', text: 'Fiebre' }
]

// SignList: plain-language icon+text symptom list — R5.4. Meaning is never
// conveyed by icon alone: every item pairs a visible icon (aria-hidden,
// decorative) with visible text.
describe('SignList', () => {
  it('renders every item as visible text', () => {
    render(<SignList items={items} />)

    expect(screen.getByText('Náusea')).toBeInTheDocument()
    expect(screen.getByText('Fiebre')).toBeInTheDocument()
  })

  it('renders a decorative icon per item that is hidden from assistive tech', () => {
    const { container } = render(<SignList items={items} />)

    const icons = container.querySelectorAll('[aria-hidden="true"]')
    expect(icons).toHaveLength(items.length)
  })

  it('renders nothing when items is empty', () => {
    const { container } = render(<SignList items={[]} />)

    expect(container.querySelectorAll('li')).toHaveLength(0)
  })
})
