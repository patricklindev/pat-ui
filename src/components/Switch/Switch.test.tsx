import React from 'react';
import Switch, {NativeSwitchProps} from './Switch';
import { render, fireEvent } from '@testing-library/react'

describe('Switch', () => {
    it('should match snapshot', () => { });

    it('should render primary (default) switch', () => {
        const swProps = {
            onChange: jest.fn(),
        };
        const wrapper = render(<Switch {...swProps}></Switch>);
        const element = wrapper.container.firstElementChild as HTMLElement;
        const input_ele = element.firstElementChild as HTMLElement;
        const label_ele = element.lastElementChild as HTMLElement;
        expect(element).toBeInTheDocument();
        // expect(input_ele).toBeInTheDocument();
        // expect(label_ele).toBeInTheDocument();
        expect(element.tagName).toBe('DIV');
        expect(input_ele.tagName).toBe('INPUT');
        expect(label_ele.tagName).toBe('LABEL');
        expect(element).toHaveClass('sw__wrapper sw__wrapper-primary')
        expect(label_ele).toHaveClass('sw__label sw__label-primary')
        expect(swProps.onChange).toHaveBeenCalledTimes(0);
        fireEvent.click(input_ele);
        expect(swProps.onChange).toHaveBeenCalledTimes(1);
    });

    it('should render correct switches based on different props', () => {
        const swPrimarySmallProps: NativeSwitchProps = {
            swType: 'primary',
            defaultChecked: false,
            id: 'origin-sw',
            onChange: jest.fn(),
        };

        const swPrimarySmallWrapper = render(
            <Switch {...swPrimarySmallProps}></Switch>
        );
        const swPrimrySmallElement = swPrimarySmallWrapper.container.firstElementChild as HTMLElement;
        expect(swPrimrySmallElement).toBeInTheDocument();
    })
})