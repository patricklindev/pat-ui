import React, { FC } from 'react';
import { classNames } from '../../utils/classNames';


export type SliderSize = 'lg' | 'sm';
export type SliderTheme = 'primary' | 'secondary' | 'warning' | 'danger' | 'dark';
export type SliderOrientation = 'vertical'

export interface ISliderProps {
    sliderSize?: SliderSize;
    className?: string;
    sliderTheme?: SliderTheme;
    sliderOrientation?: SliderOrientation;
    onChange?: Function;
}



export const Slider: FC<ISliderProps> = (props) => {

    const { className, onChange, sliderSize, sliderTheme, sliderOrientation } = props;

    let styleClasses = classNames('slider', {
        [`slider-${sliderSize}`]: !!sliderSize,
        [`slider-${sliderTheme}`]: true,
        [`slider-${sliderOrientation}`]: true

    })



    if (className) {
        styleClasses += ' ' + classNames;
    }

    return (
        <input
            type="range"
            min="1"
            max="100"
            className={styleClasses}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                if (onChange) {
                    onChange();
                }
            }} />
    );


}

export default Slider; 