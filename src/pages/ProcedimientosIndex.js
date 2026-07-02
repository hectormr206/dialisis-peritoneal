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
    section='procedimientos'
  >
    <PageContainer>
      <Card section='procedimientos'>
        <section aria-labelledby='procedimientos-heading'>
          <h2 id='procedimientos-heading'>
            <span aria-hidden='true'>🧴</span> Procedimientos
          </h2>
          <p>Elige tu procedimiento: pasos claros con fotos y video.</p>
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
