import React, { FC, ReactNode, useEffect, useRef, ChangeEventHandler } from 'react';
import { classNames } from '../../utils/classNames';
import Icon from '../Icon';

// export enum checkboxType {
//     Primary = 'primary',
//     Secondary = 'secondary',
//     Default = 'default'
// }

export type checkboxType = | 'primary' | 'secondary' | 'default';

// export enum checkboxSize {
//     Medium = 'md',
//     Small = 'sm'
// }

export type checkboxSize = | 'md' | 'sm';

export enum checkBoxState {
    checked = 1,
    unchecked = 2,
    indeterminate = -1
}

export interface ICheckboxProps {
    className?: string;
    checkSize?: checkboxSize;  // ? gives user option to provide this attribute or not
    checkType?: checkboxType;
    label?: string;
    disabled?: boolean;
    checkedState?: checkBoxState;
    icon?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Checkbox: FC<ICheckboxProps> = (props) => {
    const {checkSize, checkType, label, disabled, checkedState, className, icon, onChange} = props;
    const checkRef = useRef<any>();
    useEffect(() => {
        checkRef.current.checked = checkedState === 1
        checkRef.current.indeterminate = checkedState === -1
    }, [checkedState]);

    let styleClasses = classNames('checkbox', {
        [`check-${checkType}`]: true,
        [`check-${checkSize}`]: !!checkSize
    });
    if (className) {
        styleClasses += ' ' + className;
    }

    let checkbox;
    if (icon) {
        // console.log(icon);
        checkbox = (
            <label className={styleClasses}>
                <input type='checkbox' disabled={disabled} ref={checkRef} />
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
                <input aria-label='test-input' type='checkbox' disabled={disabled} ref={checkRef} onChange={onChange}/>
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
    checkedState: checkBoxState.unchecked,
    checkSize: 'md',
    checkType: 'default'
}

export default Checkbox;