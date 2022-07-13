import React, { FC, useState } from 'react';
import { classNames } from '../../utils/classNames';


export type SliderSize = 'lg' | 'sm';
export type Themes = 'success' | 'primary' | 'secondary' | 'warning' | 'danger' | 'dark';
export type SliderOrientation = 'vertical' | 'horizontal';
export type ThumbSize = "lg" | "med" | "sm"


export interface ISliderProps {
    /**Set slider size */
    sliderSize?: SliderSize;
    /**Set the thumb size */
    thumbSize?: ThumbSize;
    /**Set customized style */
    className?: string;
    /**Set slider theme */
    sliderTheme?: Themes;
    /**Set thumb theme */
    thumbTheme?: Themes;
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

    //Destructor. Destructs into props object
    const { className, onChange, sliderSize, thumbSize, sliderTheme, thumbTheme, sliderOrientation, min, max, initialValue, step, ticks, disabled } = props;

    //State variable for value of the slider
    const [value, setValue] = useState(props.initialValue)

    let styleClasses = classNames('slider_input', {
        [`slider-${sliderSize}`]: true,
        [`thumb-${thumbSize}`]: true,
        [`slider-${sliderTheme}`]: true,
        [`thumb-${thumbTheme}`]: true,
        [`orientation-${sliderOrientation}`]: true,
        [`disabled-${disabled}`]: true,
    })

    if (className) {
        styleClasses += ' ' + classNames;
    }


    //Fill tickArr with the locations we want tick marks
    let tickArr = []
    if (ticks) {
        let tickIncrement = ((max || 100) - (min || 0)) / (ticks - 1)
        for (let i = (min || 0); i <= (max || 100); i += tickIncrement) {
            tickArr.push(i)
        }
    }

    let slider =
        <div className='slider'>
            <input
                data-testid="slider-element"
                type="range"
                min={min}
                max={max}
                value={value}
                defaultValue={initialValue}
                step={step}
                className={styleClasses}
                disabled={disabled}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setValue(parseInt(event.target.value))
                    if (onChange && !disabled) {
                        //Trigger callback function
                        onChange(event.target.value);
                    }
                }}
            />
            <div className='slider_tickLine'>
                {tickArr.map((tickValue) => (
                    <div className='slider_tickItem'>
                        <p className="slider_tickMark">|</p>
                        <p>{tickValue}</p>
                    </div>
                ))
                }
            </div>

        </div>

    return slider;
}

//Default props for basic slider
Slider.defaultProps = {
    sliderTheme: "primary",
    min: 0,
    max: 100,
    initialValue: 0,
    step: 1,
    ticks: 0,
    disabled: false
}

export default Slider; 