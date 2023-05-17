import React, { useState, ChangeEvent } from 'react';
import { classNames } from '../../utils/classNames';

export type SliderSize = 'sm' | 'md';
export type ButtonType = 'primary' | 'secondary';

export const Slider = (props: any) => {
  const { sliderSize, sliderType, defaultValue, className, disabled, ...rest } = props;
  const [value, setValue] = useState(defaultValue);
  let styleClasses = classNames('slider', {
    [`slider-${sliderType}`]: true,
    [`slider-${sliderSize}`]: !!sliderSize,
    disabled: disabled,
  })

  let styleValueClasses = classNames('slider_value', {
    [`slider_value-${sliderType}`]: true,
    [`slider_value-${sliderSize}`]: !!sliderSize,
    disabled: disabled,
  })

  if (className) {
    styleClasses += ' ' + className;
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <span className='slider_container'>
      <span className={styleValueClasses} style={{width: `${value}%`, left: '0%'}}></span>
      <input type="range" min="1" max="100" value={value} className={styleClasses} onChange={changeHandler} disabled={disabled} />
    </span>
  )
}

Slider.defaultProps = {
  sliderSize: 'md',
  sliderType: 'primary',
  defaultValue: 50
};

export default Slider;