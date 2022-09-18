import React from 'react';
import { classNames } from '../../utils/classNames';

export type SwitchSize = 'sm' | 'lg';
export type SwitchColor = 'primary' | 'secondary';

export interface ISwitchProps {
  className?: string;
  switchSize?: SwitchSize;
  switchColor?: SwitchColor;
  disabled?: boolean;
  label?: string;
}

const Switch: React.FC<ISwitchProps> = (props) => {
  //   const { switchSize, className, disabled, switchColor, label } = props;

  //   let styleClasses = classNames('btn', {
  //     [`btn-${switchColor}`]: true,
  //     [`btn-${switchSize}`]: !!switchSize,
  //   });
  //   if (className) {
  //     styleClasses += ' ' + className;
  //   }

  return (
    <>
      <label className="switch-label">
        <input type="checkbox" className="switch-toggle" />
        <span className="switch-slider"></span>
      </label>
    </>
  );
};

export default Switch;
