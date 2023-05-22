import React from 'react';
// import { action } from '@storybook/addon-actions';
import Pagination from './Pagination';
import PaginationContainer from './PaginationContainer';

export default {
  title: 'Pagination',
  component: Pagination,
};

export const BasicPagination = () => {
  return (
    <div>
      <PaginationContainer></PaginationContainer>
      <PaginationContainer type="primary"></PaginationContainer>
      <PaginationContainer type="secondary"></PaginationContainer>
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
        type="primary"
      ></PaginationContainer>
      <PaginationContainer
        variant="outlined"
        type="secondary"
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
      <PaginationContainer size="sm"></PaginationContainer>
      <PaginationContainer></PaginationContainer>
      <PaginationContainer size="lg"></PaginationContainer>
    </div>
  );
};
