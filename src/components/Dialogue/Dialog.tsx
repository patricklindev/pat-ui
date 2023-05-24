import React, { FC, MouseEvent, useEffect, HTMLAttributes } from 'react';
import { classNames } from '../../utils/classNames';

export type DialogCloseReason = 'backdropClick' | 'escapeKeyDown';

export type MaxWidthSizeType =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | false
  | string;

const MaxWidthSizeTypeClass = {
  xs: '--dialog-body-max-width-xs',
  sm: '--dialog-body-max-width-sm',
  md: '--dialog-body-max-width-md',
  lg: '--dialog-body-max-width-lg',
  xl: '--dialog-body-max-width-xl',
};

export type ScrollType = 'body' | 'paper';

export interface IDialogProps {
  /** set customized style */
  className?: string;
  /** set whether dialog is open / visible */
  open: boolean;
  /** set callback function on closing dialog */
  onClose: (event: object, reason: DialogCloseReason) => void;
  /** set aria-describedby to include id of element used to describe component*/
  ariaDescribedBy?: string;
  /** set aria-labelledby to include id of element used to label component*/
  ariaLabelledBy?: string;
  /** set whether escape key triggers onClose handler */
  disableEscapeKeyDown?: boolean;
  /** set maxWidth */
  maxWidth?: MaxWidthSizeType;
  /** set whether the dialog is fullScreen */
  fullScreen?: boolean;
  /** set scroll */
  scroll?: ScrollType;
}

export type PatDialogProps = IDialogProps & HTMLAttributes<HTMLDivElement>;

/**
 * Dialogs inform users about a task and can contain critical information
 *
 * ```js
 * import {Dialog} from 'pat-ui'
 * ```
 */
export const Dialog: FC<PatDialogProps> = (props) => {
  const {
    open,
    onClose,
    disableEscapeKeyDown,
    maxWidth,
    children,
    className,
    ...rest
  } = props;
  const handleBackdropClick = (e: MouseEvent) => {
    onClose(e, 'backdropClick');
  };
  const handleEscapeKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose(e, 'escapeKeyDown');
    }
  };
  const handleBackdropScrollingBasedOnDialogState = () => {
    if (open === true) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  };

  /** add escape key event listener at the start based on props */
  useEffect(() => {
    if (disableEscapeKeyDown) {
      document.addEventListener('keydown', (e: KeyboardEvent) => {
        handleEscapeKeyDown(e);
      });
    }
  }, []);

  /** enable / disable scrolling of backdrop based on whether dialog is open */
  useEffect(() => {
    handleBackdropScrollingBasedOnDialogState();
  }, [open]);

  let styleClasses;
  if (className) styleClasses = 'dialog ' + className;
  else styleClasses = 'dialog';
  let dialogBodyClasses = 'dialog__body';
  if (maxWidth !== false) {
    switch (maxWidth) {
      case 'xs': {
        dialogBodyClasses += ' ' + MaxWidthSizeTypeClass.xs;
        break;
      }
      case 'sm': {
        dialogBodyClasses += ' ' + MaxWidthSizeTypeClass.sm;
        break;
      }
      case 'md': {
        dialogBodyClasses += ' ' + MaxWidthSizeTypeClass.md;
        break;
      }
      case 'lg': {
        dialogBodyClasses += ' ' + MaxWidthSizeTypeClass.lg;
        break;
      }
      case 'xl': {
        dialogBodyClasses += ' ' + MaxWidthSizeTypeClass.xl;
        break;
      }
      default: {
        dialogBodyClasses += ` ${MaxWidthSizeTypeClass.sm}`;
        break;
      }
    }
  }
  let dialog;
  dialog = open ? (
    <div
      onClick={handleBackdropClick}
      className={classNames(styleClasses)}
      data-testid="dialog-element"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={classNames(dialogBodyClasses)}
        data-testid="dialog-body-element"
      >
        {props.children}
      </div>
    </div>
  ) : (
    <></>
  );
  return dialog;
};

Dialog.defaultProps = {
  disableEscapeKeyDown: true,
  maxWidth: 'sm',
  fullScreen: false,
  scroll: 'paper',
};

export default Dialog;
