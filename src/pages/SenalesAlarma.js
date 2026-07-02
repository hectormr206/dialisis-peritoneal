import React from 'react'
import { Layout } from '../components/Layout'
import { TopicPage } from '../components/TopicPage'
import { senalesAlarma } from '../content/topics/senales-alarma'

// SenalesAlarma: real content page at /cuidados/senales-de-alarma (PR7),
// replacing the TopicComingSoon placeholder scaffolded in PR5a. Layout
// provides the skip-link landmark (R6.2); TopicPage composes intro ->
// escalation (R5.3, placed first) -> explanatory sign list -> citations
// (R5.1).
export const SenalesAlarma = () => (
  <Layout
    title={senalesAlarma.title}
    description={senalesAlarma.description}
    section='cuidados'
  >
    <TopicPage {...senalesAlarma} />
  </Layout>
)
