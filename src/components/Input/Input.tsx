import React,{
    InputHTMLAttributes,
    FC
} from 'react';
import {classNames} from '../../utils/classNames';

interface IInputProps{
    /** set customized style */
    className?: string;
    /** set input bar size */
    size?: 'mini'|'small'|'large'|'big'|'huge'|'massive';
    /** make input bar always focused */
    focus?: boolean,
    /** disabled the input bar */
    disabled?: boolean,
    /** apply error style to input bar */
    error?: boolean,
    /** make input bar transparent */
    transparent?: boolean,
    /** make input bar take whole space of parent container */
    fluid?: boolean,
    /** add specific icon to input bar */
    icon?: string|{[key:string]:string|boolean},
    /** apply loading style to input bar */
    loading?: boolean,
    /** set icon to show on left or right, default is right */
    iconPosition?: 'left'|'right',
}

export type PatInputProps = IInputProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>;

const Input: FC<PatInputProps> = (props) => {
    const {size,focus,disabled,error,transparent,fluid, icon,loading,iconPosition, ...rest} = props;
    const styleClasses = classNames('ui', 'input', {
        [`input-focus`]: !!focus,
        [`input-${size}`]: !!size,
        [`input-disabled`]: !!disabled,
        [`input-error`]: !!error,
        [`input-transparent`]: !!transparent,
        [`input-fluid`]: !!fluid,
        'input-loading':!!loading,
        [`input-${iconPosition}`]: !!iconPosition,
        icon: !!icon || !!loading,
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
    const iconClasses = classNames({[`${icon}`]: !!icon && typeof icon === 'string' && !loading, [`${iconName}`]:!!iconName, 'spinner big loading':!!loading},iconFilteredClasses, 'icon');
    const inputIcon = <i aria-hidden={'true'} className={iconClasses}></i>;
    return (
        <div
            className={styleClasses}
        >
            <input type="text" disabled={disabled} {...rest}/>
            {icon || loading? inputIcon:null}
        </div>
    )
};

export default Input;
