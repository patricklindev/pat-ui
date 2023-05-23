//this component is for story book and test only
import React, {
  useState,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  FC,
} from 'react';

import Pagination from './Pagination';

export type PaginationSize = 'lg' | 'sm';
export type PaginationType =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'default'
  | 'link';
export type PaginationShape = 'round' | 'rounded';
export type PaginationVariant = 'outlined';

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
  shape?: PaginationShape;
  /** set pagination button outlined */
  variant?: PaginationVariant;
}

type NativeButtonProps = IPaginationProps &
  ButtonHTMLAttributes<HTMLButtonElement>;
type NativeAchorButtonProps = IPaginationProps &
  AnchorHTMLAttributes<HTMLAnchorElement>;
export type PaginationProps = NativeButtonProps | NativeAchorButtonProps;

export const PaginationContainer: FC<PaginationProps> = ({
  pagType = 'default',
  pagSize,
  shape = 'rounded',
  disabled = false,
  variant = '',
}) => {
  const [page, setPage] = useState(1);

  const handleClickPage = (p: number) => {
    setPage(p);
  };

  return (
    <Pagination
      currentPage={page}
      onPageChange={handleClickPage}
      pagType={pagType}
      pagSize={pagSize}
      shape={shape}
      disabled={disabled}
      variant={variant}
    >
      Default Pagination
    </Pagination>
  );
};

export default PaginationContainer;
