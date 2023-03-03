import React, { useState, useRef, useEffect } from 'react';
import SliderThumb from './Components/SliderThumb';
import SliderTrack from './Components/SliderTrack';
import SliderProgressTrack from './Components/SliderProgressTrack';
import SliderScale from './Components/SliderScale';

export interface SliderProps {
  size?: string;
  initialValue?: number;
  min?: number;
  max?: number;
  step?: number;
  marks?: number[] | boolean;
  color?: string;
  range?: boolean;
  disabled?: boolean;
  onChange?: Function;
}

const Slider = ({
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
        <SliderTrack size={size} data-testid="slider-track-element">
          <SliderProgressTrack
            xPos={xPos}
            xPos2={xPos2}
            trackWidth={trackWidth}
            color={color}
            disabled={disabled}
            data-testid="slider-progress-track-element"
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
            data-testid="slider-thumb-element-1"
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
            data-testid="slider-thumb-element-2"
          />
        </SliderTrack>
      ) : (
        <SliderTrack size={size} data-testid="slider-track-element">
          <SliderProgressTrack
            xPos={xPos}
            trackWidth={trackWidth}
            color={color}
            disabled={disabled}
            data-testid="slider-progress-track-element"
          />
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
            data-testid="slider-thumb-element1"
          />
        </SliderTrack>
      )}
      {marks && (
        <SliderScale
          trackWidth={trackWidth}
          min={min}
          max={max}
          markValues={marks}
          data-testid="slider-scale-element"
        />
      )}
    </div>
  );
};

export default Slider;
