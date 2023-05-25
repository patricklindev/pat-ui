import React, { FC } from 'react';

import { usePagination } from '../../utils/hooks/usePagination';
import Button from '../Button/Button';
import { classNames } from '../../utils/classNames';

export type PaginationSize = 'lg' | 'sm';
export type PaginationType = 'primary' | 'secondary' | 'default' | 'link';
export type PaginationShape = 'round' | 'rounded';
export type PaginationVariant = 'outlined';

export interface PaginationProps {
  /** set customized style */
  className?: string;
  /** set button size */
  btnSize?: PaginationSize;
  /** set button type */
  btnType?: PaginationType;
  /** set disabled button */
  disabled?: boolean;
  /** set pagination number */
  // todo: total page number should be required
  totalPageNumber?: number;
  /** set current page number */
  currentPage?: number;
  /** set pagination shapes round or rounded */
  shape?: PaginationShape;
  /** set pagination button outlined */
  variant?: PaginationVariant;
  /** set pagination page function */
  onPageChange: Function;
}

export const Pagination: FC<PaginationProps> = ({
  className,
  btnSize,
  btnType = 'default',
  disabled,
  totalPageNumber = 10,
  currentPage = 1,
  onPageChange,
  shape = 'rounded',
  variant = '',
}) => {
  let pagType = !!btnType ? `pagination--btn-${btnType}` : '';
  let defaultPaginationStyle = 'pagination--btn';

  let paginationStyles = classNames(defaultPaginationStyle, variant, shape);
  let renderItems = usePagination({ totalPageNumber, currentPage });

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const getButtonStyles = (buttonPage: number) => {
    let selected = '';
    let ButtonStyles = paginationStyles;
    if (currentPage === buttonPage) {
      selected = 'selected';
      ButtonStyles = classNames(ButtonStyles, pagType, selected);
    }
    return ButtonStyles;
  };

  return (
    <div data-testid="pagination" className="pagination">
      <Button
        key={0}
        className={paginationStyles}
        disabled={disabled || currentPage === 1}
        onClick={onPrevious}
        btnSize={btnSize}
      >
        &#8249;
      </Button>
      {renderItems?.map((element, index) => {
        if (element === true) {
          return <span key={index}>&#8230;</span>;
        }

        let PaginationButtonStyles = getButtonStyles(element as number);

        return (
          <Button
            key={index}
            className={PaginationButtonStyles}
            disabled={disabled}
            btnSize={btnSize}
            onClick={() => {
              onPageChange(element);
            }}
          >
            {element}
          </Button>
        );
      })}
      <Button
        key={totalPageNumber + 1}
        className={paginationStyles}
        disabled={disabled || currentPage === totalPageNumber}
        btnSize={btnSize}
        onClick={onNext}
      >
        &#8250;
      </Button>
    </div>
  );
};

//why this doesn't work
// Pagination.defaultProps = {
//   btnType: 'default',
//   disabled: false,
//   totalPageNumber: 10,
//   currentPage: 1,
// };

export default Pagination;

//this code is same as above
// export const Pagination: FC = (props: PaginationProps) => {
//   return <div>Pagination</div>;
// };
