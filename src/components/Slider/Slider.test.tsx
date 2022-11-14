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
    it('should recieve custome className', () => {
        const wrapper = render(<Slider className='test'></Slider>);
        const slider = wrapper.container.firstElementChild;
        expect(slider).toBeInTheDocument();
        expect(slider).toHaveClass('test');
    })

    it('should render primary color', () => {
        const wrapper = render(<Slider color='primary'></Slider>);
        const slider = wrapper.container.firstElementChild;
        expect(slider).toBeInTheDocument();
        expect(slider).toHaveClass('ui-slider-wrapper slider-primary');
    })
    it('should render secondary color', () => {
        const wrapper = render(<Slider color='secondary'></Slider>);
        const slider = wrapper.container.firstElementChild;
        expect(slider).toBeInTheDocument();
        expect(slider).toHaveClass('ui-slider-wrapper slider-secondary');
    })
    it('should render disabled color', () => {
        const wrapper = render(<Slider color='disabled'></Slider>);
        const slider = wrapper.container.firstElementChild;
        expect(slider).toBeInTheDocument();
        expect(slider).toHaveClass('ui-slider-wrapper slider-disabled');
    })
    it('should render Size slider', function () {
        const AllSize = ['small', 'medium', 'large'];
        for (let s of AllSize) {
            const wrapper = render(<Slider size={s as any}></Slider>);
            const slider = wrapper.container.firstElementChild as HTMLElement;
            expect(slider).toBeInTheDocument();
            expect(slider).toHaveClass(`ui-slider-wrapper slider-${s}`);
        }
    });

    it('should have markers', function () {
        const wrapper = render(<Slider mark={[10, 20, 40, 100]}></Slider>)
        const markerElements = wrapper.container.getElementsByClassName('ui-slider-mark');
        expect(markerElements.length).toBe(4);
    });

    it('should have two thumbs on a ranged slider', function () {
        const wrapper = render(<Slider ranged max={0} min={100}></Slider>)
        const thumbElements = wrapper.container.getElementsByClassName('ui-slider-thumb');
        expect(thumbElements.length).toBe(2);

    });

    it('Thumb style should change style upon click', function () {
        const wrapper = render(<Slider></Slider>);
        const thumbElements = wrapper.container.getElementsByClassName('ui-slider-thumb');
        expect(thumbElements[0]).toBeInTheDocument();
        fireEvent.pointerDown(thumbElements[0]);
        expect(thumbElements[0]).toHaveClass('thumb-active');
        fireEvent.pointerUp(thumbElements[0]);
        expect(thumbElements[0]).not.toHaveClass('thumb-active');
    });

    it('should be able to drag the thumb', async function () {
        let value = 0
        const wrapper = render(<Slider onChange={e=>{console.log('e', e); value = (e as {value: number}).value}}></Slider>);
        // screen.
        const containerElement1 = screen.getByTestId('container');

        const thumbElement1 = containerElement1.childNodes[1];
        console.log('thumb1', thumbElement1);
       
        const thumbElements = wrapper.container.getElementsByClassName('ui-slider-thumb');
       
        jest.spyOn(thumbElement1 as any, 'offsetWidth', 'get').mockImplementation(()=>200)

        jest.spyOn(thumbElement1 as Element, 'getBoundingClientRect').mockImplementation(()=>({left:200} as DOMRect))
      
        expect(thumbElement1).toBeInTheDocument();
        //this returns all 0, because it is not actually rendered
        const { left, right, width, height } = wrapper.container.getBoundingClientRect();
        const current = {
            clientX: 0,
            clientY: 0
        }
        fireEvent.pointerDown(window, current);
        fireEvent.pointerMove(window, current);
       
        for (let i = 0; i < 11; i++) {
            current.clientX += 10;
            await new Promise(resolve => {
                setTimeout(resolve, 100);
            })
            fireEvent.pointerMove(window, current);
        }
        expect(value).toBe(100);

        fireEvent.pointerUp(window, current);
        for (let i = 11; i > 0; i--) {
            current.clientX -= 10;
            await new Promise(resolve => {
                setTimeout(resolve, 100);
            })
            fireEvent.pointerMove(window, current)
        }
        fireEvent.pointerUp(window, current);
        expect(value).toBe(0);

    })

    it('should be able to drag the thumb with ranged', async function () {
        // let value:{max: number, min:number};
        // const wrapper = render(<Slider ranged onChange={(e)=>value = e}></Slider>);
        // const thumbElements = wrapper.container.getElementsByClassName('ui-slider-thumb');
        // expect(thumbElements[0]).toBeInTheDocument();
        // const { left, right, width, height } = wrapper.container.getBoundingClientRect();
        // const current = {
        //     clientX: left,
        //     clientY: height / 2
        // }
        // fireEvent.pointerEnter(thumbElements[0], current);
        // fireEvent.pointerOver(thumbElements[0], current);
        // fireEvent.pointerMove(thumbElements[0], current);
        // fireEvent.pointerDown(thumbElements[0], current);
        // for (let i = 0; i < 11; i++) {
        //     current.clientX += 10;
        //     await new Promise(resolve => {
        //         setTimeout(resolve, 100);
        //     })
        //     fireEvent.pointerMove(thumbElements[0], current)
        // }
        // fireEvent.pointerUp(thumbElements[0], current);
        // for (let i = 11; i > 0; i--) {
        //     current.clientX -= 10;
        //     await new Promise(resolve => {
        //         setTimeout(resolve, 100);
        //     })
        //     fireEvent.pointerMove(thumbElements[0], current)
        // }
        // fireEvent.pointerUp(thumbElements[0], current);
    })
})