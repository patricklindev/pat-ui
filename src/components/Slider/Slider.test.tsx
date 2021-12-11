import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import Slider, { PatSliderProps } from './Slider';

const setUp = () => {
    const utils = render(<Slider/>)
    const input = utils.getByLabelText('slider-input')
    return{
        input,
        ...utils
    }
}

describe('Slider', () => {
    // it('should render default slider', () => {
    //     const sliderProps= {
    //         onChange: jest.fn(),
    //     };
    //     const wrapper = render(<Slider {...sliderProps}></Slider>);
    //     const element = wrapper.queryByText('') as HTMLElement;
    //     expect(element).toBeInTheDocument();
    //     expect(element.tagName).toBe('SLIDER');
    //     expect(element).toHaveClass('slider slider-primary');
    //     expect(sliderProps.onChange).toHaveBeenCalledTimes(0);
    //     fireEvent.change(element);
    //     expect(sliderProps.onChange).toHaveBeenCalledTimes(1)
    // })

    it('should render the correct slider based on differet props', () => {
        const sliderPrimarySmallProps: PatSliderProps = {
            sliderSize: 'sm',
            sliderTheme: 'primary',
            className: 'test',
        };
       
        const sliderPrimarySmallWrapper = render(
            <Slider {...sliderPrimarySmallProps}/>
        );
        const sliderPrimarySmallElement = sliderPrimarySmallWrapper.queryByText('') as HTMLElement;
        expect(sliderPrimarySmallElement).toBeInTheDocument();
        expect(sliderPrimarySmallElement.tagName).toBe('SLIDER');
        expect(sliderPrimarySmallElement).toHaveClass('slider slider-primary slider-sm test');
        
        // const {input} = setUp();
        // fireEvent.change(input, {target: {value: '23'}});
        // expect(input.value).toBe('23');
    })
})