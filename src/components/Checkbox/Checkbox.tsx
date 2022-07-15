import React, { FC, useState } from 'react';
import { classNames } from '../../utils/classNames';
import Icon from '../Icon';

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
  icon?: string;
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
    icon,
  } = props;

  const [check, setCheck] = useState(defaultChecked || checked);

  let styleClasses = classNames('checkbox', {
    [`checkbox-${color}`]: !!color,
    [`checkbox-${size}`]: !!size,
  });
  if (className) {
    styleClasses += ' ' + className;
  }

  const onChangeHandler = () => {
    setCheck((prev) => !prev);
  };

  return (
    <div className={styleClasses}>
      {icon ? (
        <React.Fragment>
          <input
            className="checkbox-icon"
            type="checkbox"
            disabled={disabled}
            checked={check}
            onChange={onChangeHandler}
          />
          <Icon name={icon} />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <input
            type="checkbox"
            disabled={disabled}
            checked={check}
            onChange={onChangeHandler}
          />
          <label>{label}</label>
        </React.Fragment>
      )}
    </div>
  );
};

Checkbox.defaultProps = {
  disabled: false,
  checked: false,
  defaultChecked: false,
};

export default Checkbox;
