import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Mismo token de gap que Card/PageContainer usan para su padding/gap
// (--space-4 = 16px) — unifica la separación entre tarjetas en toda la app.
export const CardLinkGrid = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
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
  gap: var(--space-3);
  min-height: 48px; /* Área de toque accesible — subida de 44 a 48px */
  height: 100%;
  padding: var(--space-3) var(--space-4);
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

// Chip circular con la identidad de color de la sección (R "más color") —
// mismos tokens que Card usa para su fondo/borde/heading, ver
// GlobalStyle.js. Sin $section cae al ícono azul genérico de siempre.
const sectionChipStyles = {
  procedimientos: {
    bg: 'var(--section-procedimientos-bg)',
    color: 'var(--section-procedimientos-accent)'
  },
  cuidados: {
    bg: 'var(--section-cuidados-bg)',
    color: 'var(--section-cuidados-accent)'
  },
  comida: {
    bg: 'var(--section-comida-bg)',
    color: 'var(--section-comida-accent)'
  }
}

export const CardLinkIcon = styled.span`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: ${(props) =>
    (props.$section && sectionChipStyles[props.$section]?.color) ||
    'var(--color-accent)'};
  background: ${(props) =>
    (props.$section && sectionChipStyles[props.$section]?.bg) || 'transparent'};
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
