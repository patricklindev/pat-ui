import React, { FC } from 'react';
import { classNames } from '../../utils/classNames';

export type SnackbarPosition = 
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'


export type Severity = 
    | 'error'
    | 'warning'
    | 'info'
    | 'success'


export interface SnackbarProps {
    /** set class name */
    className?: string;
    /** set snackbar position */
    pos?: SnackbarPosition;
    /** set snackbar text */
    text?: string;
    /** set snackbar severity */
    severity?: Severity;
    /** set snackbar open */
    open?: boolean;
    /** set snackbar onClose */
    onClose?: Function;
    /** set snackbar autoHideDuration */
    autoHideDuration?: number;
    
}

export const Snackbar: FC<SnackbarProps> = (props) => {
    const { 
        className,
        pos,
        severity,
        text,
        children,
        open,
        onClose,
        autoHideDuration,
        ...rest } = props;
    
    let styleClasses = classNames('snackbar', {
        [`snackbar-${pos}`]: true,
        [`snackbar-${severity}`]: true,
    });

    if (className) {
        styleClasses += ' ' + className;
    }
    if (!open) {
        return null;
    }
    if (onClose && autoHideDuration) {
        setTimeout(() => onClose(), autoHideDuration);
    }
    if (children) {
        return (
            <div className={styleClasses} {...(rest as SnackbarProps)}>
                {children}
            </div>
        )
    }

    return (
        <div className={styleClasses} {...(rest as SnackbarProps)}>
            {text}
        </div>
    )
};

Snackbar.defaultProps = {
    pos: 'top-center'
};

export default Snackbar;
