import React from 'react';

import { render, fireEvent, screen } from '@testing-library/react';
import Slider, { SliderProps } from './Slider';
import SliderThumb from './Components/SliderThumb';
import SliderTrack from './Components/SliderTrack';
import SliderProgressTrack from './Components/SliderProgressTrack';

describe('Slider', () => {
  //snapshot testing
  it('should match snapshot', () => {
    const { asFragment } = render(<Slider />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render a default slider', () => {
    const wrapper = render(<Slider />);
    const sliderElement = wrapper.getByTestId('slider-container-element');
    const sliderThumb = wrapper.getByTestId('slider-thumb-element-1');
    expect(sliderElement).toHaveClass('slider-container');
    expect(sliderThumb).toHaveClass('slider-thumb');
  });
});
