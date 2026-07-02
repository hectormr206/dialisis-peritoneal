import React from 'react'
import { render, screen } from '@testing-library/react'
import { TopicPage } from '../src/components/TopicPage'

// TopicPage: intro -> core guidance -> warning/escalation -> CitationFooter
// composition template used by the 4 medical-content pages (PR6-9) — R5.1.
// No real medical content ships in this PR — demo content only.
describe('TopicPage', () => {
  const sections = [
    {
      heading: 'Señales de alarma',
      body: 'Texto de ejemplo sobre señales de alarma.',
      warning: { level: 'urgent', text: 'Llama a tu clínica si ves esto.' },
      table: {
        items: [{ id: 'a', symptom: 'Fiebre', action: 'er' }]
      },
      sourceIds: ['imss-797-16']
    }
  ]

  it('renders the intro, section content, warning callout and escalation table', () => {
    render(
      <TopicPage
        title='Peritonitis'
        intro='Qué cubre esta página.'
        sections={sections}
        sourceIds={['nkf-peritonitis']}
      />
    )

    expect(
      screen.getByRole('heading', { name: 'Peritonitis', level: 1 })
    ).toBeInTheDocument()
    expect(screen.getByText('Qué cubre esta página.')).toBeInTheDocument()
    expect(screen.getByText('Señales de alarma')).toBeInTheDocument()
    expect(screen.getByText('Urgente')).toBeInTheDocument()
    expect(screen.getByRole('table')).toBeInTheDocument()
  })

  it('always renders exactly one CitationFooter with the standing disclaimer', () => {
    render(<TopicPage title='Peritonitis' sections={sections} />)

    expect(
      screen.getByText(/no reemplaza las indicaciones de tu clínica/)
    ).toBeInTheDocument()
  })

  it('aggregates sourceIds from both the page level and each section into one footer', () => {
    render(
      <TopicPage
        title='Peritonitis'
        sections={sections}
        sourceIds={['nkf-peritonitis']}
      />
    )

    // Page-level sourceId
    expect(
      screen.getByRole('link', { name: /^Peritonitis/ })
    ).toBeInTheDocument()
    // Section-level sourceId
    expect(
      screen.getByRole('link', { name: /IMSS-797-16/ })
    ).toBeInTheDocument()
  })
})
