import React from 'react'
import { Helmet } from 'react-helmet'
import { Header } from '../Header'
import { Content, Title } from './styles'
import { Footer } from '../Footer'

export const Layout = ({ children, title, description }) => {
  return (
    <>
      <Helmet>
        {title && <title>{title} | Diálisis peritoneal</title>}
        {description && <meta name='description' content={description} />}
      </Helmet>
      <>
        <Header>
          {title && <Title>{title}</Title>}
        </Header>
        <Content>
          {children}
        </Content>
        <Footer />
      </>
    </>
  )
}
