import React, { DialogHTMLAttributes, FC } from 'react'
export type DialogType =
    | 'simple'
    | 'alert'
    | 'form';

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

    /**A  Dialog type  */
    dialogType?: DialogType;
    /**a Div for the Dialogs title  */
    DialogTitle?: Element
    /**a Div for the  main text  */
    DialogContents?: Element
    /**A div for the Dialog actions */
    DialogActions?: Element
    /**add a function to the Dialog closing handler   */
    closeHandlerProps?: any;
    /**Depreicated to be removed   */
    showDialog?: boolean
    /**Allows users to effect overlay  */
    overlayFunctions?: any



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
        DialogTitle,
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
 console.log(children)
    return (
        // overlay
        <div
            // {...rest as NativeDialogProps}
            {...overlayFunctions}
            className={containerClassNameList.join(" ")}
            onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
        >

            < dialog //Dialog
                {...rest as NativeDialogProps}
                open={true} // this helps to avoid some bugs
                className={classNameList.join(" ")} >
          
          {/* checks ato see if children are an array, if so it runs a map function */}
            {  
            // children?.length> 1?
            //   children?.map((child: Element) => (child))
            // : 
            children
            }

            </dialog >
        </div>)
}

Dialog.defaultProps = {
    dialogType: 'alert'
};



export default Dialog;