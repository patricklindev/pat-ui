import React, { DialogHTMLAttributes, HTMLAttributes, FC, useState } from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { classNames } from '../../utils/classNames';


export interface IDialogProps {
    /**add a function to the Dialog closing handler */
    onClose?: () => void;
    /*variable to determine if the dialog is closed or open */
    showDialog?: boolean
    /** Atributes for the overlay  */
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

    // classnames for the dialog and overlay 
    let classNameList: string[] = ['dlg']
    let containerClassNameList: string[] = ['dlg-container']

    // Allows users to add a function on close of the Dialog
    const didMount = useRef(false);

    const handleClose = () => {
        if (onClose != undefined) { onClose() } //onClose is a functon the dev passes
        didMount.current = false; // this is set so the use effect does not run if closed by this method
    }

    // this is to ensure that the onClose always runs no matter how the Dialog is closed 
    useEffect(() => {
        if (didMount.current) {
            if (showDialog == false) {
                if (onClose != undefined) onClose()
            }
        }
        else didMount.current = true;
    }, [showDialog])

    //scroll behavior 
    const [previousScrollBehavior, setpreviousScrollBehavior] = useState(document.body.style.overflow)
    { showDialog ? document.body.style.overflow = "hidden" : document.body.style.overflow = previousScrollBehavior }

    return (
        // overlay
        <div
            hidden={!showDialog}
            {...OverlayAtributes as NativeDivProps}
            className={containerClassNameList.join(" ")}
            onClick={(e) => { if (e.target === e.currentTarget) handleClose() }}
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

export const DialogTitle: FC<NativeDivProps> = (props: any) => {
    const { children, ...rest } = props
    return (<div
        {...rest as NativeDivProps}
        className='dialog-title'>
        {props.children}
    </div>)
}

export const DialogActions: FC<NativeDivProps> = (props: any) => {
    const { children, ...rest } = props
    return (<div
        {...rest as NativeDivProps}
        className='dialog-actions'>
        {props.children}
    </div>)
}

export const DialogContents: FC<NativeDivProps> = (props: any) => {
    const { children, ...rest } = props
    return (<div
        {...rest as NativeDivProps}
        className='dialog-contents'>
        {props.children}
    </div>)
}

Dialog.defaultProps = {
    showDialog: true,

};
export default Dialog;