import styled from 'styled-components'

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  margin: var(--spacing-md) 0;
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: var(--body-card);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--shadow-light);

  th,
  td {
    text-align: left;
    padding: var(--spacing-sm) var(--spacing-md);
    border-bottom: 1px solid var(--border-color);
    font-size: var(--font-size-base);
  }

  th {
    background: var(--body-header);
    color: var(--color-primary);
    font-weight: 700;
  }

  tbody tr:last-child td {
    border-bottom: none;
  }

  /* Reflow into stacked cards below tablet width instead of a cramped/
     horizontally-scrolling table — R5.1 "mobile-friendly". The real
     <table>/<th scope="col"> structure stays in the markup for assistive
     tech at any width; only the visual presentation of <thead> changes.
     Known trade-off (documented, not silent): setting display:block on
     table rows can make some screen readers stop announcing native table
     semantics, so each cell also renders a visible data-label prefix
     (below) as a redundant, always-visible header instead of relying
     solely on the hidden <thead> at this width. */
  @media (max-width: 480px) {
    thead {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    tbody,
    tr {
      display: block;
    }

    tr {
      margin-bottom: var(--spacing-sm);
    }

    td {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: var(--spacing-sm);

      &::before {
        content: attr(data-label);
        font-weight: 600;
        color: var(--color-secondary);
        flex-shrink: 0;
      }
    }
  }
`

export const Caption = styled.caption`
  caption-side: top;
  text-align: left;
  padding: var(--spacing-sm) var(--spacing-md);
  font-weight: 600;
  color: var(--color-primary);
`

export const ActionBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-weight: 600;
  color: ${(props) =>
    props.$action === 'er' ? 'var(--color-urgent)' : 'var(--color-actived)'};

  svg {
    flex-shrink: 0;
  }
`
