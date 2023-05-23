import React, { FC } from 'react';
export interface IDialogActionsProps{
	/** set style classes*/
	className?:string;
	/** set whether to space child components */
	disableSpacing?:boolean;
}
export type PatDialogActionsProps = IDialogActionsProps

const DialogActions:FC<PatDialogActionsProps> = (props)=>{
const { disableSpacing, children, className } = props;

let dialogActions = <div className={`dialog__actions `+className} data-testid='dialog-actions-element'>{children}</div>
if(disableSpacing) {
	dialogActions.style.gap = 0;
}
return dialogActions;
}
DialogActions.defaultProps = {
	disableSpacing:false
}
export default DialogActions;