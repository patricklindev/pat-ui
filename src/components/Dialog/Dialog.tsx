

import React, { DialogHTMLAttributes, useEffect, useState,FC } from 'react'
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
    /**Set Dialog button ones text  */
    buttonOneText?: string;
    /**Set Dialog button twos text  */
    buttonTwoText?: string;
    /**add a function to the Dialog closing handler   */
    closeHandlerProps?: any;
    /**Boolean for controling if the dialog is shown   */
    showDialog?: boolean;

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
    const { children, dialogType, dialogTitle, dialogParagraph, buttonOneText, buttonTwoText, closeHandlerProps, showDialog = false, ...rest } = props
    const [showModal, setshowModal] = useState(true)

    useEffect(() => {

        setshowModal(showDialog)

    }, [showDialog])


    let classNameList: string[] = ['dlg']

    const classNames = classNameList.join(" ")

    if (dialogType === 'simple') classNameList.push('dlg-simple')
    if (dialogType === 'alert') classNameList.push('dlg-alert')
    if (dialogType === 'form') classNameList.push('dlg-form')


    const onClose = () => {
        setshowModal(showModal => !showModal)
        if (typeof closeHandlerProps === 'function') { closeHandlerProps() }
    }

    return (
        <>

            {showModal ?

                <dialog
                    className='dlg-container'
                     {...(rest as NativeDialogProps)}
                    onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
                    
                    >
                    < div className={classNameList.join(" ")} >
                        {dialogTitle ? <h3 className='dialogTitle'>{dialogTitle}</h3> : null}
                        {dialogParagraph ? <p className='dialogParagraph'>{dialogParagraph}</p> : null}
                        {dialogType === 'form' ? <div>
                            <input placeholder="Email Address" />
                        </div> : null}
                        <div className='dlg-btns'>
                            {buttonOneText ? <Button btnType="link"
                                disabled={false}>{buttonOneText}</Button> : null}
                            {buttonTwoText ? <Button btnType="link"
                                disabled={false}>{buttonTwoText}</Button> : null}
                        </div>
                        {children}
                    </div >
                </dialog >
                : <></>}
        </>)

}




export default Dialog;