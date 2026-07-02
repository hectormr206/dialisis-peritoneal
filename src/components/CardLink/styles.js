import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CardLinkGrid = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-md);
  margin: 0;
  padding: 0;
  width: 100%;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const CardLinkElement = styled(Link)`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  min-height: 44px; /* Área de toque mínima accesible — R6.3 */
  height: 100%;
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--border-radius);
  background: var(--body-card);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-light);
  color: var(--color-primary);
  text-decoration: none;
  transition: box-shadow 0.2s ease, transform 0.2s ease;

  &:hover,
  &:focus {
    box-shadow: var(--shadow-medium);
    transform: translateY(-1px);
    text-decoration: none;
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`

export const CardLinkIcon = styled.span`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--color-accent);
`

export const CardLinkBody = styled.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export const CardLinkTitle = styled.strong`
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-primary);
`

export const CardLinkDescription = styled.span`
  font-size: var(--font-size-sm);
  color: var(--color-secondary);
  line-height: 1.4;
`
