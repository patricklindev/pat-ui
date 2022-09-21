import React, { FC } from 'react';
import {SliderSize, SliderColor} from "../Slider";


interface IValueLabelProps {
    size?: SliderSize;
    color?: SliderColor;
    value?: number;
    keyword?: string
}
const ValueLabel: FC<IValueLabelProps> = (props) => {
    const {size, value, color, keyword="", ...rest} = props
    return (
        <div  className={`value_label ${color}-color value_label_${size}${keyword}`} {...rest}>
            {value}
            <span className={`value_label_triangle value_label_triangle_${color}`} />
        </div>
    );
};

export default ValueLabel;
