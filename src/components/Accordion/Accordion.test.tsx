import React from 'react';
import {render} from '@testing-library/react';
import Accordion from '../Accordion';
describe('Accordion', () => {
    it('should render default Accordion', function () {
        const wrapper = render(<Accordion title={'Accordion'}></Accordion>);
        const element = wrapper.container.firstElementChild as HTMLElement;
        expect(element).toHaveClass('accordion');
    });
    it('should render disabled Accordion', function () {
        const wrapper = render(<Accordion title={'Accordion'} disabled={true}></Accordion>);
        const element = wrapper.container.firstElementChild as HTMLElement;
        expect(element).toHaveClass('accordion disabled');
    });
    it('should render expanded Accordion', function () {
        const wrapper = render(<Accordion title={'Accordion'} expanded={true}></Accordion>);
        const element = wrapper.container.firstElementChild as HTMLElement;
    }   , 10000);
    it('should function as a Controlled Accordion', function () {
        const wrapper = render(<Accordion title={'Accordion'} multiple></Accordion>);
        const element = wrapper.container.firstElementChild as HTMLElement;
    })
    it('should have content', function () {
        const wrapper = render(<Accordion title={'Accordion'} content={''}></Accordion>);
        const element = wrapper.container.firstElementChild as HTMLElement;
    })
})