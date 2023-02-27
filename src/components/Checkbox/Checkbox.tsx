import React, { FC, InputHTMLAttributes, LabelHTMLAttributes } from 'react';

import { classNames } from '../../utils/classNames';

export type CheckboxSize = 'sm' | 'lg';

export type CheckboxColor =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning';

export type CheckboxIcon = 'check' | 'check-circle' | 'check-square';

export interface ICheckboxProps {
  /** set customized style */
  className?: string;
  /** set checkbox size */
  size?: CheckboxSize;
  /** set checkbox color */
  color?: CheckboxColor;
  /** set checkbox icon */
  icon?: CheckboxIcon;
  /** set checkbox checked status */
  checked?: boolean;
}

type NativeInputProps = ICheckboxProps & InputHTMLAttributes<HTMLInputElement>;
type NativeLabelProps = ICheckboxProps & LabelHTMLAttributes<HTMLLabelElement>;
export type PatCheckboxProps = NativeInputProps | NativeLabelProps;

export const Checkbox: FC<PatCheckboxProps> = (props) => {
  const { className, size, color, icon, checked, children, ...rest } = props;

  let styleClasses: string = classNames('cb', {
    [`cb-${size}`]: !!size,
    [`cb-${color}`]: !!color,
    [`cb-${icon}`]: !!icon,
    checked: !!checked,
  });
  // add user's custom class
  if (className) {
    styleClasses += ' ' + className;
  }

  return (
    <div className={styleClasses} {...(rest as NativeInputProps)}>
      <input type="checkbox" />
      {props.children ? props.children : null}
    </div>
  );
};

Checkbox.defaultProps = {
  color: 'primary',
  checked: false,
};

export default Checkbox;
