import React, { FC, ReactNode } from 'react';
import { classNames } from '../../utils/classNames';

export type messageType = 
    | 'basic'
    | 'list'
    | 'icon'
    | 'dismiss'
    | 'colored'
    | 'sized';

export type messageSize =
    | 'mini'
    | 'tiny'
    | 'small'
    | 'large'
    | 'big'
    | 'huge'
    | 'massive';

export type messageColor =
    | 'white'
    | 'red'
    | 'orange'
    | 'blue'
    | 'pink'
    | 'black';

export interface IMessagesProps {
    /** set class name */
    className?: string;
    /** set message type */
    msgType?: messageType;
    /** set message size */
    msgSize?: messageSize;
    /** set message color */
    msgColor?: messageColor;
    /** set message header */
    msgHeader?: string;
    /** set message content */
    msgContent?: string;
    /** set message list */
    msgList?: boolean;
    /** set message icon */
    msgIcon?: ReactNode;
    /** set message click action */
    msgOnClick?: () => void;
    /** set the second bullet content */
    msgBulletContent?: string;
}

export const Message: FC<IMessagesProps> = (props) => {
    const { 
        className, 
        msgType,
        msgSize, 
        msgColor,
        ...rest } = props;
    
    let styleClasses = classNames('msg', {
        [`msg-${msgType}`]: true,
        [`msg-${msgSize}`]: !!msgSize,
        [`msg-${msgColor}`]: true
    });

    if (className) {
        styleClasses += ' ' + className;
    }

    if (props.msgList === true) {
        return (
            <div className={styleClasses} {...(rest as IMessagesProps)} data-testid='message-element'>
            <div className='list-header'>
                <p>{props.msgHeader}</p>
            </div>
            <div>
            <ul className='list-content'>
                <li>
                    {props.msgContent}
                </li>
                <li>
                    {props.msgBulletContent}
                </li>
            </ul>
            </div>
            </div>
        );
    }

    let message = (
            <div className={styleClasses} {...(rest as IMessagesProps)} data-testid='message-element'>
                <div className='icon' onClick={props.msgOnClick} data-testid='icon-element'>
                    <p>{props.msgIcon}</p>
                </div>
                <div className='header'>
                    <p>{props.msgHeader}</p>
                </div>
                <div className='content'>
                    <p>{props.msgContent}</p>
                </div>
            </div>
    );

    return message;
};

Message.defaultProps = {
    msgType: 'basic',
    msgSize: 'large',
    msgColor: 'white'
};

export default Message;
