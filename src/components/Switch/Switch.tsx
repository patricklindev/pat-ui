import React from 'react';
import { classNames } from '../../utils/classNames';

export type SwitchSize = 'sm' | 'lg';
export type SwitchColor = 'primary' | 'secondary' | 'default';

export interface ISwitchProps {
  // set class name
  className?: string;
  //set switch size
  switchSize?: SwitchSize;
  //set switch color
  switchColor?: SwitchColor;
  //set disabled switch
  disabled?: boolean;
  //set default to checked
  checked?: boolean;
  //set switch label
  label?: string;
  //set action when clicked
  onClick?: () => void;
}

const Switch: React.FC<ISwitchProps> = (props) => {
  const {
    switchSize,
    className,
    disabled,
    switchColor,
    label,
    checked,
  } = props;

  //controls default bahavior (on or off) of the switch
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = React.useState(defaultChecked);

  let styleClasses = classNames('switch', {
    [`switch-${switchColor}`]: true,
    [`switch-${switchSize}`]: !!switchSize,
    disabled: !!disabled,
  });
  if (className) {
    styleClasses += ' ' + className;
  }
  let swh = (
    <div className={styleClasses}>
      <label className="switch-container">
        <div>
          <input
            type="checkbox"
            className="switch-toggle"
            checked={isChecked}
            //avoid any action when disabled
            onClick={disabled ? (e) => e.preventDefault() : props.onClick}
            //set state to control on/off on the switch
            onChange={() => setIsChecked((prev) => !prev)}
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
