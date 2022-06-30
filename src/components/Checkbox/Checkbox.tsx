import React, { FC, ReactNode, useEffect, useRef } from 'react';
import { classNames } from '../../utils/classNames';

export enum checkboxType {
    Primary = 'primary',
    Secondary = 'secondary',
    Default = 'default'
}

export enum checkboxSize {
    Medium = 'md',
    Small = 'sm'
}

export enum checkBoxState {
    checked = 1,
    unchecked = 2,
    indeterminate = -1
}

interface ICheckboxProps {
    children?: ReactNode;
    className?: string;
    checkSize?: checkboxSize;  // ? gives user option to provide this attribute or not
    checkType?: checkboxType;
    label?: string;
    disabled?: boolean;
    checkedState?: checkBoxState;
}

const Checkbox: FC<ICheckboxProps> = (props) => {
    const {children, checkSize, checkType, label, disabled, checkedState, className} = props;
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

    return (
        <label className={styleClasses}>
            <input type='checkbox' disabled={disabled} ref={checkRef} />
            <span className='checkmark'></span>
            {label}
        </label>
    )
}

Checkbox.defaultProps = {
    disabled: false,
    checkedState: checkBoxState.unchecked,
    checkSize: checkboxSize.Medium
}

export default Checkbox;