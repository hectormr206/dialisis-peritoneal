import styled from 'styled-components'

export const TermWrapper = styled.span`
  position: relative;
  display: inline-block;
`

export const TermTrigger = styled.button`
  display: inline-flex;
  align-items: center;
  min-height: 48px; /* Área de toque accesible — subida de 44 a 48px */
  min-width: 48px;
  padding: 0 var(--spacing-xs);
  /* #1d4ed8 fijo (no var(--color-accent)): texto sobre el fondo de la
     página con var(--color-accent) mide 3.52-3.68:1 y falla WCAG AA;
     con #1d4ed8 mide 6.41-6.70:1 y cumple AA (mínimo 4.5:1) — mismo
     patrón que el resto de la app. */
  color: #1d4ed8;
  font-weight: 600;
  text-decoration: underline dotted;
  border-radius: var(--border-radius);

  &:hover,
  &:focus {
    text-decoration-style: solid;
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }
`

export const TermPanel = styled.span`
  display: block;
  position: absolute;
  z-index: 20;
  top: 100%;
  left: 0;
  margin-top: var(--spacing-xs);
  min-width: 240px;
  max-width: min(320px, 90vw);
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--body-card);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-medium);
`

export const TermPanelText = styled.span`
  display: block;
  padding-right: var(--spacing-xl);
  font-size: var(--font-size-sm);
  color: var(--color-primary);
  line-height: 1.4;
`

export const TermPanelDismiss = styled.button`
  position: absolute;
  top: var(--spacing-xs);
  right: var(--spacing-xs);
  min-height: 48px; /* Área de toque accesible — subida de 44 a 48px */
  min-width: 48px;
  border-radius: 50%;
  color: var(--color-secondary);

  &:hover {
    color: var(--color-primary);
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }
`
