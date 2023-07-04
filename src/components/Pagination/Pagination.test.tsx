import React from 'react';

import {render} from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination', ()=>{
    it('should render default Input', function () {
        const wrapper = render(<Pagination count={10}></Pagination>);
        const element = wrapper.container.firstElementChild as HTMLElement;
        const subElem = element.getElementsByClassName('pagi-btn');
        expect(subElem.length).toBe(5);
        expect(element).toHaveClass('ui-pagination');
    });

    it('should render color Pagination', function () {
        const AllColor = ['standard', 'primary','secondary'];
        for (let c of AllColor) {
            const wrapper = render(<Pagination color={c as any} count={10}></Pagination>);
            const element = wrapper.container.firstElementChild as HTMLElement;
            expect(element).toHaveClass(`pagi-${c}`)
        }
    });

    it('should render size Pagination', function () {
        const AllSize = ['small', 'medium','large'];
        for (let c of AllSize) {
            const wrapper = render(<Pagination size={c as any} count={10}></Pagination>);
            const element = wrapper.container.firstElementChild as HTMLElement;
            expect(element).toHaveClass(`pagi-${c}`)
        }
    });

    it('should render shape Pagination', function () {
        const AllShape = ['rounded', 'circular'];
        for (let c of AllShape) {
            const wrapper = render(<Pagination size={c as any} count={10}></Pagination>);
            const element = wrapper.container.firstElementChild as HTMLElement;
            expect(element).toHaveClass(`pagi-${c}`)
        }
    });

    it('should render count Pagination', function () {
        const wrapper = render(<Pagination boundryCount={3} page={5}count={10} hideNextButton hidePrevButton></Pagination>);
        const element = wrapper.container.firstElementChild as HTMLElement;
        const subElem = element.getElementsByClassName('pagi-btn');
        expect(subElem.length).toBe(9);

        const wrapper2 = render(<Pagination boundryCount={1} siblingCount={2} page={5}count={10} hideNextButton hidePrevButton></Pagination>);
        const element2 = wrapper2.container.firstElementChild as HTMLElement;
        const subElem2 = element2.getElementsByClassName('pagi-btn');
        expect(subElem2.length).toBe(7);
        
    });

    it('should render disabled Pagination', function () {
        const wrapper = render(<Pagination count={10} disabled></Pagination>);
        const element = wrapper.container.firstElementChild as HTMLElement;
        const subElems = element.getElementsByClassName('pagi-btn');
        for(let i = 0; i < subElems.length; i++){
            expect(subElems[i]).toBeDisabled();
        }
    });

    it('should render showing first button', function () {
        const wrapper = render(<Pagination count={10} showFirstButton></Pagination>);
        const element = wrapper.container.firstElementChild as HTMLElement;
        const subElem = element.getElementsByClassName('pagi-btn');
        expect(subElem.length).toBe(6);
    });

    it('should render showing last button', function () {
        const wrapper = render(<Pagination count={10} showLastButton></Pagination>);
        const element = wrapper.container.firstElementChild as HTMLElement;
        const subElem = element.getElementsByClassName('pagi-btn');
        expect(subElem.length).toBe(6);
    });

    it('should render hiding previous button', function () {
        const wrapper = render(<Pagination count={10} hidePrevButton></Pagination>);
        const element = wrapper.container.firstElementChild as HTMLElement;
        const subElem = element.getElementsByClassName('pagi-btn');
        expect(subElem.length).toBe(4);
    });

    it('should render hiding next button', function () {
        const wrapper = render(<Pagination count={10} hideNextButton></Pagination>);
        const element = wrapper.container.firstElementChild as HTMLElement;
        const subElem = element.getElementsByClassName('pagi-btn');
        expect(subElem.length).toBe(4);
    });
});
