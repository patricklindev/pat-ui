import React, { useEffect, useState } from 'react';

// import './_Slider.scss'

export type Size = 'large' | 'small';
export type Color = 'slider-red' | 'slider-blue';

interface ISliderProps {
    SliderSize?: Size;
    SliderColor?: Color;
}


const Slider:React.FC<ISliderProps> = ({SliderColor}) => {
    const [value, setValue] = useState(100)
    const [showOrHide, setShowOrHide] = useState('')
    let classNamesList: string[] = [];
    
    if(SliderColor === 'slider-red'){
        classNamesList.push(SliderColor)
    }
    else if(SliderColor === 'slider-blue'){
        classNamesList.push(SliderColor)
    }
    
    useEffect(() => {
        const sliderValue: HTMLSpanElement | null = document.querySelector("span");
        if(sliderValue){
            sliderValue.style.left = (value/2) + "%";
            console.log(sliderValue.style)
        }
    }, [value])

    const onInputHandle = (e: any) => {
        setValue(e.target.value);
        setShowOrHide('show');
    }

    const onBlurHandle = () => {
        setShowOrHide('')
    }

    return(
        <div className="range">
        <div className="sliderValue">
            <span className={showOrHide}>{value}</span>
        </div>
        <div className="field">
            <div className="value left">0</div>
        <input 
        className={classNamesList.join(' ')} 
        type="range" min="10" max="200" value={value} step="1" 
            onChange={e => onInputHandle(e)}
            onBlur={onBlurHandle}
            />
            <div className="value right">200</div>
        </div>
    </div>
    )
}

export default Slider;