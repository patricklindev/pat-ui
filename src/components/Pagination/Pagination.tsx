import React, { useState, FC, useEffect } from 'react';
import { classNames } from '../../utils/classNames';

export type PaginationColor = 'primary' | 'secondary' | 'standard';
export type PaginationSize = 'small' | 'medium' | 'large';

export interface IPaginationProps {
  /** number of always visible pages at the beginning and end */
  boundaryCount?: number;
  /** customized styles */
  classes?: string;
  /** active color */
  color?: PaginationColor;
  /** the total number of pages  */
  count?: number;
  /** the page selected by default */
  defaultPage?: number;
  /** if true, hide the next-page button */
  hideNextButton?: boolean;
  /** if true, hide the prev-page button */
  hidePrevButton?: boolean;
  /** callback fired when the page is changed */
  onChange?: (page: number) => void;
  /** the current page */
  page?: number;
  /** number of always visible pages before and after the current page */
  siblingCount?: number;
  /** component size */
  size?: PaginationSize;
}

export const Pagination: FC<IPaginationProps> = (props) => {
  let {
    boundaryCount = 1,
    classes,
    color,
    count = 10,
    defaultPage = 1,
    hideNextButton,
    hidePrevButton,
    onChange,
    page,
    siblingCount = 1,
    size,
  } = props;

  const [currentPage, setCurrentPage] = useState<number>(page || defaultPage);

  useEffect(() => {
    if (onChange) {
      onChange(currentPage);
    }
  }, [currentPage]);

  let paginationClasses: string = [classes, 'pagination'].join(' ');
  let itemClasses: string = classNames('pagination-item', {
    [`pagination-item-${size}`]: !!size,
    [`pagination-item-${color}`]: !!color,
  });
  let itemSelectedClasses = classNames('pagination-item', {
    [`pagination-item-${size}`]: !!size,
    [`pagination-item-${color}-selected`]: !!color,
  });

  let totalNumber: number = 2 * siblingCount + 2 * boundaryCount + 3;
  let pagination: JSX.Element;
  let pageItems: JSX.Element[];

  function goPrevPage(): void {
    setCurrentPage(page || currentPage - 1);
  }

  function goNextPage(): void {
    setCurrentPage(page || currentPage + 1);
  }

  function generatePageBtns(from: number, to: number): JSX.Element[] {
    const btns: JSX.Element[] = [];
    for (let i: number = from; i <= to; i++) {
      btns.push(
        <li key={`page ${i}`} aria-label={`Page ${i}`}>
          <button
            className={currentPage === i ? itemSelectedClasses : itemClasses}
            onClick={() => setCurrentPage(page || i)}
          >
            {i}
          </button>
        </li>
      );
    }
    return btns;
  }

  if (count <= totalNumber) {
    pageItems = generatePageBtns(1, count);
  } else {
    let lEllipsis = (
      <li key="left ellipsis">
        <div className={size ? `pagination-item-${size}` : ''}>…</div>
      </li>
    );
    let rEllipsis = (
      <li key="right ellipsis">
        <div className={size ? `pagination-item-${size}` : ''}>…</div>
      </li>
    );
    let lBoundaryBtns: JSX.Element[];
    let rBoundaryBtns: JSX.Element[];

    if (currentPage - siblingCount <= boundaryCount + 2) {
      lBoundaryBtns = generatePageBtns(1, totalNumber - 1 - boundaryCount);
      rBoundaryBtns = generatePageBtns(count - boundaryCount + 1, count);
      pageItems = [...lBoundaryBtns, rEllipsis, ...rBoundaryBtns];
    } else if (currentPage + siblingCount >= count - boundaryCount - 1) {
      lBoundaryBtns = generatePageBtns(1, boundaryCount);
      rBoundaryBtns = generatePageBtns(
        count - totalNumber + boundaryCount + 2,
        count
      );
      pageItems = [...lBoundaryBtns, lEllipsis, ...rBoundaryBtns];
    } else {
      lBoundaryBtns = generatePageBtns(1, boundaryCount);
      rBoundaryBtns = generatePageBtns(count - boundaryCount + 1, count);
      let currentBtns = generatePageBtns(
        currentPage - siblingCount,
        currentPage + siblingCount
      );
      pageItems = [
        ...lBoundaryBtns,
        lEllipsis,
        ...currentBtns,
        rEllipsis,
        ...rBoundaryBtns,
      ];
    }
  }

  pagination = (
    <div className={paginationClasses} data-testid="pagination-element">
      <ul>
        {hidePrevButton ? (
          <></>
        ) : (
          <li
            key="prev"
            data-testid="prev-button-element"
            aria-label="Go to previous page"
          >
            <button
              className={itemClasses}
              disabled={currentPage === 1 || count === 0}
              onClick={goPrevPage}
            >
              previous
            </button>
          </li>
        )}
        {pageItems}
        {hideNextButton ? (
          <></>
        ) : (
          <li
            key="next"
            data-testid="next-button-element"
            aria-label="Go to next page"
          >
            <button
              className={itemClasses}
              disabled={currentPage === count || count === 0}
              onClick={goNextPage}
            >
              next
            </button>
          </li>
        )}
      </ul>
    </div>
  );
  return <>{pagination}</>;
};

Pagination.defaultProps = {
  boundaryCount: 1,
  color: 'standard',
  count: 10,
  defaultPage: 1,
  siblingCount: 1,
  size: 'medium',
};

export default Pagination;
