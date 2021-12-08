import React, { FC, ReactNode } from 'react';
import { classNames } from '../../utils/classNames';

export type SliderSize = 'lg' | 'sm';
export type SliderTheme =
 | 'primary'
 | 'secondary'
 | 'success'
 | 'info'
 | 'warning'
 | 'danger'
 | 'light'
 | 'dark'

export interface ISliderProps {
    /**set slider size */
    sliderSize?: SliderSize;
    /**set customized slider */
    className?: string;
    /**set slider type */
    sliderTheme?: SliderTheme;
}

export type patSliderProps = ISliderProps;

export const Slider: FC<patSliderProps> = (props) => {
    const {className, sliderSize, sliderTheme} = props;

    let styleClasses = classNames('slider', {
        [`slider-${sliderSize}`]: !!sliderSize,
        [`slider-${sliderTheme}`]: true
    })
    if (className) {
        styleClasses += ' ' + classNames;
    }

    let slider = (
        <input type="range" min="1" max="100" value="50" className={styleClasses}></input>
    )

    return slider;
}

Slider.defaultProps = {
    sliderSize: 'lg',
  };

export default Slider;