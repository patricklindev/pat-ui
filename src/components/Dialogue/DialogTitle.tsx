import React, { FC } from 'react';
export interface IDialogTitleProps{
	/** set style classes*/
	className?:string;
}
export type PatDialogTitleProps = IDialogTitleProps
const DialogTitle:FC<PatDialogTitleProps> = (props)=>{
	const { children, className } = props;
	return <h1>{children}</h1>
}
export default DialogTitle;