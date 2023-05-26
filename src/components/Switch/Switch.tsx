import React, { FC, InputHTMLAttributes, useState, useCallback } from 'react';
import { classNames } from '../../utils/classNames';

export interface ISwitchProps {
  /** set customized style */
  color?: 'primary' | 'secondary' | 'default';
  /** set switch size */
  size?: string | 'small';
  /** set switch label */
  label?: string;
  /** set switch to be checked */
  checked?: boolean;
  /** set switch to be checked by default */
  onChange?: (checked: boolean) => void;
  /** disabled the switch */
  disabled?: boolean;
  /** set switch to be checked by default */
  required?: boolean;
}

// Defining the combined props type for the Switch component
// it combines the ISwitchProps interface with the InputHTMLAttributes interface
export type PatSwitchProps = ISwitchProps & InputHTMLAttributes<HTMLInputElement>;

/**
 * A Switch is a visual toggle between two mutually exclusive states — on and off.
 *
 * ```js
 * import {Switch} from 'pat-ui'
 * ```
 */
const Switch: FC<PatSwitchProps> = ({
  color = 'default',
  size,
  label,
  checked: checkedProp,
  onChange,
  disabled = false,
  required = false,
  ...rest
}) => {
  // this state is used to update the switch
  const [checked, setChecked] = useState<boolean>(checkedProp || false);

  // handles the change event of the switch
  const handleSwitchChange = useCallback(
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
    switch: classNames('switch', color, { checked }, size), // CSS classes for the switch element
    thumb: classNames('thumb', color, size), // CSS classes for the thumb element
    label: classNames('switch-label-text'), // CSS classes for the switch label element
  };

  const switchId = rest.id || 'switchId';

  return (
    <>
      <input
        type="checkbox"
        id={switchId}
        className="switch-input"
        size={size}
        color={color}
        checked={checked}
        onChange={handleSwitchChange}
        disabled={disabled}
        required={required}
        {...rest}
      />
      <label htmlFor={switchId} className={styleClasses.switch}>
        <span className={styleClasses.thumb}></span>
      </label>
      {label && <span className={styleClasses.label}>{label}</span>}
    </>
  );
};

export default Switch;