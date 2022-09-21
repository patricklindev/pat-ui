import ValueLabel from './ValueLabel';
import React from 'react';
import { render } from '@testing-library/react';
import Slider from '../Slider';

describe('ValueLabel', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<ValueLabel />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should display different color ValueLabel base upon color props', () => {
    //  primary color
    const ValueLabelP = render(
      <ValueLabel data-testid={'primary'} color="primary" />
    ).getByTestId('primary');
    expect(ValueLabelP).toBeInTheDocument();
    expect(ValueLabelP).toHaveClass('primary-color');

    // secondary color
    const ValueLabelS = render(
      <ValueLabel data-testid={'secondary'} color="secondary" />
    ).getByTestId('secondary');
    expect(ValueLabelS).toBeInTheDocument();
    expect(ValueLabelS).toHaveClass('secondary-color');
  });
});
