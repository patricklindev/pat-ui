//this component is for story book and test only
import React, { useState } from 'react';

import Pagination from './Pagination';

export default function PaginationContainer({
  type = 'default',
  size = '',
  shape = 'rounded',
  disabled = false,
  variant = '',
}) {
  const [page, setPage] = useState(1);

  const handleClickPage = (p: number) => {
    setPage(p);
  };

  // console.log(disabled);

  return (
    <Pagination
      className="pagination-container"
      currentPage={page}
      onPageChange={handleClickPage}
      pagType={type}
      pagSize={size}
      shape={shape}
      disabled={disabled}
      variant={variant}
    >
      Default Pagination
    </Pagination>
  );
}
