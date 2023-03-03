import React, { ReactNode } from "react";

interface SliderTrackProps {
  size?: string;
  trackColor?: string;
  children?: ReactNode;
}

const SliderTrack = ({ size, trackColor, children }: SliderTrackProps) => {
  return (
    <div
      className={size === "small" ? "slider-track--small" : "slider-track"}
      style={{ background: trackColor }}
    >
      {children}
    </div>
  );
};

export default SliderTrack;
