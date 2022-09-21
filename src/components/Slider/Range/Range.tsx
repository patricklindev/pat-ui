import React, {ChangeEvent, FC, useCallback, useEffect, useRef, useState} from 'react';
import {OnInput, SliderColor, SliderSize} from "../Slider";
import ValueLabel from "../ValueLabel/ValueLabel";

// interface for RangeSlider
interface IRangeProps {
    size?: SliderSize;
    color?: SliderColor;
    range?: boolean;
    disable?: boolean;
    showValueLabel?: boolean;
    sliderLeftValue?: number;
    sliderRightValue?: number;
    onInputLeft?: OnInput;
    onInputRight?: OnInput
}
const Range: FC<IRangeProps> = (props) => {
    // destructuring props
    const {
        size = 'default',
        color,
        showValueLabel = false,
        disable = false,
        sliderLeftValue = 25,
        sliderRightValue = 75,
        onInputLeft,
        onInputRight,
        ...rest
    } = props;

    // things we need it to work
    const rangeRef = useRef<HTMLDivElement>(null)
    const leftThumbRef = useRef<HTMLDivElement>(null)
    const rightThumbRef = useRef<HTMLDivElement>(null)
    const [leftInput, setLeftInput] = useState<number>(sliderLeftValue)
    const [rightInput, setRightInput] = useState<number>(sliderRightValue)

    // set position for thumb and range
    const setLeftRightThumbAndRange = useCallback((direction: string, percent: number) => {
        if(leftThumbRef.current && rangeRef.current && rightThumbRef.current) {
            switch (direction) {
                case 'left':
                    leftThumbRef.current.style.left = percent + "%";
                    rangeRef.current.style.left = percent + "%";
                    break
                case 'right':
                    rightThumbRef.current.style.right = (100 - percent) + "%";
                    rangeRef.current.style.right = (100 - percent) + "%";
                    break
                default:
                    return null;
            }
        }
    }, [])

    // when left thumb is moving
    const handleLeftInput = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.value = String(Math.min(parseInt(e.target.value), rightInput - 1))
        setLeftInput(+e.target.value)
        let percent = ((+e.target.value -  parseInt(e.target.min)) / (parseInt(e.target.max) -  parseInt(e.target.min))) * 100;
        setLeftRightThumbAndRange('left', percent)
    }

    // when right thumb is moving
    const handleRightInput = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.value = String(Math.max(parseInt(e.target.value), leftInput + 1))
        setRightInput(+e.target.value)
        let percent = ((+e.target.value - parseInt(e.target.min)) / (parseInt(e.target.max) - parseInt(e.target.min))) * 100;
        setLeftRightThumbAndRange('right', percent)
    }

    // since user has full control, we follow user's value, and only trigger once after mounted
    useEffect(() => {
        setLeftRightThumbAndRange('left', leftInput)
        setLeftRightThumbAndRange('right', rightInput)
    }, [])

    return (
        <div className="range_slider">
            <div>
                <input
                    type="range"
                    className={`input-left range_${size}-track range_${size}-thumb ${!disable ? 'cursor' : 'not-allowed'}`}
                    min="0" max="100"
                    value={leftInput}
                    onChange={handleLeftInput}
                    disabled={disable}
                    onInput={onInputLeft}
                />
                <input
                    type="range"
                    className={`input-right range_${size}-track range_${size}-thumb ${!disable ? 'cursor' : 'not-allowed'}`}
                    min="0"
                    max="100"
                    value={rightInput}
                    onChange={handleRightInput}
                    disabled={disable}
                    onInput={onInputRight}
                />
            </div>
            <div className={`range_custom_slider range_${size}-track`}>
                <div className={`track ${color}-color_track`} />
                <div className={`range ${color}-color`} ref={rangeRef}/>
                <div {...rest} className={`thumb left ${color}-color custom_thumb_${size} ${size}_left_transform`} ref={leftThumbRef}>
                    {
                        showValueLabel && <ValueLabel value={leftInput} color={color} size={size} keyword="_range"/>
                    }
                </div>
                <div className={`thumb right ${color}-color custom_thumb_${size} ${size}_right_transform`} ref={rightThumbRef}>
                    {
                        showValueLabel && <ValueLabel value={rightInput} color={color} size={size} keyword="_range"/>
                    }
                </div>
            </div>

        </div>
    );
};

export default Range;
