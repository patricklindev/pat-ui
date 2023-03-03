import React, { ReactNode } from 'react';

interface SliderProgressTrackProps {
  size?: string;
  trackWidth: number;
  color?: string;
  xPos: number;
  xPos2?: number;
  disabled?: boolean;
}

const SliderProgressTrack = ({
  size,
  trackWidth,
  color,
  xPos,
  xPos2,
  disabled,
}: SliderProgressTrackProps) => {
  //These are necessary since in xPos and xPos2, we offset the value of the position by the width of the
  //thumb to render properly, however since we subtract xpos from xpos2, this term is cancelled out so
  //we need to account for it again here
  const thumbOffSetWidth = 2500 / trackWidth / 2;
  const thumbOffSetLeft = 2500 / trackWidth;
  return (
    <div
      className={disabled ? 'slider-progress--disabled' : 'slider-progress'}
      style={
        xPos2
          ? {
              width: `${xPos2 - xPos + thumbOffSetWidth}%`,
              left: `${xPos + thumbOffSetLeft}%`,
              background: color,
            }
          : { width: `${xPos + 1}%`, background: color }
      }
    ></div>
  );
};

export default SliderProgressTrack;
