import React, { FC, useState } from 'react';
import { classNames } from '../../utils/classNames';


export type SliderSize = 'lg' | 'sm';
export type SliderTheme = 'primary' | 'secondary' | 'warning' | 'danger' | 'dark';
export type SliderOrientation = 'vertical';
export type ThumbSize = "lg" | "med" | "sm"
export type ThumbTheme = 'primary' | 'secondary' | 'warning' | 'danger' | 'dark';


export interface ISliderProps {
    /**Set slider size */
    sliderSize?: SliderSize;
    /**Set the thumb size */
    thumbSize?: ThumbSize;
    /**Set customized style */
    className?: string;
    /**Set slider theme */
    sliderTheme?: SliderTheme;
    /**Set thumb theme */
    thumbTheme?: ThumbTheme;
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
    /**How many tick marks to show */
    ticks?: number;
    /**Set the slider to be disabled */
    disabled?: boolean;
}



export const Slider: FC<ISliderProps> = (props) => {

    const { className, onChange, sliderSize, thumbSize, sliderTheme, thumbTheme, sliderOrientation, min, max, initialValue, step, ticks, disabled } = props;

    const [value, setValue] = useState(props.initialValue)

    let styleClasses = classNames('slider', {
        [`slider-${sliderSize}`]: !!sliderSize,
        [`thumb-${thumbSize}`]: !!thumbSize,
        [`slider-${sliderTheme}`]: true,
        [`thumb-${thumbTheme}`]: true,
        [`slider-${sliderOrientation}`]: true,
    })

    if (className) {
        styleClasses += ' ' + classNames;
    }


    //Fill tickArr with the locations we want tick marks
    let tickArr = []
    if (ticks) {
        let tickIncrement = ((max || 100) - (min || 0)) / (ticks-1)
        for (let i = (min || 0); i <= (max || 100); i += tickIncrement) {
            tickArr.push(i)
        }
    }

    let slider =
        <div className='slider_div'>
            <div>
                <input
                    type="range"
                    min={min}
                    max={max}
                    defaultValue={initialValue}
                    step={step}
                    className={styleClasses}
                    disabled={disabled}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setValue(parseInt(event.target.value))
                        if (onChange) {
                            onChange(value);
                        }
                    }}
                />
                <div className='tickLine'>
                    {ticks
                        ? tickArr.map((e) => (
                            <div className='tickItem'>
                                <p className="tickMark">|</p>
                                <p>{e}</p>
                            </div>
                        ))
                        : null}
                </div>
            </div>

        </div>

    return slider;
}

Slider.defaultProps = {
    min: 0,
    max: 100,
    initialValue: 0,
    step: 1,
    ticks: 0,
    disabled: false
}

export default Slider; 