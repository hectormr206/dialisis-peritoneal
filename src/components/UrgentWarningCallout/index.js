import React from 'react'
import {
  CalloutBox,
  CalloutHeader,
  CalloutIcon,
  CalloutLabel,
  CalloutBody
} from './styles'

const LEVELS = {
  urgent: { label: 'Urgente', icon: '⚠' },
  caution: { label: 'Precaución', icon: '⚠' }
}

// UrgentWarningCallout: safety-critical callout for content like peritonitis
// warning signs or "call your clinic now" guidance — R4.4. Distinguishable
// without relying on color alone: a visible icon + text label ("⚠ Urgente")
// always accompanies the color treatment, and the icon is `aria-hidden`
// since the visible text label already carries the meaning for assistive
// tech. `level` maps to the content schema's `step.warning.level` field
// ('urgent' | 'caution', design section 1) so step and topic content can
// reuse this one component for both severities instead of two near-copies.
export const UrgentWarningCallout = ({ level = 'urgent', children }) => {
  const config = LEVELS[level] || LEVELS.urgent

  return (
    <CalloutBox role='note' $level={level}>
      <CalloutHeader>
        <CalloutIcon aria-hidden='true'>{config.icon}</CalloutIcon>
        <CalloutLabel>{config.label}</CalloutLabel>
      </CalloutHeader>
      <CalloutBody>{children}</CalloutBody>
    </CalloutBox>
  )
}
