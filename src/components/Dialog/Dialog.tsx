
import React, { Children, useState } from 'react'
import Button from '../Button'
import Input from '../Input'


interface IDialogProps {
    dialogType?: string
    dialogTitle?: string
    dialogParagraph?: string
    buttonOneText?: string
    buttonTwoText?: string
    closeHandlerProps?: any

}




const Dialog: React.FC<IDialogProps> = (props) => {
    const { children, dialogType, dialogTitle, dialogParagraph, buttonOneText, buttonTwoText, closeHandlerProps } = props
    const [showModal, setshowModal] = useState(false)
    //default classname  
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
        <div className='dialogBody'>

            {showModal ?

                <div className='dlg-container' onClick={(e) => {
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
                </div >
                : <Button onClick={() => setshowModal(showModal => !showModal)}>Show Dialog</Button>}
        </div >)
}

export default Dialog