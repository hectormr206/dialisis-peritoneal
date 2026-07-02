import React from 'react'
import { Layout } from '../components/Layout'
import { Card } from '../components/Card'
import { CardLink, CardLinkGrid } from '../components/CardLink'
import { PageContainer } from '../components/PageContainer'
import { procedureLinks } from '../content/navigation'

export const ProcedimientosIndex = () => (
  <Layout
    title='Procedimientos'
    description='Guías paso a paso para el aseo general, la curación de heridas y la diálisis.'
  >
    <PageContainer>
      <Card>
        <section aria-labelledby='procedimientos-heading'>
          <h2 id='procedimientos-heading'>🧴 Procedimientos</h2>
          <p>
            Elige el procedimiento que necesitas realizar. Cada guía te lleva
            paso a paso, con fotos y videos.
          </p>
        </section>
      </Card>
      <CardLinkGrid aria-label='Lista de procedimientos'>
        {procedureLinks.map((link) => (
          <li key={link.to}>
            <CardLink {...link} />
          </li>
        ))}
      </CardLinkGrid>
    </PageContainer>
  </Layout>
)
