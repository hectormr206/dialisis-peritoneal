import React, { useState } from "react";
import { VideoContent, VideoComponent } from "./styles.js";

// prefers-reduced-motion primitive (R6.4): when the user's system/browser
// signals reduced motion, autoplay/loop is disabled and the poster image is
// shown instead — the browser's native `controls` (always present) provide
// the explicit play affordance. jsdom does not implement matchMedia by
// default; test/setupTests.js adds a mock so this branch is testable.
const prefersReducedMotion = () => {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return false;
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

export const Video = ({ src, poster, title = "Video instructivo" }) => {
  const [reducedMotion] = useState(prefersReducedMotion);

  return (
    <VideoContent>
      <VideoComponent
        src={src}
        poster={poster}
        autoPlay={!reducedMotion}
        loop={!reducedMotion}
        muted
        playsInline
        controls
        aria-label={title}
      />
    </VideoContent>
  );
};
