//SECTION 1:
import React, { FC, ReactNode, useEffect, useState } from 'react';
import { classNames } from '../../utils/classNames';

//SECTION 2:
// DEWFINE OPTIONS AVAILABLE TO YOUR END USER

export type SwitchSize = 'md' | 'sm';
export type SwitchColor = 'default' | 'purple' | 'orange' | 'pink';
export type SwitchType = 'default' | 'labeled';

//SECTION 3:
// INTERFACE

export interface ISwitchProps {
  className?: string;
  swSize?: SwitchSize;
  swType?: SwitchType;
  swColor?: SwitchColor;
  disabled?: boolean;
  //showLabel?: boolean;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

//SECTION 4:
// MAke sure your props are exported

//export type patSwitchProps = ISwitchProps

//SECTION 5: DEFINE HTML/ LOGIC/ PROPS/ VARIABLE DECLARATIONS

export const Switch: FC<ISwitchProps> = (props) => {
  //SECTION 5.1: Make sure the components are carried over into your component

  const { swSize, swColor, swType, children, disabled, className, label, ...rest } =
    props;
  let styleClasses = classNames('switch', {
    [`sw-${swSize}`]: !!swSize,
    [`sw-${swColor}`]: !!swColor,
    [`sw-${swType}`]: !!swType,
    disabled: !!disabled,
  });
  if (className) {
    styleClasses += ' ' + className;
  }

  //SECTION 5.2 - YOUR ACTUAL HTML ELEMENTS
  let Switch;
  if (swType == 'labeled') {
    Switch = (
      <label className={styleClasses}>
        <div className='lalala'>
        <input type="checkbox" disabled={disabled} />
        <span className="slider"></span>
        </div>
        <div className="switch-labels">
                <span className="text">{label}</span>
            </div>
      </label>
  );
  }else{
  Switch = (
      <label className={styleClasses}>
        <input type="checkbox" disabled={disabled} />
        <span className="slider"></span>
      </label>

  );
  }
  return Switch;
};

//
Switch.defaultProps = {
  swColor: 'default',
  swType: 'default',
  disabled: false,
};

export default Switch;
