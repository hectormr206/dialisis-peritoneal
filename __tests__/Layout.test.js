import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { Layout } from '../src/components/Layout'

const renderLayout = (props) =>
  render(
    <HelmetProvider>
      <Layout {...props}>
        <p>Contenido de la página</p>
      </Layout>
    </HelmetProvider>
  )

describe('Layout', () => {
  it('sets the per-page document title via Helmet', async () => {
    renderLayout({ title: 'Aseo General', description: 'desc' })

    await waitFor(() => {
      expect(document.title).toBe('Aseo General | Diálisis peritoneal')
    })
  })

  it('updates the document title when the page title prop changes', async () => {
    const { rerender } = render(
      <HelmetProvider>
        <Layout title='Cuidados' description='desc'>
          <p>Contenido</p>
        </Layout>
      </HelmetProvider>
    )

    await waitFor(() => {
      expect(document.title).toBe('Cuidados | Diálisis peritoneal')
    })

    rerender(
      <HelmetProvider>
        <Layout title='Nutrición' description='desc'>
          <p>Contenido</p>
        </Layout>
      </HelmetProvider>
    )

    await waitFor(() => {
      expect(document.title).toBe('Nutrición | Diálisis peritoneal')
    })
  })

  it('injects the Plausible analytics script into document head', async () => {
    renderLayout({ title: 'Higiene', description: 'desc' })

    await waitFor(() => {
      const script = document.head.querySelector(
        'script[data-domain="dialisis.hectormr.com"]'
      )
      expect(script).not.toBeNull()
      expect(script.getAttribute('src')).toContain(
        'plausible.hectormr.com/js/script'
      )
    })
  })
})
