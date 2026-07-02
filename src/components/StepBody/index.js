import React from 'react'
import { Video } from '../Video'

// StepBody: pure render of a structured step (design section 3). Renders
// any extra JSX content first (legacy escape hatch — design decision
// "Rich step content"), then the step's primary video if present, so the
// output order matches the original inline-JSX pages (label text, then
// video). Legacy pages that embed their own <Video> inside `content` and
// don't set `media` keep working unmodified — this only adds a video when
// `media` is present.
export const StepBody = ({ step }) => (
  <>
    {step.content}
    {step.media && (
      <Video
        src={step.media.webm}
        poster={step.media.poster}
        title={step.media.label || step.title}
      />
    )}
  </>
)
