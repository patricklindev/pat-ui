import React, { useState } from 'react';

export type ColorType = 'primary' | 'secondary';

export type SizeType = 'default' | 'lg' | 'sm';

export type ShapeType = 'round' | 'rounded';

export type ItemType = 'eclipsed' | 'page';

export interface PaginationProps {
  /** total page number */
  count: number;
  /** current page number */
  page?: number;
  /** set pagination component to disable or active */
  disabled?: boolean;
  /** pagination color type, primary | secondary */
  color?: ColorType;
  /** size of component, medium as default | large | small */
  size?: SizeType;
  /** shape type, round | rounded  */
  shape?: ShapeType;
  /** show the number of adjacent siblings */
  siblingCount?: number;
  /** number of items per page for table pagination */
  rowsPerPage?: number;
  /** range of rows per page */
  range?: number[];
  /** trigger when previous or next page action is involed */
  onChangePage?: (currentPage: number) => void;
}

// general page event handler function
export type PageFunc = (page: number, e?: React.MouseEvent) => void;

/**
 * pagination custom hook
 *
 * @param {PaginationProps} props Pagination Props
 * @returns general pagination data
 */
export const usePagination = (props: PaginationProps) => {
  const {
    count,
    page = 1,
    onChangePage,
    siblingCount = 1,
    ...restProps
  } = props;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [totalPage, setTotalPage] = useState<number>(count);
  const [currentPage, setCurrentPage] = useState<number>(page);

  // decide if current page is eclipse(...) or normal page item
  let itemTypes: ItemType[] = [];
  for (let i = 1; i <= count; i++) {
    if (
      i <= siblingCount ||
      i > count - siblingCount ||
      (i >= currentPage - siblingCount && i <= currentPage + siblingCount)
    ) {
      itemTypes[i] = 'page';
    } else {
      itemTypes[i] = 'eclipsed';
    }
  }

  const updateCurrentPage: PageFunc = (updatedPage) => {
    setCurrentPage(updatedPage);

    onChangePage && onChangePage(updatedPage);
  };

  const onPrev: React.MouseEventHandler = () => {
    const updatedPage = currentPage - 1;
    if (updatedPage < 1) {
    } else {
      updateCurrentPage(updatedPage);
    }
  };

  const onNext: React.MouseEventHandler = () => {
    const updatedPage = currentPage + 1;
    if (updatedPage > totalPage) {
    } else {
      updateCurrentPage(updatedPage);
    }
  };

  return {
    count,
    currentPage,
    itemTypes,
    onPrev,
    onNext,
    updateCurrentPage,
    ...restProps,
  };
};
