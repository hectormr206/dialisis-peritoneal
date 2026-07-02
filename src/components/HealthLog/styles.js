import styled from 'styled-components'

export const IntroText = styled.p`
  color: var(--color-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-sm);
`

export const PrivacyNote = styled.p`
  color: var(--color-secondary);
  font-size: var(--font-size-sm);
  line-height: 1.5;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  margin: var(--spacing-md) 0;
`

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
`

export const FieldLabel = styled.label`
  font-weight: 600;
  color: var(--color-primary);
  font-size: var(--font-size-base);
`

export const NumberInput = styled.input`
  min-height: 48px; /* Área de toque grande — R6.3 */
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  font-size: var(--font-size-lg);
  background: var(--body-background);
  color: var(--color-primary);
  max-width: 220px;
`

export const TextInput = styled.input`
  min-height: 48px; /* Área de toque grande — R6.3 */
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  font-size: var(--font-size-base);
  background: var(--body-background);
  color: var(--color-primary);
`

export const ErrorText = styled.p`
  color: var(--color-warning);
  font-size: var(--font-size-sm);
`

export const SaveButton = styled.button`
  align-self: flex-start;
  min-height: 48px;
  padding: var(--spacing-sm) var(--spacing-xl);
  border-radius: var(--border-radius);
  /* #1d4ed8 (no var(--color-accent)) porque texto blanco sobre
     var(--color-accent) mide solo 3.68:1 y falla WCAG AA. Texto blanco
     sobre #1d4ed8 = 6.70:1, cumple AA (mínimo 4.5:1) — mismo patrón que
     HomeLink en NoMatch.js y el skip-link. */
  background: #1d4ed8;
  color: white;
  font-weight: 600;
  font-size: var(--font-size-base);

  &:hover {
    /* #047857 fijo (no var(--color-actived)) — mismo patrón que
       CompleteButton/HomeLink: texto blanco sobre #047857 = 5.48:1,
       cumple AA. */
    background: #047857;
  }

  @media (max-width: 480px) {
    align-self: stretch;
  }
`

export const StatusMessage = styled.p`
  color: var(--color-actived);
  font-weight: 600;
`

export const HistorySection = styled.section`
  margin-top: var(--spacing-lg);
`

export const HistoryList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-sm);
`

export const HistoryItem = styled.li`
  padding: var(--spacing-md);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  background: var(--body-background);
`

export const HistoryDate = styled.p`
  font-weight: 600;
  color: var(--color-primary);
`

export const HistoryWeight = styled.p`
  color: var(--color-primary);
  font-size: var(--font-size-lg);
`

export const HistoryNotes = styled.p`
  color: var(--color-secondary);
  font-size: var(--font-size-sm);
  margin-top: var(--spacing-xs);
`

export const DeltaRow = styled.p`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  color: var(--color-secondary);
  font-size: var(--font-size-sm);
  margin-top: var(--spacing-xs);
`

export const DeltaIcon = styled.span`
  display: inline-flex;
  color: var(--color-secondary);
`

export const EmptyState = styled.p`
  color: var(--color-secondary);
  line-height: 1.6;
  padding: var(--spacing-md) 0;
`

export const DeleteAllButton = styled.button`
  min-height: 48px; /* Área de toque accesible — subida de 44 a 48px */
  margin-top: var(--spacing-lg);
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--border-radius);
  color: var(--color-warning);
  border: 1px solid var(--color-warning);
  font-weight: 600;

  &:hover {
    background: var(--color-warning);
    color: white;
  }
`

/* Delete-all confirmation modal — same visual pattern as ProgressStep's
   reset-confirmation modal (src/components/ProgressStep/styles.js), scoped
   locally here since the two aren't otherwise related. */
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
`

export const ModalBox = styled.div`
  background: var(--body-card);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-medium);
  padding: var(--spacing-xl);
  margin: var(--spacing-md);
  max-width: 400px;
  width: 100%;
  text-align: center;

  h3 {
    color: var(--color-warning);
    margin-bottom: var(--spacing-md);
  }

  p {
    color: var(--color-secondary);
    margin-bottom: var(--spacing-sm);
    line-height: 1.6;
  }
`

export const ModalButtons = styled.div`
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  margin-top: var(--spacing-md);

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

export const ConfirmDeleteButton = styled.button`
  min-height: 48px; /* Área de toque accesible — subida de 44 a 48px */
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--border-radius);
  background: var(--color-warning);
  color: white;
  font-weight: 600;

  &:hover {
    background: #b91c1c;
  }
`

export const CancelDeleteButton = styled.button`
  min-height: 48px; /* Área de toque accesible — subida de 44 a 48px */
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--border-radius);
  background: var(--color-secondary);
  color: white;
  font-weight: 600;

  &:hover {
    background: var(--color-primary);
  }
`
