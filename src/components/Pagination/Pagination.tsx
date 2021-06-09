import React, {
    FC, ReactNode
} from 'react';

import {classNames} from "../../utils/classNames";
import {PageItem} from "./PageItem";

export type PageItemType = 'primary' | 'secondary' | 'default'

export interface IPaginationProps {
    /** children must be React Element */
    children?: ReactNode;

    /** set customized style */
    className?: string;

    /** set the type of the page */
    pageType?: PageItemType;
}

/**
 * Pagination is a wrapper around the PageItem item, to set its styling.
 *
 * ```js
 * import Pagination from 'pat-ui'
 * ```
 */

const Pagination: FC<IPaginationProps> = (props) => {
    const {className, pageType, children, ...rest} = props;
    let styleClasses = classNames('page', {
        [`page-${pageType}`]: true,
    });

    if (className) {
        styleClasses += ' ' + className;
    }

    return (
        <div className={styleClasses} {...rest}>
            {children}
        </div>
    )

}

export default Object.assign(Pagination, {
    Item: PageItem
});