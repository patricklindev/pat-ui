import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PaginationContainer from './PaginationContainer';
import { PaginationProps } from './PaginationContainer';

describe('Pagination', () => {
  // it('should match the snapshot', () => {
  //   const { asFragment } = render(
  //     <Pagination> Snapshot Pagination </Pagination>
  //   );
  //   expect(asFragment()).toMatchSnapshot();
  // });

  it('should render the default pagination', () => {
    const btnProps = {
      onClick: jest.fn(),
    };
    const wrapper = render(<PaginationContainer></PaginationContainer>);
    const element = wrapper.getByTestId('pagination') as HTMLElement;
    expect(element).not.toBeNull();
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('DIV');

    const buttonElement = wrapper.queryByText('1') as HTMLElement;
    expect(buttonElement).toHaveClass(
      'pagination--btn pagination--btn-default'
    );
  });

  it('should render the pagination with different props', () => {
    const btnPrimarySmallProps: PaginationProps = {
      pagType: 'primary',
      pagSize: 'sm',
      onClick: jest.fn(),
    };

    const wrapper = render(
      <PaginationContainer {...btnPrimarySmallProps}></PaginationContainer>
    );
    const element = wrapper.getByTestId('pagination') as HTMLElement;
    expect(element).not.toBeNull();
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('DIV');

    const buttonElement = wrapper.queryByText('1') as HTMLElement;
    expect(buttonElement).toHaveClass(
      'pagination--btn pagination--btn-primary pagination--btn-sm'
    );
  });
});
