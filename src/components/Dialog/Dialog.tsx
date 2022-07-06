import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons'
import React, { Children } from 'react'
// import { Styles } from './_dialog.scss'
//needed???
export enum DialogSize {
    Large = 'lg',
    Small = 'sm'

}
export enum DialogType {
    Simple = 'simple',
    Alert = 'alert',
    Form = 'form'

}


interface IDialogProps {
    dlgSize?: DialogSize
    dialogType?: DialogType
}




const Dialog: React.FC<IDialogProps> = (props) => {
    const { children, dlgSize,dialogType } = props

    //default classname  
    let classNameList: string[] = ['dlg']

    const classNames = classNameList.join(" ")

    // if (dlgSize === DialogSize.Large) {
    //     classNameList.push('dlg-lg')
    // }

    // if (dlgSize === DialogSize.Small) {
    //     classNameList.push('dlg-sm')
    // }
    console.log(dialogType,props)
    if (dialogType === DialogType.Simple) {
        console.log("i ran ");
        
        classNameList.push('dlg-simple')
    }
    if (dialogType === DialogType.Alert) {
        classNameList.push('dlg-alert')
    }
    if (dialogType === DialogType.Form) {
        classNameList.push('dlg-form')
    }

    console.log(classNameList)
    return (
        <div className={classNameList.join(" ")} >
            {children}

        </div>
    )
}

export default Dialog