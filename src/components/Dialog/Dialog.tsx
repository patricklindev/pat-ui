import React from 'react'
import './_Dialog.scss'


export enum DialogType {
    Simple,
    Alert,
    Form
}

// Define the props
export interface DialogProps {
    type?: DialogType,
    onOpen?: boolean,
    onClose?: (event: any) => void,
    children?: React.ReactNode;
}

interface DialogTitleProps {
    children?: React.ReactNode;
}

interface DialogContentProps {
    children?: React.ReactNode;
}

interface DialogActionsProps {
    children?: React.ReactNode;
}

export const DialogTitle: React.FC<DialogTitleProps> = ({
    children
}) => (
    <header className='dialog-header'>
        <div className='dialog-title'>
            {children}
        </div>
    </header>
);

export const DialogContent: React.FC<DialogContentProps> = ({
    children
}) => (
    <div className='dialog-content'>
        {children}
    </div>
);

export const DialogActions: React.FC<DialogActionsProps> = ({
    children
}) => (
    <div className='dialog-actions'>
        <div className='dialog-actions-container'>
            {children}
        </div>
    </div>
);


const Dialog: React.FC<DialogProps> = ({
    type = DialogType.Alert,
    onOpen,
    onClose,
    children,
}) => {

    return (
        <div>
            <section className='dialog' >
                <div className={generateDialogWindow(type)}
                     data-testid ='dialog-window'
                >    
                    {children}
                </div>
            </section>
            <section className={onOpen ? 'overlay' : 'overlay overlay-display'} 
            data-testid ='dialog-dim-background'
            id="overlay" onClick={onClose}>
            </section>
        </div>
    )

}


const generateDialogWindow = (type: DialogType) => {
    return type === DialogType.Simple ? 'dialog-container-simple' :
        type === DialogType.Alert ? 'dialog-container-alert' :
            'dialog-container-form'
}


export default Dialog;
