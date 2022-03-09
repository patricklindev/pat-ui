import React, { useState } from 'react';

import {
  PaginationProps,
  usePagination,
} from '../../utils/hooks/usePagination';

const getDisabledClass = (disabled: boolean | undefined) => {
  return disabled ? 'pagination__icons--disabled' : '';
};
const getSizeClass = (size: string | undefined) => {
  return size === 'lg'
    ? 'pagination__icons--lg'
    : size === 'sm'
    ? 'pagination__icons--sm'
    : 'pagination__icons--default';
};
const getShapeClass = (shape: string | undefined) => {
  return shape === 'round'
    ? 'pagination__icons--round'
    : shape === 'rounded'
    ? 'pagination__icons--rounded'
    : '';
};
const getColorClass = (color: string | undefined) => {
  return color === 'primary'
    ? 'pagination__icons--primary'
    : 'pagination__icons--secondary';
};

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
    updateCurrentPage,
    disabled = false,
    size = 'default',
    shape = 'round',
    rowsPerPage = 10,
    range = [10, 25, 50, 100],
  } = usePagination(props);

  const [itemSize, setItemSize] = useState<number>(rowsPerPage);

  // row per page option event handler
  const handleItemSizeChange: React.ChangeEventHandler = (e) => {
    updateCurrentPage(1);
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
        {(currentPage - 1) * itemSize + 1} - {currentPage * itemSize} of {count}{' '}
      </div>
    );
  };

  return (
    <>
      <div className="table-pagination">
        <div className="table-pagination__option">
          <label className="table-pagination__label">
            Rows per page:
            <select
              disabled={disabled}
              value={itemSize}
              onChange={handleItemSizeChange}
              className="table-pagination__select"
            >
              {renderRangeOptions()}
            </select>
          </label>
        </div>
        <div>{renderCurrentRows()}</div>
        <div>
          <button disabled={disabled || currentPage === 1} onClick={onPrev}>
            {'<'}
          </button>
        </div>
        <div>
          <button
            disabled={disabled || currentPage * itemSize === count}
            onClick={onNext}
          >
            {'>'}
          </button>
        </div>
      </div>
    </>
  );
};

export default TablePagination;
