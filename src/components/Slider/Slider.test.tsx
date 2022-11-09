import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Slider, { ISliderProps } from './Slider';

describe('Slider', () => {
    it('should render default slider', function () {
        const wrapper = render(<Slider></Slider>)
        const slider = wrapper.container.firstElementChild;
        expect(slider).toBeInTheDocument();
        expect(slider).toHaveClass('ui-slider-wrapper');
    })
    it('should recieve custome className', ()=>{
        const wrapper = render(<Slider className='test'></Slider>);
        const slider = wrapper.container.firstElementChild;
        expect(slider).toBeInTheDocument();
        expect(slider).toHaveClass('test');
    })

    it('should render primary color', ()=>{
        const wrapper = render(<Slider color='primary'></Slider>);
        const slider = wrapper.container.firstElementChild;
        expect(slider).toBeInTheDocument();
        expect(slider).toHaveClass('ui-slider-wrapper slider-primary');
    })
    it('should render secondary color', ()=>{
        const wrapper = render(<Slider color='secondary'></Slider>);
        const slider = wrapper.container.firstElementChild;
        expect(slider).toBeInTheDocument();
        expect(slider).toHaveClass('ui-slider-wrapper slider-secondary');
    })
    it('should render disabled color', ()=>{
        const wrapper = render(<Slider color='disabled'></Slider>);
        const slider = wrapper.container.firstElementChild;
        expect(slider).toBeInTheDocument();
        expect(slider).toHaveClass('ui-slider-wrapper slider-disabled');
    })
    it('should render Size slier', function () {
        const AllSize = ['small', 'medium','large'];
        for (let s of AllSize) {
            const wrapper = render(<Slider size={s as any}></Slider>);
            const slider = wrapper.container.firstElementChild as HTMLElement;
            expect(slider).toBeInTheDocument();
            expect(slider).toHaveClass(`ui-slider-wrapper slider-${s}`);
        }
    });
})