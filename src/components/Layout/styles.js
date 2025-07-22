import styled from "styled-components";

export const Content = styled.main`
  min-height: calc(100vh - var(--header-height) - var(--footer-height));
  overflow-y: auto;
  overflow-x: hidden;
  padding: var(--spacing-sm) 0;
  margin: 0 auto;
  width: 100%;
  max-width: 100vw;

  /* Scroll suave en webkit */
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;

  /* Focus outline para navegación por teclado */
  &:focus {
    outline: none;
  }

  /* Container interno para contenido */
  & > * {
    max-width: var(--max-width-container);
    margin-left: auto;
    margin-right: auto;
  }

  /* Espaciado responsive */
  @media (max-width: 480px) {
    padding: var(--spacing-xs) var(--spacing-xs);
    min-height: calc(100vh - var(--header-height) - var(--footer-height));

    & > * {
      max-width: 100%;
      margin-left: 0;
      margin-right: 0;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    padding: var(--spacing-sm) var(--spacing-sm);
  }

  @media (min-width: 769px) {
    padding: var(--spacing-md) var(--spacing-lg);
  }

  @media (min-width: 1024px) {
    padding: var(--spacing-lg) var(--spacing-xl);
  }
`;

export const Title = styled.h1`
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-primary);
  margin: 0;
  padding: var(--spacing-sm) var(--spacing-md);
  text-align: center;
  line-height: 1.3;

  /* Focus para navegación por teclado */
  &:focus {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }

  /* Responsive typography */
  @media (max-width: 480px) {
    font-size: var(--font-size-lg);
    padding: var(--spacing-sm);
  }

  @media (min-width: 768px) {
    font-size: var(--font-size-2xl);
  }

  /* Efectos de texto para mejor legibilidad */
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  /* Modo oscuro */
  @media (prefers-color-scheme: dark) {
    color: var(--color-primary);
    text-shadow: 0 1px 2px rgba(255, 255, 255, 0.1);
  }
`;
