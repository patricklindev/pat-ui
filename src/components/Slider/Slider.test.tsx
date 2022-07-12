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
    const wrapper = render(<Slider {...sliderProps} />);
    const container = wrapper.queryByTestId('slider-container') as HTMLElement;
    const element = wrapper.queryByTestId('slider-input') as HTMLElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('INPUT');
    expect(container).toHaveClass('slider-cont slider-md');
    expect(element).toHaveClass('slider');
    expect(sliderProps.onChange).toHaveBeenCalledTimes(0);
    fireEvent.change(element, { target: { value: 51 } });
    expect(sliderProps.onChange).toHaveBeenCalledTimes(1);
  });

  it('should render correct slider based on different props', () => {
    const sliderPrimarySmallProps: PatSliderProps = {
      color: 'primary',
      setSize: 'sm',
      onChange: jest.fn(),
      className: 'test',
    };
    const sliderPrimarySmallWrapper = render(
      <Slider {...sliderPrimarySmallProps} />
    );
    const sliderPrimarySmallContainer = sliderPrimarySmallWrapper.queryByTestId(
      'slider-container'
    ) as HTMLElement;
    const sliderPrimarySmallElement = sliderPrimarySmallWrapper.queryByTestId(
      'slider-input'
    ) as HTMLElement;
    expect(sliderPrimarySmallElement).toBeInTheDocument();
    expect(sliderPrimarySmallElement.tagName).toBe('INPUT');
    expect(sliderPrimarySmallContainer).toHaveClass('slider-cont slider-sm');
    expect(sliderPrimarySmallElement).toHaveClass('slider slider-primary');
    expect(sliderPrimarySmallProps.onChange).toHaveBeenCalledTimes(0);
    fireEvent.change(sliderPrimarySmallElement, { target: { value: 51 } });
    expect(sliderPrimarySmallProps.onChange).toHaveBeenCalledTimes(1);
  });

  it('should render disabled slider', () => {
    const sliderDisabledProps: PatSliderProps = {
      onChange: jest.fn(),
      disabled: true,
    };
    const sliderDisabledWrapper = render(<Slider {...sliderDisabledProps} />);
    const sliderDisabledElement = sliderDisabledWrapper.queryByTestId(
      'slider-input'
    ) as HTMLElement;
    expect(sliderDisabledElement).toBeInTheDocument();
    expect(sliderDisabledElement.tagName).toBe('INPUT');
    expect(sliderDisabledElement).toHaveClass('slider slider-disabled');
    expect(sliderDisabledElement).toHaveProperty('disabled');
    // expect(sliderDisabledProps.onChange).toHaveBeenCalledTimes(0);
    // fireEvent.change(sliderDisabledElement, { target: { value: 51 } });
    // expect(sliderDisabledProps.onChange).toHaveBeenCalledTimes(0);
  });
});
