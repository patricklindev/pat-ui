import React from 'react';

import Pagination from './Pagination';
import { IPaginationProps } from '../../utils/hooks/usePagination';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Pagination', () => {
  // tets cases
  it('should match snapshot', () => {
    // default props
    const defaultProps = {
      count: 20,
    };
    const { asFragment } = render(<Pagination {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render default pagination', () => {
    // default props
    const defaultProps = {
      count: 20,
    };
    render(<Pagination {...defaultProps} />);
    const paginationDiv = screen.getByTestId('pagination') as HTMLElement;

    expect(paginationDiv).toHaveClass('pagination');

    const arrowButton = screen.getByTestId('prev-btn');
    expect(arrowButton).toHaveClass('pagination__icons--disabled');
  });

  it('should render default pagination', () => {
    // props
    const lastPageProps = {
      count: 20,
      page: 20,
    };
    render(<Pagination {...lastPageProps} />);
    const paginationDiv = screen.getByTestId('pagination') as HTMLElement;

    expect(paginationDiv).toHaveClass('pagination');

    const arrowButton = screen.getByTestId('next-btn');
    expect(arrowButton).toHaveClass('pagination__icons--disabled');
  });

  it('should render primary color', () => {
    // primary
    const primaryColorProps: IPaginationProps = {
      count: 20,
      color: 'primary',
    };

    render(<Pagination {...primaryColorProps} />);
    const pageButton = screen.getByText('1');

    expect(pageButton).toHaveClass('pagination__icons--primary');
  });

  it('should render secondary color', () => {
    // secondary
    const secondaryColorProps: IPaginationProps = {
      count: 20,
      color: 'secondary',
    };

    render(<Pagination {...secondaryColorProps} />);
    const pageButton = screen.getByText('1');

    expect(pageButton).toHaveClass('pagination__icons--secondary');
  });

  it('should render round shape', () => {
    // round
    const roundProps: IPaginationProps = {
      count: 20,
      shape: 'round',
    };

    render(<Pagination {...roundProps} />);
    const pageButton = screen.getByText('1');

    expect(pageButton).toHaveClass('pagination__icons--round');
  });

  it('should render round shape', () => {
    // rounded
    const roundedProps: IPaginationProps = {
      count: 20,
      shape: 'rounded',
    };

    render(<Pagination {...roundedProps} />);
    const pageButton = screen.getByText('1');

    expect(pageButton).toHaveClass('pagination__icons--rounded');
  });

  it('should render small size', () => {
    // small size
    const smallSizeProps: IPaginationProps = {
      count: 20,
      size: 'sm',
    };

    render(<Pagination {...smallSizeProps} />);
    const pageButton = screen.getByText('1');

    expect(pageButton).toHaveClass('pagination__icons--sm');
  });

  it('should render medium size', () => {
    // medium size
    const mediumSizeProps: IPaginationProps = {
      count: 20,
      size: 'default',
    };

    render(<Pagination {...mediumSizeProps} />);
    const pageButton = screen.getByText('1');

    expect(pageButton).toHaveClass('pagination__icons--default');
  });

  it('should render large size', () => {
    // small size
    const largeSizeProps: IPaginationProps = {
      count: 20,
      size: 'lg',
    };

    render(<Pagination {...largeSizeProps} />);
    const pageButton = screen.getByText('1');

    expect(pageButton).toHaveClass('pagination__icons--lg');
  });

  it('should disable pagination', () => {
    // disabled pagination props
    const disabledProps: IPaginationProps = {
      count: 20,
      disabled: true,
    };

    render(<Pagination {...disabledProps} />);

    const currentPageBtn = screen.getByText('1');
    expect(currentPageBtn).toHaveClass('pagination__icons--disabled');
  });

  it('should go to last page when click on the previous button', () => {
    // previous button test props
    const prevActionProps: IPaginationProps = {
      count: 20,
      page: 10,
      onPageChange: jest.fn(),
    };

    render(<Pagination {...prevActionProps} />);
    const currentButton = screen.getByTestId('prev-btn');

    expect(currentButton).toHaveClass('pagination__icons__btn-arrow');

    expect(prevActionProps.onPageChange).toHaveBeenCalledTimes(0);
    fireEvent.click(currentButton);
    expect(prevActionProps.onPageChange).toHaveBeenCalledTimes(1);

    const focusedPageBtn = screen.getByText(
      `${(prevActionProps.page as number) - 1}`
    );
    expect(focusedPageBtn).toHaveClass('pagination__icons__btn--focused');
  });

  it('should go to next page when click on the next button', () => {
    // next button test props
    const nextActionProps: IPaginationProps = {
      count: 20,
      page: 10,
      onPageChange: jest.fn(),
    };

    render(<Pagination {...nextActionProps} />);
    const currentButton = screen.getByTestId('next-btn');

    expect(currentButton).toHaveClass('pagination__icons__btn-arrow');

    expect(nextActionProps.onPageChange).toHaveBeenCalledTimes(0);
    fireEvent.click(currentButton);
    expect(nextActionProps.onPageChange).toHaveBeenCalledTimes(1);

    const focusedPageBtn = screen.getByText(
      `${(nextActionProps.page as number) + 1}`
    );
    expect(focusedPageBtn).toHaveClass('pagination__icons__btn--focused');
  });
});
