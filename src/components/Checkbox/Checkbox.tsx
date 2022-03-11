import React, {
  useState,
  FC,
  InputHTMLAttributes,
  useLayoutEffect,
} from 'react';
import { classNames } from '../../utils/classNames';
import { CheckIcons } from './CheckIcons';

export type CheckboxColor = 'primary' | 'secondary' | 'default';
export type CheckboxSize = 'medium' | 'small';
export type CheckboxIcon = 'checkbox' | 'heart' | 'bookmark';

export interface ICheckboxProps {
  /** set checkbox color */
  checkColor?: CheckboxColor;
  /** set checkbox size */
  checkSize?: CheckboxSize;
  /** set checkbox icon */
  icon?: CheckboxIcon;
  /** set checkbox label */
  label?: string;
  /** set checkbox size */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** set checkbox checked status */
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
  const [animations, setAnimations] = useState<JSX.Element[]>([]);

  let checkSizeStyles = classNames({
    [`${checkSize}`]: true,
  });

  let checkColorStyle = classNames({
    [checkColor]: true,
  });

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setChecked(e.target.checked);
    setAnimations([...animations, <span></span>]);
    if (onChange !== undefined) {
      onChange(e);
    }
  };

  useLayoutEffect(() => {
    let ripple: any = null;
    if (animations.length > 0) {
      clearTimeout(ripple);

      ripple = setTimeout(() => {
        setAnimations([]);
        clearTimeout(ripple);
      }, 1200);
    }

    return () => clearTimeout(ripple);
  }, [animations.length]);

  return (
    <label className="checkbox">
      <span
        data-testid="span wrapper"
        className={`checkbox__container checkbox__container--${checkSizeStyles}`}
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
            className={`checkbox__svg checkbox__svg--${checkSizeStyles} checkbox__svg--${checkColorStyle}`}
            viewBox={CheckIcons[`${icon}-fill`].viewBox}
            aria-hidden="true"
            focusable="false"
          >
            <path d={CheckIcons[`${icon}-fill`].path} />
          </svg>
        ) : (
          <svg
            data-testid="svg unchecked"
            className={`checkbox__svg checkbox__svg--${checkSizeStyles} checkbox__svg--${checkColorStyle}`}
            viewBox={CheckIcons[`${icon}-outline`].viewBox}
            aria-hidden="true"
            focusable="false"
          >
            <path d={CheckIcons[`${icon}-outline`].path} />
          </svg>
        )}
        <span
          data-testid="ripple container"
          className={`checkbox__ripple checkbox__ripple--${checkColorStyle}`}
        >
          <div
            className={`checkbox__ripple__container checkbox__ripple__container--${checkSizeStyles}`}
          >
            {animations.map((_, index) => (
              <span
                key={`ripple-${index}`}
                className={`ripple--${checkColorStyle}`}
              ></span>
            ))}
          </div>
        </span>
      </span>
      {label ? <span>{label}</span> : null}
    </label>
  );
};

Checkbox.defaultProps = {
  checkColor: 'default',
  checkSize: 'medium',
  icon: 'checkbox',
  isChecked: false,
};

export default Checkbox;
