import styled from 'styled-components'

export const PageContainerElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);

  @media (max-width: 768px) {
    padding: 0 var(--spacing-sm);
    max-width: 100%;
  }

  @media (min-width: 1024px) {
    max-width: 900px;
  }
`
