import React, {
    FC,
    ChangeEvent,
    InputHTMLAttributes,
    useRef,
    useState,
} from 'react';
import { classNames } from '../../utils/classNames';


export type SliderSize = 'sm' | 'md' | 'lg';
export type SliderColor = 'primary' | 'secondary' | 'default';
export type ValueLabelDisplay = 'on' | 'off';
export type SliderOrientation = 'vertical' | 'horizontal';


interface SliderProps {
    sliderSize?: SliderSize;
    sliderColor?: SliderColor;
    marks?: number[];
    step?: number;
    min?: number;
    max?: number;
    orientation?: SliderOrientation;
    defaultValue?: number;
    rangePositions?: number[];
    dsiabled?: boolean;
    valueLabelDisplay?: ValueLabelDisplay;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export type SliderComponentProps = SliderProps & InputHTMLAttributes<HTMLInputElement>;


export const Slider: FC<SliderComponentProps> = ({
    sliderSize = 'md',
    sliderColor = 'default',
    marks = [],
    min = 0,
    max = 100,
    orientation = 'horizontal',
    step,
    defaultValue = (max - min) / 2,
    rangePositions = [defaultValue],
    disabled = false,
    valueLabelDisplay = 'off',
    onChange,
    ...rest
}) => {
    const [sliderValue, setSliderValue] = useState<number>(defaultValue);
    const [rangePosition, setRangePosition] = useState<number[]>(rangePositions);

    let styleClasses = classNames('slider', {
        [`slider-${sliderColor}`]: !!sliderColor,
        [`slider-${sliderSize}`]: !!sliderSize,
        [`slider-${orientation}`]: !!orientation,
        'slider-disabled': !!disabled,
    })

    const closestIndex = useRef<number>(0);
    const smallestValue = rangePosition.reduce((prev, curr) =>
        prev < curr ? prev : curr
    );

    const getProgress = (value: number) => {
        return Math.round((100 * value) / (max - min));
    }
    const getMarkPosition = (value: number) => {
        const progress = getProgress(value);
        return progress > 50 ? { right: `${100 - progress}%` } : { left: `${progress}%` };
    };


    const setClosestIndex = (arg: number) => {
        const newArr = [...rangePosition];
        const newValue = arg;
        closestIndex.current = newArr.reduce((prevIdx, curr) => {
            return Math.abs(curr - newValue) < Math.abs(newArr[prevIdx] - newValue)
                ? newArr.indexOf(curr)
                : prevIdx;
        }, 0);
    }

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = +e.target.value;
        console.log(newValue);
        if (rangePosition.length > 1) setClosestIndex(newValue);
        console.log(newValue);
        setRangePosition((prev) => {
            console.log(prev);
            return prev.map((curVal, index) =>
                index === closestIndex.current ? newValue : curVal
            )
        }
        );
        setSliderValue(newValue);
    };


    return (
        <div className={styleClasses} data-testid="slider__container">
            <div className={'slider__rail'} data-testid="slider__rail"></div>
            {rangePosition.map((value, index) => (
                <div
                    key={index}
                    className={`slider__track ${rangePosition.length > 1 && value === smallestValue
                        ? 'slider__firtnode'
                        : ''
                        }`}
                    style={{
                        width: `${getProgress(value)}%`,
                    }}
                >
                    <div className={'slider__thumb'}></div>
                    {
                        valueLabelDisplay === 'on' && (
                            <div className={'slider__bubble'} data-testid="slider__bubble">
                                <span>{value}</span>
                            </div>
                        )}
                </div>
            ))}

            <input
                data-testid="slider__input"
                type={'range'}
                step={step}
                min={min}
                max={max}
                value={sliderValue}
                disabled={disabled}
                onChange={(e) => {
                    handleOnChange(e);
                    onChange && onChange(e);
                }}
                {...rest}
            ></input>

            {marks.length > 0 && (
                <div className={'slider__marks'}>
                    {
                        marks.map((pos) => {
                            return (
                                <span
                                    key={pos}
                                    data-testid="slider__marks"
                                    style={getMarkPosition(pos)}
                                >
                                    {'.'}
                                </span>

                            );
                        })}
                </div>
            )}

            {marks.length > 0 && (
                <div className={'slider__number__marks'}>
                    {
                        marks.map((pos) => {
                            return (
                                <span
                                    key={pos}
                                    data-testid="slider__number__marks"
                                    style={getMarkPosition(pos)}
                                >
                                    {pos}
                                </span>

                            );
                        })}
                </div>
            )}

        </div>
    );
};

export default Slider;