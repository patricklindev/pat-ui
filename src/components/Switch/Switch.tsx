import React, { FC, InputHTMLAttributes, useState, useCallback } from 'react';
import { classNames } from '../../utils/classNames';

export interface ISwitchProps {
  /** set different colors */
  color?: 'primary' | 'secondary' | 'warning';
  /** set small size */
  size?: string | 'small';
  /** set label */
  label?: string;
  /** set checked prop */
  checked?: boolean;
  /** set onChange prop that returns checked value */
  onChange?: (checked: boolean) => void;
  /** set disabled prop */
  disabled?: boolean;
  /** set defaultChecked prop */
  defaultChecked?: boolean;
  /** set required prop */
  required?: boolean;
  /** change iconPosition prop */
  iconPosition?: 'left' | 'right';
}

// Here, we are using InputHTMLAttributes to extend the props of input element
export type PatSwitchProps = ISwitchProps & InputHTMLAttributes<HTMLInputElement>;

const Switch: FC<PatSwitchProps> = ({
  color,
  size,
  label,
  checked: checkedProp,
  onChange,
  disabled,
  defaultChecked = false,
  required = false,
  iconPosition,
  ...rest
}) => {
  const [checked, setChecked] = useState(checkedProp || defaultChecked);

  // Here, we are using useCallback to memoize the function to avoid unnecessary re-renders
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = event.target.checked;
      setChecked(newChecked);

      if (onChange) {
        onChange(newChecked);
      }
    },
    [onChange]
  );

  const styleClasses = {
    switch: classNames('switch', { checked }, size),
    thumb: classNames('thumb', size),
    label: classNames('switch-label-text'),
  };

  return (
    <label className="switch-label">
      <input
        type="checkbox"
        className="switch-input"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        defaultChecked={defaultChecked}
        required={required}
        {...rest}
      />
      <span className={styleClasses.switch}>
        <span className={styleClasses.thumb}></span>
      </span>
      {label && <span className={styleClasses.label}>{label}</span>}
    </label>
  );
};

export default Switch;
