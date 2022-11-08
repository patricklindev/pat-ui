import React, { FC, useState } from 'react';

export type SwitchColor = 'primary' | 'secondary' | 'default';
export type SwitchSize = 'small' | 'medium';

export interface ISwitchProps {
  color?: SwitchColor;
  size?: SwitchSize;
  disabled?: boolean;
  defaultChecked?: boolean;
  onClick?: (e: MouseEvent) => void;
  label?: string;
}

export const Switch: FC<ISwitchProps> = ({
  color = 'default',
  size = 'medium',
  disabled = false,
  defaultChecked = false,
  onClick,
  label,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };
  const handleClick = (event: any) => {
    onClick?.(event);
  };
  const constructClassName = () => {
    const switchColor = `switch-${color}`;
    const switchSize = `switch-${size}`;
    return ['switch', switchColor, switchSize].join(' ');
  };
  return (
    <label
      className={disabled ? 'switch' : constructClassName()}
      data-testid="switchEl"
    >
      <input
        onClick={handleClick}
        type="checkbox"
        onChange={handleChange}
        disabled={disabled}
        defaultChecked={defaultChecked}
        data-testid="checkBoxEl"
      />
      <span data-testid="sliderEl" className="slider round"></span>
      <span data-testid="labelEl" className="label">
        {label}
      </span>
    </label>
  );
};

export default Switch;
