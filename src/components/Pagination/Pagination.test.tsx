import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Pagination, { PaginationShape, PaginationVariant } from './Pagination';
import TablePagination from './TablePagination';

describe('Pagination', () => {
  // it('should match the snapshot', () => {
  //   const btnProps = {
  //     onPageChange: jest.fn(),
  //   };
  //   const { asFragment } = render(<Pagination {...btnProps}></Pagination>);
  //   expect(asFragment()).toMatchSnapshot();
  // });

  it('should render the default pagination', () => {
    const btnProps = {
      onPageChange: jest.fn(),
    };
    const wrapper = render(<Pagination {...btnProps}></Pagination>);
    const element = wrapper.getByTestId('pagination') as HTMLElement;
    expect(element).not.toBeNull();
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('DIV');

    const buttonElement = wrapper.queryByText('1') as HTMLElement;
    expect(buttonElement).toHaveClass(
      'pagination--btn pagination--btn-default'
    );

    expect(btnProps.onPageChange).toHaveBeenCalledTimes(0);
    fireEvent.click(buttonElement);
    expect(btnProps.onPageChange).toHaveBeenCalledTimes(1);
  });

  it('should render the pagination with different props', () => {
    const btnPrimarySmallProps = {
      pagType: 'primary' as 'primary',
      pagSize: 'sm' as 'sm',
      shape: 'round' as PaginationShape,
      variant: 'outlined' as PaginationVariant,
      onPageChange: jest.fn(),
    };

    const wrapper = render(<Pagination {...btnPrimarySmallProps}></Pagination>);
    const element = wrapper.getByTestId('pagination') as HTMLElement;
    expect(element).not.toBeNull();
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('DIV');

    const buttonElement = wrapper.queryByText('1') as HTMLElement;
    // expect(buttonElement).toHaveClass(
    //   'pagination--btn pagination--btn-primary pagination--btn-sm round outlined'
    // );
    expect(buttonElement).toHaveClass(
      'pagination--btn pagination--btn-primary btn-sm round outlined'
    );
    expect(btnPrimarySmallProps.onPageChange).toHaveBeenCalledTimes(0);
    fireEvent.click(buttonElement);
    expect(btnPrimarySmallProps.onPageChange).toHaveBeenCalledTimes(1);
  });

  it('should render the disabled pagination', () => {
    const btnDisabledProps = {
      disabled: true,
      onPageChange: jest.fn(),
    };

    const wrapper = render(<Pagination {...btnDisabledProps}></Pagination>);
    const element = wrapper.getByTestId('pagination') as HTMLElement;
    expect(element).not.toBeNull();
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('DIV');

    const buttonElement = wrapper.queryByText('1') as HTMLElement;
    expect(buttonElement).toHaveAttribute('disabled');

    expect(btnDisabledProps.onPageChange).toHaveBeenCalledTimes(0);
    fireEvent.click(buttonElement);
    expect(btnDisabledProps.onPageChange).toHaveBeenCalledTimes(0);
  });

  it('should render the table pagination', () => {
    const tablePaginationProps = {
      rowsPerPage: 25,
      totalPageNumber: 100,
      currentPage: 1,
      onPageChange: jest.fn(),
    };

    const wrapper = render(
      <TablePagination {...tablePaginationProps}></TablePagination>
    );

    const element = wrapper.getByTestId('tablePagination') as HTMLElement;
    expect(element).not.toBeNull();
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('DIV');

    const buttonElement = wrapper.queryByText('›') as HTMLElement;

    expect(tablePaginationProps.onPageChange).toHaveBeenCalledTimes(0);
    fireEvent.click(buttonElement);
    expect(tablePaginationProps.onPageChange).toHaveBeenCalledTimes(1);
  });
});
