import styled from 'styled-components'

// Same card shell language as Card (padding/border/radius/shadow tokens)
// but laid out as an icon+text row, matching CardLink's icon+body pattern —
// this is a promo card, not a generic content card, so it stays a sibling
// component instead of reusing <Card>.
export const BannerAside = styled.aside`
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-3);
  border-radius: var(--border-radius);
  background: var(--body-card);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-light);

  @media (min-width: 768px) {
    padding: var(--space-4);
  }
`

export const BannerIcon = styled.img`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: var(--border-radius);
`

export const BannerBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  min-width: 0;
`

export const BannerTitle = styled.p`
  margin: 0;
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-primary);
`

export const BannerText = styled.p`
  margin: 0;
  font-size: var(--font-size-sm);
  color: var(--color-secondary);
  line-height: 1.4;
`

// Plain numbered list (no bullets) for the iOS manual-install steps —
// role="list" restores the list semantics Safari/VoiceOver drops once
// list-style is removed, same workaround already used on Home.js's <ul>s.
export const StepsList = styled.ol`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  margin: 0;
  padding: 0;
  font-size: var(--font-size-sm);
  color: var(--color-secondary);
  line-height: 1.4;
`

export const BannerActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: var(--space-2);
`

export const InstallButton = styled.button`
  min-height: 48px;
  padding: 0 var(--space-4);
  border: 0;
  border-radius: var(--border-radius);
  /* #1d4ed8 fixed (not var(--color-accent)): white text on
     var(--color-accent) measures only 3.68:1 and fails WCAG AA; white on
     #1d4ed8 measures 6.70:1, passes AA — same fixed-color pattern already
     used by the update toast and HomeLink. */
  background: #1d4ed8;
  color: #ffffff;
  font-size: var(--font-size-base);
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #047857;
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

export const DismissButton = styled.button`
  min-height: 48px;
  padding: 0 var(--space-4);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  background: transparent;
  color: var(--color-secondary);
  font-size: var(--font-size-base);
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: var(--section-cuidados-bg, rgba(0, 0, 0, 0.04));
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }
`
