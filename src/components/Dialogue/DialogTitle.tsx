import React, { FC } from 'react';
export interface IDialogTitleProps{
	/** set style classes*/
	className?:string;
}
export type PatDialogTitleProps = IDialogTitleProps
/**
 * Dialog Title can be used in a Dialog to alert users
 *
 * ```js
 * import { DialogTitle } from 'pat-ui'
 * ```
 */
const DialogTitle:FC<PatDialogTitleProps> = (props)=>{
	const { children, className } = props;
	return <div className={`dialog__title `+className} data-testid='dialog-title-element'>{children}</div>
}
export default DialogTitle;