import React, { CSSProperties, useEffect, useState } from 'react';

export type ColorType = 'primary' | 'secondary';

export type SizeType = 'default' | 'lg' | 'sm';

export type ShapeType = 'round' | 'rounded';

export type ItemType = 'eclipsed' | 'page';

export type PaginationType = 'default' | 'table';

export interface IPaginationProps {
  /** total page number */
  count: number;
  /** customized classes */
  className?: string | undefined;
  /** customized styles */
  style?: CSSProperties | undefined;
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
  /** regular pagination or table pagination */
  paginationType?: PaginationType;
  /** range of rows per page */
  range?: number[];
  /** callback for previous or next page action */
  onPageChange?: (currentPage: number) => void;
  /** callback for rows per page changes */
  onRowsPerPageChange?: (currentRowsPerPage: number) => void;
}

// general page event handler function
export type PageFunc = (page: number, e?: React.MouseEvent) => void;

/**
 * pagination custom hook
 *
 * @param {IPaginationProps} props Pagination Props
 * @returns general pagination data
 */
export const usePagination = (props: IPaginationProps) => {
  const {
    count,
    page = 1,
    onPageChange,
    siblingCount = 1,
    ...restProps
  } = props;

  const [totalPage, setTotalPage] = useState<number>(Math.ceil(count));
  const [currentPage, setCurrentPage] = useState<number>(page);

  useEffect(() => {
    setTotalPage(Math.ceil(count));
  }, [count]);

  // decide if current page is eclipse(...) or normal page item
  const itemTypes: ItemType[] = [];
  for (let i = 1; i <= totalPage; i++) {
    if (
      i <= siblingCount ||
      i > totalPage - siblingCount ||
      (i >= currentPage - siblingCount && i <= currentPage + siblingCount)
    ) {
      itemTypes[i] = 'page';
    } else {
      itemTypes[i] = 'eclipsed';
    }
  }

  const updateCurrentPage: PageFunc = (updatedPage) => {
    setCurrentPage(updatedPage);

    onPageChange && onPageChange(updatedPage);
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
    totalPage,
    currentPage,
    itemTypes,
    onPrev,
    onNext,
    updateCurrentPage,
    ...restProps,
  };
};
