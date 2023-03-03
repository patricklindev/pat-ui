import React, { SyntheticEvent, useEffect, useRef } from 'react';

interface SliderThumbProps {
  xPos: number;
  xPosLeft?: number;
  xPosRight?: number;
  setXPos: Function;
  trackWidth: number;
  size?: string;
  initialValue: number;
  min: number;
  max: number;
  color?: string;
  onChange?: Function;
  disabled?: boolean;
}

const SliderThumb = ({
  xPos,
  xPosLeft,
  xPosRight,
  setXPos,
  trackWidth,
  size,
  initialValue,
  min,
  max,
  color,
  onChange,
  disabled,
}: SliderThumbProps) => {
  const thumbRef = useRef<HTMLDivElement>(null);

  const getPercentage = (current: number, max: number) => (100 * current) / max;

  useEffect(() => {
    if (onChange) onChange(initialValue);
  }, []);

  const handleMouseMove = (e: MouseEvent) => {
    if (!disabled) {
      let newX = e.clientX - thumbRef.current!.offsetWidth;
      const end = trackWidth - thumbRef.current!.offsetWidth;
      const start = 0;
      if (newX < start) {
        newX = 0;
      }
      if (newX > end) {
        newX = end;
      }

      //make sure that the thumbs cannot cross each other
      var newPercentage = getPercentage(newX, end);
      newPercentage =
        xPosLeft && xPosLeft >= newPercentage ? xPosLeft : newPercentage;
      newPercentage =
        xPosRight && xPosRight <= newPercentage ? xPosRight : newPercentage;

      setXPos(newPercentage);
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener('mouseup', handleMouseUp);
    document.removeEventListener('mousemove', handleMouseMove);
  };

  const handleMouseDown = (e: SyntheticEvent) => {
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);
  };
  return (
    <div
      className={size === 'small' ? 'slider-thumb--small' : 'slider-thumb'}
      ref={thumbRef}
      onMouseDown={handleMouseDown}
      style={
        disabled
          ? { left: `${xPos}%`, background: 'gray' }
          : { left: `${xPos}%`, background: color }
      }
    ></div>
  );
};

export default SliderThumb;
