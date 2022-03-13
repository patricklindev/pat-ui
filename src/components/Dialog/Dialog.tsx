import React from 'react'


// Define the props
export interface DialogProps {
    isOpen?: boolean,
    onClose?: () => void,
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
        <div className={isOpen?'':'overlay-display'} data-testid='dialog-window'>
            <section className='dialog'>
                <div className='dialog-window' data-testid='dialog-children'>
                    {children}
                </div>
            </section>
            <section className='overlay' onClick={onClose} data-testid='dialog-dim-background'>
            </section>
        </div>
    )

}



export default Dialog;
