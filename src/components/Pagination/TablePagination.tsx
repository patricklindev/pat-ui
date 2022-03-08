import React, { useState } from 'react';

import {
  PaginationProps,
  usePagination,
} from '../../utils/hooks/usePagination';

/**
 *
 * @param {PaginationProps} props
 * @returns Table Pagination
 */
const TablePagination: React.FC<PaginationProps> = (props) => {
  const {
    count,
    currentPage,
    onPrev,
    onNext,
    rowsPerPage = 10,
    range = [10, 25, 50, 100],
  } = usePagination(props);

  const [itemSize, setItemSize] = useState<number>(rowsPerPage);

  // row per page option event handler
  const handleItemSizeChange: React.ChangeEventHandler = (e) => {
    setItemSize(+(e.target as HTMLInputElement).value);
  };

  // row per page options
  const renderRangeOptions = () => {
    return range.map((option) => {
      return (
        <option key={option} value={option}>
          {option}
        </option>
      );
    });
  };

  // row range
  const renderCurrentRows = () => {
    return (
      <div>
        {(currentPage - 1) * itemSize + 1} -{' '}
        {(currentPage - 1) * itemSize + itemSize} of {count}{' '}
      </div>
    );
  };

  return (
    <>
      <div>
        <div>
          <label>
            Rows per page:
            <select value={itemSize} onChange={handleItemSizeChange}>
              {renderRangeOptions()}
            </select>
          </label>
        </div>
        <div>{renderCurrentRows()}</div>
        <div>
          <button onClick={onPrev}>{'<'}</button>
        </div>
        <div>
          <button onClick={onNext}>{'>'}</button>
        </div>
      </div>
    </>
  );
};

export default TablePagination;
