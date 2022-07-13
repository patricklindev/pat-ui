import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import Checkbox, { ICheckboxProps } from './Checkbox';

describe('Checkbox', () => {
    it('should match snapshot', () => {
        const { asFragment } = render(<Checkbox /> );
        expect(asFragment()).toMatchSnapshot();
    });

    it('should be able to choose the size of the component among some predefined size options from props', () => {
        const checkSizeProps: ICheckboxProps = {
            checkSize: 'sm',
            label: 'size'
        }

        const wrapper = render(<Checkbox {...checkSizeProps} />);
        const checkboxSizeElement = wrapper.queryByText('size') as HTMLElement;
        expect(checkboxSizeElement).toBeInTheDocument();
        expect(checkboxSizeElement.tagName).toBe('LABEL');
        expect(checkboxSizeElement).toHaveClass('checkbox check-default check-sm');

    });

    it('should be able to choose the color of the component among some predefined color options from props', () => {
        const checkPrimaryProps: ICheckboxProps = {
            checkType: 'primary',
            label: 'color'
        }

        const wrapper = render(<Checkbox {...checkPrimaryProps} />);
        const checkboxTypeElement = wrapper.queryByText('color') as HTMLElement;
        expect(checkboxTypeElement).toBeInTheDocument();
        expect(checkboxTypeElement.tagName).toBe('LABEL');
        expect(checkboxTypeElement).toHaveClass('checkbox check-primary check-md');
    });

    it('should be able to decide the icons used to represent the checked/unchecked state of the component by passing the icon from props', () => {
        const checkIconProps: ICheckboxProps = {
            label: 'icon',
            icon: 'bookmark'
        }

        const wrapper = render(<Checkbox {...checkIconProps} />);
        const iconElement = wrapper.queryByText('icon') as HTMLElement;
        expect(iconElement).toBeInTheDocument();
        const test = iconElement.querySelector('svg');
        expect(test).toHaveClass('icon bookmark');
    });

    it('can control the checked/unchecked state of the component from outside of the component by passing a prop', () => {
        // const [checked, setChecked] = useState(true);

        const checkControlProps: ICheckboxProps = {
            label: 'checked',
            checkedState: true,
            onChange: jest.fn()
        }

        const wrapper = render(<Checkbox {...checkControlProps} />);
        const checkboxControlElement = wrapper.queryByText('checked') as HTMLElement;
        expect(checkboxControlElement).toBeInTheDocument();
        const inputElement = screen.getByTestId('test-input') as HTMLInputElement;
        expect(inputElement.tagName).toBe('INPUT');
        expect(inputElement.checked).toBe(true);
        fireEvent.change(inputElement, {target: {checked: false}});
        expect(inputElement.checked).toBe(false);

    });
})