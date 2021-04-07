import React from 'react'
import { VideoContent, VideoComponent } from './styles.js'

export const Video = ({ src, poster }) => {
  return (
    <VideoContent>
      <VideoComponent src={src} poster={poster} autoPlay loop />
    </VideoContent>
  )
}
