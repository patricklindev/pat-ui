
import React, { Children, DialogHTMLAttributes, useEffect, useState } from 'react'

import Button from '../Button'
import Input from '../Input'


export type DialogType= 
| "simple"
|'alert'
|'form';



export interface IDialogProps {
    /**Set Dialog type  */
    dialogType?: DialogType
    /**Set Dialog title  */
    dialogTitle?: string
    /**Set Dialog main text  */
    dialogParagraph?: string
    /**Set Dialog button ones text  */
    buttonOneText?: string
    /**Set Dialog button twos text  */
    buttonTwoText?: string
    /**add a function to the Dialog closing handler   */
    closeHandlerProps?: ()=>{}
 /**add a function to the Dialog closing handler   */
    showDialog?: boolean
}

type NativeDialogProps = IDialogProps & DialogHTMLAttributes<HTMLDialogElement>;

export type PatDialogProps = NativeDialogProps;


export const Dialog: React.FC<PatDialogProps> = (props) => {
    const { children, dialogType, dialogTitle, dialogParagraph, buttonOneText, buttonTwoText, closeHandlerProps, showDialog = false, ...rest} = props
    const [showModal, setshowModal] = useState(true)
    //default classname  
useEffect(() => {

  setshowModal(showModal => showModal = showDialog)

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
               { ...rest}
                onClick={(e) => {
                    if (e.target === e.currentTarget) onClose()
                }
                }>
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
                : null}
        </>)
}

Dialog.defaultProps = {
    showDialog: false
    
  };

export default Dialog