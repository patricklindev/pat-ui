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
      position: 'top-right',
      autoHideDuration: 3500,
      onClose: jest.fn(),
    };
    const view = render(<Toast {...toastProps} />);
    const classes = view.getByTestId('toast');
    expect(classes).toHaveClass('toast toast__success toast__top-right');
    const titleElement = view.getByText('Toast title');
    expect(titleElement).toBeInTheDocument();
    const messageElement = view.getByText('Upload success!');
    expect(messageElement).toBeInTheDocument();
  });

  it('should render toast component with an icon', () => {
    const toastProps: IToastProps = {
      open: true,
      type: 'secondary',
      title: 'Done!',
      iconType: 'success',
      iconColor: 'info',
      autoHideDuration: 3500,
      onClose: jest.fn(),
    };
    const view = render(<Toast {...toastProps} />);
    const iconElement = view.getByTestId('icon');
    expect(iconElement).toBeInTheDocument();
  });

  it('should render toast component with a custom icon', () => {
    const toastProps: IToastProps = {
      open: true,
      type: 'secondary',
      title: 'Done!',
      iconUri:
        'https://firebasestorage.googleapis.com/v0/b/onebook-client.appspot.com/o/otherImages%2Fservice-entertainment.png?alt=media&token=89099854-42f1-4d00-b411-2d23ee053572',
      autoHideDuration: 3500,
      onClose: jest.fn(),
    };
    const view = render(<Toast {...toastProps} />);
    const customIconElement = view.getByAltText('custom toast icon');
    expect(customIconElement).toBeInTheDocument();
  });

  it('should trigger onClose function', () => {
    const toastProps: IToastProps = {
      open: true,
      title: 'Toast title',
      autoHideDuration: 3500,
      onClose: jest.fn(),
    };
    const view = render(<Toast {...toastProps} />);
    const closeLink = view.getByTestId('close-link');
    fireEvent.click(closeLink);
    expect(toastProps.onClose).toHaveBeenCalledTimes(1);
  });

  it('should not render toast component if controlled prop is false', () => {
    const toastProps: IToastProps = {
      open: false,
      title: 'Toast title',
      autoHideDuration: 3500,
      onClose: jest.fn(),
    };
    render(<Toast {...toastProps} />);
    const titleElement = screen.queryByText('Toast title');
    expect(titleElement).not.toBeInTheDocument();
  });
});
