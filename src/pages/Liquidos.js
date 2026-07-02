import React from 'react'
import { Layout } from '../components/Layout'
import { TopicPage } from '../components/TopicPage'
import { liquidos } from '../content/topics/liquidos'

// Liquidos: real content page at /alimentacion/liquidos (PR8), replacing
// the TopicComingSoon placeholder scaffolded in PR5a. Layout provides the
// skip-link landmark (R6.2); TopicPage composes intro -> fluid-overload
// warning signs -> misconception loop (R5.6) -> what you can do ->
// citations (R5.1).
export const Liquidos = () => (
  <Layout title={liquidos.title} description={liquidos.description} section='comida'>
    <TopicPage {...liquidos} />
  </Layout>
)
