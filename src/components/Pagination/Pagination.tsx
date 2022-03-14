import React, {FC, ReactElement} from 'react';

import {
  PaginationProps,
  usePagination,
} from '../../utils/hooks/usePagination';
import TablePagination from './TablePagination';
import {classNames} from "../../utils/classNames";

type RenderActionFn = (action: ActionType) => ReactElement;

// style classes utils
const getArrowIconClass = () => {
  return 'pagination__icons__btn-arrow';
};
const getColorFocusedClass = () => {
  return 'pagination__icons__btn--focused';
};
const getDisabledClass = (disabled: boolean | undefined) => {
  return disabled ? 'pagination__icons--disabled' : '';
};

enum ActionType {
  Left,
  Right,
}
const leftArrow = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
    </svg>
);

const rightArrow = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
    </svg>
);

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

  let styleClasses = classNames('pagination', {
      ['pagination__icons__btn-icon']: true,
      [`pagination__icons--${size}`]: !!size,
      [`pagination__icons--${shape}`]: !!shape,
      [`pagination__icons--${color}`]: !!color,
      [`pagination__icons--disabled`]: !!disabled,
      disabled: !!(disabled),
  });

  const renderActionBtn: RenderActionFn = (actionType: ActionType) => {
    const isLeftDisabled: boolean = disabled || currentPage === 1;
    const isRightDisabled: boolean =
        disabled || currentPage === count;
    switch (actionType) {
      case ActionType.Left:
        return (
            <button
                data-testid={'prev-btn'}
                onClick={onPrev}
                disabled={isLeftDisabled}
                className={`${styleClasses} ${getDisabledClass(isLeftDisabled)} ${getArrowIconClass()}`}
                aria-label={'leftArrow'} aria-disabled={isLeftDisabled}>
              {leftArrow}
            </button>
        );
      case ActionType.Right:
        return (
            <button
                data-testid={'next-btn'}
                onClick={onNext}
                disabled={isRightDisabled}
                className={`${styleClasses} ${getDisabledClass(isRightDisabled)} ${getArrowIconClass()}`}
                aria-label={'rightArrow'} aria-disabled={isRightDisabled}>
              {rightArrow}
            </button>
        );
    }
  };

  const renderEllipsis = (index: number) => {
    eclipsed += 1;
    return eclipsed > 1 ? null : (
        <div key={`pagination_number_${index}`} aria-label={'ellipsis'} className={`${getDisabledClass(disabled)}`}>
          {'...'}
        </div>
    );
  }

  const renderCurrentPage = (index: Number) => {
    return (
        <div key={`pagination_number_${index}`}
             className={`${styleClasses} ${getColorFocusedClass()}`}
             aria-label={'currentPage'} aria-disabled={disabled}>
          {index}
        </div>
    );
  }

  const renderRegularPage = (index: Number ) => {
    return (
        <button
            key={`pagination_number_${index}`}
            disabled={disabled}
            onClick={(_) => updateCurrentPage(+index)}
            className={`${styleClasses}`}
            aria-label={'page'} aria-disabled={disabled}>
          <div>{index}</div>
        </button>
    );
  }

  return (
    <div className={'pagination'} aria-disabled={disabled} aria-label={'pagination'} data-testid={'pagination'}>
      <div>
        {renderActionBtn(ActionType.Left)}
      </div>
      <div className={'pagination__icons'} aria-label={'pagination__icons'}>
        {
          itemTypes.map((itemType, index) => {
            if (itemType === 'eclipsed') {
                return renderEllipsis(index)
            } else {
              eclipsed = 0; // reset eclipsed count
              if (+index === +currentPage) {
                return renderCurrentPage(index)
              } else {
                return renderRegularPage(index)
              }
            }
          })
        }
      </div>
      <div>
        {renderActionBtn(ActionType.Right)}
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
      case 'table':
        return <TablePagination {...props} />;
      case 'default':
      default:
        return <BasePagination {...props} />;
    }
  };

  return renderPaginationType();
};

export default Pagination;
