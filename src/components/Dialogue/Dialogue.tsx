import React, { FC, useEffect, useRef } from 'react';
import { classNames } from '../../utils/classNames';

export interface IDialogueProps {
  /** set dialogue open */
  open: boolean;
  /** set onClose open */
  onClose: () => void;
  /** set customized dialogue */
  className?: string;
  /** set dialogue title */
  dialogueTitle?: string;
}

export type patDialogueProps = IDialogueProps;
/**
 * A Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.
 *
 * A Dialog is a type of modal window that appears in front of app content to provide critical information or ask for a decision.
 * Dialogs disable all app functionality when they appear, and remain on screen until confirmed, dismissed, or a required action
 * has been taken.
 *
 * Dialogs are purposefully interruptive, so they should be used sparingly.
 * ```js
 * import {Dialogue} from 'pat-ui'
 * ```
 */
export const Dialogue: FC<patDialogueProps> = (props) => {
  const { open, onClose, className, dialogueTitle, children } = props;
  let styleClasses = classNames('dialogue');
  if (className) {
    styleClasses += ' ' + className;
  }
  const dialogRef = useRef(document.createElement('dialog'));

  // set open/close
  useEffect(() => {
    const dialogNode = dialogRef.current;
    if (open) {
      dialogNode.showModal();
    } else {
      dialogNode.close();
    }
  }, [open]);

  // Disable scroll when dialogue is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);

  // Close dialogue when press ESC
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  // Close dialogue when click outside
  useEffect(() => {
    dialogRef.current.addEventListener('click', (e) => {
      const node = e.target as HTMLElement;
      let rect = node.getBoundingClientRect();
      if (
        rect.left > e.clientX ||
        rect.right < e.clientX ||
        rect.top > e.clientY ||
        rect.bottom < e.clientY
      ) {
        onClose();
      }
    });
  }, []);

  let Dialogue = (
    <dialog className={styleClasses} ref={dialogRef}>
      <div className="dialogue-content">
        {dialogueTitle && (
          <div className="dialogue-title" data-testid="dialogue-title-element">
            <h4>{dialogueTitle}</h4>
          </div>
        )}
        <div className="dialogue-children">{children}</div>
      </div>
    </dialog>
  );

  return Dialogue;
};

export default Dialogue;
