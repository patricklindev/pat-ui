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
const { dividers, children, className } = props;
if(className) classes += ' ' + className;
	return dividers ? 
	(<div className={classes} data-testid='dialog-content-element'><hr />{children}<hr /></div>) :
	(<div className={classes} data-testid='dialog-content-element'>{children}</div>)
}

DialogContent.defaultProps = {
	dividers:false
}
export default DialogContent;