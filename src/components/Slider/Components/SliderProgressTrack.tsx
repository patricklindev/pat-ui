import React, { ReactNode } from 'react';

interface SliderProgressTrackProps {
  color?: string;
  xPos: number;
  xPos2?: number;
  disabled?: boolean;
}

const SliderProgressTrack = ({
  color,
  xPos,
  xPos2,
  disabled,
}: SliderProgressTrackProps) => {
  const styles = {
    width: xPos2 ? `${xPos2 - xPos}%` : `${xPos + 1}%`,
    left: xPos2 ? `${xPos + 1}%` : 0,
    background: disabled ? 'gray' : color,
  };

  return (
    <div
      className={disabled ? 'slider-progress--disabled' : 'slider-progress'}
      style={styles}
      data-testid="slider-progress-track-element"
    ></div>
  );
};

export default SliderProgressTrack;
