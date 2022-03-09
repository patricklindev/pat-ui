import React, { useState, FC, InputHTMLAttributes } from 'react';
import { classNames } from '../../utils/classNames';
import { CheckIcons } from './CheckIcons';

export type CheckboxColor = 'primary' | 'secondary' | 'default';
export type CheckboxSize = 'medium' | 'small';
export type CheckboxIcon = 'checkbox' | 'heart';

export interface ICheckboxProps {
  checkColor?: CheckboxColor;
  checkSize?: CheckboxSize;
  icon?: CheckboxIcon;
  label?: string;
  onChange?: (e?: React.MouseEvent) => void;
  isChecked?: boolean;
}

export type NativeCheckboxProps = ICheckboxProps &
  InputHTMLAttributes<HTMLInputElement>;

export const Checkbox: FC<NativeCheckboxProps> = (props) => {
  const {
    checkColor = 'default',
    checkSize = 'medium',
    icon = 'checkbox',
    label = '',
    onChange,
    isChecked = false,
    ...rest
  } = props;
  const [checked, setChecked] = useState(false);

  let checkSizeStyle = classNames({
    [`checkbox-${checkSize}`]: true,
  });

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return (
    <>
      <label className="form-control">
        <span className={`checkbox-container ${checkSizeStyle}`}>
          <input type="checkbox" onChange={handleCheck} />
          {checked ? (
            <svg
              className={checkSizeStyle}
              viewBox={CheckIcons[`${icon}-fill`].viewBox}
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="rgba(0, 0, 0, 0.54)"
                d={CheckIcons[`${icon}-fill`].path}
              />
            </svg>
          ) : (
            <svg
              className={checkSizeStyle}
              viewBox={CheckIcons[`${icon}-outline`].viewBox}
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="rgba(0, 0, 0, 0.54)"
                d={CheckIcons[`${icon}-outline`].path}
              />
            </svg>
          )}
          <span className="ripple-container"></span>
        </span>
        <span>Checkbox</span>
      </label>
    </>
  );
};

export default Checkbox;
