import React, {
  ChangeEvent,
  FC,
  InputHTMLAttributes,
  MouseEvent,
  useState,
} from 'react';
import { classNames } from '../../utils/classNames';

export type SliderSize = 'sm' | 'md' | 'lg';
export type SliderColor = 'primary' | 'secondary' | 'default';
export type RangeSliderValue = number[];
export type DisplayValueLabelOptions = 'on' | 'off' | 'auto';

interface ISliderProps {
  /** set customized style */
  className?: string;
  /** set slider size */
  sliderSize?: SliderSize;
  /** set slider color */
  sliderColor?: SliderColor;
  /** enable marks or set marks */
  marks?: boolean | number[];
  /** enable discrete mode by setting step */
  step?: number;
  /** set min */
  min?: number;
  /** set max */
  max?: number;
  /** set default value */
  defaultValue?: number;
  /** enable range slider by setting positions*/
  rangePositions?: RangeSliderValue;
  /** set disabled slider */
  disabled?: boolean;
  /** enable label */
  displayValueLabel?: DisplayValueLabelOptions;
  /** set onChange */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  /** set onMouseDown*/
  onMouseDown?: (e: MouseEvent<HTMLInputElement>) => void;
  /** set onMouseUp */
  onMouseUp?: (e: MouseEvent<HTMLInputElement>) => void;
}

export type PatSliderProps = ISliderProps &
  InputHTMLAttributes<HTMLInputElement>;

const Slider: FC<PatSliderProps> = ({
  className,
  sliderSize = 'md',
  sliderColor = 'default',
  marks = false,
  min = 0,
  max = 100,
  step,
  defaultValue = (max - min) / 2,
  rangePositions = [defaultValue],
  disabled = false,
  displayValueLabel = 'off',
  onChange,
  onMouseDown,
  onMouseUp,
  ...rest
}) => {
  const [sliderValue, setSliderValue] = useState<number>(defaultValue);
  const [rangePosition, setRangePosition] = useState<number[]>(rangePositions);
  const [sliderActive, setSliderActive] = useState<boolean>(false);
  let styleClasses = classNames('slider', {
    [`slider-${sliderColor}`]: !!sliderColor,
    [`slider-${sliderSize}`]: !!sliderSize,
    'slider-disabled': !!disabled,
  });
  if (className) styleClasses += ' ' + className;

  const smallestValue = rangePosition.reduce((prev, curr) =>
    prev < curr ? prev : curr
  );
  const distancePerStep = step ? step : 10;
  const numOfSteps = Math.floor((max - min) / distancePerStep);
  const marksArray = Array.from({ length: numOfSteps }, (_, i) => i + 1);

  const getProgress = (value: number): number => {
    return Math.round((100 * value) / (max - min));
  };

  const getMarkPositionStyle = (progress: number) => {
    if (progress > 50) {
      return { right: `${100 - progress}%` };
    } else {
      return { left: `${progress}%` };
    }
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newArr = [...rangePosition];
    const newValue = +e.target.value;
    const closest = newArr.reduce((prev, curr) => {
      return Math.abs(curr - newValue) < Math.abs(prev - newValue)
        ? curr
        : prev;
    });
    setRangePosition((prev) =>
      prev.map((curVal) => (curVal === closest ? newValue : curVal))
    );
    setSliderValue(+e.target.value);
  };

  return (
    <div className={styleClasses} role={'slider-container'}>
      <div className={'slider__rail'}></div>
      {/* render multiple tracks and thumbs for range slider (rangePosition > 1) */}
      {rangePosition.map((value, index) => (
        <div
          key={index}
          className={`slider__track ${
            // leftmost track in a range slider should be same color as rail
            rangePosition.length > 1 && value === smallestValue
              ? 'slider__untrack'
              : ''
          }`}
          style={{
            width: `${getProgress(value)}%`,
          }}
        >
          <div className={'slider__thumb'}></div>
          {/* render bubble */}
          {((displayValueLabel === 'auto' && sliderActive) ||
            displayValueLabel === 'on') && (
            <div className={'slider__bubble'}>
              <span role={'slider-bubble'}>{value}</span>
            </div>
          )}
        </div>
      ))}
      <input
        role={'slider-input'}
        type={'range'}
        step={marks === true ? distancePerStep : step}
        min={min}
        max={max}
        value={sliderValue}
        disabled={disabled}
        onChange={(e) => {
          handleOnChange(e);
          onChange && onChange(e);
        }}
        onMouseDown={(e) => {
          setSliderActive(true);
          onMouseDown && onMouseDown(e);
        }}
        onMouseUp={(e) => {
          setSliderActive(false);
          onMouseUp && onMouseUp(e);
        }}
        {...rest}
      ></input>

      {/* default marks or marks with steps */}
      {marks && marks === true && (
        <div className={'slider__marks'}>
          {marksArray.map((i) => {
            return (
              <span
                key={i}
                role={'slider-marks'}
                style={getMarkPositionStyle(distancePerStep * i)}
              >
                {'|'}
              </span>
            );
          })}
        </div>
      )}
      {/* custom marks */}
      {marks && marks !== true && (
        <div className={'slider__marks'}>
          {marks.map((pos) => {
            return (
              <span
                key={pos}
                role={'slider-marks'}
                style={getMarkPositionStyle(getProgress(pos))}
              >
                {'|'}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Slider;
