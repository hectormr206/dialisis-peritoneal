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
  >
    <PageContainer>
      <Card>
        <section aria-labelledby='alimentacion-heading'>
          <h2 id='alimentacion-heading'>🍽️ Comida y líquidos</h2>
          <p>
            Consulta información sobre líquidos, ingresos y una alimentación
            saludable durante la diálisis peritoneal.
          </p>
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
