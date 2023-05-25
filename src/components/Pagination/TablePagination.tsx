import React from 'react';

import Button from '../Button/Button';

export type TablePaginationProps = {
  rowsPerPage: number;
  totalPageNumber: number;
  currentPage: number;
  onPageChange: Function;
};

export default function TablePagination({
  rowsPerPage,
  totalPageNumber,
  currentPage,
  onPageChange,
}: TablePaginationProps) {
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
    <div data-testid="tablePagination">
      <span>Rows per page: {rowsPerPage}</span>
      <div>
        {`${currentPage}-${endPage} of ${totalPageNumber}`}

        <Button disabled={currentPage === 1} onClick={onPrevious}>
          &#8249;
        </Button>
        {'      '}
        <Button disabled={endPage >= totalPageNumber} onClick={onNext}>
          &#8250;
        </Button>
      </div>
    </div>
  );
}
