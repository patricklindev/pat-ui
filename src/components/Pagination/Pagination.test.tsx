import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PaginationContainer from './PaginationContainer';
import { PaginationProps } from './PaginationContainer';
import Pagination from './Pagination';

describe('Pagination', () => {
  it('should match the snapshot', () => {
    const btnProps = {
      onPageChange: jest.fn(),
    };
    const { asFragment } = render(<Pagination {...btnProps}></Pagination>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the default pagination', () => {
    const btnProps = {
      onPageChange: jest.fn(),
    };

    const wrapper = render(<Pagination {...btnProps}></Pagination>);
    const element = wrapper.getByTestId('pagination') as HTMLElement;
    expect(element).not.toBeNull();
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('DIV');

    const buttonElement = wrapper.queryByText('2') as HTMLElement;
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
      shape: 'round',
      variant: 'outlined',
      onPageChange: jest.fn(),
    };

    const wrapper = render(<Pagination {...btnPrimarySmallProps}></Pagination>);
    const element = wrapper.getByTestId('pagination') as HTMLElement;
    expect(element).not.toBeNull();
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('DIV');

    const buttonElement = wrapper.queryByText('1') as HTMLElement;
    expect(buttonElement).toHaveClass(
      'pagination--btn pagination--btn-primary pagination--btn-sm round outlined'
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
});
