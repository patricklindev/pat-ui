import React, { ButtonHTMLAttributes, AnchorHTMLAttributes, FC } from 'react';

import PaginationOption from './PaginationOption';
import { range } from '../../utils/range';

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
  currentPage?: number;
  rowsPerPage?: number;
  onPageChange?: Function;
}

type NativeButtonProps = IPaginationProps &
  ButtonHTMLAttributes<HTMLButtonElement>;
type NativeAchorButtonProps = IPaginationProps &
  AnchorHTMLAttributes<HTMLAnchorElement>;
export type PaginationProps = NativeButtonProps | NativeAchorButtonProps;

export const Pagination: FC<PaginationProps> = ({
  className,
  pagSize,
  pagType,
  disabled,
  totalPageNumber = 10,
  currentPage = 1,
  rowsPerPage,
  onPageChange,
  ...rest
}) => {
  let renderItems = range(1, totalPageNumber);

  function renderPagination() {
    return (
      <div data-testid="pagination">
        <PaginationOption key={0} disabled={currentPage === 1}>
          &#8249;
        </PaginationOption>
        {renderItems.map((element) => {
          return <PaginationOption key={element}>{element}</PaginationOption>;
        })}
        <PaginationOption
          key={totalPageNumber + 1}
          disabled={currentPage === totalPageNumber}
        >
          &#8250;
        </PaginationOption>
      </div>
    );
  }

  return (
    // <div data-testid="pagination">
    //   <PaginationOption key={0}>&#8249;</PaginationOption>
    //   {renderItems.map((element) => {
    //     return <PaginationOption key={element}>{element}</PaginationOption>;
    //   })}
    //   <PaginationOption key={totalPageNumber + 1}>&#8250;</PaginationOption>
    // </div>
    renderPagination()
  );
};

Pagination.defaultProps = {
  pagType: 'default',
  disabled: false,
  totalPageNumber: 10,
  currentPage: 1,
};

export default Pagination;

//this code is same as above
// export const Pagination: FC = (props: PaginationProps) => {
//   return <div>Pagination</div>;
// };
