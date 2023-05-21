import React from 'react';
// import { action } from '@storybook/addon-actions';
import Pagination from './Pagination';
import PaginationContainer from './PaginationContainer';

export default {
  title: 'Pagination',
  component: Pagination,
};

export const DefaultPagination = () => {
  return (
    <div>
      {/* <Pagination>Default Button</Pagination>
      <Pagination totalPageNumber={3}>Only have 3 totalPage</Pagination>
      <Pagination currentPage={5}>current page is 5</Pagination>
      <Pagination currentPage={7}>current page is 7</Pagination> */}
    </div>
  );
};

export const DefaultPaginationWithConatiner = () => {
  return (
    <div>
      <PaginationContainer></PaginationContainer>
    </div>
  );
};
