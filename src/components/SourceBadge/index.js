import React from 'react'
import { sources } from '../../content/sources'
import { Badge } from './styles'

// SourceBadge: inline citation marker resolving a single sourceId against
// src/content/sources.js — R5.2. Renders a visible reference (linked when a
// verified URL exists) so source attribution survives into the rendered
// page for both sighted and assistive-tech readers, not just a code
// comment.
export const SourceBadge = ({ sourceId }) => {
  const source = sources[sourceId]

  if (!source) {
    throw new Error(`[SourceBadge] unknown sourceId "${sourceId}"`)
  }

  const label = source.published ? `${source.name} (${source.published})` : source.name

  return source.url
    ? (
      <Badge as='a' href={source.url} target='_blank' rel='noreferrer'>
        {label}
      </Badge>
      )
    : (
      <Badge as='span'>{label}</Badge>
      )
}
