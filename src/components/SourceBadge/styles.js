import styled from 'styled-components'

export const Badge = styled.a`
  display: inline-flex;
  align-items: center;
  min-height: 32px;
  padding: 4px var(--spacing-sm);
  border-radius: var(--border-radius);
  background: var(--body-background);
  border: 1px solid var(--border-color);
  color: var(--color-accent);
  font-size: var(--font-size-sm);
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }
`
