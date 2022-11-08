import React from 'react';
import Switch, { ISwitchProps } from './Switch';
import { render, fireEvent, screen } from '@testing-library/react';

describe('Switch', () => {
  test('should match snapshot', () => {
    const view = render(<Switch />);
    expect(view.asFragment()).toMatchSnapshot();
  });
  test('should render default switch', async () => {
    render(<Switch />);
    const switchEl = await screen.findByTestId('switchEl');
    expect(switchEl).toHaveClass('switch');

    const inputEl = await screen.findByTestId('checkBoxEl');
    expect(inputEl).toBeInTheDocument();

    const sliderEl = await screen.findByTestId('sliderEl');
    expect(sliderEl).toHaveClass('slider');

    const labelEl = await screen.findByTestId('labelEl');
    expect(labelEl).toHaveClass('label');
  });

  test('should render on primary switch', async () => {
    render(<Switch color="primary" />);
    const switchEl = await screen.findByTestId('switchEl');
    expect(switchEl).toHaveClass('switch-primary');
  });

  test('should render on small switch', async () => {
    render(<Switch size="small" color="primary" />);
    const switchEl = await screen.findByTestId('switchEl');
    expect(switchEl).toHaveClass('switch-small');
  });

  test('should click change the on or off', async () => {
    render(<Switch />);
    const inputEl = await screen.findByTestId('checkBoxEl');
    fireEvent.click(inputEl);
    expect(inputEl).toBeChecked();
  });
  test('should click not checked when disable', async () => {
    render(<Switch disabled color="primary" />);
    const switchEl = await screen.findByTestId('switchEl');

    expect(switchEl).not.toHaveClass('switch-primary');
  });

  test('should onClick fire when clicked', async () => {
    const mockhandler = jest.fn();
    render(<Switch onClick={mockhandler} />);
    const inputEl = await screen.findByTestId('checkBoxEl');
    fireEvent.click(inputEl);
    expect(mockhandler).toBeCalledTimes(1);
  });
});
