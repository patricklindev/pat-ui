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

function createArrayFrom1to(n: number): number[] {
  const numberArray: number[] = [];
  for (let i = 1; i <= n; i++) {
    numberArray.push(i);
  }
  return numberArray;
}

export const Pagination: FC<PaginationProps> = ({
  className,
  pagSize,
  pagType,
  disabled,
  count = 10,
  defaultPage = 1,
  ...rest
}) => {
  let renderItems = createArrayFrom1to(count);

  return (
    <div data-testid="pagination">
      <PaginationOption key={'0'}>&#8249;</PaginationOption>
      {renderItems.map((element) => {
        return (
          <PaginationOption key={String(element)}>{element}</PaginationOption>
        );
      })}
      <PaginationOption key={String(count + 1)}>&#8250;</PaginationOption>
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
