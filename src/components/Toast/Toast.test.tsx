import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Toast, IToastProps } from './Toast';

describe('Toast', () => {
    it('should render toast component', () => {
        const wrapper = render(<Toast />);
        expect(wrapper).toBeInTheDocument();
        expect(wrapper).toHaveClass('toast');
    });
    it('should render toast with passed props', () => {

    })
})