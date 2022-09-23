import React, { FC, InputHTMLAttributes } from 'react';

import { classNames } from '../../utils/classNames';

export type SwitchSize = 'sm' | 'lg';
export type SwitchColor = 'primary' | 'secondary' | 'default';

export interface ISwitchProps {
  /**  set class name */
  className?: string;
  /**  set switch size */
  switchSize?: SwitchSize;
  /** set switch color */
  switchColor?: SwitchColor;
  /** set disabled switch */
  disabled?: boolean;
  /** set default to checked */
  isChecked?: boolean;
  /** set switch label */
  label?: string;
}

export type PatSwitchProps = ISwitchProps &
  InputHTMLAttributes<HTMLInputElement>;

/**
 * Switches toggle the state of a single setting on or off.
 *
 *  ```js
 * import {Switch} from 'pat-ui'
 * ```
 *
 */
const Switch: FC<PatSwitchProps> = (props) => {
  const {
    switchSize,
    className,
    disabled = false,
    switchColor,
    label,
    isChecked,
    ...rest
  } = props;
  let styleClasses = classNames('switch', {
    [`switch-${isChecked ? switchColor : 'default'}`]: true,
    [`switch-${switchSize}`]: !!switchSize,
    disabled: !!disabled,
  });
  if (className) {
    styleClasses += ' ' + className;
  }

  let swh = (
    <div className={styleClasses} data-testid="switch-element">
      <label className="switch-container">
        <div>
          <input
            disabled={disabled}
            type="checkbox"
            className="switch-toggle"
            data-testid="switch-toggle"
            checked={isChecked}
            {...rest}
          />
          <span
            //set class name based on if switch is disabled or not
            data-testid="test-slider"
            className={disabled ? 'disabled switch-slider' : 'switch-slider'}
          />
        </div>
      </label>
      <p className="switch-label">{label}</p>
    </div>
  );

  return swh;
};

Switch.defaultProps = {
  switchColor: 'default',
  disabled: false,
  switchSize: 'sm',
};

export default Switch;
