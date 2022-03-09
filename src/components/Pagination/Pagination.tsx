import React from 'react';

import {
  ColorType,
  ItemType,
  PageFunc,
  PaginationProps,
  ShapeType,
  SizeType,
  usePagination,
} from '../../utils/hooks/usePagination';

const Pagination: React.FC<PaginationProps> = (props: PaginationProps) => {
  const {
    count,
    currentPage,
    onPrev,
    onNext,
    size,
    page,
    color,
    shape,
    disabled,
    siblingCount,
    itemTypes,
    updateCurrentPage,
  }: {
    updateCurrentPage: PageFunc;
    onPrev: React.MouseEventHandler;
    onNext: React.MouseEventHandler;
    count?: number;
    itemTypes?: ItemType[];
    currentPage: number;
    /** current page number */
    page?: number;
    /** set pagination component to disable or active */
    disabled?: boolean;
    /** pagination color type, primary | secondary */
    color?: ColorType;
    /** size of component, medium as default | large | small */
    size?: SizeType;
    /** shape type, round | rounded  */
    shape?: ShapeType;
    /** show the number of adjacent siblings */
    siblingCount?: number;
    /** trigger when previous or next page action is involed */
    onChangePage?: (currentPage: number) => void;
  } = usePagination(props);

  let eclipsed = 0;

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
  return (
    <div className={'pagination'}>
      {/* PAGINATION TO DO */}
      <div>
        <button
          onClick={onPrev}
          disabled={disabled || currentPage === 1}
          className={`pagination__icons__btn-icon pagination__icons__btn-arrow ${getDisabledClass(
            disabled
          )} ${getSizeClass(size)} ${getShapeClass(shape)}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
          </svg>
        </button>
      </div>
      <div className={'pagination__icons'}>
        {itemTypes
          .map((n, i) => {
            if (n === 'eclipsed') {
              eclipsed += 1;
              if (eclipsed > 1) {
                return '';
              }
              return '...';
            } else {
              eclipsed = 0;
              return i;
            }
          })
          .map((p, i) => {
            if (p === '') {
              return <></>;
            } else if (p === currentPage) {
              return (
                <div
                  className={`pagination__icons__btn-icon 
                        ${getSizeClass(size)} ${getShapeClass(
                    shape
                  )} ${getColorClass(color)}`}
                >
                  {p}
                </div>
              );
            } else if (p === '...') {
              return <div className={'agination__icons__btn-icon'}>{p}</div>;
            } else {
              return (
                <button
                  disabled={disabled}
                  onClick={(_) => updateCurrentPage(p)}
                  className={`pagination__icons__btn-icon ${getDisabledClass(
                    disabled
                  )} ${getSizeClass(size)} ${getShapeClass(shape)}`}
                >
                  <div>{p}</div>
                </button>
              );
            }
          })}
      </div>
      <div>
        <button
          onClick={onNext}
          disabled={disabled || currentPage === count}
          className={`pagination__icons__btn-icon pagination__icons__btn-arrow
                     ${getDisabledClass(disabled)} ${getSizeClass(
            size
          )} ${getShapeClass(shape)}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
          </svg>
        </button>
      </div>
      {/* PAGINATION TO DO */}
    </div>
  );
};

export default Pagination;
