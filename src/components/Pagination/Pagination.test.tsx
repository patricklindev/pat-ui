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
});
