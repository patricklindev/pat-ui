import React, { ChangeEvent, FC, ReactNode, useEffect, useState } from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';

export type CheckboxColor = 'primary' | 'secondary' | 'default';
export type CheckboxSize = 'small' | 'medium';

/*here we use interface, because we define it Object, interface designed for object
so we are not using type instead, second we can use extend keyword, can extend another Object*/
export interface ICheckboxProps {
  color?: CheckboxColor;
  size?: CheckboxSize;
  disabled?: boolean;
  label?: string;
  icon?: ReactNode;
  checkedIcon?: ReactNode;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent) => void;
}
export const Checkbox: FC<ICheckboxProps> = (props) => {
  //if user not provided, it will be undefined, then we need default value
  const {
    color = 'default',
    size = 'medium',
    disabled = false,
    label = '',
    icon = <MdCheckBoxOutlineBlank />,
    checkedIcon = <MdCheckBox />,
    checked = false,
    onChange,
    onClick,
  } = props;

  const [isChecked, setChecked] = useState(checked);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setChecked(e.target.checked);
    setChecked((prev) => !prev);
    onChange?.(e); //if it is undefined, ignore it, otherwise(e)
  };

  const handleClick = (e: React.MouseEvent) => {
    // setChecked(e.target.checked);
    if (disabled) return;
    setChecked((prev) => !prev);
    onClick?.(e); //if it is undefined, ignore it, otherwise(e)
  };

  const constructClassName: () => string = () => {
    const colorSizeCls = `chk-${color}-${size}`;
    const sizeCls = `chk-${size}`;
    return ['chk', colorSizeCls, sizeCls].join(' ');
  };
  //chk chk-primary-small chk-small

  const constructIconClassName: () => string = () => {
    const colorSizeCls = `chk--icon-${color}-${size}`;
    const sizeCls = `chk--icon-${size}`;
    const dis = disabled ? `chk--icon-${size}-disabled` : '';
    if (disabled) {
      return ['chk--icon', sizeCls, dis].join(' ');
    } else {
      return ['chk--icon', colorSizeCls, sizeCls, dis].join(' ');
    }
  };
  // disabled: true --> chk--icon chk--icon-small chk--icon-small-disabled
  // disabled:false --> chk--icon chk--icon-primary-small

  const iconCheckbox: () => ReactNode = () => {
    if (disabled) {
      return checkedIcon;
    } else if (isChecked) {
      return checkedIcon;
    } else {
      return icon;
    }
  };
  const constructContainerClassName: () => string = () => {
    return `checkbox--container-${size}`;
  };
  //"checkbox--container"

  return (
    <label htmlFor="checkbox" className={constructContainerClassName()}>
      <span className="checkbox--input">
        <input
          data-testid="hidden-chk"
          name="checkbox"
          type="checkbox"
          className={constructClassName()}
          checked={isChecked}
          onChange={handleChange}
          disabled={disabled}
        />
        <span
          className={constructIconClassName()}
          data-testid="medium-checkbox"
        >
          {iconCheckbox()}
        </span>
      </span>
      <span className="labelSpan" onClick={handleClick}>
        {label}
      </span>
    </label>
  );
};

Checkbox.defaultProps = {
  color: 'default',
  size: 'medium',
  // checked: false,
};
export default Checkbox;
