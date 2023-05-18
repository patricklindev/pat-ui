import React, { FC, MouseEvent } from 'react';
import { classNames } from '../../utils/classNames';

// export enum ButtonSize {
//   Large = 'lg',
//   Small = 'sm',
// }
export type ButtonSize = 'lg' | 'sm';
export type ButtonType =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'default'
  | 'link';
// export enum ButtonType {
//   Primary = 'primary',
//   Secondary = 'secondary',
//   Danger = 'danger',
//   Default = 'default',
//   Link = 'link',
// }
export interface IDialogProps {
  /** set customized style */
  className?: string;
}

type NativeButtonProps = IDialogProps;
type NativeAchorButtonProps = IDialogProps;
export type PatDialogProps = NativeButtonProps | NativeAchorButtonProps;

/**
 * A Button indicates a possible user action.
 *
 * ```js
 * import {Button} from 'pat-ui'
 * ```
 */
export const Dialog: FC<PatDialogProps> = (props) => {
  const { children, className, ...rest } = props;
  let styleClasses = 'dialog';
  if (className) styleClasses += ' ' + className;

  let dialog;
  dialog = <div className={styleClasses}>{props.children}</div>;
  return dialog;
};

Dialog.defaultProps = {};

export default Dialog;
