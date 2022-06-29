import React, { FC } from 'react';
import { classNames } from '../../utils/classNames';


//export type SliderSize = 'lg' | 'sm';
export enum slideSize {
    Large = 'lg',
    Small ='sm',
}


export interface ISliderProps {
    //Set slider size
    sliderSize?: slideSize | 'lg' | 'sm';
}



export const Slider: FC<ISliderProps> = (props) => {

    const {children, sliderSize} = props;

    let classNameList: string[] = ["slider"]; 

    if(sliderSize === slideSize.Large){
        classNameList.push('slider-lg')
    }
    if(sliderSize === slideSize.Small){
        classNameList.push('slider-sm')
    }

    const classNames = classNameList.join(' ');

    return (
        <input type="range" min="1" max="100" value="50" className={classNames} id="myRange" />
    );


}

export default Slider; 