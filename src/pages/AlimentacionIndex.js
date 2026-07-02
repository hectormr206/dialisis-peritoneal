import React from 'react'
import { Layout } from '../components/Layout'
import { Card } from '../components/Card'
import { CardLink, CardLinkGrid } from '../components/CardLink'
import { PageContainer } from '../components/PageContainer'
import { alimentacionLinks } from '../content/navigation'

export const AlimentacionIndex = () => (
  <Layout
    title='Comida y líquidos'
    description='Qué tomar en cuenta sobre líquidos y alimentación en diálisis peritoneal.'
    section='comida'
  >
    <PageContainer>
      <Card section='comida'>
        <section aria-labelledby='alimentacion-heading'>
          <h2 id='alimentacion-heading'>🍽️ Comida y líquidos</h2>
          <p>Líquidos, ingresos y alimentación saludable para tu diálisis.</p>
        </section>
      </Card>
      <CardLinkGrid aria-label='Lista de temas de alimentación'>
        {alimentacionLinks.map((link) => (
          <li key={link.to}>
            <CardLink {...link} />
          </li>
        ))}
      </CardLinkGrid>
    </PageContainer>
  </Layout>
)
