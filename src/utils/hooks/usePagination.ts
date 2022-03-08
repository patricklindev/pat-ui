import React, { useState } from 'react';

export enum ColorType {
  Primary,
  Secondary,
}

export enum SizeType {
  Large,
  Medium,
  Small,
}

export enum ShapeType {
  Round,
  Rounded,
}

export interface PaginationProps {
  count: number;
  page?: number;
  disabled?: boolean;
  color?: ColorType;
  size?: SizeType;
  shape?: ShapeType;
  onChangePage?: (currentPage: number) => void;
}

export type PageFunc = (page: number, e?: React.MouseEvent) => void;

export const usePagination = (props: PaginationProps) => {
  const { count, page = 1, onChangePage, ...restProps } = props;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [totalPage, setTotalPage] = useState<number>(count);
  const [currentPage, setCurrentPage] = useState<number>(page);

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
    currentPage,
    onPrev,
    onNext,
    ...restProps,
  };
};
