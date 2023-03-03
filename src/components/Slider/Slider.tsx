import React, { FC, useState, useRef, useEffect } from 'react';
import SliderThumb from './Components/SliderThumb';
import SliderTrack from './Components/SliderTrack';
import SliderProgressTrack from './Components/SliderProgressTrack';
import SliderScale from './Components/SliderScale';

export interface SliderProps {
  /** set size */
  size?: string;
  /** set initial value of slider */
  initialValue?: number;
  /** set min value of slider */
  min?: number;
  /** set max value of slider */
  max?: number;
  /** TODO: change step value of slider as you scroll */
  step?: number;
  /** set marks, provide boolean for default marks or provide array for custom marks */
  marks?: number[] | boolean;
  /** set color */
  color?: string;
  /** set type of slider range/default */
  range?: boolean;
  /** set slider to be disabled */
  disabled?: boolean;
  /** callback function which provides current value(s) of slider */
  onChange?: Function;
}

const Slider: FC<SliderProps> = ({
  size,
  initialValue = 0,
  min = 0,
  max = 100,
  step,
  marks,
  color = 'blue',
  range,
  disabled,
  onChange,
}: SliderProps) => {
  const [trackWidth, setTrackWidth] = useState(0);
  const initialXPos = ((initialValue - min) / (max - min)) * 100;
  const [xPos, setXPos] = useState(initialXPos);
  const [xPos2, setXPos2] = useState(
    initialXPos + 20 > 100 ? 100 : initialXPos + 20
  );

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTrackWidth(containerRef.current!.getBoundingClientRect().width);
  }, []);

  useEffect(() => {
    if (onChange) {
      const xPosVal = Math.round((xPos * (max - min)) / 100 + min);
      if (range) {
        const xPos2Val = Math.round((xPos2 * (max - min)) / 100 + min);
        onChange({ leftVal: xPosVal, rightVal: xPos2Val });
      } else {
        onChange(xPosVal);
      }
    }
  }, [xPos, xPos2]);

  return (
    <div
      className="slider-container"
      ref={containerRef}
      data-testid="slider-container-element"
    >
      {range ? (
        <SliderTrack size={size}>
          <SliderProgressTrack
            xPos={xPos}
            xPos2={xPos2}
            color={color}
            disabled={disabled}
          />
          <SliderThumb
            xPos={xPos}
            xPosRight={xPos2}
            setXPos={setXPos}
            trackWidth={trackWidth}
            size={size}
            min={min}
            max={max}
            initialValue={initialValue}
            color={color}
            disabled={disabled}
          />
          <SliderThumb
            xPos={xPos2}
            xPosLeft={xPos}
            setXPos={setXPos2}
            trackWidth={trackWidth}
            size={size}
            min={min}
            max={max}
            initialValue={initialValue}
            color={color}
            disabled={disabled}
          />
        </SliderTrack>
      ) : (
        <SliderTrack size={size}>
          <SliderProgressTrack xPos={xPos} color={color} disabled={disabled} />
          <SliderThumb
            xPos={xPos}
            setXPos={setXPos}
            trackWidth={trackWidth}
            size={size}
            min={min}
            max={max}
            initialValue={initialValue}
            color={color}
            disabled={disabled}
          />
        </SliderTrack>
      )}
      {marks && (
        <SliderScale
          trackWidth={trackWidth}
          min={min}
          max={max}
          markValues={marks}
        />
      )}
    </div>
  );
};

export default Slider;
