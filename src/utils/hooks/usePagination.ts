import React, { useMemo } from 'react';

import { range } from '../range';

type paginationProps = {
  totalPageNumber: number;
  currentPage: number;
};

export function usePagination({
  totalPageNumber,
  currentPage,
}: paginationProps) {
  const paginationRange = useMemo(() => {
    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageCount = 6;
    const DOTS = true;

    // case I: pagination array doesn't need to be modifed if it is less than 6
    if (totalPageCount > totalPageNumber) {
      return range(1, totalPageNumber);
    }

    const leftSiblingIndex = Math.max(currentPage - 1, 1);
    const rightSiblingIndex = Math.min(currentPage + 1, totalPageNumber);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldsShowRightDots = rightSiblingIndex < totalPageNumber - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageNumber;

    if (!shouldShowLeftDots && shouldsShowRightDots) {
      let leftItemCount = 5;
      let leftRange = range(1, leftItemCount);
      return [...leftRange, DOTS, lastPageIndex];
    }

    if (shouldShowLeftDots && !shouldsShowRightDots) {
      let rightItemCount = 5;
      let rightRange = range(
        totalPageNumber - rightItemCount + 1,
        totalPageNumber
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldsShowRightDots) {
      let middle = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middle, DOTS, lastPageIndex];
    }
  }, [currentPage]);
  return paginationRange;
}

export default usePagination;
