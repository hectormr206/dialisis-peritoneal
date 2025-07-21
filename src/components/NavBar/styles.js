import styled from 'styled-components'
import { NavLink as NavLinkRouter } from 'react-router-dom'
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
  justify-content: space-around;
  width: 100%;
  height: var(--footer-height);
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

export const NavLink = styled(NavLinkRouter)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: var(--spacing-sm);
  min-height: 48px; /* Área de toque mínima accesible */
  min-width: 48px;
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

  /* Estado activo con mejor contraste - React Router v6 */
  &.active {
    color: var(--color-actived);
    background: rgba(5, 150, 105, 0.1);
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
  }

  &:hover svg,
  &:focus svg {
    transform: scale(1.1);
  }

  /* Labels accesibles (ocultos visualmente pero disponibles para lectores de pantalla) */
  &::before {
    content: attr(aria-label);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: var(--color-primary);
    color: var(--body-background);
    padding: 4px 8px;
    border-radius: 4px;
    font-size: var(--font-size-sm);
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease;
    z-index: 1001;
  }

  &:hover::before,
  &:focus::before {
    opacity: 1;
  }

  /* Responsive para pantallas pequeñas */
  @media (max-width: 480px) {
    padding: var(--spacing-xs);
    min-height: 44px;
    min-width: 44px;

    svg {
      width: 24px !important;
      height: 24px !important;
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

  /* Modo oscuro */
  @media (prefers-color-scheme: dark) {
    &::before {
      background: var(--body-background);
      color: var(--color-primary);
    }

    &.active::after {
      background: var(--color-actived);
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
