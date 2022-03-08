import React from 'react';

import {
  PaginationProps,
  usePagination,
} from '../../utils/hooks/usePagination';

const Pagination: React.FC<PaginationProps> = (props) => {
  const { currentPage, onPrev, onNext } = usePagination(props);

  return (
    <>
      {/* PAGINATION TO DO */}
      <div>
        <button onClick={onPrev}>Prev</button>
      </div>
      {currentPage}
      <div>
        <button onClick={onNext}>Next</button>
      </div>
      {/* PAGINATION TO DO */}
    </>
  );
};

export default Pagination;
