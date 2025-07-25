import React from 'react'

export const Loading = props => (
  <svg class='circular' viewBox='25 25 50 50' {...props}>
    <circle class='path' cx='50' cy='50' r='20' fill='none' stroke-width='2' stroke-miterlimit='10' />
  </svg>
)
