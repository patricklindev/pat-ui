import React, { FC, ReactNode } from 'react';
import Button from '../Button/Button';
import { classNames } from '../../utils/classNames';

export type DialogueType = 'simple' | 'alerts' | 'form';

export interface IDialogueProps {
  /** set customized dialogue */
  className?: string;
  /** set dialogue mode */
  DialogueType?: DialogueType;
  /** set dialogue title */
  dialogueTitle?: string;
  /** set dialogue content */
  dialogueParagraph?: ReactNode;
  /** set confirmBtn title */
  confirmBtnTitle?: string;
  /** set cancelBtn title */
  cancelBtnTitle?: string;
  /** set confirmBtn onClick */
  confirmBtnOnClick?: () => void;
  /** set cancelBtn onClick */
  cancelBtnOnClick?: () => void;
}

export type patDialogueProps = IDialogueProps;
/**
 * A Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.
 *
 * ```js
 * import {Dialogue} from 'pat-ui'
 * ```
 */
export const Dialogue: FC<patDialogueProps> = (props) => {
  const {
    className,
    DialogueType,
    dialogueTitle,
    dialogueParagraph,
    confirmBtnTitle,
    cancelBtnTitle,
    confirmBtnOnClick,
    cancelBtnOnClick,
    ...rest
  } = props;
  let Dialogue = (<div></div>)

  return Dialogue;

};
Dialogue.defaultProps = {
  DialogueType: 'simple',
};
export default Dialogue;
