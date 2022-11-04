import React, { FC, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
// import Button from '../Button/Button';
import { classNames } from '../../utils/classNames';

export type DialogType = 'basic' | 'alert' | 'form';

export interface IDialogProps {
  /** set customized card */
  className?: string;
  /** set dialogue type */
  dialogType?: DialogType;
  /** set dialogue title */
  dialogTitle?: string;
  /** set dialogue Content */
  dialogContent?: ReactNode;
  // /** set dialogue Actions */
  // dialogActions?: ReactNode;
  /** set action on dialogue close */
  onClose?: (e: any) => void;
  /** set if the dialog is opened */
  open?: boolean;
}
export type patDialogProps = IDialogProps;

export const DialogActions: FC = (props) => (
  <div className="dialog-actions">{props.children}</div>
);

/**
 * Dialogs inform users about a task and can contain critical information, require decisions,
 * or involve multiple tasks.
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
    ...rest
  } = props;

  /*
   * hide the scroll bar when the dialog is open
   */
  useEffect(() => {
    open
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [open]);

  let styleClasses = classNames('dialog', {
    [`dialog-${dialogType}`]: true,
  });

  if (className) {
    styleClasses += ' ' + className;
  }

  let Dialog = open
    ? createPortal(
        <div>
          <div className="dialog-cover" onClick={onClose}></div>
          <div className="dialog-container">
            <div className={styleClasses} data-testid="dialog-element">
              <h5 className={styleClasses + ' title'}>{dialogTitle}</h5>
              {dialogContent ? (
                <p
                  className={styleClasses + ' content'}
                  data-testid="dialog-content-element"
                >
                  {dialogContent}
                </p>
              ) : (
                <span></span>
              )}
              {children}
            </div>
          </div>
        </div>,
        document.getElementById('root') as HTMLElement
      )
    : null;

  return Dialog;
};

Dialog.defaultProps = {
  dialogTitle: 'Title',
  dialogType: 'basic',
  dialogContent: '',
  // dialogActions: <span></span>,
  open: true,
};
export default Dialog;
