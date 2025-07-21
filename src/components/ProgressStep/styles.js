import styled from "styled-components";

export const ProgressContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  padding-bottom: 100px; /* Espacio para el botón fijo */
`;

export const StepHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md) var(--spacing-lg);
  background: var(--body-card);
  border-radius: 0 0 var(--border-radius) var(--border-radius);
  box-shadow: var(--shadow-medium);
  position: sticky;
  top: 0;
  z-index: 100;
  margin-bottom: var(--spacing-lg); /* Espacio entre header y tarjeta */

  @media (max-width: 480px) {
    flex-direction: column;
    gap: var(--spacing-sm);
    padding: var(--spacing-sm) var(--spacing-md);
    margin-bottom: var(--spacing-md);
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  gap: var(--spacing-sm);

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;

export const StepTitle = styled.h2`
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);

  @media (max-width: 480px) {
    font-size: var(--font-size-base);
    text-align: center;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background: var(--color-secondary);
  border-radius: 3px;
  overflow: hidden;
  margin: var(--spacing-sm) 0;

  @media (max-width: 480px) {
    height: 4px;
  }
`;

export const ProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, var(--color-accent), var(--color-actived));
  border-radius: 3px;
  width: ${(props) => props.percentage}%;
  transition: width 0.5s ease;
`;

export const StepCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-lg);
  padding: var(--spacing-lg);
  margin: 0;
  background: var(--body-card);
  border-radius: 0;
  box-shadow: none;
  border: none;

  /* Sin altura fija - se ajusta al contenido */
  width: 100%;

  border-left: 4px solid
    ${(props) =>
      props.isCompleted
        ? "var(--color-actived)"
        : props.isActive
        ? "var(--color-accent)"
        : "var(--color-secondary)"};

  transition: all 0.3s ease;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-md);
    padding: var(--spacing-md);
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: var(--spacing-sm);
    gap: var(--spacing-sm);
  }
`;

export const StepNumber = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: var(--font-size-lg);
  flex-shrink: 0;

  background: ${(props) =>
    props.isCompleted
      ? "var(--color-actived)"
      : props.isActive
      ? "var(--color-accent)"
      : "var(--color-secondary)"};

  color: white;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-medium);

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    font-size: var(--font-size-base);
  }
`;

export const StepContent = styled.div`
  flex: 1;
  max-width: 700px;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: var(--font-size-xl);
    font-weight: 700;
    color: var(--color-primary);
    margin-bottom: var(--spacing-sm);
    line-height: 1.2;
  }

  p {
    color: var(--color-secondary);
    margin-bottom: var(--spacing-sm);
    line-height: 1.5;
    font-size: var(--font-size-base);
  }

  /* Estilos para el contenido del paso */
  div {
    margin: var(--spacing-sm) 0;

    h4 {
      font-size: var(--font-size-base);
      font-weight: 600;
      color: var(--color-primary);
      margin: var(--spacing-sm) 0 var(--spacing-xs) 0;
    }

    ul {
      list-style-type: none;
      padding: 0;
      margin: var(--spacing-xs) 0;

      li {
        padding: var(--spacing-xs) 0;
        font-size: var(--font-size-sm);
        line-height: 1.4;

        &:before {
          content: "•";
          color: var(--color-accent);
          font-weight: bold;
          display: inline-block;
          width: 1em;
          margin-left: var(--spacing-sm);
        }
      }
    }

    strong {
      color: var(--color-accent);
      font-weight: 600;
    }
  }

  @media (max-width: 768px) {
    text-align: center;

    h3 {
      font-size: var(--font-size-lg);
    }

    p {
      font-size: var(--font-size-sm);
    }
  }

  @media (max-width: 480px) {
    h3 {
      font-size: var(--font-size-base);
      margin-bottom: var(--spacing-xs);
    }

    p {
      font-size: var(--font-size-xs);
      margin-bottom: var(--spacing-xs);
    }

    div {
      margin: var(--spacing-xs) 0;
    }
  }
`;

export const StepActions = styled.div`
  position: fixed;
  bottom: 70px; /* Espacio para la navegación */
  left: 0;
  right: 0;
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  padding: var(--spacing-md);
  background: #1e293b;
  border-top: 2px solid #3b82f6;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.5);
  z-index: 100;

  @media (max-width: 768px) {
    bottom: 80px; /* Más espacio en móvil */
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-sm);
    padding: var(--spacing-sm);
  }

  @media (max-width: 480px) {
    bottom: 75px;
    padding: var(--spacing-sm);
  }
`;

const ButtonBase = styled.button`
  border: none;
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--border-radius);
  font-weight: 600;
  font-size: var(--font-size-base);
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 50px;
  min-width: 180px;
  box-shadow: var(--shadow-medium);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-large);
  }

  &:focus {
    outline: 3px solid transparent;
    outline-offset: 2px;
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: auto;
    padding: var(--spacing-md);
  }

  @media (max-width: 480px) {
    padding: var(--spacing-sm);
    font-size: var(--font-size-sm);
    min-height: 44px;
  }
`;

export const CompleteButton = styled(ButtonBase)`
  background: var(--color-actived);
  color: white;

  &:hover {
    background: var(--color-success);
  }

  &:focus {
    outline-color: var(--color-actived);
  }
`;

export const NextButton = styled(ButtonBase)`
  background: var(--color-accent);
  color: white;

  &:hover {
    background: var(--color-primary);
  }

  &:focus {
    outline-color: var(--color-accent);
  }
`;

export const ResetButton = styled.button`
  background: var(--color-warning);
  color: white;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  font-size: var(--font-size-sm);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: var(--shadow-light);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #b91c1c;
    transform: scale(1.1);
    box-shadow: var(--shadow-medium);
  }

  &:focus {
    outline: 2px solid var(--color-warning);
    outline-offset: 2px;
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 480px) {
    width: 28px;
    height: 28px;
    font-size: var(--font-size-xs);
  }
`;

/* Estilos del Modal */
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(2px);
`;

export const ConfirmModal = styled.div`
  background: var(--body-card);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-large);
  padding: var(--spacing-xl);
  margin: var(--spacing-md);
  max-width: 400px;
  width: 100%;

  @media (max-width: 480px) {
    padding: var(--spacing-lg);
    margin: var(--spacing-sm);
  }
`;

export const ModalContent = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-lg);

  h3 {
    font-size: var(--font-size-lg);
    font-weight: 700;
    color: var(--color-warning);
    margin-bottom: var(--spacing-md);
  }

  p {
    color: var(--color-secondary);
    margin-bottom: var(--spacing-sm);
    line-height: 1.6;
  }

  strong {
    color: var(--color-warning);
  }
`;

export const ModalButtons = styled.div`
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
`;

export const ConfirmButton = styled.button`
  background: var(--color-warning);
  color: white;
  border: none;
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--border-radius);
  font-weight: 600;
  font-size: var(--font-size-base);
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 44px;

  &:hover {
    background: #b91c1c;
    transform: translateY(-1px);
  }

  &:focus {
    outline: 2px solid var(--color-warning);
    outline-offset: 2px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const CancelButton = styled.button`
  background: var(--color-secondary);
  color: white;
  border: none;
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--border-radius);
  font-weight: 600;
  font-size: var(--font-size-base);
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 44px;

  &:hover {
    background: var(--color-primary);
    transform: translateY(-1px);
  }

  &:focus {
    outline: 2px solid var(--color-secondary);
    outline-offset: 2px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;
