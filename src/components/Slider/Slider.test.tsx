import React from 'react';

import { render, fireEvent, screen } from '@testing-library/react';
import Slider, { SliderProps } from './Slider';
import SliderScale, { SliderScaleProps } from './Components/SliderScale';

describe('Slider', () => {
  //snapshot testing
  it('should match snapshot', () => {
    const { asFragment } = render(<Slider />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render a default slider', () => {
    const wrapper = render(<Slider />);
    const sliderElement = wrapper.getByTestId('slider-container-element');
    const sliderTrackElement = wrapper.queryByTestId('slider-track-element');

    // query both thumbs, but only slider-thumb-element-thumb-1 is expected to be found
    const thumbElement1 = sliderTrackElement?.querySelector(
      '[data-testid="slider-thumb-element-1"]'
    );
    const thumbElement2 = sliderTrackElement?.querySelector(
      '[data-testid="slider-thumb-element-2"]'
    );

    const progressTrackElement = sliderTrackElement?.querySelector(
      '[data-testid="slider-progress-track-element"]'
    );

    expect(sliderElement).toBeInTheDocument();
    expect(sliderTrackElement).toBeInTheDocument();
    expect(progressTrackElement).toBeInTheDocument();

    //expect to see only slider-thumb-element-1
    expect(thumbElement1).toBeInTheDocument();
    expect(thumbElement2).not.toBeInTheDocument();
  });

  it('should render a range slider with two thumbs', () => {
    const sliderProps: SliderProps = {
      range: true,
    };
    const wrapper = render(<Slider {...sliderProps} />);
    const sliderTrackElement = wrapper.getByTestId('slider-track-element');

    // query both thumbs, but only slider-thumb-element-thumb-1 is expected to be found
    const thumbElement1 = sliderTrackElement?.querySelector(
      '[data-testid="slider-thumb-element-1"]'
    );
    const thumbElement2 = sliderTrackElement?.querySelector(
      '[data-testid="slider-thumb-element-2"]'
    );

    // both thumb elements are expected to be in the document
    expect(thumbElement1).toBeInTheDocument();
    expect(thumbElement2).toBeInTheDocument();
  });

  it('should render a slider with default marks', () => {
    const sliderScaleProps: SliderScaleProps = {
      trackWidth: 500,
      min: 0,
      max: 100,
      markValues: true,
    };
    const wrapper = render(<SliderScale {...sliderScaleProps} />);

    //Should find labels showing 0, 20, 40, 60, 80, 100
    const label1 = wrapper.getByText('0');
    const label2 = wrapper.getByText('20');
    const label3 = wrapper.getByText('40');
    const label4 = wrapper.getByText('60');
    const label5 = wrapper.getByText('80');
    const label6 = wrapper.getByText('100');
  });

  it('should render a slider with custom marks', () => {
    const sliderScaleProps: SliderScaleProps = {
      trackWidth: 500,
      min: 0,
      max: 100,
      markValues: [0, 8, 19, 25, 32, 88, 92, 97, 100],
    };
    const wrapper = render(<SliderScale {...sliderScaleProps} />);

    //Should find labels showing 0, 8, 19, 25, 32, 88, 92, 97, 100
    const label1 = wrapper.getByText('0');
    const label2 = wrapper.getByText('8');
    const label3 = wrapper.getByText('19');
    const label4 = wrapper.getByText('25');
    const label5 = wrapper.getByText('32');
    const label6 = wrapper.getByText('88');
    const label7 = wrapper.getByText('92');
    const label8 = wrapper.getByText('97');
    const label9 = wrapper.getByText('100');
  });

  it('should render a smaller slider', () => {
    const sliderProps: SliderProps = {
      size: 'small',
    };
    const wrapper = render(<Slider {...sliderProps} />);
    const sliderTrackElement = wrapper.getByTestId('slider-track-element');
    const thumbElement = sliderTrackElement?.querySelector(
      '[data-testid="slider-thumb-element-1"]'
    );

    expect(sliderTrackElement).toHaveClass('slider-track--small');
    expect(thumbElement).toHaveClass('slider-thumb--small');
  });

  it('should render a slider of the color red', () => {
    const sliderProps: SliderProps = {
      color: 'red',
    };
    const wrapper = render(<Slider {...sliderProps} />);
    const sliderTrackElement = wrapper.getByTestId('slider-track-element');
    const thumbElement = sliderTrackElement?.querySelector(
      '[data-testid="slider-thumb-element-1"]'
    );
    const progressElement = sliderTrackElement?.querySelector(
      '[data-testid="slider-progress-track-element"]'
    );

    expect(thumbElement).toHaveStyle('background: red');
    expect(progressElement).toHaveStyle('background: red');
  });
});
