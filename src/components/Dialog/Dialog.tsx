import React, { DialogHTMLAttributes, HTMLAttributes, FC, useState } from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';


export interface IDialogProps {
    /**add a function to the Dialog closing handler   */
    closeHandler?: () => void;
    /*variable to determain if the dialog is closed or open */
    showDialog?: boolean
    /** attribur for the overlay  */
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
        closeHandler,
        showDialog,
        OverlayAtributes,
        ...rest } = props

    // below we handle the classname for the dialog and overlay 
    let classNameList: string[] = ['dlg']
    let containerClassNameList: string[] = ['dlg-container']

   
    // Allows users to add a function on close of the Dialog
    const didMount = useRef(false);
    const closeHandlerProps = () => {
        if (closeHandler != undefined) { closeHandler() }
        didMount.current = false;
    }

    // this is to ensure that the closeHandler always runs no matter how the Dialog is closed 
    useEffect(() => {
        if (didMount.current) {
            if (showDialog == false) {
                if (closeHandler != undefined) closeHandler()
            }
        }
        else didMount.current = true;
    }, [showDialog])



    //scroll behavoir 
    const [previousScrollBehavior, setpreviousScrollBehavior] = useState(document.body.style.overflow)
    { showDialog ? document.body.style.overflow = "hidden" : document.body.style.overflow = previousScrollBehavior }

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

