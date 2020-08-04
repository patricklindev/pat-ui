import React, {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  FC,
  MouseEvent,
} from 'react';
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
  /** set customized style */
  className?: string;
  /** set button size */
  btnSize?: ButtonSize;
  /** set button type */
  btnType?: ButtonType;
  /** set disabled button */
  disabled?: boolean;
}

type NativeButtonProps = IButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;
type NativeAchorButtonProps = IButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement>;
type PatButtonProps = NativeButtonProps | NativeAchorButtonProps;

/**
 * A Button indicates a possible user action.
 *
 * ```js
 * import {Button} from 'pat-ui'
 * ```
 */
export const Button: FC<PatButtonProps> = (props) => {
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
      rest.onClick = (e: MouseEvent) => {
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
