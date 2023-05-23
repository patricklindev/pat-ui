import React from 'react';

import PaginationOption from './PaginationOption';
import { TablePaginationProps } from './TablePaginationContainer';

type PageAndHandler = {
  currentPage: number;
  onPageChange: Function;
};

export type TablePaginationPropsWithHandler = TablePaginationProps &
  PageAndHandler;

export default function TablePagination({
  rowsPerPage,
  totalPageNumber,
  currentPage,
  onPageChange,
}: TablePaginationPropsWithHandler) {
  let endPage = rowsPerPage - 1 + currentPage;

  const onNext = () => {
    endPage = rowsPerPage + rowsPerPage;
    let newPage = currentPage + rowsPerPage;
    onPageChange(newPage);
  };

  const onPrevious = () => {
    endPage = endPage - rowsPerPage;
    let newPage = currentPage - rowsPerPage;
    onPageChange(newPage);
  };

  return (
    <div>
      <span>Rows per page: {rowsPerPage}</span>

      <div>
        {`${currentPage}-${endPage} of ${totalPageNumber}`}

        <PaginationOption disabled={currentPage === 1} onClick={onPrevious}>
          &#8249;
        </PaginationOption>
        {'      '}
        <PaginationOption
          disabled={endPage >= totalPageNumber}
          onClick={onNext}
        >
          &#8250;
        </PaginationOption>
      </div>
    </div>
  );
}
