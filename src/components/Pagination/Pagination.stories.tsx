import React from 'react';

import Pagination from './Pagination';
import PaginationContainer from './PaginationContainer';
import TablePaginationContainer from './TablePaginationContainer';

export default {
  title: 'Pagination',
  component: Pagination,
};

export const BasicPagination = () => {
  return (
    <div>
      <PaginationContainer></PaginationContainer>
      <PaginationContainer pagType="primary"></PaginationContainer>
      <PaginationContainer pagType="secondary"></PaginationContainer>
      <PaginationContainer disabled></PaginationContainer>
    </div>
  );
};

export const OutlinedPagination = () => {
  return (
    <div>
      <PaginationContainer variant="outlined"></PaginationContainer>
      <PaginationContainer
        variant="outlined"
        pagType="primary"
      ></PaginationContainer>
      <PaginationContainer
        variant="outlined"
        pagType="secondary"
      ></PaginationContainer>
      <PaginationContainer variant="outlined" disabled></PaginationContainer>
    </div>
  );
};

export const RoundPagination = () => {
  return (
    <div>
      <PaginationContainer shape="round"></PaginationContainer>
      <PaginationContainer
        variant="outlined"
        shape="round"
      ></PaginationContainer>
    </div>
  );
};

export const PaginationSize = () => {
  return (
    <div>
      <PaginationContainer pagSize="sm"></PaginationContainer>
      <PaginationContainer></PaginationContainer>
      <PaginationContainer pagSize="lg"></PaginationContainer>
    </div>
  );
};

export const TablePaginationWithRowPerPage = () => {
  return (
    <div>
      <TablePaginationContainer
        rowsPerPage={25}
        totalPageNumber={100}
      ></TablePaginationContainer>
    </div>
  );
};
