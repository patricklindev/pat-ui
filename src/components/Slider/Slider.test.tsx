import React from 'react';

import { render, fireEvent } from '@testing-library/react';


import Slider, { SliderComponentProps } from './Slider';

describe('Slider', () => {
    it('should match snapshot', () => {
        const { asFragment } = render(<Slider />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should render default slider', () => {
        const sliderProps: SliderComponentProps = {
            onChange: jest.fn(),
        };
        const wrapper = render(<Slider {...sliderProps} />);
        const sliderContainer = wrapper.getByTestId(
            'slider__container'
        ) as HTMLElement;
        const sliderInput = wrapper.getByTestId('slider__input') as HTMLElement;
        expect(sliderInput).toBeInTheDocument();
        expect(sliderInput.tagName).toBe('INPUT');
        expect(sliderContainer).toHaveClass('slider slider-default slider-md');
        expect(sliderInput).toHaveValue('50');
        expect(sliderProps.onChange).toHaveBeenCalledTimes(0);
        fireEvent.change(sliderInput, { target: { value: 20 } });
        expect(sliderInput).toHaveValue('20');
        expect(sliderProps.onChange).toHaveBeenCalledTimes(1);
    });


    it('should render correct slider based on different props', () => {
        const sliderProps: SliderComponentProps = {
            sliderColor: 'primary',
            sliderSize: 'sm',
            defaultValue: 10,
            onChange: jest.fn(),
        };
        const wrapper = render(<Slider {...sliderProps} />);
        const sliderContainer = wrapper.getByTestId(
            'slider__container'
        ) as HTMLElement;
        const sliderInput = wrapper.getByTestId('slider__input') as HTMLElement;
        expect(sliderInput).toBeInTheDocument();
        expect(sliderInput.tagName).toBe('INPUT');
        expect(sliderContainer).toHaveClass('slider slider-primary slider-sm');
        expect(sliderInput).toHaveValue('10');
        expect(sliderProps.onChange).toHaveBeenCalledTimes(0);
        fireEvent.change(sliderInput, { target: { value: 20 } });
        expect(sliderInput).toHaveValue('20');
        expect(sliderProps.onChange).toHaveBeenCalledTimes(1);
    });

    it('should render marks slider', () => {
        const sliderProps: SliderComponentProps = {
            marks: [20, 50, 80],
        };
        const wrapper = render(<Slider {...sliderProps} />);
        const sliderMarks = wrapper.queryAllByTestId('slider__marks') as HTMLElement[];
        expect(sliderMarks).toHaveLength(3);
        const sliderNumberMarks = wrapper.queryAllByTestId('slider__number__marks') as HTMLElement[];
        expect(sliderNumberMarks).toHaveLength(3);
        expect(sliderNumberMarks[0]).toHaveTextContent('20');
        expect(sliderNumberMarks[1]).toHaveTextContent('50');
        expect(sliderNumberMarks[2]).toHaveTextContent('80');
    });

    it('should render range slider', () => {
        const sliderProps: SliderComponentProps = {
            rangePositions: [20, 50],
            valueLabelDisplay: 'on',
            onChange: jest.fn(),
        };
        const wrapper = render(<Slider {...sliderProps} />);
        const sliderBubbles = wrapper.queryAllByTestId(
            'slider__bubble'
        ) as HTMLElement[];
        const sliderInput = wrapper.getByTestId('slider__input') as HTMLElement;
        expect(sliderBubbles).toHaveLength(2);
        expect(sliderBubbles[0]).toHaveTextContent('20');
        expect(sliderBubbles[1]).toHaveTextContent('50');
        expect(sliderInput).toBeInTheDocument();
        expect(sliderInput.tagName).toBe('INPUT');
        expect(sliderProps.onChange).toHaveBeenCalledTimes(0);
        fireEvent.change(sliderInput, { target: { value: 10 } });
        expect(sliderInput).toHaveValue('10');
        expect(sliderProps.onChange).toHaveBeenCalledTimes(1);

        expect(sliderBubbles[0]).toHaveTextContent('10');
        expect(sliderBubbles[1]).toHaveTextContent('50');

    });

    it('should render vertical slider', () => {
        const sliderDisabledProps: SliderComponentProps = {
            orientation: 'vertical',
        };
        const wrapper = render(<Slider {...sliderDisabledProps} />);
        const sliderContainer = wrapper.getByTestId(
            'slider__container'
        ) as HTMLElement;
        expect(sliderContainer).toHaveClass('slider slider-vertical');
    });

    it('should render disabled slider', () => {
        const sliderDisabledProps: SliderComponentProps = {
            disabled: true,
        };
        const wrapper = render(<Slider {...sliderDisabledProps} />);
        const sliderContainer = wrapper.getByTestId(
            'slider__container'
        ) as HTMLElement;
        const sliderInput = wrapper.getByTestId('slider__input') as HTMLElement;
        expect(sliderInput).toBeInTheDocument();
        expect(sliderInput.tagName).toBe('INPUT');
        expect(sliderContainer).toHaveClass('slider slider-disabled');
        expect(sliderInput).toBeDisabled();
    });

});