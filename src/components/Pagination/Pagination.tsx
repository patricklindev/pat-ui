import React, {FC, useMemo} from "react";
import {classNames} from "../../utils/classNames";
import Button from "../Button";

export type Size = 'large' | 'small';
export type Type =
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'default';

export interface IPaginationProps {
    /** set pagination color */
    type?: Type;
    /** set pagination size */
    size?: Size;
    /** set disabled button */
    disabled?: boolean;
    currentPage: number;
    pageSize: number;
    total: number;
}

export type PatPaginationProps = IPaginationProps;

export const Pagination: FC<(PatPaginationProps)> = (props) => {
    const {type, size, disabled, currentPage, pageSize, total} = props;
    const range = (start: number, end: number) => {
        let length = end - start + 1;
        return Array.from({length}, (_, idx) => idx + start);
    };
    const paginationRange = useMemo(() => {
        const totalPageCount = Math.ceil(total / pageSize);
        // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
        const totalPageNumbers = 6;
        /*
          If the number of pages is less than the page numbers we want to show in our
          paginationComponent, we return the range [1..totalPageCount]
        */
        if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount);
        }
        const leftSiblingIndex = Math.max(currentPage - 1, 1);
        const rightSiblingIndex = Math.min(
            currentPage + 1,
            totalPageCount
        );
        /*
          We do not want to show dots if there is only one position left
          after/before the left/right page count as that would lead to a change if our Pagination
          component size which we do not want
        */
        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;
        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2;
            let leftRange = range(1, leftItemCount);


            return [...leftRange, "...", totalPageCount];
        }
        if (shouldShowLeftDots && !shouldShowRightDots) {
            let rightItemCount = 3 + 2;
            let rightRange = range(
                totalPageCount - rightItemCount + 1,
                totalPageCount
            );
            return [firstPageIndex, "...", ...rightRange];
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, "...", ...middleRange, "...", lastPageIndex];
        }
    }, [total, pageSize, currentPage]);
    if (!paginationRange || paginationRange.length < 1) {
        return null
    }
    let lastPage = paginationRange[paginationRange.length - 1];

    // let styleClasses = classNames('btn', {
    //     [`btn-${btnType}`]: true,
    //     [`btn-${btnSize}`]: !!btnSize,
    //     disabled: !!(disabled && btnType === 'link'),
    // });
    // if (className) {
    //     styleClasses += ' ' + className;
    // }

    let styleClasses = classNames('pagination');

    let currentPageButtonStyleClasses = classNames('pagination-btn', {
        [`pagination-btn-${type}`]: true,
        [`pagination-btn-${size}`]: !!size,
        disabled: !!(disabled),
    });

    let buttonStyleClasses = classNames('pagination-btn', {
        "pagination-btn-unselected": true,
        [`pagination-btn-${size}`]: !!size,
        disabled: !!(disabled),
    });

    let pagination;
    pagination = (
        <ul className={styleClasses}>
            <li>
                <button>123</button>
            </li>
            {paginationRange.map(pageNumber => {
                if (pageNumber === "...") {
                    return <li className="pagination-item dots">&#8230;</li>;
                }
                return (
                    <li
                        // className={classnames('pagination-item', {
                        //     selected: pageNumber === currentPage
                        // })}
                        // onClick={() => onPageChange(pageNumber)}
                    >
                        <button
                            className={pageNumber === currentPage ? currentPageButtonStyleClasses : buttonStyleClasses}>{pageNumber}</button>
                    </li>
                );
            })}
            <li>
                <button>123</button>
            </li>
        </ul>

    )
    return pagination;
};

Pagination.defaultProps = {
    type: 'default',
};
export default Pagination;