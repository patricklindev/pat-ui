import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Toast, IToastProps } from './Toast';

describe('Toast', () => {
    it('should render toast component with passed props', () => {
        const toastProps: IToastProps = {
            open: true,
            type: 'success',
            title: 'Toast title',
            message: 'Upload success!',
            autoHideDuration: 3500,
            onClose: jest.fn()
        }
        const view = render(<Toast {...toastProps} />);
        const classes = view.getByTestId('toast');
        expect(classes).toHaveClass('toast toast__success');
        const titleElement = screen.getByText('Toast title');
        expect(titleElement).toBeInTheDocument();
        const messageElement = screen.getByText('Upload success!');
        expect(messageElement).toBeInTheDocument();
    });
    
    it('should trigger onClose function', () => {
        const toastProps: IToastProps = {
            open: true,
            title: 'Toast title',
            autoHideDuration: 3500,
            onClose: jest.fn()
        }
        const view = render(<Toast {...toastProps} />);
        const closeLink = view.getByTestId('close-link');
        fireEvent.click(closeLink);
        expect(toastProps.onClose).toHaveBeenCalledTimes(1);
    })
})