import React, { FC, useEffect, useRef, ChangeEventHandler, useState } from 'react';
import { classNames } from '../../utils/classNames';
import Icon from '../Icon';

export type checkboxType = 'primary' | 'secondary' | 'default';

export type checkboxSize = 'md' | 'sm';

export interface ICheckboxProps {
    className?: string;
    checkSize?: checkboxSize;  // ? gives user option to provide this attribute or not
    checkType?: checkboxType;
    label?: string;
    disabled?: boolean;
    checkedState?: boolean;
    icon?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    indeterminate?: boolean;
}

const Checkbox: FC<ICheckboxProps> = (props) => {
    const {checkSize, checkType, label, disabled, checkedState, className, icon, onChange, indeterminate} = props;
    const checkRef = useRef<any>(); // maintains reference to input so can manage indeterminate property directly
    useEffect(() => { // upon render set input to checked if indeterminate        
        checkRef.current.indeterminate = indeterminate === true;
    }, [indeterminate]);

    let styleClasses = classNames('checkbox', {
        [`check-${checkType}`]: true,
        [`check-${checkSize}`]: !!checkSize,
        [`${className}`]: true
    });

    let checkbox;
    if (icon) {
        // console.log(icon);
        checkbox = (
            <label className={styleClasses}>
                <input type='checkbox' disabled={disabled} ref={checkRef} checked={checkedState} onChange={onChange} />
                <Icon name={icon} />
                {label}
                <span className='hoverCircle icon-hover'></span>
            </label>
        )
    }
    else {
        // console.log("no icon");
        checkbox = (
            <label className={styleClasses}>
                <input 
                    aria-label='test-input' 
                    type='checkbox' 
                    ref={checkRef} 
                    disabled={disabled} 
                    checked={checkedState} 
                    onChange={onChange}
                />
                <span className='checkmark'></span>
                {label}
                <span className='hoverCircle'></span>
            </label>
        )
    }

    return checkbox;
}

Checkbox.defaultProps = {
    disabled: false,
    checkSize: 'md',
    checkType: 'default'
}

export default Checkbox;