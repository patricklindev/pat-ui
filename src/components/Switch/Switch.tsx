import React, {
  FC,
  InputHTMLAttributes,
  useState,
} from 'react';
import { classNames } from '../../utils/classNames';


export type SwitchSize = 'lg' | 'sm';
export type SwitchType =
  | 'primary'
  | 'secondary'
  | 'default';

export interface ISwitchProps {
  className?: string;
  swSize?: SwitchSize;
  swType?: SwitchType;
  disabled?: boolean;
  defaultChecked?: boolean;
  id?: string;
  onChange?: (val: boolean) => void;
}

type NativeSwitchProps = ISwitchProps & InputHTMLAttributes<HTMLInputElement>;

export const Switch: FC<NativeSwitchProps> = (props) => {
  const { swSize, swType, disabled, defaultChecked, id, onChange, ...rest } = props;

  const [isChecked, setIsChecked] = useState(defaultChecked)

  let styleClassesWrapper = classNames('sw__wrapper', {
    [`sw__wrapper-${swType}`]: true,
    [`sw__wrapper-${swSize}`]: !!swSize,
    disabled: !!disabled,
  });

  let styleClassesLabel = classNames('sw__label', {
    [`sw__label-${swType}`]: true,
    [`sw__label-${swSize}`]: !!swSize,
    disabled: !!disabled,
  });

  const handleClick = (e: any) => {
    setIsChecked(!isChecked);
    if(onChange){
      onChange(e.target.checked);
    }
    // console.log(e.target.checked)
  }

  let sw;
  sw = (
    <div className={styleClassesWrapper} {...rest as NativeSwitchProps}>
      <input
        type="checkbox"
        className="sw__checkbox"
        id={id}
        defaultChecked={defaultChecked}
        onChange={handleClick}
      />
      <label
        className={styleClassesLabel}
        htmlFor={id}>
      </label>
    </div>
  )

  return sw
}

Switch.defaultProps = {
  swType: 'primary',
  defaultChecked: false,
  id: 'origin-sw',
}

export default Switch;