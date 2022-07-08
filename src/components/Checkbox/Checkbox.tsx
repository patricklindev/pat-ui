import React, { FC, useState } from 'react';
import { classNames } from '../../utils/classNames';
// import Icon from '../Icon';

export type CheckboxSize = 'small' | 'large';
export type CheckboxColor = 'secondary' | 'success' | 'default';

export interface ICheckboxProps {
  defaultChecked?: boolean;
  disabled?: boolean;
  checked?: boolean;
  label?: string;
  size?: CheckboxSize;
  className?: string;
  color?: CheckboxColor;
  // icon?: string;
}

const Checkbox: FC<ICheckboxProps> = (props) => {
  const {
    disabled,
    checked,
    defaultChecked,
    label,
    size,
    className,
    color,
    // icon,
  } = props;

  const [check, setCheck] = useState(!!defaultChecked || !!checked);

  let styleClasses = classNames('checkbox', {
    [`checkbox-${color}`]: !!color,
    [`checkbox-${size}`]: !!size,
    // [`checkbox-${icon}`]: !!icon,
  });
  if (className) {
    styleClasses += ' ' + className;
  }

  const onClickHandler = () => {
    setCheck((prev) => !prev);
  };

  return (
    <div className={styleClasses}>
      <input
        type="checkbox"
        disabled={disabled}
        checked={check}
        onClick={onClickHandler}
      />
      {/* {icon && <Icon name={icon} />} */}
      <label>{label}</label>
    </div>
  );
};

Checkbox.defaultProps = {
  disabled: false,
  checked: false,
  defaultChecked: false,
};

export default Checkbox;
