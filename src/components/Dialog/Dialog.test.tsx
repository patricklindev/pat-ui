import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Dialog from './index';
import { IDialogProps } from './Dialog';
import { debug } from 'console';

describe('Dialog', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <Dialog>
        <Dialog.Title></Dialog.Title>
        <Dialog.Content></Dialog.Content>
        <Dialog.Action></Dialog.Action>
      </Dialog>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render defaul Dialog', () => {
    const dialogProps: IDialogProps = {
      onClose: jest.fn(),
    };

    const wrapper = render(
      <Dialog {...dialogProps}>
        <Dialog.Title></Dialog.Title>
        <Dialog.Content></Dialog.Content>
        <Dialog.Action></Dialog.Action>
      </Dialog>
    );
    const dialogElement = screen.getByTestId('dialog-body-element');
    expect(dialogElement).toHaveClass(
      'dialog dialog-light dialog-md dialog-body'
    );
  });

  it('Should render a dialog without a child', () => {
    const dialogProps: IDialogProps = {
      onClose: jest.fn(),
    };
    const wrapper = render(<Dialog {...dialogProps}></Dialog>);
    const element = wrapper.getByTestId('dialog-body-element');
    expect(element).not.toBeNull();
    expect(element).toBeInTheDocument();
    expect(element?.tagName).toBe('DIV');
  });

  it('should render dialog with three children', () => {
    const dialogProps: IDialogProps = {
      isOpen: true,
      onClose: jest.fn(),
      dialogSize: 'md',
      dialogTheme: 'dark',
    };
    const wrapper = render(
      <Dialog {...dialogProps}>
        <Dialog.Title></Dialog.Title>
        <Dialog.Content></Dialog.Content>
        <Dialog.Action></Dialog.Action>
      </Dialog>
    );
    const element = wrapper.getByTestId('dialog-body-element');
    expect(element).toHaveClass('dialog-body');
    expect(element.firstChild).toHaveClass('dialog-title');
    expect(element?.childNodes.length).toBe(3);
    expect(element?.lastChild?.childNodes.length).toBe(2);
  });

  it('should render dialog with different props', () => {
    const dialogProps: IDialogProps = {
      dialogSize: 'lg',
      dialogTheme: 'dark',
      className: 'test',
      isOpen: true,
      triggerTitle: 'trigger title test',
    };
    const wrapper = render(
      <Dialog {...dialogProps}>
        <Dialog.Title title="title test"></Dialog.Title>
        <Dialog.Content contentMessage="content test"></Dialog.Content>
        <Dialog.Action cancelBtnTitle="test cancel btn"></Dialog.Action>
      </Dialog>
    );
    const dialogElement = wrapper.queryByText('trigger title test');
    const titleElemment = wrapper.queryByText('title test');
    const contentElement = wrapper.queryByText('content test');
    const btnElement = wrapper.queryByText('test cancel btn');
    expect(dialogElement).toBeInTheDocument();
    expect(titleElemment).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
    expect(btnElement).toBeInTheDocument();
    const Element = screen.getByTestId('dialog-body-element');
    expect(Element).toHaveClass(
      'dialog dialog-dark dialog-lg test dialog-body'
    );
  });

//   it('Should be close the dialog by click', () => {
//     const dialogProps: IDialogProps = {
//       onClose: jest.fn(),
//     };

//     const wrapper = render(<Dialog {...dialogProps}></Dialog>);
//     const testElement = wrapper.getByTestId('dialog-backdrop-element');
//     fireEvent.click(testElement);

//     expect(dialogProps.onClose).toBeCalledTimes(1);
//   });
});
