import React from 'react';

import { render, screen } from '@testing-library/react';
import Badge from './Badge';

describe('Badge', () => {
  it('should render default Badge', function () {
    render(<Badge></Badge>);
    // wrapper.findByText('0').then((data) => console.log(data));
    const wrapper = screen.getByTestId('badge-element');
    expect(wrapper).toHaveClass('Badge-root');
  });
});
