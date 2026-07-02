import React from 'react'
import { Layout } from '../components/Layout'
import { HealthLog } from '../components/HealthLog'

// RegistroDiario: real page at /registro (PR11, optional slice — design
// section 7 sketch). Layout provides the skip-link landmark (R6.2) and the
// page's <h1>; HealthLog owns the form, history, and delete-all state.
export const RegistroDiario = () => (
  <Layout
    title='Mi registro diario'
    description='Anota tu peso y notas cada día. Tus datos se quedan solo en tu teléfono.'
    section='comida'
  >
    <HealthLog />
  </Layout>
)
