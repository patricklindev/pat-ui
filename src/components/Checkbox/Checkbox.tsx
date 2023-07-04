/* Import necessary dependencies */
import React, { FC, InputHTMLAttributes } from 'react';
import { classNames } from '../../utils/classNames';

/* Define Types  */
export type CheckboxSize = 'small' | 'medium';
export type CheckboxColor = 'primary' | 'secondary' | 'default';

/* Define Checkbox Props */
export interface ICheckboxProps {
  /**  set customized style */
  className?: string;
  /**  set checkbox size */
  checkboxSize?: CheckboxSize;
  /** set checkbox color */
  checkboxColor?: CheckboxColor;
  /** set checkbox checked */
  checked?: boolean;
  /** set checkbox indeterminate */
  indeterminate?: boolean;

  /** set checkbox label */
  label?: string;
  /** set disabled checkbox */
  disabled?: boolean;
}

/* Define Pat-ui Checkbox Props Type */
export type PatCheckboxProps = ICheckboxProps &
  InputHTMLAttributes<HTMLInputElement>;

/**
 * A Pat-ui Checkbox indicates a user's selection on a checkbox wrapper
 *
 * ```js
 * import {Checkbox} from 'pat-ui'
 * ```
 */
export const Checkbox: FC<PatCheckboxProps> = (props) => {
  const {
    checkboxSize,
    checkboxColor,
    label,
    disabled,
    checked,
    indeterminate,
    className,
    ...rest
  } = props;

  let styleClasses = classNames('checkbox', {
    [`checkbox-${checkboxColor}`]: true,
    [`checkbox-${checkboxSize}`]: !!checkboxSize,
    disabled: !!disabled,
    [`checkbox-indeterminate`]: !!indeterminate,
  });
  if (className) {
    styleClasses += ' ' + className;
  }
  styleClasses += ' ' + 'checkbox-container';

  let chk = (
    <div className="checkbox-outside-wrapper" data-testid="wrapper">
      <label className={styleClasses} data-testid="container">
        <input
          type="checkbox"
          disabled={disabled}
          checked={checked}
          {...(rest as PatCheckboxProps)}
          data-testid="checkbox"
        />
        <span data-testid="span">{label}</span>
      </label>
    </div>
  );
  return chk;
};

Checkbox.defaultProps = {
  checkboxColor: 'default',
  checkboxSize: 'medium',
  disabled: false,
  checked: false,
  indeterminate: false,
};

export default Checkbox;
