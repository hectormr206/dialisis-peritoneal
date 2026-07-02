import React from 'react'
import { render } from '@testing-library/react'

import { Video } from '../src/components/Video'

const mockMatchMedia = (matches) => {
  window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
}

describe('Video — prefers-reduced-motion (R6.4)', () => {
  it('autoplays and loops by default (no reduced-motion preference)', () => {
    mockMatchMedia(false)

    const { container } = render(
      <Video src="clip.webm" poster="poster.jpg" title="Video de prueba" />
    )

    const video = container.querySelector('video')
    expect(video).toHaveAttribute('autoplay')
    expect(video).toHaveAttribute('loop')
    expect(video).toHaveAttribute('poster', 'poster.jpg')
    // Native controls always render, giving an explicit play affordance
    // regardless of the reduced-motion branch.
    expect(video).toHaveAttribute('controls')
  })

  it('disables autoplay/loop and shows the poster when prefers-reduced-motion is set', () => {
    mockMatchMedia(true)

    const { container } = render(
      <Video src="clip.webm" poster="poster.jpg" title="Video de prueba" />
    )

    const video = container.querySelector('video')
    expect(video).not.toHaveAttribute('autoplay')
    expect(video).not.toHaveAttribute('loop')
    expect(video).toHaveAttribute('poster', 'poster.jpg')
    expect(video).toHaveAttribute('controls')
  })
})
