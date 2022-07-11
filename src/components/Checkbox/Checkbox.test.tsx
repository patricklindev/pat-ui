import React from 'react';
import { render } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Checkbox />);
    expect(asFragment()).toMatchSnapshot();
  });
});
