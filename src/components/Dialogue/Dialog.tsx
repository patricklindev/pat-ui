import React, { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { classNames } from '../../utils/classNames';

export type DialogType = 'basic' | 'default' | 'full-screen';

export interface IDialogProps {
  /** set customized dialog className */
  className?: string;
  /** set dialogue type */
  dialogType?: DialogType;
  /** set dialogue title */
  dialogTitle?: string;
  /** set dialogue Content */
  dialogContent?: ReactNode | string;
  /** set action on dialogue close */
  onClose?: (e: any) => void;
  /** set if the dialog is opened */
  open?: boolean;
}

export type patDialogProps = IDialogProps;
/**
 * Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.
 *
 * ```js
 * import {Dialog} from 'pat-ui'
 * ```
 */
export const Dialog: FC<patDialogProps> = (props) => {
  const {
    dialogTitle,
    dialogType,
    dialogContent,
    open,
    children,
    className,
    onClose,
  } = props;

  let styleClasses = classNames('dialog', {
    [`dialog-${dialogType}`]: true,
  });

  if (className) {
    styleClasses += ' ' + className;
  }

  // hide the scroll bar when the dialog is open
  document.body.style.overflow = open ? 'hidden' : 'auto';

  let Dialog = open
    ? createPortal(
        <div>
          {/* The mask layer for the dialogue, providing the dimmed backdrop */}
          <div
            className="dialog-cover"
            data-testid="dialog-mask"
            onClick={onClose}
          ></div>
          {/* Main dialog container */}
          <div className="dialog-container">
            <div className={styleClasses} data-testid="dialog-element">
              {/* title and content of the dialog will be displayed as priority elements */}
              {dialogTitle ? <h5 className="title">{dialogTitle}</h5> : null}
              {dialogContent ? (
                <p className="content" data-testid="dialog-content-element">
                  {dialogContent}
                </p>
              ) : null}
              {children}
            </div>
          </div>
        </div>,
        document.body as HTMLElement
      )
    : null;

  return Dialog;
};

Dialog.defaultProps = {
  dialogType: 'default',
  open: false,
};
export default Dialog;

// The DialogAction Component to store action buttons, it's simply just a wrapper with style
export const DialogActions: FC = (props) => (
  <div className="dialog-actions" data-testid="dialog-actions-element">
    {props.children}
  </div>
);
