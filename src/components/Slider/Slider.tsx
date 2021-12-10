import React, { FC, ReactNode, useState } from 'react';
import { classNames } from '../../utils/classNames';

export type SliderSize = 'lg' | 'md' | 'sm';
export type ThumbSize = 'lg' | 'md' | 'sm';
export type SliderTheme =
 | 'primary'
 | 'secondary'
 | 'success'
 | 'info'
 | 'warning'
 | 'danger'
 | 'light'
 | 'dark'
 export type ThumbTheme =  
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
    /**set thumb size */
    // thumbSize?: ThumbSize
    /**set customized slider */
    className?: string;
    /**set slider type */
    sliderTheme?: SliderTheme;
    /**set thumb type */
    thumbTheme?: ThumbTheme;
}
 
export type patSliderProps = ISliderProps;

export const Slider: FC<patSliderProps> = (props) => {
    const {className, sliderSize, sliderTheme} = props;
    const [value, setValue] = useState("0")
    
    let styleClasses = classNames('slider', {
        [`slider-${sliderSize}`]: !!sliderSize,
        // [`thumb-${thumbSize}`]: !!thumbSize,
        [`slider-${sliderTheme}`]: true,
        // [`slider::-moz-range-thumb-${thumbTheme}`]: true,
        // [`slider::-webkit-slider-thumb-${thumbTheme}`]: true
    })
    if (className) {
        styleClasses += ' ' + classNames;
    }

    let slider = (
        <input type="range" min="1" max="100" className={styleClasses} value={value} onChange={(ev : React.ChangeEvent<HTMLInputElement>) => setValue(ev.target.value)}></input>
    )

    // let sliderElement = document.getElementsByClassName("slider") as unknown as HTMLDivElement
    // sliderElement.addEventListener("input", function(){
    //     let color = 'linear-gradient(90deg, #20C997)' + value + '%, #ADB5BD' + value + '%';
    //     sliderElement.style.background = color;
    // })

    // console.log(value)
    return slider;
}

Slider.defaultProps = {
    sliderTheme: 'secondary',
    thumbTheme: 'primary'
  };

export default Slider;