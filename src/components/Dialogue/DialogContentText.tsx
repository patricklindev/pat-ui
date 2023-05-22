import React, { FC } from 'react';
export interface IDialogContentTextProps{
	/** set style classes*/
	className?:string;
}
export type PatDialogContentTextProps = IDialogContentTextProps
const DialogContentText:FC<PatDialogContentTextProps> = (props)=>{
let classes = 'dialog__content-text';
const { children, className } = props;
if(className) classes += ' ' + className;
	return <div className={classes}>{children}</div>
}
export default DialogContentText;