import React, { FC, Fragment, useState } from 'react';

export interface ICheckboxProps {
  defaultChecked?: boolean;
  disabled?: boolean;
  checked?: boolean;
}

const Checkbox: FC<ICheckboxProps> = (props) => {
  const { disabled, checked, defaultChecked } = props;

  const [check, setCheck] = useState(!!defaultChecked || !!checked);

  const onClickHandler = () => {
    setCheck((prev) => !prev);
  };

  return (
    <Fragment>
      <input
        type="checkbox"
        disabled={disabled}
        checked={check}
        onClick={onClickHandler}
      />
    </Fragment>
  );
};

Checkbox.defaultProps = {
  disabled: false,
  checked: false,
  defaultChecked: false,
};

export default Checkbox;
