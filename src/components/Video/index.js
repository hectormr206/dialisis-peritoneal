import React from "react";
import { VideoContent, VideoComponent } from "./styles.js";

export const Video = ({ src, poster, title = "Video instructivo" }) => {
  return (
    <VideoContent>
      <VideoComponent
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        controls
        aria-label={title}
      />
    </VideoContent>
  );
};
