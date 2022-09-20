import React, { FC } from 'react';

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
  /** set action when clicked */
  onClick?: () => void;
}

export type PatSwitchProps = ISwitchProps;

/**
 * Switches toggle the state of a single setting on or off.
 *
 *  ```js
 * import {Switch} from 'pat-ui'
 * ```
 *
 */
export const Switch: FC<ISwitchProps> = (props) => {
  const {
    switchSize,
    className,
    disabled,
    switchColor,
    label,
    isChecked,
  } = props;

  //controls default bahavior (on or off) of the switch
  // const defaultChecked = checked ? checked : false;
  // const [isChecked, setIsChecked] = useState(defaultChecked);

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
            type="checkbox"
            className="switch-toggle"
            data-testid="switch-toggle"
            //avoid any action when disabled
            onClick={disabled ? (e) => e.preventDefault() : props.onClick}
            // //set state to control on/off on the switch
            // onChange={() => setIsChecked((prev) => !prev)}
            onChange={props.onClick}
            checked={isChecked}
          />
          <span
            //set class name based on if switch is disabled or not
            className={disabled ? 'disabled switch-slider' : 'switch-slider'}
          />
        </div>
      </label>
      <p className="switch-label">{label || props.children}</p>
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
