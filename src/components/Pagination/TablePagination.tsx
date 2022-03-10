import React, { FC, ReactElement, useState } from 'react';

import {
  PaginationProps,
  usePagination,
} from '../../utils/hooks/usePagination';

enum ActionType {
  Left,
  Rgith,
}

type RenderActionFn = (actioni: ActionType) => ReactElement;

// style classes utils
const getArrowIconClass = () => {
  return 'pagination__icons__btn-arrow';
};
const getBasicIconClass = () => {
  return 'pagination__icons__btn-icon';
};
const getDefaultBtnClass = () => {
  return 'pagination__icons--default';
};
const getDisabledClass = (disabled: boolean | undefined) => {
  return disabled ? 'pagination__icons--disabled' : '';
};

/**
 *
 * ```js
 * import { TablePagination } from 'pat-ui';
 * ```
 */
const TablePagination: FC<PaginationProps> = (props) => {
  const {
    count,
    currentPage,
    onPrev,
    onNext,
    updateCurrentPage,
    disabled = false,
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
    const leftRange = (currentPage - 1) * itemSize + 1;
    const rightRange =
      currentPage * itemSize > count ? count : currentPage * itemSize;
    return (
      <div>
        {leftRange} - {rightRange} of {count}{' '}
      </div>
    );
  };

  // render action buttons
  const renderActionBtn: RenderActionFn = (actionType) => {
    const leftArrow = (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
      </svg>
    );

    const rightArrow = (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
      </svg>
    );

    const isLeftDisabled: boolean = disabled || currentPage === 1;
    const isRightDisabled: boolean =
      disabled || currentPage * itemSize >= count;

    switch (actionType) {
      case ActionType.Left:
        return (
          <button
            onClick={onPrev}
            disabled={isLeftDisabled}
            className={`${getBasicIconClass()} ${getArrowIconClass()} ${getDefaultBtnClass()} ${getDisabledClass(
              isLeftDisabled
            )} `}
          >
            {leftArrow}
          </button>
        );
      case ActionType.Rgith:
        return (
          <button
            onClick={onNext}
            disabled={isRightDisabled}
            className={`${getBasicIconClass()} ${getArrowIconClass()} ${getDefaultBtnClass()} ${getDisabledClass(
              isRightDisabled
            )} `}
          >
            {rightArrow}
          </button>
        );
    }
  };

  return (
    <>
      <div className="table-pagination" data-testid={'table-pagination'}>
        <div>Rows per page:</div>
        <div className="table-pagination__row__option">
          <select
            disabled={disabled}
            value={itemSize}
            onChange={handleItemSizeChange}
            className="table-pagination__select"
          >
            {renderRangeOptions()}
          </select>
        </div>
        <div>{renderCurrentRows()}</div>
        <div>{renderActionBtn(ActionType.Left)}</div>
        <div>{renderActionBtn(ActionType.Rgith)}</div>
      </div>
    </>
  );
};

export default TablePagination;