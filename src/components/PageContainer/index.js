import React from 'react'
import { PageContainerElement } from './styles'

// Shared centered/max-width wrapper for pages built from multiple stacked
// Cards (index pages, topic placeholders) — same layout Home already used
// inline, extracted so new pages don't duplicate it.
export const PageContainer = ({ children }) => (
  <PageContainerElement>{children}</PageContainerElement>
)
