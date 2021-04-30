import React, { FC, InputHTMLAttributes } from 'react';
import { classNames } from '../../utils/classNames';
import { v4 as uuidv4 } from 'uuid';

export type CheckboxSize = 'lg' | 'sm';

export type CheckboxType = 'primary' | 'secondary' | 'default';

export type CheckboxShape = 'square' | 'circle';

export interface ICheckboxProps {
  /** set checkbox size */
  checkboxSize?: CheckboxSize;
  /** set checkbox type */
  checkboxType?: CheckboxType;
  /** set checkbox shape */
  checkboxShape?: CheckboxShape;
  /** set customized style */
  className?: string;
  /** set disabled checkbox */
  disabled?: boolean;
}

export type NativeCheckboxProps = ICheckboxProps &
  InputHTMLAttributes<HTMLInputElement>;

/**
 * A Checkbox indicates a possible user action.
 *
 * ```js
 * import {Checkbox} from 'pat-ui'
 * ```
 */

export const Checkbox: FC<NativeCheckboxProps> = (props) => {
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

  if (disabled) {
    checkbox = (
      <>
        <input type="checkbox" id={labelStyleClasses + ' ' + uniqueId} />
        <label
          htmlFor={labelStyleClasses + ' ' + uniqueId}
          className={labelStyleClasses}
          {...(rest as ICheckboxProps)}
          data-testid="checkbox"
        >
          <div></div>
        </label>
      </>
    );
  } else {
    checkbox = (
      <>
        <input type="checkbox" id={labelStyleClasses + ' ' + uniqueId} />
        <label
          htmlFor={labelStyleClasses + ' ' + uniqueId}
          className={labelStyleClasses}
          {...(rest as ICheckboxProps)}
          data-testid="checkbox"
        >
          <div className={iconStyleClasses}></div>
        </label>
      </>
    );
  }

  return checkbox;
};

Checkbox.defaultProps = {
  checkboxType: 'default',
  checkboxShape: 'circle',
  checkboxSize: 'sm',
  disabled: false,
};

export default Checkbox;
