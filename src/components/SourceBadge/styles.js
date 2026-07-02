import styled from 'styled-components'

export const Badge = styled.a`
  display: inline-flex;
  align-items: center;
  min-height: 32px;
  padding: 4px var(--spacing-sm);
  border-radius: var(--border-radius);
  background: var(--body-background);
  border: 1px solid var(--border-color);
  /* #1d4ed8 fijo (no var(--color-accent)): texto sobre --body-background
     con var(--color-accent) mide solo 3.52:1 y falla WCAG AA; con
     #1d4ed8 mide 6.41:1 y cumple AA (mínimo 4.5:1) — mismo patrón que el
     resto de la app. */
  color: #1d4ed8;
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
