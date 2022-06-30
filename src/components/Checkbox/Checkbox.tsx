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
    checkSize?: checkboxSize;  // ? gives user option to provide this attribute or not
    checkType?: checkboxType;
    label?: string;
    disabled?: boolean;
    checkedState?: checkBoxState;
}

const Checkbox: FC<ICheckboxProps> = (props) => {
    const {children, checkSize, checkType, label, disabled, checkedState} = props;
    const checkRef = useRef<any>();
    useEffect(() => {
        checkRef.current.checked = checkedState === 1
        checkRef.current.indeterminate = checkedState === -1
    }, [checkedState]);

    // const styleClasses = classNames('checkbox', {
    //     [`check-${checkType}`]: true,
    //     [`check-${checkSize}`]: !!checkSize
    // })

    let classNameList: string[] = ['checkbox'];
    if (checkSize === checkboxSize.Medium) {
        classNameList.push('check-md');
    }
    if (checkSize === checkboxSize.Small) {
        classNameList.push('check-sm');
    }

    if (checkType === checkboxType.Primary) {
        classNameList.push('check-pri');
    }

    const classNames = classNameList.join(' ');

    return (
        <label className={classNames}>
            <input type='checkbox' disabled={disabled} ref={checkRef} />
            <span className='checkmark'></span>
            {label}
        </label>
    )
}

export default Checkbox;