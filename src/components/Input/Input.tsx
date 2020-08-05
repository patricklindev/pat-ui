import React from 'react';
import {classNames} from '../../utils/classNames';

interface IInputProps{
    className?: string;
    placeholder?: string;
    size?: string;
    focus?: boolean,
    disabled?: boolean,
    error?: boolean,
    transparent?: boolean,
    fluid?: boolean,
    icon?: string|{[key:string]:string|boolean},
    loading?: boolean,
    iconPosition?: string,
    labeled?: string
}

type PatInputProps = IInputProps & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>;

const Input: React.FC<PatInputProps> = (props) => {
    const {size,focus,disabled,error,transparent,fluid, icon,loading,iconPosition,labeled, ...rest} = props;
    const styleClasses = classNames('ui', 'input', {
        [`input-focus`]: !!focus,
        [`input-${size}`]: !!size,
        [`input-disabled`]: !!disabled,
        [`input-error`]: !!error,
        [`input-transparent`]: !!transparent,
        [`input-fluid`]: !!fluid,
        'input-loading':!!loading,
        [`input-${iconPosition}`]: !!iconPosition,
        'input-icon': !!icon,
        'input-labeled': !!labeled,
    });
    const iconFilteredClasses:{[key:string]:boolean} = {};
    let iconName:string = "";
    if (icon && typeof icon === 'object') {
        for (let key of Object.keys(icon)) {
            if (key !== 'name') {
                iconFilteredClasses[`${key}`] = icon[key] as boolean;
            }
        }
        iconName = icon['name'] as string;
    }
    const iconClasses = classNames({[`${icon}`]: !!icon && typeof icon === 'string', [`${iconName}`]:!!iconName},iconFilteredClasses, 'input-icon');
    const inputIcon = <i aria-hidden={'true'} className={iconClasses}></i>;
    return (
        <div
            className={styleClasses}
        >
            <input type="text" {...rest}/>
            {icon? inputIcon:null}
        </div>
    )
};

export default Input;
