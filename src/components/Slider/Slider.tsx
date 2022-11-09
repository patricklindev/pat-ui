/* eslint-disable jsx-a11y/aria-props */
import React, { FunctionComponent, ReactElement, useState, PointerEvent, useRef, useEffect, useCallback } from 'react'

type SliderSize = 'small' | 'medium' | 'large'
type SliderColor = 'primary' | 'secondary' | 'disabled'
type SliderRangeKnobs = boolean
type SliderMark = Array<number>

interface ranged {
    max: number, min: number
}

export interface ISliderProps {
    className?: string,
    size?: SliderSize,
    color?: SliderColor,
    //for two knobs situation
    ranged?: SliderRangeKnobs,
    //initial location
    defaultValue?: number,
    disabled?: boolean,
    mark?: SliderMark,
    onChange?: (arg0: { value: number } | { min: number, max: number }) => void,
    max?: number,
    min?: number
}

//NOTE: this should put in utils
// const debounce = <F extends ((...args:any[])=>any)>(func: F, duration: number = 20)=>{
//     let timer: number | NodeJS.Timeout;
//     return(...args: any[])=>{
//         clearTimeout(timer as NodeJS.Timeout);
//         timer = window.setTimeout(()=>func.apply(this, args), duration);
//     }
// }

const Slider: FunctionComponent<ISliderProps> = ({
    size = 'medium',
    color = 'primary',
    ranged = false,
    defaultValue = 0,
    disabled = false,
    mark = [],
    onChange,
    max = 100,
    min = 0,
    className
}) => {
    if (max < min) {
        let temp = max;
        max = min;
        min = temp;
    }
    let sizeClassName: string = `slider-${size}`;
    let colorClassName: string = `slider-${color}`;
    let sliderClassName: string = colorClassName + ' ' + sizeClassName;
    if (className) {
        sliderClassName = `${className} ${sliderClassName}`
    }
    const [identifier, _] = useState('id' + Math.random().toString(16).slice(2));
    const [posStatus, setPosStatus] = useState<number | ranged>(defaultValue / max);
    const [currVal, setCurrVal] = useState<number | ranged>(defaultValue);
    const [focus, setFocus] = useState(false);
    const [sliderBounds, setSliderBounds] = useState<{ left: number, right: number, width: number }>({ left: 0, right: 0, width: 0 })

    //pre cal properties of the slider in cdm
    const thumbClassName = useCallback(() => {
        let baseName = `ui-slider-thumb ${identifier}`;
        if (focus === true) {
            baseName = baseName.concat(' ', 'thumb-active');
        }
        return baseName;

    }, [focus, identifier]);

    function handleRangeChange(val:number, percentage:number):void {
        let maxDelta = Math.abs((currVal as ranged).max - val);
        let minDelta = Math.abs((currVal as ranged).min - val);
        if (maxDelta - minDelta <= 0) {
            setCurrVal({ ...currVal as ranged, max: val });
            setPosStatus({ ...posStatus as ranged, max: percentage * 100 });
            onChange && onChange({ ...currVal as ranged, max: val })
        } else {
            setCurrVal({ ...currVal as ranged, min: val });
            setPosStatus({ ...posStatus as ranged, min: percentage * 100 });
            onChange && onChange({ ...currVal as ranged, min: val })
        }
    }

    const measureSliderWidth = useCallback(node => {
        if (node !== null) {
            let sliderWidth = node.offsetWidth;
            let initPos = node.childNodes[1].getBoundingClientRect().left;
            let valuePercentage = currVal as number / max;
            let leftBound = Math.round(initPos - (sliderWidth * valuePercentage));
            let rightBound = Math.round(initPos + (sliderWidth * (1 - valuePercentage)));
            setSliderBounds({
                left: leftBound,
                right: rightBound,
                width: sliderWidth
            })
        }
    }, [])

    //init
    useEffect(() => {
        if (ranged) {
            setPosStatus({
                min: 0,
                max: 100
            });
            setCurrVal({
                min: min,
                max: max
            });
        }

    }, [])

    //To allow the move, pdown to be detected outside of the component, need to bind evthandler on window
    useEffect(() => {
        const leftBound = sliderBounds.left;
        const rightBound = sliderBounds.right;
        const sliderWidth = sliderBounds.width;
        function handlePointerDown(e: unknown) {
            let targetClassName = ((e as PointerEvent).target as HTMLElement).getAttribute('class');
            if (targetClassName === thumbClassName()) {
                setFocus(true);
            } else if ((targetClassName === `ui-slider-track ${identifier}` || targetClassName === `ui-slider-rail ${identifier}`)) {
                //this depend on what percentage the rail/track is clicked upon
                let percentage = ((e as PointerEvent).clientX - leftBound) / sliderWidth;
                let val = Math.round(percentage * max);
                if (!ranged) {
                    setCurrVal(val);
                    setPosStatus(percentage * 100);
                    onChange && onChange({ value: val });
                } else {
                    handleRangeChange(val, percentage)
                }
            }
        }

        function handlePointerUp() {
            setFocus(false);
        }

        function handlePointerMove(e: unknown) {
            if (focus) {
                let location = (e as PointerEvent).clientX;
                let percentage = (location - leftBound) / sliderWidth;
                let val = Math.round(percentage * max);
                if (!ranged) {
                    if (location <= leftBound) {
                        if (currVal === min) return;
                        setCurrVal(min);
                        setPosStatus(0);
                        onChange && onChange({ value: 0 });
                    } else if (location >= rightBound) {
                        if (currVal === max) return;
                        setCurrVal(max);
                        setPosStatus(100);
                        onChange && onChange({ value: 100 });
                    } else {

                        setCurrVal(val);
                        setPosStatus(percentage * 100);
                        onChange && onChange({ value: val });
                    }
                } else {
                    if (location <= leftBound) {
                        if (currVal === min) return;
                        setCurrVal({ ...currVal as ranged, min: min });
                        setPosStatus({ ...posStatus as ranged, min: 0 });
                        onChange && onChange({ ...currVal as ranged, min: min });
                    } else if (location >= rightBound) {
                        if (currVal === max) return;
                        setCurrVal({ ...currVal as ranged, max: max });
                        setPosStatus({ ...posStatus as ranged, max: 100 });
                        onChange && onChange({ ...currVal as ranged, max: max });
                    } else {
                       handleRangeChange(val, percentage)
                    }
                }
            }
        }
        if (!disabled) {
            window.addEventListener('pointerdown', handlePointerDown);
            window.addEventListener('pointerup', handlePointerUp)
            window.addEventListener('pointermove', handlePointerMove)
        }
        return () => {
            window.removeEventListener('pointerdown', handlePointerDown);
            window.removeEventListener('pointerup', handlePointerUp);
            window.removeEventListener('pointermove', handlePointerMove);
        }
    }, [focus, posStatus, disabled, currVal, max, min, mark, sliderBounds, identifier, thumbClassName, onChange, ranged, handleRangeChange])



    function sliderRenderer(): ReactElement {
        let trackAndThumb: ReactElement;
        if (!ranged) {
            trackAndThumb = (
                <>
                    <span className={`ui-slider-track ${identifier}`} style={{ width: `${posStatus}%` }} ></span>
                    <span className={thumbClassName()} style={{ left: `${posStatus}%` }}  >
                        <input className='ui-slider-input'></input>
                    </span>
                </>
            )
        } else {
            trackAndThumb = (
                <>
                    <span className={`ui-slider-track ${identifier}`} style={{ width: `${(posStatus as ranged).max - (posStatus as ranged).min}%`, left: `${(posStatus as ranged).min}%` }} ></span>
                    <span className={thumbClassName()} style={{ left: `${(posStatus as ranged).max}%` }}>
                        <input className='ui-slider-input'></input>
                    </span>
                    <span className={thumbClassName()} style={{ left: `${(posStatus as ranged).min}%` }}>
                        <input className='ui-slider-input'></input>
                    </span>
                </>
            )
        }
        return (
            <div ref={measureSliderWidth} className={`ui-slider-wrapper ${sliderClassName}`}>
                {trackAndThumb}
                {
                    // eslint-disable-next-line array-callback-return
                    mark.map((e, i) => {
                        if (e <= max && e >= min) {
                            return <span key={i} className='ui-slider-mark' style={{ left: `${e}%` }} ></span>
                        }
                    })
                }
                <span className={`ui-slider-rail ${identifier}`} ></span>
            </div>
        )
    }

    return (
        <>
            {sliderRenderer()}
        </>
    )
}


export default Slider;