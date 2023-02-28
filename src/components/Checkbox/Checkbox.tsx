import React, { FC, InputHTMLAttributes, LabelHTMLAttributes } from 'react';

import { classNames } from '../../utils/classNames';

export type CheckboxSize = 'sm' | 'lg';

export type CheckboxColor =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'info'
  | 'success'
  | 'warning';

export type CheckboxIcon = 'check' | 'check-circle' | 'check-square';

export interface ICheckboxProps {
  /** set customized style */
  className?: string;
  /** set checkbox size */
  size?: CheckboxSize;
  /** set checkbox color */
  color?: CheckboxColor;
  /** set checkbox icon */
  icon?: CheckboxIcon;
  /** set checkbox checked status */
  checked?: boolean;
}

type NativeInputProps = ICheckboxProps & InputHTMLAttributes<HTMLInputElement>;
// type NativeLabelProps = ICheckboxProps & LabelHTMLAttributes<HTMLLabelElement>;
// export type PatCheckboxProps = NativeInputProps | NativeLabelProps;
export type PatCheckboxProps = NativeInputProps;

export const Checkbox: FC<PatCheckboxProps> = (props) => {
  const { className, size, color, icon, children, checked, onChange, ...rest } =
    props;

  let styleClasses: string = classNames('cb', {
    [`cb-${size}`]: !!size,
    [`cb-${color}`]: !!color,
    [`cb-${icon}`]: !!icon,
    checked: !!checked,
  });
  // add user's custom class
  if (className) {
    styleClasses += ' ' + className;
  }

  const [checkedState, setCheckedState] = React.useState(false);
  // We shouldn't change between controlled and uncontrolled after mount, so we memo this for safety
  const isControlled = React.useMemo(() => checked !== undefined, []);

  // Determines if the checkbox is checked in either controlled or uncontrolled environments
  const mergedChecked = isControlled ? checked : checkedState;

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      if (!isControlled) {
        setCheckedState(event.target.checked);
      } else if (onChange) {
        onChange(event);
      }
    },
    [onChange]
  );

  return (
    <label className={styleClasses}>
      <input
        type="checkbox"
        checked={mergedChecked}
        onChange={handleChange}
        {...(rest as NativeInputProps)}
      />
      {props.children ? props.children : null}
    </label>
  );
};

Checkbox.defaultProps = {
  color: 'primary',
};

export default Checkbox;
