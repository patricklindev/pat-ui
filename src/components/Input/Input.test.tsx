import React from 'react';

import {render} from '@testing-library/react';
import Input from './Input';

describe('Input', ()=>{
    it('should render default Input', function () {
        const wrapper = render(<Input placeholder={'Search...'}></Input>);
        const input_bar = wrapper.getByPlaceholderText('Search...') as HTMLInputElement;
        const element = wrapper.container.firstElementChild as HTMLElement;
        expect(input_bar).toBeInTheDocument();
        expect(input_bar.tagName).toBe('INPUT');
        expect(element).toHaveClass('ui-input');
    });

    it('should render Focus Input', function () {
        const wrapper = render(<Input focus placeholder={'Search...'}></Input>);
        const input_bar = wrapper.getByPlaceholderText('Search...') as HTMLInputElement;
        const element = wrapper.container.firstElementChild as HTMLElement;
        expect(input_bar).toBeInTheDocument();
        expect(input_bar.tagName).toBe('INPUT');
        expect(element).toHaveClass('ui-input input-focus');
    });

    it('should render Transparent Input', function () {
        const wrapper = render(<Input transparent placeholder={'Search...'}></Input>);
        const input_bar = wrapper.getByPlaceholderText('Search...') as HTMLInputElement;
        const element = wrapper.container.firstElementChild as HTMLElement;
        expect(input_bar).toBeInTheDocument();
        expect(input_bar.tagName).toBe('INPUT');
        expect(element).toHaveClass('ui-input input-transparent');
    });

    it('should render Fluid Input', function () {
        const wrapper = render(<Input fluid placeholder={'Search...'}></Input>);
        const input_bar = wrapper.getByPlaceholderText('Search...') as HTMLInputElement;
        const element = wrapper.container.firstElementChild as HTMLElement;
        expect(input_bar).toBeInTheDocument();
        expect(input_bar.tagName).toBe('INPUT');
        expect(element).toHaveClass('ui-input input-fluid');
    });

    it('should render Disabled Input', function () {
        const wrapper = render(<Input disabled placeholder={'Search...'}></Input>);
        const input_bar = wrapper.getByPlaceholderText('Search...') as HTMLInputElement;
        const element = wrapper.container.firstElementChild as HTMLElement;
        expect(input_bar).toBeInTheDocument();
        expect(input_bar.tagName).toBe('INPUT');
        expect(element).toHaveClass('ui-input input-disabled');
    });

    it('should render Error Input', function () {
        const wrapper = render(<Input error placeholder={'Search...'}></Input>);
        const input_bar = wrapper.getByPlaceholderText('Search...') as HTMLInputElement;
        const element = wrapper.container.firstElementChild as HTMLElement;
        expect(input_bar).toBeInTheDocument();
        expect(input_bar.tagName).toBe('INPUT');
        expect(element).toHaveClass('ui-input input-error');
    });

    it('should render Icon Input', function () {
        const wrapper = render(<Input icon={'users'} placeholder={'Search...'}></Input>);
        const input_bar = wrapper.getByPlaceholderText('Search...') as HTMLInputElement;
        const element = wrapper.container.firstElementChild as HTMLElement;
        expect(input_bar).toBeInTheDocument();
        expect(input_bar.tagName).toBe('INPUT');
        expect(element).toHaveClass('ui-input icon');
    });

    it('should render Loading Input', function () {
        const wrapper = render(<Input loading placeholder={'Search...'}></Input>);
        const input_bar = wrapper.getByPlaceholderText('Search...') as HTMLInputElement;
        const element = wrapper.container.firstElementChild as HTMLElement;
        expect(input_bar).toBeInTheDocument();
        expect(input_bar.tagName).toBe('INPUT');
        expect(element).toHaveClass('ui-input input-loading');
    });

    it('should render Size Input', function () {
        const AllSize = ['mini', 'small','large','big','huge','massive'];
        for (let s of AllSize) {
            const wrapper = render(<Input inputSize={s as any} placeholder={s}></Input>);
            const input_bar = wrapper.getByPlaceholderText(s) as HTMLInputElement;
            const element = wrapper.container.firstElementChild as HTMLElement;
            expect(input_bar).toBeInTheDocument();
            expect(input_bar.tagName).toBe('INPUT');
            expect(element).toHaveClass(`ui-input input-${s}`);
        }
    });
});
