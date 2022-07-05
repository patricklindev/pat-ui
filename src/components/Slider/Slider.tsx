import React, { FC, useState } from 'react';
import { classNames } from '../../utils/classNames';


export type SliderSize = 'lg' | 'sm';
export type SliderTheme = 'primary' | 'secondary' | 'warning' | 'danger' | 'dark';
export type SliderOrientation = 'vertical';

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
    /**Whether or not to show range limit values */
    showLimits?: boolean;
    /**How many tick marks to show */
    ticks?: number;
    /**Set the slider to be disabled */
    disabled?: boolean;
}



export const Slider: FC<ISliderProps> = (props) => {

    const { className, onChange, sliderSize, sliderTheme, sliderOrientation, min, max, initialValue, step, showLimits, ticks, disabled} = props;

    const [value, setValue] = useState(props.initialValue)

    let styleClasses = classNames('slider', {
        [`slider-${sliderSize}`]: !!sliderSize,
        [`slider-${sliderTheme}`]: true,
        [`slider-${sliderOrientation}`]: true,
        [`showLimits-${showLimits}`]: true,

    })

    if (className) {
        styleClasses += ' ' + classNames;
    }

    // if(max && min){
    //     let tickIncrement = max - min
    //     console.log("ti  ", tickIncrement)
    // }

    //Fill tickArr with the locations we want tick marks
    let tickArr = []
    if (ticks) {
        let tickIncrement = ((max || 100) - (min || 0)) / ticks
        for (let i = (min || 0); i <= (max || 100); i += tickIncrement) {
            tickArr.push(i)
        }
    }

    let slider = <div className={`showLimits-${showLimits}`}>
        <span className="limit">{min}</span>

        <datalist id="custom-data">
            {tickArr.map((item) =>
                <option key={item} value={item}/>
            )}
        </datalist>

        <input
            type="range"
            //list="custom-data"
            min={min}
            max={max}
            defaultValue={initialValue}
            step={step}
            className={styleClasses}
            disabled={disabled}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setValue(parseInt(event.target.value))
                if (onChange) {
                    onChange();
                }
                console.log("Val ", value);
            }}
        />
        <span className="limit">{max}</span>


    </div>

    return slider;
}

Slider.defaultProps = {
    min: 0,
    max: 100,
    initialValue: 0,
    step: 1,
    showLimits: false,
    disabled: false
}

export default Slider; 