import styled from 'styled-components'

export const TopicHeader = styled.header`
  margin-bottom: var(--spacing-lg);

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
  margin-bottom: var(--spacing-xl);
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
