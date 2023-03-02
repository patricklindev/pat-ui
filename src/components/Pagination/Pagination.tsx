import React, {FC, useMemo, useState} from "react";
import {classNames} from "../../utils/classNames";

export type Size = 'lg' | 'sm';
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
    /** a callback to provide current value */
    onChange?: (val: any) => void;
    /** current page */
    currentPage: number;
    /** number of items per pages */
    pageSize: number;
    /** total number of items */
    total: number;
}

export type PatPaginationProps = IPaginationProps;

export const Pagination: FC<(PatPaginationProps)> = (props) => {
    const {onChange, type, size, disabled, currentPage, pageSize, total} = props;

    const [page, setPage] = useState(currentPage);
    const [totalPageCount] = useState(Math.ceil(total / pageSize));
    const DOT = "..."

    const range = (start: number, end: number) => {
        let length = end - start + 1;
        return Array.from({length}, (_, idx) => idx + start);
    };
    const paginationRange = useMemo(() => {
        // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
        const totalPageNumbers = 6;
        /*
          If the number of pages is less than the page numbers we want to show in our
          paginationComponent, we return the range [1..totalPageCount]
        */
        if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount);
        }
        const leftSiblingIndex = Math.max(page - 1, 1);
        const rightSiblingIndex = Math.min(
            page + 1,
            totalPageCount
        );
        /*
          We do not want to show dots if there is only one position left
          after/before the left/right page count as that would lead to a change if our Pagination
          component size which we do not want
        */
        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 1;

        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;
        if (!shouldShowLeftDots && shouldShowRightDots) {
            if (page === firstPageIndex) {
                let leftRange = range(1, 2);
                return [...leftRange, DOT, totalPageCount];
            } else if (page === firstPageIndex + 1) {
                let leftRange = range(1, 3);
                return [...leftRange, DOT, totalPageCount];
            } else if (page === firstPageIndex + 2) {
                let leftItemCount = 4;
                let leftRange = range(1, leftItemCount);
                return [...leftRange, DOT, totalPageCount];
            }
            // let leftItemCount = 4;
            // let leftRange = range(1, leftItemCount);
            // return [...leftRange, "...", totalPageCount];
        }
        if (shouldShowLeftDots && !shouldShowRightDots) {
            if (page === totalPageCount) {
                let rightRange = range(
                    totalPageCount - 1,
                    totalPageCount
                );
                return [firstPageIndex, DOT, ...rightRange];
            } else if (page === totalPageCount - 1) {
                let rightRange = range(
                    totalPageCount - 2,
                    totalPageCount
                );
                return [firstPageIndex, DOT, ...rightRange];
            } else if (page === totalPageCount - 2) {
                let rightRange = range(
                    totalPageCount - 3,
                    totalPageCount
                );
                return [firstPageIndex, DOT, ...rightRange];
            }
            // let rightItemCount = 3 + 2;
            // let rightRange = range(
            //     totalPageCount - rightItemCount + 1,
            //     totalPageCount
            // );
            // return [firstPageIndex, "...", ...rightRange];
        }
        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, DOT, ...middleRange, DOT, lastPageIndex];
        }
    }, [total, pageSize, page]);
    if (!paginationRange || paginationRange.length < 1) {
        return null
    }

    function onPageChange(pageNumber: number | string) {
        if (typeof pageNumber === 'number') {
            setPage(pageNumber)
            if (onChange) {
                onChange(pageNumber);
            }
        }
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

    return (
        <ul className={styleClasses}>
            <li>
                <button onClick={() => onPageChange(page - 1)} disabled={page === 1} className={buttonStyleClasses}>
                    <svg viewBox="0 0 24 24">
                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                    </svg>
                </button>
            </li>
            {paginationRange.map(pageNumber => {
                if (pageNumber === DOT) {
                    return <li className="pagination-item dots">&#8230;</li>;
                }
                return (
                    <li>
                        <button
                            onClick={() => onPageChange(pageNumber)}
                            className={pageNumber === page ? currentPageButtonStyleClasses : buttonStyleClasses}>{pageNumber}</button>
                    </li>
                );
            })}
            <li>
                <button onClick={() => onPageChange(page + 1)} disabled={page === totalPageCount}
                        className={buttonStyleClasses}>
                    <svg viewBox="0 0 24 24">
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                    </svg>
                </button>
            </li>
        </ul>

    )
};

Pagination.defaultProps = {
    type: 'default',
};
export default Pagination;