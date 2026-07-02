import styled from 'styled-components'

export const List = styled.ul`
  list-style: none;
  margin: var(--spacing-md) 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`

export const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-sm);
`

export const ItemIcon = styled.span`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  color: var(--color-caution);
  font-size: var(--font-size-lg);
  line-height: 1.6;
`

export const ItemText = styled.span`
  color: var(--color-primary);
  font-size: var(--font-size-base);
  line-height: 1.6;
`
