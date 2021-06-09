import React, {
    FC, ReactNode
} from 'react';

import { classNames } from '../../utils/classNames';

export interface IPageItemProps {
    /** children must be React Element */
    children?: ReactNode;

    /** set customized style */
    className?: string;

    /** A pageItem can be disabled */
    disabled?: boolean;

    /** What is the value of this page item?*/
    value?: boolean;

    /** A pageItem can be active */
    active?: boolean;

    /** Onclick function to pass to the item */
    onClick?: () => void;
}

export const PageItem: FC<IPageItemProps> = (props) => {
    const {className, children, disabled, onClick, value, active, ...rest} = props;

    function handleClick(e: any){
        if(disabled){
            e.preventDefault();
        } else if(onClick){
            onClick();
        }
    }

    let styleClasses = classNames('page-item', {
        disabled: !!(disabled),
        active: !!(active),
    });

    if(className) {
        styleClasses += ' ' + className;
    }


    return (
        <div {...rest} className={styleClasses} onClick={handleClick}>
            {children}
        </div>
    );

}

PageItem.defaultProps = {
    disabled: false,
    active: false,
}

export default PageItem;