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
  btnSize?: ButtonSize;
  btnType?: ButtonType;
  children?: React.ReactNode;
}

type NativeButtonProps = IButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
type NativeAchorButtonProps = IButtonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;
type PatButtonProps = NativeButtonProps & NativeAchorButtonProps;

const Button: React.FC<PatButtonProps> = (props) => {
  const {btnSize, btnType = ButtonType.Default, children, ...rest} = props;
  const styleClasses = classNames('btn', {
    [`btn-${btnType}`]: true,
    [`btn-${btnSize}`]: !!btnSize,
  });
  let btn;
  if (btnType !== ButtonType.Link) {
    btn = (
      <button className={styleClasses} {...rest}>
        {props.children}
      </button>
    );
  } else {
    btn = (
      <a className={styleClasses} {...rest}>
        {props.children}
      </a>
    );
  }
  return btn;
};

export default Button;
