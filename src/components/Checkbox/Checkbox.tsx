import React, { FC, useState } from 'react';

export interface ICheckboxProps {
  defaultChecked?: boolean;
  disabled?: boolean;
  checked?: boolean;
  label: string;
}

const Checkbox: FC<ICheckboxProps> = (props) => {
  const { disabled, checked, defaultChecked, label } = props;

  const [check, setCheck] = useState(!!defaultChecked || !!checked);

  const onClickHandler = () => {
    setCheck((prev) => !prev);
  };

  return (
    <div>
      <input
        id={label}
        type="checkbox"
        disabled={disabled}
        checked={check}
        onClick={onClickHandler}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

Checkbox.defaultProps = {
  disabled: false,
  checked: false,
  defaultChecked: false,
};

export default Checkbox;
