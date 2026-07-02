import styled, { css } from 'styled-components'

const levelStyles = {
  urgent: css`
    background: var(--color-urgent-bg);
    border-color: var(--color-urgent);

    strong {
      color: var(--color-urgent);
    }
  `,
  caution: css`
    background: var(--color-caution-bg);
    border-color: var(--color-caution);

    strong {
      color: var(--color-caution);
    }
  `
}

export const CalloutBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  padding: var(--spacing-md) var(--spacing-lg);
  margin: var(--spacing-md) 0;
  border: 2px solid;
  border-radius: var(--border-radius);
  ${(props) => levelStyles[props.$level] || levelStyles.urgent}
`

export const CalloutHeader = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
`

export const CalloutIcon = styled.span`
  font-size: var(--font-size-lg);
  line-height: 1;
`

export const CalloutLabel = styled.strong`
  font-size: var(--font-size-base);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.02em;
`

export const CalloutBody = styled.p`
  color: var(--color-primary);
  font-size: var(--font-size-base);
  line-height: 1.5;
  margin: 0;
`
