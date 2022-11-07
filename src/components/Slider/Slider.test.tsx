import React from 'react';

import { fireEvent, render } from '@testing-library/react';
import Slider, { PatSliderProps } from './Slider';

describe('Slider', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Slider />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render default slider', () => {
    const sliderProps: PatSliderProps = {
      onChange: jest.fn(),
    };
    const wrapper = render(<Slider {...sliderProps} />);
    const sliderContainer = wrapper.getByRole(
      'slider-container'
    ) as HTMLElement;
    const sliderInput = wrapper.getByRole('slider-input') as HTMLElement;
    expect(sliderInput).toBeInTheDocument();
    expect(sliderInput.tagName).toBe('INPUT');
    expect(sliderContainer).toHaveClass('slider slider-default slider-md');
    expect(sliderInput).toHaveValue('50');
    expect(sliderProps.onChange).toHaveBeenCalledTimes(0);
    fireEvent.change(sliderInput, { target: { value: 0 } });
    expect(sliderInput).toHaveValue('0');
    expect(sliderProps.onChange).toHaveBeenCalledTimes(1);
  });
  it('should render correct slider based on different props', () => {
    const sliderProps: PatSliderProps = {
      sliderColor: 'primary',
      sliderSize: 'sm',
      defaultValue: 20,
      onChange: jest.fn(),
      className: 'test',
    };
    const wrapper = render(<Slider {...sliderProps} />);
    const sliderContainer = wrapper.getByRole(
      'slider-container'
    ) as HTMLElement;
    const sliderInput = wrapper.getByRole('slider-input') as HTMLElement;
    expect(sliderInput).toBeInTheDocument();
    expect(sliderInput.tagName).toBe('INPUT');
    expect(sliderContainer).toHaveClass('slider slider-primary slider-sm test');
    expect(sliderInput).toHaveValue('20');
    expect(sliderProps.onChange).toHaveBeenCalledTimes(0);
    fireEvent.change(sliderInput, { target: { value: 0 } });
    expect(sliderInput).toHaveValue('0');
    expect(sliderProps.onChange).toHaveBeenCalledTimes(1);
  });

  it('should render label bubble in slider', () => {
    const sliderProps: PatSliderProps = {
      onMouseDown: jest.fn(),
      onMouseUp: jest.fn(),
      displayValueLabel: 'auto',
    };
    const wrapper = render(<Slider {...sliderProps} />);
    const sliderContainer = wrapper.getByRole(
      'slider-container'
    ) as HTMLElement;
    const sliderInput = wrapper.getByRole('slider-input') as HTMLElement;
    let sliderBubble = wrapper.queryByRole('slider-bubble') as HTMLElement;

    expect(sliderInput).toBeInTheDocument();
    expect(sliderInput.tagName).toBe('INPUT');
    expect(sliderContainer).toHaveClass('slider');
    expect(sliderInput).toHaveValue('50');
    expect(sliderProps.onMouseDown).toHaveBeenCalledTimes(0);
    expect(sliderProps.onMouseUp).toHaveBeenCalledTimes(0);
    expect(sliderBubble).not.toBeInTheDocument();

    fireEvent.mouseDown(sliderInput);
    sliderBubble = wrapper.queryByRole('slider-bubble') as HTMLElement;
    expect(sliderProps.onMouseDown).toHaveBeenCalledTimes(1);
    expect(sliderBubble).toBeInTheDocument();
    expect(sliderBubble).toHaveTextContent('50');

    fireEvent.mouseUp(sliderInput);
    sliderBubble = wrapper.queryByRole('slider-bubble') as HTMLElement;
    expect(sliderProps.onMouseUp).toHaveBeenCalledTimes(1);
    expect(sliderBubble).not.toBeInTheDocument();
  });

  it('should render marks with steps slider', () => {
    const sliderProps: PatSliderProps = {
      marks: true,
      step: 25,
    };
    const wrapper = render(<Slider {...sliderProps} />);
    const sliderMarks = wrapper.queryAllByRole('slider-marks') as HTMLElement[];
    expect(sliderMarks).toHaveLength(4);
  });

  it('should render custom marks slider', () => {
    const sliderProps: PatSliderProps = {
      marks: [20, 60, 75],
    };
    const wrapper = render(<Slider {...sliderProps} />);
    const sliderMarks = wrapper.queryAllByRole('slider-marks') as HTMLElement[];
    expect(sliderMarks).toHaveLength(3);
  });

  it('should render range slider', () => {
    const sliderProps: PatSliderProps = {
      rangePositions: [30, 60, 90],
      displayValueLabel: 'on',
      onChange: jest.fn(),
    };
    const wrapper = render(<Slider {...sliderProps} />);
    const sliderBubbles = wrapper.queryAllByRole(
      'slider-bubble'
    ) as HTMLElement[];
    const sliderInput = wrapper.getByRole('slider-input') as HTMLElement;
    expect(sliderBubbles).toHaveLength(3);
    expect(sliderBubbles[0]).toHaveTextContent('30');
    expect(sliderBubbles[1]).toHaveTextContent('60');
    expect(sliderBubbles[2]).toHaveTextContent('90');
    expect(sliderInput).toBeInTheDocument();
    expect(sliderInput.tagName).toBe('INPUT');
    expect(sliderProps.onChange).toHaveBeenCalledTimes(0);
    fireEvent.change(sliderInput, { target: { value: 0 } });
    expect(sliderInput).toHaveValue('0');
    expect(sliderProps.onChange).toHaveBeenCalledTimes(1);

    expect(sliderBubbles[0]).toHaveTextContent('0');
    expect(sliderBubbles[1]).toHaveTextContent('60');
    expect(sliderBubbles[2]).toHaveTextContent('90');
  });

  it('should render disabled slider', () => {
    const sliderDisabledProps: PatSliderProps = {
      disabled: true,
    };
    const wrapper = render(<Slider {...sliderDisabledProps} />);
    const sliderContainer = wrapper.getByRole(
      'slider-container'
    ) as HTMLElement;
    const sliderInput = wrapper.getByRole('slider-input') as HTMLElement;
    expect(sliderInput).toBeInTheDocument();
    expect(sliderInput.tagName).toBe('INPUT');
    expect(sliderContainer).toHaveClass('slider slider-disabled');
    expect(sliderInput).toBeDisabled();
  });
});
