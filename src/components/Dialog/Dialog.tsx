

import React, { DialogHTMLAttributes,FC } from 'react'
import Button from '../Button'
export type DialogType =
    | 'simple'
    | 'alert'
    | 'form';

export interface IDialogProps {

    /**Set Dialog type  */
    dialogType?: DialogType;
    /**Set Dialog title  */
    dialogTitle?: string;
    /**Set Dialog main text  */
    dialogParagraph?: string;
    /**add a function to the Dialog closing handler   */
    closeHandlerProps?: any;
    /**Boolean for controling if the dialog is shown   */
    showDialog?: boolean;
    onClick?: ()=> void

};


type NativeDialogProps = IDialogProps & DialogHTMLAttributes<HTMLDialogElement>;
export type PatDialogProps = NativeDialogProps;


/**
* A dialog allows user to select from multiple actions.
*
* ```js
* import {Dialog} from 'pat-ui'
* ```
*/


export const Dialog: FC<PatDialogProps> = (props) => {
    const { children, dialogType, dialogTitle, dialogParagraph, closeHandlerProps, ...rest } = props
    let classNameList: string[] = ['dlg']
    const classNames = classNameList.join(" ")

    if (dialogType === 'simple') classNameList.push('dlg-simple')
    if (dialogType === 'alert') classNameList.push('dlg-alert')
    if (dialogType === 'form') classNameList.push('dlg-form')

    const onClose = () => {
        if (typeof closeHandlerProps === 'function') { closeHandlerProps() }

    }

    
    return (

                <div

        
                    className='dlg-container'
                    onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
                    
                    >
                    < dialog 
                      open={true}
                  
                    className={classNameList.join(" ")} >
                        {dialogTitle ? <h3 className='dialogTitle'>{dialogTitle}</h3> : null}
                        {dialogParagraph ? <p className='dialogParagraph'>{dialogParagraph}</p> : null}


                        {children}
                    </dialog >
                </div>)}




export default Dialog;