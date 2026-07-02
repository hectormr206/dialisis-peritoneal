import styled from 'styled-components'

export const TopicHeader = styled.header`
  /* --space-4: separación corta y consistente entre el h1 del Layout (justo
     arriba, fuera de este componente) y el h2 propio de la página — la
     misma que Home/las páginas índice usan entre su tarjeta de intro y la
     siguiente, para que el ritmo vertical se sienta conectado en toda la
     app. */
  margin-bottom: var(--space-4);

  h2 {
    font-size: var(--font-size-2xl);
    font-weight: 700;
    color: var(--color-primary);
    margin-bottom: var(--spacing-sm);
  }
`

export const TopicIntro = styled.p`
  font-size: var(--font-size-lg);
  color: var(--color-secondary);
  line-height: 1.5;
`

export const TopicSection = styled.section`
  /* --space-6: separación más generosa entre secciones de contenido — más
     aire que TopicHeader a propósito, para diferenciar "conectado con el
     título" de "siguiente bloque de contenido". */
  margin-bottom: var(--space-6);
`

export const SectionHeading = styled.h3`
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
`

export const SectionBody = styled.div`
  font-size: var(--font-size-base);
  color: var(--color-primary);
  line-height: 1.6;

  p {
    margin-bottom: var(--spacing-sm);
  }
`
