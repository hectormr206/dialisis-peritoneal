import React from 'react'
import { Layout } from '../components/Layout'
import { TopicPage } from '../components/TopicPage'
import { higiene } from '../content/topics/higiene'

// Higiene: real content page at /cuidados/higiene (PR6), replacing the
// TopicComingSoon placeholder scaffolded in PR5a. Layout provides the
// skip-link landmark (R6.2); TopicPage composes intro -> core guidance ->
// warning/escalation -> citations (R5.1).
export const Higiene = () => (
  <Layout title={higiene.title} description={higiene.description}>
    <TopicPage {...higiene} />
  </Layout>
)
