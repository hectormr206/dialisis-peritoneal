import React from 'react'
import { Layout } from '../components/Layout'
import { TopicPage } from '../components/TopicPage'
import { nutricion } from '../content/topics/nutricion'

// Nutricion: real content page at /alimentacion/nutricion (PR9), replacing
// the TopicComingSoon placeholder scaffolded in PR5a. Layout provides the
// skip-link landmark (R6.2); TopicPage composes intro -> protein -> the
// three minerals (sodium, potassium, phosphorus) -> calories -> supplements
// -> citations (R5.1). Final medical-content topic page of the PR6-9 chain.
export const Nutricion = () => (
  <Layout title={nutricion.title} description={nutricion.description} section='comida'>
    <TopicPage {...nutricion} />
  </Layout>
)
