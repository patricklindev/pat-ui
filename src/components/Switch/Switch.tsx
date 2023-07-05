import React, {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  FC,
  MouseEvent,
} from 'react';
import { classNames } from '../../utils/classNames';

export interface ISwitchProps {
  /** Indicate if the button is disabled*/
  disabled?: boolean;

  /** Inital State of the Switch */
  checked?: boolean;

  /** Text to put besides Switch */
  label?: string;

  /** Type of Switch */
  switchType?: 'default' | 'primary' | 'secondary';

  /** Size of Switch */
  switchSize?: 'medium' | 'small';

  /** set action on switch toggled */
  onClick?: (arg0: object) => void;

  /** Pass Customed Color*/
  color?: string;
}

export type patSwitchProps = ISwitchProps;

/**
 * A Switch provides a toggle checkbox.
 *
 * ```js
 * import {Switch} from 'pat-ui'
 * ```
 */
export const Switch: FC<patSwitchProps> = (props) => {
  const [checked, setChecked] = React.useState(props.checked || false);

  const switch_classes = classNames('switch-wrapper', {
    [`switch-${props.switchType || 'default'}`]: true,
    [`switch-${props.switchSize || 'medium'}`]: true,
    [`switch-color-custum`]: props.color ? true : false,
    disabled: props.disabled || false,
  });

  return (
    <div
      className={switch_classes}
      onClick={(event) => {
        if (props.onClick) {
          props.onClick(event);
        }

        if (!props.disabled) {
          setChecked((e) => !e);
        }
      }}
      data-testid="switch-wrapper"
    >
      <div className="switch" data-testid="switch">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => null}
          data-testid="switch-input"
        />
        <span
          className="switch__slider"
          data-testid="switch-track"
          style={props.color ? { 'backgroundColor': props.color } : {}}
        ></span>
      </div>
      <label className="switch__text" data-testid="switch-label">
        {props.label}
      </label>
    </div>
  );
};

Switch.defaultProps = {
  checked: false,
  disabled: false,
  switchType: 'default',
  switchSize: 'medium',
};

export default Switch;
