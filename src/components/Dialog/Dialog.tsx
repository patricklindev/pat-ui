import React, { DialogHTMLAttributes, FC } from 'react'
export type DialogType =
    | 'simple'
    | 'alert'
    | 'form';

export const DialogTitle = (props:Element) => (
    <div className='dialog-title'>
        {props.children}
    </div>)

export const DialogActions = (props:Element) => (
    <div className='dialog-actions'>
        {props.children}
    </div>)

export const DialogContents = (props:Element) => (
    <div className='dialog-actions'>
        {props.children}
    </div>)



export interface IDialogProps {

    /**Set Dialog type  */
    dialogType?: DialogType;
    /**Set Dialog title  */
    dialogTitle?: string;
    /**Set Dialog main text  */
    dialogParagraph?: string;
    /**add a function to the Dialog closing handler   */
    closeHandlerProps?: any;
    /**Depreicated to be removed   */
    showDialog?: boolean
    /**Allows users to effect overlay  */
    overlayFunctions?: any
    DialogTitle?: object
    DialogActions?: object
    DialogContents?: object
};

//type NativeDivProps = DivHTMLElements<HTMLDivElement>;
type NativeDialogProps = IDialogProps & DialogHTMLAttributes<HTMLDialogElement>;
export type PatDialogProps = NativeDialogProps;

/**
* A dialog allows for high priority messgaes for users.
*
* ```js
* import {Dialog} from 'pat-ui'
* ```
*/




export const Dialog: FC<PatDialogProps> = (props) => {
    const { children,
        dialogType,
        dialogTitle,
        DialogTitle,
        dialogParagraph,
        closeHandlerProps,
        showDialog,
        DialogActions,
        overlayFunctions,
        DialogContents,
        ...rest } = props

    // below we handle the classname for the dialog and overlay 
    let classNameList: string[] = ['dlg']
    let containerClassNameList: string[] = ['dlg-container']


    if (dialogType === 'simple') classNameList.push('dlg-simple') && containerClassNameList.push('dlg-simple-container')
    if (dialogType === 'alert') classNameList.push('dlg-alert') && containerClassNameList.push('dlg-alert-container')
    if (dialogType === 'form') classNameList.push('dlg-form') && containerClassNameList.push('dlg-form-container')


    // Allows users to add a function on close of the Dialog
    const onClose = () => {
        document.body.style.overflow = "scroll" // allows scrolling again
        closeHandlerProps()
    }


    document.body.style.overflow = "hidden" //disables scrolling 
    //document.body.style.background = 'rgba(0, 0, 0, .99)'

    return (
        // Container with an onClick handler 
        <div
            // {...rest as NativeDialogProps}
            {...overlayFunctions}
            className={containerClassNameList.join(" ")}
            onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
        >

            < dialog
                {...rest as NativeDialogProps}
                open={true} // this helps to avoid some bugs
                className={classNameList.join(" ")} >
                {dialogTitle ? <h3 className='dialogTitle'>{dialogTitle}</h3> : null}
                {dialogParagraph ? <p className='dialogParagraph'>{dialogParagraph}</p> : null}


                {DialogTitle}
                {DialogActions}
                {DialogContents}

                <div id='child-container'>
                    {children}
                </div>
            </dialog >
        </div>)
}

Dialog.defaultProps = {
    dialogType: 'alert'
};



export default Dialog;