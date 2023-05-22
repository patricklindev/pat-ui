import React from 'react';
import { render } from '@testing-library/react';
import PaginationContainer from './PaginationContainer';

describe('Pagination', () => {
  // it('should match the snapshot', () => {
  //   const { asFragment } = render(
  //     <Pagination> Snapshot Pagination </Pagination>
  //   );
  //   expect(asFragment()).toMatchSnapshot();
  // });

  it('should render the default pagination', () => {
    // const btnProps = {
    //   onClick: jest.fn(),
    // };
    const wrapper = render(<PaginationContainer></PaginationContainer>);
    const element = wrapper.getByTestId('pagination') as HTMLElement;
    expect(element).not.toBeNull();
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('DIV');
  });
});
