import React from 'react'
import { render, screen } from '@testing-library/react'
import { CitationFooter } from '../src/components/CitationFooter'

// CitationFooter: resolves sourceIds -> src/content/sources.js and always
// renders the standing disclaimer — R5.1, R5.2.
describe('CitationFooter', () => {
  it('resolves sourceIds into visible, linked citations', () => {
    render(<CitationFooter sourceIds={['imss-797-16', 'nkf-peritonitis']} />)

    expect(
      screen.getByRole('link', { name: /Guía de práctica clínica IMSS-797-16/ })
    ).toHaveAttribute(
      'href',
      'http://www.imss.gob.mx/sites/all/statics/guiasclinicas/797GER.pdf'
    )
    expect(
      screen.getByRole('link', { name: /Peritonitis/ })
    ).toHaveAttribute('href', 'https://www.kidney.org/kidney-topics/peritonitis')
  })

  it('renders a plain-text (non-link) citation when a source has no verified url', () => {
    render(<CitationFooter sourceIds={['niddk-nutrition-pd']} />)

    expect(screen.queryByRole('link')).not.toBeInTheDocument()
    expect(
      screen.getByText(/Eating & Nutrition for Peritoneal Dialysis/)
    ).toBeInTheDocument()
  })

  it('always renders the clinic/nephrologist disclaimer, even with no sources', () => {
    render(<CitationFooter />)

    expect(
      screen.getByText(/no reemplaza las indicaciones de tu clínica/)
    ).toBeInTheDocument()
  })

  it('throws for an unknown sourceId instead of silently dropping the citation', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {})

    expect(() =>
      render(<CitationFooter sourceIds={['no-existe']} />)
    ).toThrow(/unknown sourceId/)

    spy.mockRestore()
  })
})
