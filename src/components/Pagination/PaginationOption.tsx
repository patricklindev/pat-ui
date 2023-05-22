import React, {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  FC,
  MouseEvent,
} from 'react';
import { classNames } from '../../utils/classNames';

export type ButtonSize = 'lg' | 'sm';
export type ButtonType =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'default'
  | 'link';

export interface IButtonProps {
  /** set customized style */
  className?: string;
  /** set button size */
  btnSize?: ButtonSize;
  /** set button type */
  btnType?: ButtonType;
  /** set disabled button */
  disabled?: boolean;
  selected?: boolean;
  shape: string;
  variant?: string;
}

type NativeButtonProps = IButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;
type NativeAchorButtonProps = IButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement>;
export type PatButtonProps = NativeButtonProps | NativeAchorButtonProps;

export const PaginationOption: FC<PatButtonProps> = (props) => {
  const {
    btnSize,
    btnType,
    children,
    disabled,
    selected,
    className,
    shape,
    variant,
    ...rest
  } = props;
  let styleClasses = classNames('pagination--btn', {
    [`pagination--btn-${btnType}`]: true,
    [`pagination--btn-${btnSize}`]: !!btnSize,
    disabled: !!(disabled && btnType === 'link'),
    selected: !!selected,
    round: !!(shape === 'round'),
    outlined: !!(variant === 'outlined'),
  });

  if (className) {
    styleClasses += ' ' + className;
  }

  let btn;
  if (btnType !== 'link') {
    btn = (
      <button
        className={styleClasses}
        disabled={disabled}
        {...(rest as NativeButtonProps)}
      >
        {props.children}
      </button>
    );
  } else {
    if (disabled) {
      rest.onClick = (e: MouseEvent) => {
        e.preventDefault();
      };
    }
    btn = (
      <a
        className={styleClasses}
        disabled={disabled}
        selected={selected}
        {...(rest as NativeAchorButtonProps)}
      >
        {props.children}
      </a>
    );
  }
  return btn;
};

PaginationOption.defaultProps = {
  btnType: 'default',
  disabled: false,
};

export default PaginationOption;
