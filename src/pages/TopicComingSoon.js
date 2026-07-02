import React from 'react'
import { Layout } from '../components/Layout'
import { Card } from '../components/Card'
import { PageContainer } from '../components/PageContainer'

// Minimal plain-language placeholder for topic pages not yet written
// (PR6-9 add the real content). Still routes through Layout so the
// skip-link/landmarks work correctly on every scaffolded URL — R6.2.
export const TopicComingSoon = ({ title, description }) => (
  <Layout title={title} description={description}>
    <PageContainer>
      <Card>
        <section aria-labelledby='coming-soon-heading'>
          <h2 id='coming-soon-heading'>{title}</h2>
          {description && <p>{description}</p>}
          <p>
            Estamos preparando esta guía. Muy pronto encontrarás aquí
            información clara y confiable. Mientras tanto, puedes consultar
            tus horarios y procedimientos desde el inicio.
          </p>
        </section>
      </Card>
    </PageContainer>
  </Layout>
)
