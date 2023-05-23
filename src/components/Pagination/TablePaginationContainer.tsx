import React, { useState } from 'react';
import TablePagination from './TablePagination';

export type TablePaginationProps = {
  rowsPerPage: number;
  totalPageNumber: number;
};

export default function TablePaginationContainer({
  rowsPerPage,
  totalPageNumber,
}: TablePaginationProps) {
  const [page, setPage] = useState(1);

  const HandleChangePage = (p: number) => {
    setPage(p);
  };

  return (
    <div>
      <TablePagination
        rowsPerPage={rowsPerPage}
        totalPageNumber={totalPageNumber}
        currentPage={page}
        onPageChange={HandleChangePage}
      ></TablePagination>
    </div>
  );
}
