import React from 'react'
import { render, screen } from '@testing-library/react'
import { CitationFooter } from '../src/components/CitationFooter'

// PR6 filled in niddk-nutrition-pd's real URL (was the null-url fixture
// used below), so every real source now has a verified URL. The
// plain-text/no-verified-url branch is still real production logic
// (SourceBadge falls back to a <span> whenever a source's url is null), so
// this fixture keeps that branch covered without depending on production
// data always containing an unverified entry.
jest.mock('../src/content/sources', () => {
  const actual = jest.requireActual('../src/content/sources')
  return {
    sources: {
      ...actual.sources,
      'no-url-fixture': {
        name: 'Fuente sin URL verificada',
        org: 'Test',
        url: null,
        published: null,
        accessed: '2026-07-02'
      }
    }
  }
})

// CitationFooter: resolves sourceIds -> src/content/sources.js and always
// renders the standing disclaimer — R5.1, R5.2.
describe('CitationFooter', () => {
  it('resolves sourceIds into visible, linked citations', () => {
    render(<CitationFooter sourceIds={['imss-797-16', 'nkf-peritonitis']} />)

    expect(
      screen.getByRole('link', { name: /Guía de práctica clínica IMSS-797-16/ })
    ).toHaveAttribute(
      'href',
      'http://www.imss.gob.mx/sites/all/statics/guiasclinicas/797GRR.pdf'
    )
    expect(
      screen.getByRole('link', { name: /Peritonitis/ })
    ).toHaveAttribute('href', 'https://www.kidney.org/kidney-topics/peritonitis')
  })

  it('renders a plain-text (non-link) citation when a source has no verified url', () => {
    render(<CitationFooter sourceIds={['no-url-fixture']} />)

    expect(screen.queryByRole('link')).not.toBeInTheDocument()
    expect(screen.getByText(/Fuente sin URL verificada/)).toBeInTheDocument()
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
