import React, { FC } from 'react';
export interface IDialogActionsProps{
	/** set style classes*/
	className?:string;
}
export type PatDialogActionsProps = IDialogActionsProps
const DialogActions:FC<PatDialogActionsProps> = (props)=>{
const { children, className } = props;
return <div className={className}>{children}</div>
}
export default DialogActions;