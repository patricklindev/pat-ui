import React, { useState, ChangeEvent, FC } from 'react';
import { classNames } from '../../utils/classNames';
import SliderMark from './SliderMark';

export type SliderSize = 'sm' | 'md';
export type ButtonType = 'primary' | 'secondary';

export type mark = {
  label?: string,
  value: number,
}

export interface SliderProps {
  className?: string;
  sliderSize?: string;
  sliderType?: string;
  defaultValue?: number;
  disabled?: boolean;
  min?: number;
  max?: number;
  marks?: mark[]
}

export const Slider: FC<SliderProps> = ({
  className,
  sliderSize = 'md',
  sliderType = 'primary',
  defaultValue = 50,
  min = 0,
  max = 100,
  disabled,
  marks,
  ...rest
}) => {
  const [value, setValue] = useState(defaultValue);
  const markLabeled = (marks: any): boolean => {
    for (let mark of marks) {
      if (!!mark.label) {
        return true;
      }
    }
    return false;
  }

  let containerClasses = classNames('slider_container', {
    ['slider_container-labeled']: !!marks && markLabeled(marks),
  })

  let styleClasses = classNames('slider', {
    [`slider-${sliderType}`]: true,
    [`slider-${sliderSize}`]: !!sliderSize,
    disabled: !!disabled,
  })

  let styleValueClasses = classNames('slider_value', {
    [`slider_value-${sliderType}`]: true,
    [`slider_value-${sliderSize}`]: !!sliderSize,
    disabled: !!disabled,
  })

  if (className) {
    styleClasses += ' ' + className;
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(Math.round(Number(e.target.value)));
  };

  const calculatePos = (value: number, min: number, max: number) => {
    return (value - min) * 100 / (max - min);
  }

  return (
    <span className={containerClasses}>
      <span className={styleValueClasses} style={{ width: `${calculatePos(value, min, max)}%`, left: '0%' }}></span>
      {marks?.map((mark: any, index: number) => {
        return (
          <SliderMark key={mark.value + index} sliderType={sliderType} sliderSize={sliderSize} mark={mark} position={calculatePos(mark.value, min, max)} active={mark.value <= value} disabled={disabled} />
        )
      })}
      <input type="range" min={min} max={max} value={value} className={styleClasses} onChange={changeHandler} disabled={disabled} />
    </span>
  )
}

export default Slider;