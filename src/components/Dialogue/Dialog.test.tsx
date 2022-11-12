import React, { useState } from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Dialog, DialogActions, patDialogProps } from './Dialog';

describe('Dialog', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Dialog> Snapshot Dialog </Dialog>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render default dialog', () => {
    const dialogProps: patDialogProps = {
      open: true,
      onClose: jest.fn(),
    };
    const wrapper = render(<Dialog {...dialogProps}></Dialog>);
    const dialogElement = screen.getByTestId('dialog-element');
    expect(dialogElement).toHaveClass('dialog dialog-default');
    const dialogMask = screen.getByTestId('dialog-mask'); // test clicking the mask layer to close
    expect(dialogProps.onClose).toHaveBeenCalledTimes(0);
    fireEvent.click(dialogMask);
    expect(dialogProps.onClose).toHaveBeenCalledTimes(1);
  });

  it('should render dialog with different props', () => {
    const dialogProps: patDialogProps = {
      dialogTitle: 'Title',
      dialogContent: 'I am the content',
      dialogType: 'basic',
      className: 'test',
      open: true,
    };
    const wrapper = render(<Dialog {...dialogProps}></Dialog>);
    const dialogTitleElement = wrapper.queryByText('Title');
    expect(dialogTitleElement).toBeInTheDocument();
    const dialogContentElement = wrapper.queryByText('I am the content');
    expect(dialogContentElement).toBeInTheDocument();
    const Element = screen.getByTestId('dialog-element');
    expect(Element).toHaveClass('dialog dialog-basic test');
  });

  it('should render actions with clickable buttons', () => {
    const dialogProps: patDialogProps = {
      dialogType: 'default',
      open: true,
      onClose: jest.fn(),
    };
    //test button
    const wrapper = render(
      <Dialog {...dialogProps}>
        <DialogActions>
          <button data-testid="btn" onClick={dialogProps.onClose} />
        </DialogActions>
      </Dialog>
    );
    const actionElement = screen.getByTestId('dialog-actions-element'); // test for the action component
    expect(actionElement).toHaveClass('dialog-actions');
    const buttonElement = screen.getByTestId('btn'); // test for the button in the action componenet
    expect(buttonElement.tagName).toBe('BUTTON');
    expect(dialogProps.onClose).toHaveBeenCalledTimes(0); // test the onClose function
    fireEvent.click(buttonElement);
    expect(dialogProps.onClose).toHaveBeenCalledTimes(1);
  });

  it('should render dialog with full-screen type', () => {
    const dialogProps: patDialogProps = {
      dialogType: 'full-screen',
      open: true,
    };
    const wrapper = render(<Dialog {...dialogProps}></Dialog>);
    const dialogElement = screen.getByTestId('dialog-element');
    expect(dialogElement).toHaveClass('dialog dialog-full-screen');
  });
});
