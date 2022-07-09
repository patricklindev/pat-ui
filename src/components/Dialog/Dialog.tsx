import React, { DialogHTMLAttributes, HTMLAttributes, FC, useEffect } from 'react'


export const DialogTitle = (props: any) => (
    <div className='dialog-title'>
        {props.children}
    </div>)

export const DialogActions = (props: any) => (
    <div className='dialog-actions'>
        {props.children}
    </div>)

export const DialogContents = (props: any) => (
    <div className='dialog-content'>
        {props.children}
    </div>)



export interface IDialogProps {
    /**add a function to the Dialog closing handler   */
    onClose?: () => void;
    /**Depreicated to be removed   */
    showDialog?: boolean
    /**Allows users to effect overlay  */
    OverlayAtributes?: any
};

type NativeDivProps = HTMLAttributes<HTMLDivElement>;
type NativeDialogProps = IDialogProps & DialogHTMLAttributes<HTMLDialogElement>;
export type PatDialogProps = NativeDialogProps & NativeDivProps

/**
* A dialog allows for high priority messgaes for users.
*
* ```js
* import {Dialog} from 'pat-ui'
* ```
*/


export const Dialog: FC<PatDialogProps> = (props) => {
    const { children,
        onClose,
        showDialog,
        OverlayAtributes,
        ...rest } = props

    // below we handle the classname for the dialog and overlay 
    let classNameList: string[] = ['dlg']
    let containerClassNameList: string[] = ['dlg-container']

    // Allows users to add a function on close of the Dialog
    const closeHandlerProps = () => {
        if (onClose != undefined) { onClose() }
    }



    { showDialog ? document.body.style.overflow = "hidden" : document.body.style.overflow = 'inherit' }

    return (
        // overlay
        <div
            hidden={!showDialog}
            {...OverlayAtributes as NativeDivProps}
            className={containerClassNameList.join(" ")}
            onClick={(e) => { if (e.target === e.currentTarget) closeHandlerProps() }}
        >

            < dialog //Dialog
                {...rest as NativeDialogProps}
                open={!showDialog}
                hidden={!showDialog}
                className={classNameList.join(" ")} >

                {children}

            </dialog >
        </div>)
}





export default Dialog;