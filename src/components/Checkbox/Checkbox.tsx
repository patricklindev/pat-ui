import React from 'react';
import { classNames } from '../../utils/classNames';
import { v4 as uuidv4 } from 'uuid';

export type CheckboxSize = 'lg' | 'sm';

export type CheckboxType = 'primary' | 'secondary' | 'default';

export type CheckboxShape = 'square' | 'circle';

export interface ICheckboxProps {
  checkboxSize?: CheckboxSize;
  checkboxType?: CheckboxType;
  checkboxShape?: CheckboxShape;
  className?: string;
  disabled?: boolean;
}
export const Checkbox: React.FC<ICheckboxProps> = (props) => {
  const {
    checkboxSize,
    checkboxType,
    checkboxShape,
    children,
    className,
    disabled,
    ...rest
  } = props;

  let labelStyleClasses = classNames('checkbox', {
    [`checkbox-${checkboxType}`]: true,
    [`checkbox-${checkboxShape}`]: true,
    [`checkbox-${checkboxSize}`]: !!checkboxSize,
    disabled: !!disabled,
  });

  let iconStyleClasses = classNames('check-icon', {
    [`check-icon-${checkboxType}`]: true,
    [`check-icon-${checkboxSize}`]: !!checkboxSize,
    disabled: !!disabled,
  });

  if (className) {
    labelStyleClasses += ' ' + className;
  }

  let checkbox;
  let uniqueId = uuidv4();

  checkbox = (
    <>
      <input type="checkbox" id={labelStyleClasses + ' ' + uniqueId} />
      <label
        htmlFor={labelStyleClasses + ' ' + uniqueId}
        className={labelStyleClasses}
        {...(rest as ICheckboxProps)}
      >
        <div className={iconStyleClasses}></div>
      </label>
    </>
  );

  return checkbox;
};

Checkbox.defaultProps = {
  checkboxType: 'default',
  checkboxShape: 'circle',
  checkboxSize: 'sm',
  disabled: false,
};

export default Checkbox;
