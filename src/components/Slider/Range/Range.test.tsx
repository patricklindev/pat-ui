import Range from './Range';
import { render } from '@testing-library/react';
import React from 'react';

describe('Range', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Range />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should display different color range slider base upon color props', () => {
    // primary color
    const primaryRangeSlider = render(
      <Range color="primary" data-testid="primary" />
    ).getByTestId('primary');
    expect(primaryRangeSlider).toBeInTheDocument();
    expect(primaryRangeSlider).toHaveClass('primary-color');

    // secondary color
    const secondaryRangeSlider = render(
      <Range color="secondary" data-testid="secondary" />
    ).getByTestId('secondary');
    expect(secondaryRangeSlider).toBeInTheDocument();
    expect(secondaryRangeSlider).toHaveClass('secondary-color');
  });

  it('should display different size range slider base upon size props', () => {
    // large range slider
    const largeRangeSlider = render(
      <Range data-testid="large" size="lg" />
    ).getByTestId('large');
    expect(largeRangeSlider).toBeInTheDocument();
    expect(largeRangeSlider).toHaveClass('custom_thumb_lg');

    // small range slider
    const smallRangeSlider = render(
      <Range data-testid="small" size="sm" />
    ).getByTestId('small');
    expect(smallRangeSlider).toBeInTheDocument();
    expect(smallRangeSlider).toHaveClass('custom_thumb_sm');
  });
});
