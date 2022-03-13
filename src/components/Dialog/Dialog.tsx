import React from 'react'
// import './Dialog.scss'


// Define the props
export interface DialogProps {
    isOpen?: boolean,
    onClose?: (e?:React.MouseEvent) => void,
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
        <h2 className='dialog-title'>
            {children}
        </h2>
   
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
        {children}
    </div>
);


const Dialog: React.FC<DialogProps> = ({
    isOpen,
    onClose,
    children,
}) => {

    return (
        <div className={isOpen?'':'overlay-display'}>
            <section className='dialog'>
                <div className='dialog-window'>
                    {children}
                </div>
            </section>
            <section className='overlay' onClick={onClose}>
            </section>
        </div>
    )

}



export default Dialog;
