import styled from 'styled-components'

export const PageContainerElement = styled.div`
  /* --space-4 (16px): mismo token que CardLinkGrid usa para su gap y Card
     para su padding — el gap entre Card y CardLinkGrid ya no depende de un
     clamp distinto al de las tarjetas mismas. */
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--space-4);

  @media (max-width: 768px) {
    padding: 0 var(--space-3);
    max-width: 100%;
  }

  @media (min-width: 1024px) {
    max-width: 900px;
  }
`
