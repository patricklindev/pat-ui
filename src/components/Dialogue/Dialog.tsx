import React, { FC, MouseEvent, useState, useEffect } from 'react';
import { classNames } from '../../utils/classNames';

export type DialogCloseReason = 
  | 'backdropClick' 
  | 'escapeKeyDown';

export type MaxWidthSizeType = 
'xs'
| 'sm'
| 'md'
| 'lg'
| 'xl'
| false
| string

export type ScrollType = 
| 'body'
| 'paper'

export interface IDialogProps {
  /** set customized style */
  className?: string;
  /** set whether dialog is open / visible */
  open:boolean;
  /** set callback function on closing dialog */
  onClose:(event:object, reason: DialogCloseReason)=>void;
  /** set aria-describedby to include id of element used to describe component*/
  ariaDescribedBy?:string;
  /** set aria-labelledby to include id of element used to label component*/
  ariaLabelledBy?:string;
  /** set whether escape key triggers onClose handler */
  disableEscapeKeyDown?:boolean
  /** set whether the dialog is fullScreen */
  fullScreen?:boolean
  /** set maxWidth of the dialog */
  maxWidth?:MaxWidthSizeType
  /** set scroll */
  scroll?:ScrollType
}

export type PatDialogProps = IDialogProps

/**
 * Dialogs inform users about a task and can contain critical information
 *
 * ```js
 * import {Dialog} from 'pat-ui'
 * ```
 */
export const Dialog: FC<PatDialogProps> = (props) => {
  
  const { open, onClose, disableEscapeKeyDown, children, className, ...rest } = props;
  const handleBackdropClick = (e)=>{
    onClose(e, 'backdropClick')
  }
  const handleEscapeKeyDown = (e) =>{
    if(e.key==='Escape') {
      onClose(e, 'escapeKeyDown');
    }
  }
  const handleBackdropScrollingBasedOnDialogState = ()=>{
    if(open === true) document.body.style.overflow='hidden';
    else document.body.style.overflow='unset'; 
  }
  
  /** add escape key event listener at the start based on props */
  useEffect(()=>{
    if(disableEscapeKeyDown){
      document.addEventListener('keydown', (e)=>{
        handleEscapeKeyDown(e);
      })
    }
  }, [])

  /** enable / disable scrolling of backdrop based on whether dialog is open */
  useEffect(()=>{
    handleBackdropScrollingBasedOnDialogState();
  }, [open])
  
  let styleClasses = 'dialog';
  if (className) styleClasses += ' ' + className;

  let dialog;
  dialog = open ? (
    <div onClick={handleBackdropClick} className={styleClasses} data-testid='dialog-element'>
      <div onClick={(e)=>{e.stopPropagation()}} className='dialog__body' data-testid='dialog-body-element'>
        {props.children}
      </div>
    </div>) : <></>;
  return dialog;
};

Dialog.defaultProps = {
  disableEscapeKeyDown:true,
  maxWidth:'sm',
  fullScreen:false,
  fullWidth:false,
  scroll:'paper'
};

export default Dialog;
