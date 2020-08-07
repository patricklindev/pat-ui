import React, { 
    FC, 
    HTMLAttributes } from 'react';
import { classNames } from '../../utils/classNames';

export enum messageType {
    Basic = 'bs',
    List = 'ls',
    Icon = 'ic',
    Dismiss = 'ds'
}

export enum iconType {
    Spinner = 'spinner',
    Remove = 'remove'
}

export interface IMessageProps {
    /** set class name */
    className?: string;
    /** set message type */
    msgType?: messageType;
    /** set icon type */
    iconType?: iconType;
}

type AllMessageProps = IMessageProps & HTMLAttributes<HTMLElement>;

export const Message: FC<AllMessageProps> = (props) => {
    const {className, msgType, iconType, ...rest} = props;
    
    let styleClasses = classNames('msg', {
        [`msg-${msgType}`]: true,
        [`msg-${iconType}`]: !!iconType
    });

    if (className) {
        styleClasses += ' ' + className;
    }

    let message = (
        <div>
            <div className={styleClasses} {...(rest as AllMessageProps)}></div>
        </div>
    );

    return message;
};

Message.defaultProps = {
    msgType: messageType.Basic
};

export default Message;
