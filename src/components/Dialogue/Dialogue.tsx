import React, { FC, ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { classNames } from '../../utils/classNames';

export type DialogType = 'basic' | 'default' | 'full-screen';

export interface IDialogProps {
  /** set customized card */
  className?: string;
  /** set dialogue type */
  dialogType?: DialogType;
  /** set dialogue title */
  dialogTitle?: string;
  /** set dialogue Content */
  dialogContent?: ReactNode;
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

  // set the visibliity as a state in case the window jittering when it renders
  const [visible, setVisible] = useState<boolean>(open as boolean);

  // hide the scroll bar when the dialog is open
  useEffect(() => {
    open
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
    setVisible(open as boolean);
  }, [open]);

  let styleClasses = classNames('dialog', {
    [`dialog-${dialogType}`]: true,
  });
  if (className) {
    styleClasses += ' ' + className;
  }

  let Dialog = visible
    ? createPortal(
        <div>
          {/* The mask layer for the dialogue, providing the dimmed backdrop */}
          <div className="dialog-cover" onClick={onClose}></div>
          {/* Main dialog container */}
          <div className="dialog-container">
            <div className={styleClasses} data-testid="dialog-element">
              {dialogTitle ? (
                <h5 className={styleClasses + ' title'}>{dialogTitle}</h5>
              ) : null}
              {dialogContent ? (
                <p
                  className={styleClasses + ' content'}
                  data-testid="dialog-content-element"
                >
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
  <div className="dialog-actions">{props.children}</div>
);
