//SECTION 1:
import React, { FC, useState } from 'react';
import { classNames } from '../../utils/classNames';

//SECTION 2:
// DEWFINE OPTIONS AVAILABLE TO YOUR END USER

export type SwitchSize = 'md' | 'sm';
export type SwitchColor = 'default' | 'purple' | 'orange' | 'pink';

//SECTION 3:
// INTERFACE

export interface ISwitchProps {
  className?: string;
  swSize?: SwitchSize;
  swColor?: SwitchColor;
  disabled?: boolean;
  label?: string;
  //onChange?: (checked:boolean) => boolean;
  onChange?: () => void;
  switchOn?: boolean;
}

//SECTION 4:
// MAke sure your props are exported

//export type patSwitchProps = ISwitchProps

//SECTION 5: DEFINE HTML/ LOGIC/ PROPS/ VARIABLE DECLARATIONS

export const Switch: FC<ISwitchProps> = (props) => {
  //SECTION 5.1: Make sure the components are carried over into your component

  const {
    swSize,
    swColor,
    children,
    disabled,
    className,
    switchOn,
    onChange,
    label,
    ...rest
  } = props;

  let styleClasses = classNames('switch', {
    [`sw-${swSize}`]: !!swSize,
    [`sw-${swColor}`]: !!swColor,
    disabled: !!disabled,
  });
  if (className) {
    styleClasses += ' ' + className;
  }

  //SECTION 5.2 - YOUR ACTUAL HTML ELEMENTS

  const [checked, setChecked] = useState(switchOn);

  //console.log(checked)
  //const handleOnclick =(checked:boolean)=>{
  const handleOnclick = () => {
    setChecked((prevState) => !prevState);
    //console.log(checked)
    // if(onChange){
    //   onChange(checked);
    // }
  };

  let Switch;
  Switch = (
    <label className={styleClasses}>
      <div className="switch-symbol">
        <input
          type="checkbox"
          checked={checked}
          onClick={onChange ? onChange : handleOnclick}
          disabled={disabled}
        />

        <span className="slider"></span>
      </div>
      <div className="switch-labels">
        <span className="text">{label}</span>
      </div>
    </label>
  );
  return Switch;
};

Switch.defaultProps = {
  swColor: 'default',
  disabled: false,
  swSize: 'md',
};

export default Switch;
