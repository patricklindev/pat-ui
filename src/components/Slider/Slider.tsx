import React, { FC, useState } from 'react';
import { classNames } from '../../utils/classNames';


export type SliderSize = 'lg' | 'sm';
export type SliderTheme = 'primary' | 'secondary' | 'warning' | 'danger' | 'dark';
export type SliderOrientation = 'vertical'

export interface ISliderProps {
    /**Set slider size */
    sliderSize?: SliderSize;
    /**Set customized style */
    className?: string;
    /**Set slider theme */
    sliderTheme?: SliderTheme;
    /**Set slider to be vertical */
    sliderOrientation?: SliderOrientation;
    /**Set an onChange function */
    onChange?: Function;
    /**Set a min value */
    min?: number;
    /**Set a max value */
    max?: number;
    /**Set a initial value */
    initialValue?: number;
    /**Set a step value */
    step?: number;
}



export const Slider: FC<ISliderProps> = (props) => {

    const { className, onChange, sliderSize, sliderTheme, sliderOrientation, min, max, initialValue, step} = props;

    const [value, setValue] = useState(props.initialValue)

    let styleClasses = classNames('slider', {
        [`slider-${sliderSize}`]: !!sliderSize,
        [`slider-${sliderTheme}`]: true,
        [`slider-${sliderOrientation}`]: true

    })

    if (className) {
        styleClasses += ' ' + classNames;
    }

    let slider = <input
        type="range"
        min={min}
        max={max}
        defaultValue={initialValue}
        step={step}
        className={styleClasses}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setValue(parseInt(event.target.value))
            if (onChange) {
                onChange();
            }
            console.log("Val ", value);

        }} />

    return slider;
}

Slider.defaultProps ={
    min:0,
    max:100,
    initialValue: 24,
    step: 1,
}

export default Slider; 