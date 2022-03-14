import React from 'react';

import { IPaginationProps } from '../../utils/hooks/usePagination';
import Pagination from './Pagination';
import TablePagination from './TablePagination';

import { render, screen, fireEvent } from '@testing-library/react';

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
    render(<Pagination {...tableIPaginationProps} />);
    const tablePaginationDiv = screen.getByTestId(
      'table-pagination'
    ) as HTMLElement;

    expect(tablePaginationDiv).toHaveClass('table-pagination');

    // default to disable previous button
    const prevBtn = screen.getByTestId('prev-btn');

    expect(prevBtn).toHaveClass('pagination__icons--disabled');
  });

  it('should disable next button', () => {
    // enable table pagination
    const tableIPaginationProps: IPaginationProps = {
      count: 20,
      paginationType: 'table',
      onPageChange: jest.fn(),
    };
    render(<Pagination {...tableIPaginationProps} />);
    const prevBtn = screen.getByTestId('prev-btn');
    const nextBtn = screen.getByTestId('next-btn');

    expect(prevBtn).toHaveClass('pagination__icons--disabled');
    expect(nextBtn).not.toHaveClass('pagination__icons--disabled');

    expect(tableIPaginationProps.onPageChange).toHaveBeenCalledTimes(0);
    fireEvent.click(nextBtn);
    expect(tableIPaginationProps.onPageChange).toHaveBeenCalledTimes(1);

    expect(prevBtn).not.toHaveClass('pagination__icons--disabled');
    expect(nextBtn).toHaveClass('pagination__icons--disabled');
  });
});
