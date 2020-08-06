import React, { FC, HTMLAttributes } from 'react';
import { classNames } from '../../utils/classNames';

export enum messageType {
    Basic = 'bs',
    List = 'ls',
    Icon = 'ic',
    Dismiss = 'ds'
}

export interface IMessageProps {
    className?: string;
    msgType?: messageType;
}

type DivMessageProps = IMessageProps & HTMLAttributes<HTMLDivElement>;
type PMessageProps = IMessageProps & HTMLAttributes<HTMLParagraphElement>;
type ITagMessageProps = IMessageProps & HTMLAttributes<HTMLElement>;
type UlMessageProps = IMessageProps & HTMLAttributes<HTMLUListElement>;

type AllMessageProps = DivMessageProps | PMessageProps | ITagMessageProps | UlMessageProps;

export const Message: FC<AllMessageProps> = (props) => {
    const {className, msgType, ...rest} = props;
    
    let styleClasses = classNames('msg', { 
        [`btn-${msgType}`]: true
    });

    if (className) {
        styleClasses += ' ' + className;
    }

    let message = (
        <>
        </>
    );

    return message;
};

Message.defaultProps = {
    msgType: messageType.Basic,
};

export default Message;
