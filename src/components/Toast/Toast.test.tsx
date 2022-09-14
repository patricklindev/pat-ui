import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Toast, IToastProps } from './Toast';

describe('Toast', () => {
    it('should render toast component with passed props', () => {
        const toastProps: IToastProps = {
            color: 'success',
            title: 'Toast title',
            description: 'Upload success!',
            duration: 3500
        }
        const wrapper = render(<Toast {...toastProps} />);
        expect(wrapper).toBeInTheDocument();
        expect(wrapper).toHaveClass('toast top-right toast-success');
        const titleElement = wrapper.getByText('Toast title');
        expect(titleElement).toBeInTheDocument();
        const descriptionElement = wrapper.getByText('Upload success!');
        expect(descriptionElement).toBeInTheDocument();
    });
    
})