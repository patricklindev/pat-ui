import React from 'react';
import Pagination from './Pagination';
import { render } from '@testing-library/react';

describe('Pagination', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(
      <Pagination> Snapshot Pagination </Pagination>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the default pagination', () => {
    // const btnProps = {
    //   onClick: jest.fn(),
    // };
    const wrapper = render(<Pagination>Default Pagination</Pagination>);
    const element = wrapper.getByTestId('pagination') as HTMLElement;
    expect(element).not.toBeNull();
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('DIV');
  });
});
