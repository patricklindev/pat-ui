import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

import PaginationOption from './PaginationOption';
import { usePagination } from '../../utils/hooks/usePagination';

export type PaginationSize = 'lg' | 'sm';
export type PaginationType =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'default'
  | 'link';

export interface IPaginationProps {
  /** set customized style */
  className?: string;
  /** set button size */
  pagSize?: PaginationSize;
  /** set button type */
  pagType?: PaginationType;
  /** set disabled button */
  disabled?: boolean;
  /** set pagination number */
  totalPageNumber?: number;
  /** set current page number */
  currentPage?: number;
  /** set rows per page for table pagination */
  rowsPerPage?: number;
  /** set pagination shapes round or rounded */
  shape?: string;
  /** set pagination button outlined */
  variant?: string;
}

type NativeButtonProps = IPaginationProps &
  ButtonHTMLAttributes<HTMLButtonElement>;
type NativeAchorButtonProps = IPaginationProps &
  AnchorHTMLAttributes<HTMLAnchorElement>;
export type PaginationProps = NativeButtonProps | NativeAchorButtonProps;

export type HandlerProps = {
  onPageChange: Function;
};

export type PaginationPropsWithHandler = PaginationProps & HandlerProps;

export const Pagination: FC<PaginationPropsWithHandler> = ({
  className,
  pagSize,
  pagType,
  disabled,
  totalPageNumber = 10,
  currentPage = 1,
  rowsPerPage,
  onPageChange,
  shape = 'roundeded',
  variant = '',
  ...rest
}) => {
  let renderItems = usePagination({ totalPageNumber, currentPage });

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <div data-testid="pagination" className="pagination">
      <PaginationOption
        key={0}
        disabled={disabled || currentPage === 1}
        onClick={onPrevious}
        btnSize={pagSize}
        btnType={pagType}
        shape={shape}
        variant={variant}
      >
        &#8249;
      </PaginationOption>
      {renderItems?.map((element, index) => {
        if (element === true) {
          return <span key={index}>&#8230;</span>;
        }
        return (
          <PaginationOption
            key={index}
            selected={currentPage === element}
            btnSize={pagSize}
            btnType={pagType}
            shape={shape}
            disabled={disabled}
            variant={variant}
            onClick={() => {
              onPageChange(element);
            }}
          >
            {element}
          </PaginationOption>
        );
      })}
      <PaginationOption
        key={totalPageNumber + 1}
        disabled={disabled || currentPage === totalPageNumber}
        btnSize={pagSize}
        btnType={pagType}
        shape={shape}
        variant={variant}
        onClick={onNext}
      >
        &#8250;
      </PaginationOption>
    </div>
  );
};

//why this doesn't work
// Pagination.defaultProps = {
//   pagType: 'default',
//   disabled: false,
//   totalPageNumber: 10,
//   currentPage: 1,
// };

export default Pagination;

//this code is same as above
// export const Pagination: FC = (props: PaginationProps) => {
//   return <div>Pagination</div>;
// };
