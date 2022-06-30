import React, { FC } from 'react';
import { classNames } from '../../utils/classNames';


export type SliderSize = 'lg' | 'sm';
export type SliderTheme = 'primary' | 'secondary' | 'warning' | 'danger' | 'dark';

export interface ISliderProps {
    sliderSize?: SliderSize;
    className?: string;
    sliderTheme?: SliderTheme;
}



export const Slider: FC<ISliderProps> = (props) => {

    const {className, children, sliderSize, sliderTheme} = props;

    let styleClasses = classNames('slider', {
        [`slider-${sliderSize}`]: !!sliderSize,
        [`slider-${sliderTheme}`]: true
    })



    if (className) {
        styleClasses += ' ' + classNames;
    }

    return (
        <input type="range" min="1" max="100" className={styleClasses} id="myRange" />
    );


}

export default Slider; 