import React, { FC } from 'react';
import { classNames } from '../../utils/classNames';


export type SliderSize = 'lg' | 'sm';

export interface ISliderProps {
    sliderSize?: SliderSize;
    className?: string;
}



export const Slider: FC<ISliderProps> = (props) => {

    const {className, children, sliderSize} = props;

    let styleClasses = classNames('slider', {
        [`slider-${sliderSize}`]: !!sliderSize,
    })



    if (className) {
        styleClasses += ' ' + classNames;
    }

    return (
        <input type="range" min="1" max="100" value="50" className={styleClasses} id="myRange" />
    );


}

export default Slider; 