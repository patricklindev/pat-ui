import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Slider, { PatSliderProps } from './Slider';

describe('Slider', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Slider />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render default slider', () => {
    const sliderProps = {
      onChange: jest.fn(),
    };
    const wrapper = render(<Slider {...sliderProps}></Slider>);
    const element = wrapper.getByTestId('slider-element') as HTMLElement;

    expect(element).toHaveClass('slider');
    expect(sliderProps.onChange).toHaveBeenCalledTimes(0);
    fireEvent.change(element, { target: { value: 1 } });
    expect(sliderProps.onChange).toHaveBeenCalledTimes(1);
  });

  it('should render the correct slider based on different props', () => {
    const sliderProps: PatSliderProps = {
      sliderSize: 'sm',
      sliderTheme: 'primary',
      className: 'test',
    };
    const wrapper = render(<Slider {...sliderProps}></Slider>);
    const element = wrapper.getByTestId('slider-element') as HTMLElement;

    expect(element).toHaveClass('slider test');
    expect(element.tagName).toBe('INPUT');
  });

  it('should render a slider with the correct props', () => {
    const sliderProps: PatSliderProps = {
      sliderSize: 'md',
      thumbSize: 'md',
      className: 'test',
      sliderOrientation: 'horizontal',
      sliderTheme: 'info',
      thumbTheme: 'primary',
    };
    const wrapper = render(<Slider {...sliderProps} />);
    const element = wrapper.getByTestId('slider-element') as HTMLElement;

    expect(element).toHaveClass(
      'slider slider-md thumb-md test slider-horizontal slider-info thumb-primary'
    );
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('INPUT');
  });
});
