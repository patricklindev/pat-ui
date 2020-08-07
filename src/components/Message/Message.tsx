import React, { FC, HTMLAttributes } from 'react';
import { classNames } from '../../utils/classNames';
// import { FontAwesomeIconProps, FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleNotch, faSpinner } from '@fortawesome/free-solid-svg-icons';

export enum messageType {
    Basic = 'bs',
    List = 'ls',
    Icon = 'ic',
    Dismiss = 'ds'
}

// export enum iconType {
//     Spinner = 'spinner'
// }

export interface IMessageProps {
    className?: string;
    msgType?: messageType;
}

//type DivMessageProps = IMessageProps & HTMLAttributes<HTMLDivElement>;
//type PMessageProps = IMessageProps & HTMLAttributes<HTMLParagraphElement>;
type TagMessageProps = IMessageProps & HTMLAttributes<HTMLElement>;
//type UlMessageProps = IMessageProps & HTMLAttributes<HTMLUListElement>;

//type AllMessageProps = DivMessageProps | PMessageProps | ITagMessageProps | UlMessageProps;

export const Message: FC<TagMessageProps> = (props) => {
    const {className, msgType, ...rest} = props;
    
    let styleClasses = classNames('msg', {
        [`msg-${msgType}`]: true
    });

    if (className) {
        styleClasses += ' ' + className;
    }

    let message = (
        <div>
            <div className={styleClasses} {...(rest as TagMessageProps)}></div>
        </div>
    );

    return message;
};

Message.defaultProps = {
    msgType: messageType.Basic,
};

export default Message;
