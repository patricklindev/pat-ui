import React, {
  FC,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  SVGProps,
} from 'react';

import { classNames } from '../../utils/classNames';

export type CheckboxSize = 'sm' | 'lg';

export type CheckboxColor =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'info'
  | 'success'
  | 'warning';

export interface ICheckboxProps {
  /** set customized style */
  className?: string;
  /** set checkbox size */
  size?: CheckboxSize;
  /** set checkbox color */
  color?: CheckboxColor;
  /** set checkbox unchecked icon */
  // icon?: SVGProps<SVGSVGElement>;
  // checkedIcon?: SVGProps<SVGSVGElement>;
  icon?: React.ReactElement;
  /** set checkbox checked icon */
  checkedIcon?: React.ReactElement;
  /** set checkbox checked status */
  checked?: boolean;
}

type NativeInputProps = ICheckboxProps & InputHTMLAttributes<HTMLInputElement>;
// type NativeLabelProps = ICheckboxProps & LabelHTMLAttributes<HTMLLabelElement>;
// export type PatCheckboxProps = NativeInputProps | NativeLabelProps;
export type PatCheckboxProps = NativeInputProps;

export const Checkbox: FC<PatCheckboxProps> = (props) => {
  const {
    className,
    size,
    color,
    icon,
    checkedIcon,
    children,
    checked,
    onChange,
    ...rest
  } = props;

  if (
    (icon != null && checkedIcon === null) ||
    (icon === null && checkedIcon != null)
  ) {
    throw new Error(
      `[PatUI Checkbox] Provide both 'icon' and 'checkedIcon' to Checkbox at the same time.`
    );
  }

  let styleClasses: string = classNames('cb', {
    [`cb-${size}`]: !!size,
    [`cb-${color}`]: !!color,
    checked: !!checked,
  });
  // add user's custom class
  if (className) {
    styleClasses += ' ' + className;
  }

  if (icon) {
    console.log('icon here');
    styleClasses += ' cb-icon';
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
      {icon && checkedIcon ? (
        <span className="cb-icon-container">
          {mergedChecked ? checkedIcon : icon}
        </span>
      ) : null}
      {props.children ? props.children : null}
    </label>
  );
};

Checkbox.defaultProps = {
  color: 'primary',
};

export default Checkbox;
