import React, { FC, useState, ChangeEventHandler } from 'react';
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
  onChange?: ChangeEventHandler<HTMLInputElement>;
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
    onChange,
  } = props;

  const [check, setCheck] = useState(defaultChecked || checked);

  const onChangeHandler = () => {
    setCheck((prev) => !prev);
  };

  let styleClasses = classNames('checkbox', {
    [`checkbox-${color}`]: !!color,
    [`checkbox-${size}`]: !!size,
  });
  if (className) {
    styleClasses += ' ' + className;
  }

  return (
    <div className={styleClasses} data-testid="checkbox">
      {icon ? (
        <React.Fragment>
          <input
            className="checkbox-icon"
            type="checkbox"
            disabled={disabled}
            checked={onChange ? checked : check}
            onChange={onChange ? onChange : onChangeHandler}
            data-testid="checkbox-icon-input"
          />
          <Icon name={icon} />
          <label>{label}</label>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <input
            type="checkbox"
            disabled={disabled}
            checked={onChange ? checked : check}
            onChange={onChange ? onChange : onChangeHandler}
            data-testid="checkbox-input"
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
