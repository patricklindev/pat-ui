import React from 'react';

// import { action } from '@storybook/addon-actions';

import Pagination from './Pagination';
// import PaginationContainer from './PaginationContainer';
import TablePaginationContainer from './TablePaginationContainer';
import { usePage } from '../../utils/hooks/usePage';

export default {
  title: 'Pagination',
  component: Pagination,
};

// const callAction = (p: number) => {
//   action(`page ${p} is clicked`);
// };

export const BasicPagination = () => {
  const [page1, handleClickPage1] = usePage(1);
  const [page2, handleClickPage2] = usePage(1);
  const [page3, handleClickPage3] = usePage(1);
  const [page4, handleClickPage4] = usePage(1);

  return (
    <div>
      <Pagination
        currentPage={page1}
        onPageChange={handleClickPage1}
      ></Pagination>
      <Pagination
        currentPage={page2}
        onPageChange={handleClickPage2}
        pagType="primary"
      ></Pagination>
      <Pagination
        currentPage={page3}
        onPageChange={handleClickPage3}
        pagType="secondary"
      ></Pagination>
      <Pagination
        currentPage={page4}
        onPageChange={handleClickPage4}
        disabled
      ></Pagination>
    </div>
  );
};

export const OutlinedPagination = () => {
  const [page1, handleClickPage1] = usePage(1);
  const [page2, handleClickPage2] = usePage(1);
  const [page3, handleClickPage3] = usePage(1);
  const [page4, handleClickPage4] = usePage(1);

  return (
    <div>
      <Pagination
        variant="outlined"
        currentPage={page1}
        onPageChange={handleClickPage1}
      ></Pagination>
      <Pagination
        variant="outlined"
        pagType="primary"
        currentPage={page2}
        onPageChange={handleClickPage2}
      ></Pagination>
      <Pagination
        variant="outlined"
        pagType="secondary"
        currentPage={page3}
        onPageChange={handleClickPage3}
      ></Pagination>
      <Pagination
        variant="outlined"
        disabled
        currentPage={page4}
        onPageChange={handleClickPage4}
      ></Pagination>
    </div>
  );
};

export const RoundPagination = () => {
  const [page1, handleClickPage1] = usePage(1);
  const [page2, handleClickPage2] = usePage(1);

  return (
    <div>
      <Pagination
        shape="round"
        currentPage={page1}
        onPageChange={handleClickPage1}
      ></Pagination>
      <Pagination
        variant="outlined"
        shape="round"
        currentPage={page2}
        onPageChange={handleClickPage2}
      ></Pagination>
    </div>
  );
};

export const PaginationSize = () => {
  const [page1, handleClickPage1] = usePage(1);
  const [page2, handleClickPage2] = usePage(1);
  const [page3, handleClickPage3] = usePage(1);

  return (
    <div>
      <Pagination
        pagSize="sm"
        currentPage={page1}
        onPageChange={handleClickPage1}
      ></Pagination>
      <Pagination
        currentPage={page2}
        onPageChange={handleClickPage2}
      ></Pagination>
      <Pagination
        pagSize="lg"
        currentPage={page3}
        onPageChange={handleClickPage3}
      ></Pagination>
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

// export const BasicPagination = () => {
//   return (
//     <div>
//       <PaginationContainer></PaginationContainer>
//       <PaginationContainer pagType="primary"></PaginationContainer>
//       <PaginationContainer pagType="secondary"></PaginationContainer>
//       <PaginationContainer disabled></PaginationContainer>
//     </div>
//   );
// };

// export const OutlinedPagination = () => {
//   return (
//     <div>
//       <PaginationContainer variant="outlined"></PaginationContainer>
//       <PaginationContainer
//         variant="outlined"
//         pagType="primary"
//       ></PaginationContainer>
//       <PaginationContainer
//         variant="outlined"
//         pagType="secondary"
//       ></PaginationContainer>
//       <PaginationContainer variant="outlined" disabled></PaginationContainer>
//     </div>
//   );
// };

// export const RoundPagination = () => {
//   return (
//     <div>
//       <PaginationContainer shape="round"></PaginationContainer>
//       <PaginationContainer
//         variant="outlined"
//         shape="round"
//       ></PaginationContainer>
//     </div>
//   );
// };

// export const PaginationSize = () => {
//   return (
//     <div>
//       <PaginationContainer pagSize="sm"></PaginationContainer>
//       <PaginationContainer></PaginationContainer>
//       <PaginationContainer pagSize="lg"></PaginationContainer>
//     </div>
//   );
// };

// export const TablePaginationWithRowPerPage = () => {
//   return (
//     <div>
//       <TablePaginationContainer
//         rowsPerPage={25}
//         totalPageNumber={100}
//       ></TablePaginationContainer>
//     </div>
//   );
// };
