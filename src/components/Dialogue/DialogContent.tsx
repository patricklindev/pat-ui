import React, { FC } from 'react';
export interface IDialogContentProps{
	/** set style classes*/
	className?:string;
	/** set dividers option */
	dividers?:boolean;
}
export type PatDialogContentProps = IDialogContentProps
const DialogContent:FC<PatDialogContentProps> = (props)=>{
let classes = 'dialog__content';
const { children, className } = props;
if(className) classes += ' ' + className;
	return <div className={classes}>{children}</div>
}

DialogContent.defaultProps = {
	dividers:false
}
export default DialogContent;