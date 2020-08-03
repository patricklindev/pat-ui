import React from 'react';
import {classNames} from '../../utils/classNames';

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm',
}
export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
  Danger = 'danger',
  Default = 'default',
  Link = 'link',
}
export interface IButtonProps {
  className?: string;
  btnSize?: ButtonSize;
  btnType?: ButtonType;
  children?: React.ReactNode;
  disabled?: boolean;
}

type NativeButtonProps = IButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
type NativeAchorButtonProps = IButtonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;
type PatButtonProps = NativeButtonProps | NativeAchorButtonProps;

const Button: React.FC<PatButtonProps> = (props) => {
  const {btnSize, btnType, children, disabled, className, ...rest} = props;
  let styleClasses = classNames('btn', {
    [`btn-${btnType}`]: true,
    [`btn-${btnSize}`]: !!btnSize,
    disabled: !!(disabled && btnType === ButtonType.Link),
  });
  if (className) {
    styleClasses += ' ' + className;
  }

  let btn;
  if (btnType !== ButtonType.Link) {
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
      rest.onClick = (e: React.MouseEvent) => {
        e.preventDefault();
      };
    }
    btn = (
      <a className={styleClasses} {...(rest as NativeAchorButtonProps)}>
        {props.children}
      </a>
    );
  }
  return btn;
};

Button.defaultProps = {
  btnType: ButtonType.Default,
  disabled: false,
};

export default Button;
