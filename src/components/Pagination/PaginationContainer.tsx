//this component is for story book and test only
import React, { useState } from 'react';

import Pagination from './Pagination';

export default function PaginationContainer() {
  const [page, setPage] = useState(1);

  const handleClickPage = (p: number) => {
    setPage(p);
  };

  return (
    <Pagination currentPage={page} onPageChange={handleClickPage}>
      Default Pagination
    </Pagination>
  );
}
