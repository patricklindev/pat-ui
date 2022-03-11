import React from 'react';

import TablePagination from './TablePagination';
import { IPaginationProps } from '../../utils/hooks/usePagination';
import { fireEvent, render, screen } from '@testing-library/react';

describe('TablePagination', () => {
  it('should match snapshot', () => {
    // default props
    const defaultProps = {
      count: 20,
    };
    const { asFragment } = render(<TablePagination {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render table pagination', () => {
    // enable table pagination
    const tableIPaginationProps: IPaginationProps = {
      count: 20,
      paginationType: 'table',
    };
    render(<TablePagination {...tableIPaginationProps} />);
    const tablePaginationDiv = screen.getByTestId(
      'table-pagination'
    ) as HTMLElement;

    expect(tablePaginationDiv).toHaveClass('table-pagination');
  });
});
