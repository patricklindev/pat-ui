import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import Dialog, { PatDialogProps } from './Dialog';

describe('Dialog Component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Dialog> Snapshot Button </Dialog>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render Basic Dialog, Alert Dialog or Form Dialog depending on the different', () => {});
  it('should render disabled button', () => {});
  it('should be possible to provide title, content, actions of the dialog component from children props of the component', () => {});
  it('should have a dimed backdrop by default, users can close the dialog by clicking on the backdrop', () => {});
});
describe('Users of Dialog Component', () => {
  it('should not be able to scroll the page when the dialog is open', () => {});
  it('should be able to listen to the close of the dialog by providing the onClose callback function.', () => {});
  it('should be able to control the open/close of the dialog from props.', () => {});
});
