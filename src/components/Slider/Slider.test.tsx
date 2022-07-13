import React from 'react';
import Slider, { ISliderProps } from './Slider'
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

describe('Slider', () => {
    //snapshot
    it('should match snapshot', () => {
        const component = renderer.create(<Slider />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Should render default slider', () => {
        const sliderProps: ISliderProps = {
            onChange: jest.fn() //Mock function
        }

        const wrapper = render(<Slider {...sliderProps}/>);
        const sliderElement = wrapper.getByTestId('slider-element') as HTMLElement;

        expect(sliderElement).toBeInTheDocument();
        expect(sliderElement).toHaveClass('slider')
        expect(sliderElement).toHaveClass('slider-primary')
        expect(sliderProps.onChange).toHaveBeenCalledTimes(0);
        fireEvent.change(sliderElement, { target: { value: 1 } })
        expect(sliderProps.onChange).toHaveBeenCalledTimes(1);

    })

    it('Developers should be able to set the color of the component using props', () => {
        const themedSliderProps: ISliderProps = {
            sliderTheme: 'warning',
            thumbTheme: 'secondary',
            onChange: jest.fn() //Mock function
        }

        const wrapper = render(<Slider {...themedSliderProps}/>);
        const sliderElement = wrapper.getByTestId('slider-element') as HTMLElement;

        expect(sliderElement).toBeInTheDocument();
        expect(sliderElement).toHaveClass('slider slider-warning thumb-secondary')
    });

    it('Developers should be able to set the size of the component using props', () => {
            const sizedSliderProps: ISliderProps = {
                sliderSize: 'sm',
                thumbSize: 'lg',
                onChange: jest.fn() //Mock function
            }
    
            const wrapper = render(<Slider {...sizedSliderProps}/>);
            const sliderElement = wrapper.getByTestId('slider-element') as HTMLElement;
    
            expect(sliderElement).toBeInTheDocument();
            expect(sliderElement).toHaveClass('slider slider-sm thumb-lg')
    });

    it('Developers can set a slider to be disabled via props', ()=> {
        const disabledSliderProps: ISliderProps = {
            disabled: true,
            onChange: jest.fn() //Mock function
        }

        const wrapper = render(<Slider {...disabledSliderProps}/>);
        const sliderElement = wrapper.getByTestId('slider-element') as HTMLElement;
        expect(sliderElement).toBeInTheDocument();
        expect(sliderElement).toHaveClass('slider slider-primary');
        expect(disabledSliderProps.onChange).toHaveBeenCalledTimes(0);
        fireEvent.change(sliderElement, { target: { value: 1 } })
        expect(disabledSliderProps.onChange).toHaveBeenCalledTimes(0);
    });

    // it('Developers can choose to have number marks on the slider track by providing value in props. (Marks on any arbitrary value', () => {
    //     fail('Needs to be done')
    // });
})

