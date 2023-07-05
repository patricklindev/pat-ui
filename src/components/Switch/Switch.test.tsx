import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import Switch, { patSwitchProps } from './Switch';

describe('Switch', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Switch />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render default switch', () => {
    const switchProps = {
      onClick: jest.fn(),
    };
    const wrapper = render(<Switch {...switchProps} label="Default Switch" />);

    // for switch-wrapper
    const switch_wrapper = wrapper.queryByTestId(
      'switch-wrapper'
    ) as HTMLElement;
    expect(switch_wrapper).toBeInTheDocument();
    expect(switch_wrapper.tagName).toBe('DIV');
    expect(switch_wrapper).toHaveClass(
      'switch-wrapper switch-default switch-medium'
    );

    // for input checkbox
    const input_checkbox = wrapper.queryByTestId(
      'switch-input'
    ) as HTMLInputElement;
    expect(input_checkbox).toBeInTheDocument();
    expect(input_checkbox.tagName).toBe('INPUT');
    expect(input_checkbox.type).toBe('checkbox');
    expect(input_checkbox).toBeEnabled();
    expect(input_checkbox.checked).toBe(false);

    // for track
    const track = wrapper.queryByTestId('switch-track') as HTMLElement;
    expect(track).toBeInTheDocument();
    expect(track.tagName).toBe('SPAN');
    expect(track).toHaveClass('switch__slider');

    // for label
    const label = wrapper.queryByText('Default Switch') as HTMLElement;
    expect(label).toBeInTheDocument();
    expect(label.tagName).toBe('LABEL');
    expect(label).toHaveClass('switch__text');

    expect(switchProps.onClick).toHaveBeenCalledTimes(0);
    fireEvent.click(label);
    expect(switchProps.onClick).toHaveBeenCalledTimes(1);
    expect(input_checkbox.checked).toBe(true);
    fireEvent.click(wrapper.queryByTestId('switch') as HTMLElement);
    expect(switchProps.onClick).toHaveBeenCalledTimes(2);
    expect(input_checkbox.checked).toBe(false);
  });

  it('should render diff size & type switch', () => {
    const switchProps: patSwitchProps = {
      switchSize: 'small',
      switchType: 'primary',
      onClick: jest.fn(),
      checked: true,
      color: "#FFA500",
    };
    const wrapper = render(<Switch {...switchProps} label="Default Switch" />);

    // for switch-wrapper
    const switch_wrapper = wrapper.queryByTestId(
      'switch-wrapper'
    ) as HTMLElement;
    expect(switch_wrapper).toBeInTheDocument();
    expect(switch_wrapper.tagName).toBe('DIV');
    expect(switch_wrapper).toHaveClass(
      'switch-wrapper switch-primary switch-small'
    );

    // for input checkbox
    const input_checkbox = wrapper.queryByTestId(
      'switch-input'
    ) as HTMLInputElement;
    expect(input_checkbox).toBeInTheDocument();
    expect(input_checkbox.tagName).toBe('INPUT');
    expect(input_checkbox.type).toBe('checkbox');
    expect(input_checkbox).toBeEnabled();
    expect(input_checkbox.checked).toBe(true);

    // for track
    const track = wrapper.queryByTestId('switch-track') as HTMLElement;
    expect(track).toBeInTheDocument();
    expect(track.tagName).toBe('SPAN');
    expect(track).toHaveClass('switch__slider');
    expect(track).toHaveStyle('background-color: #FFA500');

    // for label
    const label = wrapper.queryByText('Default Switch') as HTMLElement;
    expect(label).toBeInTheDocument();
    expect(label.tagName).toBe('LABEL');
    expect(label).toHaveClass('switch__text');

    expect(switchProps.onClick).toHaveBeenCalledTimes(0);
    fireEvent.click(label);
    expect(switchProps.onClick).toHaveBeenCalledTimes(1);
    expect(input_checkbox.checked).toBe(false);
    fireEvent.click(wrapper.queryByTestId('switch') as HTMLElement);
    expect(switchProps.onClick).toHaveBeenCalledTimes(2);
    expect(input_checkbox.checked).toBe(true);
  });
});
