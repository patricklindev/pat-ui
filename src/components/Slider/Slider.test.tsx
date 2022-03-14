import React from 'react';

import { render } from '@testing-library/react';
import Slider from './Slider';

describe('Slider', () => {
  //   // snapshot testing
  //   it('should match the snapshot', () => {
  //     const wrapper = render(<Slider></Slider>);
  //   });

  // default slider
  it('should render a default, styled slider', () => {
    const wrapper = render(<Slider></Slider>);
    const element = wrapper.queryByTestId('');

    expect(element).toHaveStyle('');
  });

  // red slider
  it('should render a slider where the slider track and the value marker are both the color red', () => {
    const wrapper = render(<Slider color="slider-red"></Slider>);
    const element = wrapper.queryByTestId('');

    expect(element).toHaveStyle('');
  });

  // small slider
  it('should render a small slider', () => {
    const wrapper = render(<Slider size="small"></Slider>);
    const element = wrapper.queryByTestId('');

    expect(element).toHaveStyle('');
  });
});
