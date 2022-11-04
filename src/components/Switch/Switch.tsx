import React, { useState } from 'react';
import { ChangeEvent, FC } from 'react';

import { classNames } from '../../utils/classNames';

export type SwitchColor = 'primary' | 'secondary' | 'default';

export type SwitchSize = 'm' | 'sm';

export interface ISwitchProps {
  // set switch size
  size?: SwitchSize;
  // set switch type
  color?: SwitchColor;
  // set the label for the switch
  label?: string;
  // set switch on/off by default
  on?: boolean;
  // callback when switch change state;
  handleToggle?: (e: ChangeEvent) => void;
  //set switch disabled
  disabled?: boolean;
}

export type SwitchProps = ISwitchProps;

export const Switch: FC<ISwitchProps> = ({
  color,
  size,
  label,
  on,
  handleToggle,
  disabled,
}) => {
  const [toggleSwitch, setToggleSwitch] = useState(!!on);

  //generate style classes
  let styleClasses = classNames('', {
    [`switch-${color}`]: true,
    [`switch-${size}`]: !!size,
    ['switch-on']: toggleSwitch,
    ['switch-off']: !toggleSwitch,
    disabled: !!disabled,
  });

  const handleChange: (e: ChangeEvent) => void = (e) => {
    setToggleSwitch((prev) => !prev);
    if (typeof handleToggle === 'function') {
      handleToggle(e);
    }
  };

  return (
    <>
      <input
        className="switch-checkbox"
        id={`switch-new`}
        type="checkbox"
        disabled={disabled}
        checked={toggleSwitch}
        onChange={(e) => handleChange(e)}
        data-testid="switch-checkbox"
      />
      <label
        className={`switch-track ${styleClasses}`}
        htmlFor={`switch-new`}
        data-testid="switch-track"
      >
        <span
          className={`switch-thumb ${styleClasses}`}
          data-testid="switch-thumb"
        />
        <div className={`switch-wrapper ${styleClasses}`} />
        <span
          data-testid="switch-label"
          className={label ? `switch-label ${styleClasses}` : ''}
        >
          {label}
        </span>
      </label>
    </>
  );
};

Switch.defaultProps = {
  color: 'default',
  disabled: false,
  on: false,
  size: 'm',
};

export default Switch;
