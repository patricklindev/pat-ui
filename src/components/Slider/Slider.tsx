import React, { FC, useState } from 'react';
import { classNames } from '../../utils/classNames';

export type SliderSize = 'lg' | 'md' | 'sm';
export type ThumbSize = 'lg' | 'md' | 'sm';
export type SliderOrientation = 'horizontal' | 'vertical';
export type SliderTheme =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';
export type ThumbTheme =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';

export interface ISliderProps {
  /**set slider size */
  sliderSize?: SliderSize;
  /**set thumb size */
  thumbSize?: ThumbSize;
  /**set customized slider */
  className?: string;
  /**set slider orientation */
  sliderOrientation?: SliderOrientation;
  /**set slider type */
  sliderTheme?: SliderTheme;
  /**set thumb type */
  thumbTheme?: ThumbTheme;
  /**set min slider range */
  min?: number;
  /**set max slider range */
  max?: number;
  /**set inital starting value of thumb on slider */
  startvalue?: number;
  /**set action onChange */
  onChange?: Function;
}

export type PatSliderProps = ISliderProps;

export const Slider: FC<PatSliderProps> = (props) => {
  const {min, max, className, sliderSize, thumbSize, sliderTheme, thumbTheme, sliderOrientation, onChange} = props
  const [value, setValue] = useState(props.startvalue);
  
  let styleClasses = classNames('slider', {
    [`slider-${sliderSize}`]: !!sliderSize,
    [`thumb-${thumbSize}`]: !!thumbSize,
    [`thumb-${thumbTheme}`]: true,
    [`slider-${sliderTheme}`]: true,
    [`slider-${sliderOrientation}`]: true
  });
  if (className) {
    styleClasses += ' ' + className;
  }

  let slider = (
    <input
      data-testid='slider-element'
      type="range"
      min={min}
      max={max}
      className={styleClasses}
      value={value}
      onChange={(event:React.ChangeEvent<HTMLInputElement>) => {
        setValue(+event.target.value);
        if (onChange) {
          onChange(value);
        }
      }}
    ></input>
  );

  return slider;
};

Slider.defaultProps = {
  sliderTheme: 'secondary',
  thumbTheme: 'success',
  sliderOrientation: 'horizontal',
  sliderSize: 'md',
  thumbSize: 'md',
  startvalue: 0,
  min: 0,
  max: 100,
};

export default Slider;
