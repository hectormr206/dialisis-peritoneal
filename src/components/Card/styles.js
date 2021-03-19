import styled from 'styled-components'

export const CardComponent = styled.div`
  margin: 0.6rem;
  padding: 0.6rem;
  /* height: calc(100% - 1.8rem); */
  border-radius: 0.2rem;
  font-size: 0.9rem;
  font-weight: 300;
  background: var(--body-card);
  border: 1px solid var(--color-secondary);

  ul {
    padding-inline-start: 1rem;
  }

  ul li {
    font-size: 0.9rem;
  }
  
  ul li input {
    height: 1.6rem;
    width: 1.6rem;
  }

  ul li span {
    margin-right: 0.4rem;
    color: #3ea6ff;
    font-size: 0.9rem;
    font-weight: 500;
  }

  ul li strong {
    color: var(--color-actived);
  }
`
