import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Slider, { PatSliderProps } from './Slider';

describe('Slider', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Slider />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render default slider', () => {
    const sliderProps: PatSliderProps = {
      sliderTheme: 'secondary',
      thumbTheme: 'success',
      sliderOrientation: 'horizontal',
      sliderSize: 'md',
      thumbSize: 'md',
      startvalue: 0,
      min: 0,
      max: 0,
      onChange: jest.fn(),
    };
    const wrapper = render(<Slider {...sliderProps}></Slider>);
    const element = wrapper.getByTestId('slider-element') as HTMLElement;

    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('slider');
    expect(sliderProps.onChange).toHaveBeenCalledTimes(0);
    fireEvent.change(element, { target: { value: 1 } });
    expect(sliderProps.onChange).toHaveBeenCalledTimes(1);
    expect(element.tagName).toBe('INPUT');
    expect(element).toHaveClass(
      'slider slider-secondary thumb-success slider-horizontal slider-md thumb-md'
    );
  });

  it('should render the correct classNames', () => {
    const sliderProps: PatSliderProps = {
      sliderSize: 'sm',
      sliderTheme: 'primary',
      className: 'test',
    };
    const wrapper = render(<Slider {...sliderProps}></Slider>);
    const element = wrapper.getByTestId('slider-element') as HTMLElement;
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('slider test');
    expect(element.tagName).toBe('INPUT');
  });

  it('should render a slider with the correct props', () => {
    const sliderProps: PatSliderProps = {
      sliderSize: 'sm',
      thumbSize: 'lg',
      className: 'test',
      sliderOrientation: 'vertical',
      sliderTheme: 'info',
      thumbTheme: 'primary',
    };
    const wrapper = render(<Slider {...sliderProps} />);
    const element = wrapper.getByTestId('slider-element') as HTMLElement;

    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('INPUT');
    expect(element).toHaveClass(
      'slider slider-sm thumb-lg test slider-vertical slider-info thumb-primary'
    );
  });

  it('should render a slider with 2 inputs from user', () => {
    const sliderProps: PatSliderProps = {
      onChange: jest.fn(),
    };
    const wrapper = render(<Slider {...sliderProps}></Slider>);
    const element = wrapper.getByTestId('slider-element') as HTMLElement;

    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('INPUT');
    expect(sliderProps.onChange).toHaveBeenCalledTimes(0);
    fireEvent.change(element, { target: { value: 1 } });
    expect(sliderProps.onChange).toHaveBeenCalledTimes(1);
    fireEvent.change(element, { target: { value: 2 } });
    expect(sliderProps.onChange).toHaveBeenCalledTimes(2);
  });
});
