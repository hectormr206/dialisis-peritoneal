import React, { useId, useRef, useState } from 'react'
import { glossary } from '../../content/glossary'
import {
  TermWrapper,
  TermTrigger,
  TermPanel,
  TermPanelText,
  TermPanelDismiss
} from './styles'

// TermTooltip: tap-to-expand glossary disclosure primitive (R4.3, design
// section 1/3 "Glossary UX" decision). A hover-only tooltip fails touch
// input, low-literacy users, and screen readers, so the definition is
// exposed through a real <button> + a conditionally-rendered panel instead
// of CSS :hover — `aria-expanded`/`aria-controls` on the trigger give
// assistive tech the same open/closed state a sighted mouse user gets
// visually, and the panel only exists in the DOM while open (an accessible
// disclosure pattern, not `display: none`).
//
// Dismissible via 3 equivalent paths: activating the trigger again, the
// explicit dismiss button inside the panel, or Escape — all 3 return focus
// to the trigger so keyboard users don't lose their place.
export const TermTooltip = ({ termKey, children }) => {
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const triggerRef = useRef(null)

  const entry = glossary[termKey]

  if (!entry) {
    throw new Error(`[TermTooltip] unknown glossary termKey "${termKey}"`)
  }

  const toggle = () => setOpen((value) => !value)

  const close = () => {
    setOpen(false)
    triggerRef.current?.focus()
  }

  // Attached on the wrapper (not the panel) so Escape closes the tooltip
  // regardless of which descendant currently has focus (trigger or the
  // dismiss button) — a keydown handler on the panel alone would miss the
  // case where focus is still on the trigger right after opening it.
  const handleKeyDown = (event) => {
    if (open && event.key === 'Escape') {
      close()
    }
  }

  return (
    <TermWrapper onKeyDown={handleKeyDown}>
      <TermTrigger
        type='button'
        ref={triggerRef}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={toggle}
      >
        {children ?? entry.term}
      </TermTrigger>
      {open && (
        <TermPanel id={panelId} role='note'>
          <TermPanelText>{entry.plainDefinition}</TermPanelText>
          <TermPanelDismiss
            type='button'
            onClick={close}
            aria-label={`Cerrar definición de ${entry.term}`}
          >
            ✕
          </TermPanelDismiss>
        </TermPanel>
      )}
    </TermWrapper>
  )
}
