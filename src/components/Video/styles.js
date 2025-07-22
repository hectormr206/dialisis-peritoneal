import styled from "styled-components";

export const VideoContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  margin: var(--spacing-md) 0;
  border-radius: var(--border-radius);
  overflow: hidden;
  background: var(--body-background);

  /* Aspect ratio para videos */
  aspect-ratio: 16 / 9;

  @media (max-width: 480px) {
    margin: var(--spacing-sm) 0;
    aspect-ratio: 4 / 3;
  }
`;

export const VideoComponent = styled.video`
  max-width: 512px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-medium);

  /* Focus para navegación por teclado */
  &:focus {
    outline: 3px solid var(--color-accent);
    outline-offset: 2px;
  }

  /* Responsive adjustments */
  @media (max-width: 480px) {
    max-width: 100%;
    border-radius: var(--spacing-xs);
  }

  @media (min-width: 768px) {
    max-width: 600px;
  }

  @media (min-width: 1024px) {
    max-width: 700px;
  }

  /* Estados de interacción */
  &:hover {
    box-shadow: var(--shadow-medium);
    transform: scale(1.02);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  /* Reducir animaciones para usuarios con preferencias de movimiento reducido */
  @media (prefers-reduced-motion: reduce) {
    &:hover {
      transform: none;
    }
  }
`;
