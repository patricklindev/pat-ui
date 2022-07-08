import React, { FC, useState } from 'react';
import { classNames } from '../../utils/classNames';

export type CheckboxSize = 'small' | 'large';

export interface ICheckboxProps {
  defaultChecked?: boolean;
  disabled?: boolean;
  checked?: boolean;
  label: string;
  size?: CheckboxSize;
  className?: string;
}

const Checkbox: FC<ICheckboxProps> = (props) => {
  const { disabled, checked, defaultChecked, label, size, className } = props;

  const [check, setCheck] = useState(!!defaultChecked || !!checked);

  let styleClasses = classNames('checkbox', {
    [`checkbox-${size}`]: !!size,
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
