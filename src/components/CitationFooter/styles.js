import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  margin-top: var(--spacing-xl);
  padding: var(--spacing-lg);
  background: var(--body-card);
  border-top: 1px solid var(--border-color);
  border-radius: var(--border-radius);
`

export const FooterHeading = styled.h2`
  font-size: var(--font-size-sm);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: var(--color-secondary);
  margin-bottom: var(--spacing-sm);
`

export const SourceList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
  padding: 0;
`

export const SourceListItem = styled.li`
  list-style: none;
`

export const Disclaimer = styled.p`
  font-size: var(--font-size-sm);
  color: var(--color-secondary);
  font-style: italic;
  line-height: 1.5;
`
