import React, { ButtonHTMLAttributes, AnchorHTMLAttributes, FC } from 'react';

import PaginationOption from './PaginationOption';

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
  count?: number;
  defaultPage?: number;
}

type NativeButtonProps = IPaginationProps &
  ButtonHTMLAttributes<HTMLButtonElement>;
type NativeAchorButtonProps = IPaginationProps &
  AnchorHTMLAttributes<HTMLAnchorElement>;
export type PaginationProps = NativeButtonProps | NativeAchorButtonProps;

type NumberOrFC = number | FC;

function createArrayFrom1to(n: number | undefined): NumberOrFC[] {
  const numberArray: NumberOrFC[] = [];
  if (n === undefined) {
    n = 10;
  }
  for (let i = 1; i <= n; i++) {
    numberArray.push(i);
  }
  return numberArray;
}

export const Pagination: FC<PaginationProps> = (props) => {
  const { className, pagSize, pagType, disabled, count, defaultPage, ...rest } =
    props;

  let renderItems = createArrayFrom1to(count);

  return (
    <div data-testid="pagination">
      <PaginationOption>&#8249;</PaginationOption>
      {renderItems.map((element) => {
        return <PaginationOption>{element}</PaginationOption>;
      })}
      <PaginationOption>&#8250;</PaginationOption>
    </div>
  );
};

Pagination.defaultProps = {
  pagType: 'default',
  disabled: false,
  count: 10,
  defaultPage: 1,
};

export default Pagination;

//this code is same as above
// export const Pagination: FC = (props: PaginationProps) => {
//   return <div>Pagination</div>;
// };
