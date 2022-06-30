import React, { FC } from 'react'

export enum SlideType {
    Primary = 'primary',
    Secondary = 'secondary'
}

interface ISliderProps {
    sliderType?: SlideType;
}



export const Slider:FC<ISliderProps> = (props) => {
    const {sliderType} = props;
    let classNameList: string[] = ['slider']
    if (sliderType === SlideType.Primary) {
        classNameList.push('slider-primary')
    }
    if(sliderType === SlideType.Secondary) {
        classNameList.push('slider-secondary')
    }
    let classNames = classNameList.join(' ')
    return <input type="range" className={classNames} />
    
}

export default Slider;