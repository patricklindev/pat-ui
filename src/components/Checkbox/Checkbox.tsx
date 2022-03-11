import React, { useState, FC, InputHTMLAttributes } from 'react';
import { classNames } from '../../utils/classNames';
import { CheckIcons } from './CheckIcons';

export type CheckboxColor = 'primary' | 'secondary' | 'default';
export type CheckboxSize = 'medium' | 'small';
export type CheckboxIcon = 'checkbox' | 'heart' | 'bookmark';

export interface ICheckboxProps {
  checkColor?: CheckboxColor;
  checkSize?: CheckboxSize;
  icon?: CheckboxIcon;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked?: boolean;
}

export type NativeCheckboxProps = ICheckboxProps &
  InputHTMLAttributes<HTMLInputElement>;

/**
 * Checkboxes can be used to turn an option on or off.
 *
 * ```js
 * import {Checkbox} from 'pat-ui'
 * ```
 */

export const Checkbox: FC<NativeCheckboxProps> = (props) => {
  const {
    checkColor = 'default',
    checkSize = 'medium',
    icon = 'checkbox',
    label,
    onChange,
    isChecked = false,
    ...rest
  } = props;
  const [checked, setChecked] = useState(isChecked);

  let checkSizeStyles = classNames({
    [`checkbox-${checkSize}`]: true,
  });

  let checkColorStyle = classNames({
    [checkColor]: true,
  });

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    if (onChange !== undefined) {
      onChange(e);
    }
  };

  return (
    <>
      <label className="form-control">
        <span
          data-testid="span wrapper"
          className={`checkbox-container ${checkSizeStyles}`}
        >
          <input
            data-testid="input element"
            type="checkbox"
            onChange={handleCheck}
            {...rest}
          />
          {checked ? (
            <svg
              data-testid="svg checked"
              className={`${checkSizeStyles} ${checkColorStyle}`}
              viewBox={CheckIcons[`${icon}-fill`].viewBox}
              aria-hidden="true"
              focusable="false"
            >
              <path d={CheckIcons[`${icon}-fill`].path} />
            </svg>
          ) : (
            <svg
              data-testid="svg unchecked"
              className={`${checkSizeStyles} ${checkColorStyle}`}
              viewBox={CheckIcons[`${icon}-outline`].viewBox}
              aria-hidden="true"
              focusable="false"
            >
              <path d={CheckIcons[`${icon}-outline`].path} />
            </svg>
          )}
          <span
            data-testid="ripple container"
            className={`ripple-container ripple-container-color-${checkColorStyle}`}
          ></span>
        </span>
        {label ? <span>{label}</span> : null}
      </label>
    </>
  );
};

export default Checkbox;
