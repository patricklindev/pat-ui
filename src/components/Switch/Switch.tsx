import React, { InputHTMLAttributes, FC } from 'react';
import { classNames } from '../../utils/classNames';

export type SwitchSize = 'medium' | 'small';

export type SwithColor = 'default'
| 'primary'
| 'secondary';

export interface ISwitchProps {
    swColor?: SwithColor;
    swSize?: SwitchSize;
    label?: string;
    disabled?: boolean;
    checked?: boolean;
    className?: string;
}

export type PatSwitchProps = ISwitchProps & InputHTMLAttributes<HTMLInputElement>;

const Switch: FC<PatSwitchProps> = (props) => {
    const { swColor, swSize, label, checked, disabled, className, ...rest } = props;
    let styleClasses = classNames('switch-component', {
        [`${swColor}`]: !!swColor,
        [`${swSize}`]: !!swSize,
        disabled: !!disabled,
    });
    if (className) {
        styleClasses += ' ' + className;
    }
    
    return (
        <label className={styleClasses} data-testid='switch-element'>
            <div className="switch-component_btn">
                <input type="checkbox" disabled={!!disabled} checked={checked} {...rest}/>
                <span className="slider">
                    <span className="slider-round"></span>
                </span>
            </div>
            {(!!label) ? (
                    <span className="switch-component_label">
                        {label}
                    </span>
                ):(<></>)
            }
        </label>
    )
    

};

Switch.defaultProps={
    swColor: "primary",
    swSize: "medium",
}

export default Switch;