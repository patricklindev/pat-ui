import React from 'react';

import { render, fireEvent, cleanup } from '@testing-library/react';
import Snackbar, { SnackbarProps } from './Snackbar';

//global variable to use
let open: SnackbarProps['open'];
let openSnackbar: Function;
let closeSnackbar: SnackbarProps['onClose'];
let snackbarProps: SnackbarProps;

//function to conver hex color to rgb
function hexToRgbA(hex: string) {
  var c: any;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ')';
  }
  throw new Error('Bad Hex');
}

beforeAll(() => {
  cleanup();
  jest.clearAllMocks();
  open = true;
  openSnackbar = () => (open = true);
  snackbarProps = {
    open: open,
  };
});

describe('Snackbar', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <Snackbar open={true}> Snapshot Button </Snackbar>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render default snackbar', () => {
    const wrapper = render(
      <Snackbar {...snackbarProps}>Default Snackbar</Snackbar>
    );
    const snackbar = wrapper.queryByText('Default Snackbar') as HTMLElement;
    expect(snackbar).toBeInTheDocument();
    expect(snackbar.tagName).toBe('DIV');
    expect(snackbar).toHaveClass('snackbar v_bottom h_left snackbar__default');
  });

  it('should render different types of snackbar: info', () => {
    //render info
    snackbarProps.severity = 'info';
    let wrapper = render(<Snackbar {...snackbarProps}>Snackbar</Snackbar>);
    let snackbar = wrapper.queryByText('Snackbar') as HTMLElement;
    expect(snackbar).toBeInTheDocument();
    expect(snackbar.tagName).toBe('DIV');
    expect(snackbar).toHaveClass('snackbar v_bottom h_left snackbar__info');
    expect(snackbar).toHaveStyle(`background-color: ${hexToRgbA('#17a2b8')}`);
  });

  it('should render different types of snackbar: error', () => {
    //render error
    snackbarProps.severity = 'error';
    let wrapper = render(<Snackbar {...snackbarProps}>Snackbar</Snackbar>);
    let snackbar = wrapper.queryByText('Snackbar') as HTMLElement;
    expect(snackbar).toBeInTheDocument();
    expect(snackbar.tagName).toBe('DIV');
    expect(snackbar).toHaveClass('snackbar v_bottom h_left snackbar__error');
    expect(snackbar).toHaveStyle(`background-color: ${hexToRgbA('#dc3545')}`);
  });

  it('should render different types of snackbar: success', () => {
    //render success
    snackbarProps.severity = 'success';
    let wrapper = render(<Snackbar {...snackbarProps}>Snackbar</Snackbar>);
    let snackbar = wrapper.queryByText('Snackbar') as HTMLElement;
    expect(snackbar).toBeInTheDocument();
    expect(snackbar.tagName).toBe('DIV');
    expect(snackbar).toHaveClass('snackbar v_bottom h_left snackbar__success');
    expect(snackbar).toHaveStyle(`background-color: ${hexToRgbA('#52c41a')}`);
  });

  it('should render different types of snackbar: warning', () => {
    //render warning
    snackbarProps.severity = 'warning';
    let wrapper = render(<Snackbar {...snackbarProps}>Snackbar</Snackbar>);
    let snackbar = wrapper.queryByText('Snackbar') as HTMLElement;
    expect(snackbar).toBeInTheDocument();
    expect(snackbar.tagName).toBe('DIV');
    expect(snackbar).toHaveClass('snackbar v_bottom h_left snackbar__warning');
    expect(snackbar).toHaveStyle(`background-color: ${hexToRgbA('#fadb14')}`);
  });

  it('should render message if no children is provided', () => {
    snackbarProps.message = 'Snackbar Message';
    const wrapper = render(<Snackbar {...snackbarProps}></Snackbar>);
    const snackbar = wrapper.queryByText('Snackbar Message') as HTMLElement;
    expect(snackbar).toBeInTheDocument();
  });

  //future tests:
  //close the snackbar after autoHideDuration
});
