import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { fadeIn } from '../../styles/animation'

export const Nav = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: var(--spacing-xs);
  justify-content: space-between;
  width: 100%;
  /* min-height (no height) — con etiquetas de texto visibles (R4.2) el
     contenido puede envolver a 2 líneas en pantallas angostas; usar una
     altura fija recortaría el texto. min-height respeta el piso del token
     y crece si el contenido lo necesita — R6.3. */
  min-height: var(--footer-height);
  border-top: 1px solid var(--border-color);
  background-color: var(--body-footer);
  backdrop-filter: blur(10px);
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  /* Mejoras para accesibilidad */
  &::before {
    content: "Navegación principal";
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--color-primary);
    color: var(--body-background);
    padding: 4px 8px;
    border-radius: 4px;
    font-size: var(--font-size-sm);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease;
  }

  &:focus-within::before {
    opacity: 1;
  }

  /* Responsive para pantallas grandes */
  @media (min-width: 1024px) {
    max-width: var(--max-width-container);
    left: 50%;
    transform: translateX(-50%);
    border-radius: var(--border-radius) var(--border-radius) 0 0;
  }
`

export const NavLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* Los 4 grupos se reparten el ancho de forma pareja y nunca se recortan
     ni se salen del contenedor, ni siquiera en 360px de ancho — R4.2. */
  flex: 1 1 0;
  min-width: 0;
  max-width: 25%;
  padding: var(--spacing-sm);
  min-height: 48px; /* Área de toque mínima accesible */
  color: var(--color-secondary);
  text-decoration: none;
  border-radius: var(--border-radius);
  transition: all 0.2s ease;
  position: relative;

  /* Estados de interacción mejorados */
  &:hover {
    background: rgba(59, 130, 246, 0.1);
    color: var(--color-accent);
    transform: translateY(-2px);
  }

  &:focus {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
    background: rgba(59, 130, 246, 0.1);
  }

  /* Estado activo con mejor contraste - coincidencia por prefijo, no exacta */
  &.active {
    color: var(--color-actived);
    /* rgb(4, 120, 87) = #047857, el nuevo valor de --color-actived (antes
       rgba(5, 150, 105, 0.1) quedó desalineado tras oscurecer el token) */
    background: rgba(4, 120, 87, 0.1);
    font-weight: 600;

    &::after {
      content: "";
      position: absolute;
      bottom: 2px;
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 4px;
      background: var(--color-actived);
      border-radius: 50%;
      ${fadeIn({ time: '0.3s' })};
    }
  }

  /* Iconos con mejor espaciado */
  svg {
    margin-bottom: 2px;
    transition: transform 0.2s ease;
    flex-shrink: 0;
  }

  &:hover svg,
  &:focus svg {
    transform: scale(1.1);
  }

  /* Responsive para pantallas pequeñas */
  @media (max-width: 480px) {
    padding: var(--spacing-xs);
    min-height: 44px;

    svg {
      width: 22px !important;
      height: 22px !important;
    }
  }

  /* Para tablets y pantallas medianas */
  @media (min-width: 768px) {
    padding: var(--spacing-md);

    svg {
      width: 28px !important;
      height: 28px !important;
    }
  }

  /* Reducir animaciones para usuarios con preferencias de movimiento reducido */
  @media (prefers-reduced-motion: reduce) {
    transition: color 0.1s ease;

    &:hover {
      transform: none;
    }

    svg {
      transition: none;
    }

    &:hover svg,
    &:focus svg {
      transform: none;
    }
  }
`

export const NavLabel = styled.span`
  /* Etiqueta corta y visible bajo el ícono (antes sr-only) — navegación
     por ícono + palabra para usuarios de baja alfabetización — R4.2. */
  display: block;
  font-size: clamp(9px, 2.4vw, 11px);
  line-height: 1.15;
  text-align: center;
  width: 100%;
  overflow-wrap: break-word;
  hyphens: auto;
  color: inherit;
`
