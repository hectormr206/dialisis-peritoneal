import React from 'react'
import { Layout } from '../components/Layout'
import { Card } from '../components/Card'

export const Home = () => {
  const description = 'Aquí encontrarás todo lo que necesitas saber sobre la diálisis peritoneal.'

  return (
    <Layout title='Diálisis peritoneal' description={description}>
      <Card>
        {description}
      </Card>
    </Layout>
  )
}
