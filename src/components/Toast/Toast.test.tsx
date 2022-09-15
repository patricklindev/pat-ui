import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Toast, IToastProps } from './Toast';

describe('Toast', () => {
    it('should render toast component with passed props', () => {
        const toastProps: IToastProps = {
            open: true,
            color: 'success',
            title: 'Toast title',
            message: 'Upload success!',
            autoHideDuration: 3500,
            onClose() {
                return;
            },
        }
        const view = render(<Toast {...toastProps} />);
        expect(view).toBeInTheDocument();
        expect(view).toHaveClass('toast top-right toast-success');
        const titleElement = screen.getByText('Toast title');
        expect(titleElement).toBeInTheDocument();
        const messageElement = screen.getByText('Upload success!');
        expect(messageElement).toBeInTheDocument();
    });
    
})