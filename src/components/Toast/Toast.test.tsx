import React, { useState } from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Toast, IToastProps } from './Toast';

// const Wrapper = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   return <Toast open={isOpen} onClose={() => setIsOpen(!isOpen)} />
// }

describe('Toast', () => {
  it('should render toast component with passed props', () => {
    const toastProps: IToastProps = {
      open: true,
      type: 'success',
      title: 'Toast title',
      message: 'Upload success!',
      position: 'top-right',
      autoHideDuration: 3500,
      onClose: Function,
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
      onClose: Function,
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
        'https://assets.webiconspng.com/uploads/2017/09/Target-PNG-Image-65154.png',
      autoHideDuration: 3500,
      onClose: Function,
    };
    const { container } = render(<Toast {...toastProps} />);
    const customIconElement = container.getElementsByClassName('toast__icon__custom');
    expect(customIconElement.length).toBe(1);
  });

  it('should trigger onClose function', async () => {
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
      open: true,
      title: 'Toast title',
      onClose: jest.fn(),
    };
    const closedToastProps: IToastProps = {
      open: false,
      title: 'Toast title',
      onClose: jest.fn(),
    }
    const { rerender } = render(<Toast {...toastProps} />)
    const titleElement = screen.queryByText('Toast title');
    expect(titleElement).toBeInTheDocument();
    rerender(<Toast {...closedToastProps} />);
    expect(screen.queryByText('Toast title')).not.toBeInTheDocument();
  });
});
