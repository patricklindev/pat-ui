import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Dialog from './index';

// react
afterEach(cleanup);

describe('dialog', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Dialog> Snapshot Dialog </Dialog>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render a simple dialog with simple child text', () => {
    // senarios:
    const handleClose = jest.fn();
    const dialogProps = {
      open: true,
      onClose: handleClose,
    };
    const wrapper = render(
      <Dialog {...dialogProps}>
        <div>test</div>
        <button onClick={dialogProps.onClose}>Close</button>
      </Dialog>
    );
    // assert
    expect(wrapper.getByText('test')).toBeTruthy();
    fireEvent.click(wrapper.getByText(/close/i));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('should render a dialog with fullScreen options', () => {
    const dialogProps = {
      open: true,
      fullScreen: true,
    };
    // senarios:
    const expectedStyle =
      'width: auto; position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px;';
    const wrapper = render(<Dialog {...dialogProps}>Full Screen</Dialog>);
    const element = wrapper.getByText('Full Screen');
    expect(element).toHaveStyle(expectedStyle);
  });

  it('should render a custom classes', () => {
    const dialogProps = {
      open: true,
      classes: 'custom',
    };
    // senarios:
    const wrapper = render(<Dialog {...dialogProps}>Custom Classes</Dialog>);
    const element = wrapper.getByText('Custom Classes');
    expect(element).toHaveClass('custom');
  });

  it('should render a dialog with custom styling', () => {
    const customStyling: React.CSSProperties = {
      backgroundColor: 'yellow',
      display: 'flex',
      justifyContent: 'flex-end',
    };
    const dialogProps = {
      open: true,
      style: customStyling,
    };
    // senarios:
    const expectedStyle =
      'width: auto; background-color: yellow; display: flex; justify-content: flex-end;';
    const wrapper = render(<Dialog {...dialogProps}>Custom Styling</Dialog>);
    const element = wrapper.getByText('Custom Styling');
    expect(element).toHaveStyle(expectedStyle);
  });
});
