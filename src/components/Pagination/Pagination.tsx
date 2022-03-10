import React, { FC } from 'react';

import {
  PaginationProps,
  usePagination,
} from '../../utils/hooks/usePagination';
import TablePagination from './TablePagination';

// style classes utils
const getArrowIconClass = () => {
  return 'pagination__icons__btn-arrow';
};
const getBasicIconClass = () => {
  return 'pagination__icons__btn-icon';
};
const getColorFocusedClass = () => {
  return 'pagination__icons__btn--focused';
};
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

// regular pagination
const BasePagination: FC<PaginationProps> = (props) => {
  const {
    count,
    currentPage,
    onPrev,
    onNext,
    size,
    color,
    shape,
    disabled,
    itemTypes,
    updateCurrentPage,
  } = usePagination(props);

  let eclipsed = 0;

  return (
    <div className={'pagination'}>
      <div>
        <button
          onClick={onPrev}
          disabled={disabled || currentPage === 1}
          className={`${getBasicIconClass()} ${getArrowIconClass()} ${getSizeClass(
            size
          )} ${getShapeClass(shape)} ${getDisabledClass(disabled)}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>
      </div>
      <div className={'pagination__icons'}>
        {itemTypes.map((n, i) => {
          if (n === 'eclipsed') {
            eclipsed += 1;
            return eclipsed > 1 ? null : (
              <div className={`${getDisabledClass(disabled)}`}>{'...'}</div>
            );
          } else {
            eclipsed = 0;
            if (+i === +currentPage) {
              return (
                <div
                  className={`${getBasicIconClass()} 
                    ${getSizeClass(size)} ${getShapeClass(
                    shape
                  )} ${getColorClass(color)} ${getDisabledClass(
                    disabled
                  )} ${getColorFocusedClass()}`}
                >
                  {i}
                </div>
              );
            } else {
              return (
                <button
                  disabled={disabled}
                  onClick={(_) => updateCurrentPage(+i)}
                  className={`${getBasicIconClass()} ${getSizeClass(
                    size
                  )} ${getShapeClass(shape)} ${getColorClass(
                    color
                  )} ${getDisabledClass(disabled)}`}
                >
                  <div>{i}</div>
                </button>
              );
            }
          }
        })}
      </div>
      <div>
        <button
          onClick={onNext}
          disabled={disabled || currentPage === count}
          className={`${getBasicIconClass()} ${getArrowIconClass()}
                     ${getSizeClass(size)} ${getShapeClass(
            shape
          )} ${getDisabledClass(disabled)} `}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

/**
 * ```js
 * import { Pagination } from 'pat-ui';
 * ```
 */
const Pagination: FC<PaginationProps> = (props) => {
  const { paginationType = 'default' } = props;

  const renderPaginationType = () => {
    switch (paginationType) {
      case 'default':
        return <BasePagination {...props} />;
      case 'table':
        return <TablePagination {...props} />;
      default:
        return <BasePagination {...props} />;
    }
  };

  return renderPaginationType();
};

export default Pagination;
