import React, { FC, useEffect } from 'react';

// Define the props
export interface DialogProps {
  /** control the open/close of the dialog from props */
  isOpen?: boolean;
  /** listen to the close of the dialog by providing the onClose callback function */
  onClose?: () => void; //e: React.MouseEvent
  /** Developers can provide title, content, actions of the dialog component from children props of the component */
  children?: React.ReactNode;
}

interface DialogTitleProps {
  /** any elements */
  children?: React.ReactNode;
}

interface DialogContentProps {
  /** any elements */
  children?: React.ReactNode;
}

interface DialogActionsProps {
  /** any elements */
  children?: React.ReactNode;
}

export const DialogTitle: FC<DialogTitleProps> = ({ children }) => (
  <h2 className="dialog-title">{children}</h2>
);

export const DialogContent: FC<DialogContentProps> = ({ children }) => (
  <div className="dialog-content">{children}</div>
);

export const DialogActions: FC<DialogActionsProps> = ({ children }) => (
  <div className="dialog-actions">{children}</div>
);
/**
 * Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.
 *
 * ```js
 * import {Dialog} from 'pat-ui'
 * ```
 */
const Dialog: FC<DialogProps> = ({ isOpen, onClose, children }) => {
  //control scroll of body.
  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset');
  }, [isOpen]);

  console.log(isOpen)
  return (
    <div
      className={isOpen ? '' : 'overlay-display'}
      data-testid="dialog-window"
    >
      <div className="dialog">
        <div className="dialog-window" data-testid="dialog-children">
          {children}
        </div>
      </div>
      <div
        className="overlay"
        onClick={onClose}
        data-testid="dialog-dim-background"
      ></div>
    </div>
  );
};

export default Dialog;

// const [open, setOpen] = useState<boolean>(isOpen);
// const handleClickBackDrop = (e: React.MouseEvent) => {
//   setOpen(false);
//   //onClose?.(e); //?
// };
// useEffect(() => {
//   setOpen(isOpen);
// }, [isOpen]);
// useEffect(() => {
//   onClose?.();
// }, [open]);

