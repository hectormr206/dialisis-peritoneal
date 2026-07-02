import React from 'react'
import { Layout } from '../components/Layout'
import { Card } from '../components/Card'
import { CardLink, CardLinkGrid } from '../components/CardLink'
import { PageContainer } from '../components/PageContainer'
import { cuidadosLinks } from '../content/navigation'

export const CuidadosIndex = () => (
  <Layout
    title='Cuidados'
    description='Higiene, cuidado de heridas y señales de alarma en diálisis peritoneal.'
    section='cuidados'
  >
    <PageContainer>
      <Card section='cuidados'>
        <section aria-labelledby='cuidados-heading'>
          <h2 id='cuidados-heading'>
            <span aria-hidden='true'>🩺</span> Higiene y señales de alarma
          </h2>
          <p>Cómo cuidar tu piel, tu catéter y cuándo pedir ayuda.</p>
        </section>
      </Card>
      <CardLinkGrid aria-label='Lista de temas de cuidados'>
        {cuidadosLinks.map((link) => (
          <li key={link.to}>
            <CardLink {...link} />
          </li>
        ))}
      </CardLinkGrid>
    </PageContainer>
  </Layout>
)
