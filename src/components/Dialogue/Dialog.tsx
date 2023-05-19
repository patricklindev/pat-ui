import React, { FC, MouseEvent, useState, useEffect } from 'react';
import { classNames } from '../../utils/classNames';

export type DialogCloseReason = 
  | 'backdropClick' 
  | 'escapeKeyDown'

export interface IDialogProps {
  /** set customized style */
  className?: string;
  /** set whether dialog is open / visible */
  open:boolean;
  /** set callback function on closing dialog */
  onClose:(event:object, reason: DialogCloseReason)=>void;
}

export type PatDialogProps = IDialogProps

/**
 * A Button indicates a possible user action.
 *
 * ```js
 * import {Button} from 'pat-ui'
 * ```
 */
export const Dialog: FC<PatDialogProps> = (props) => {
  
  const { open, onClose, children, className, ...rest } = props;
  const handleBackdropClick = (e)=>{
    onClose(e, 'backdropClick')
  }
  const handleEscapeKeyDown = (e) =>{
    if(e.key==='Escape') onClose(e, 'escapeKeyDown');
  }
  let styleClasses = 'dialog';
  if (className) styleClasses += ' ' + className;

  let dialog;
  dialog = open ? (
    <div onClick={handleBackdropClick} tab-index="0" onKeyDown={handleEscapeKeyDown} className={styleClasses}>
      <div onClick={(e)=>{e.stopPropagation()}} className='dialog__body'>
        {props.children}
      </div>
    </div>) : <></>;
  return dialog;
};

Dialog.defaultProps = {
  open:true
};

export default Dialog;
