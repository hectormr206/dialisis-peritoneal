import styled from 'styled-components'

export const Content = styled.div`
  height: calc(100% - var(--header-height) - var(--footer-height));
  overflow: auto;
`

export const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 700;
`
