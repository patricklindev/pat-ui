import React, { useState, FC, InputHTMLAttributes } from 'react';
import { classNames } from '../../utils/classNames'
import { CheckIcons } from './CheckIcons';
// import './css&scss/style.css'

export type CheckboxColor = 'primary' | 'secondary' | 'default';
export type CheckboxSize = 'medium' | 'small';
export type CheckboxIcon = 'checkbox' | 'heart';

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
        <span className={`checkbox-container ${checkSizeStyles}`}>
          <input type="checkbox" onChange={handleCheck} />
          {checked ? (
            <svg
              className={`${checkSizeStyles} ${checkColorStyle}` } 

              viewBox={CheckIcons[`${icon}-fill`].viewBox}
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d={CheckIcons[`${icon}-fill`].path}
              />
            </svg>
          ) : (
            <svg
              className={`${checkSizeStyles} ${checkColorStyle}` } 
              viewBox={CheckIcons[`${icon}-outline`].viewBox}
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d={CheckIcons[`${icon}-outline`].path}
              />
            </svg>
          )}
          <span
            className={`ripple-container ripple-container-color-${checkColorStyle}`}
          ></span>
        </span>
        <span>{label}</span>
      </label>
    </>
  );
};

export default Checkbox;
