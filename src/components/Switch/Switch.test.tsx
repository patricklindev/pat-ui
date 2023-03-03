import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import Switch, { PatSwitchProps } from "./Switch";

describe('Switch', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Switch />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render switch default style', () => {
      const wrapper = render(<Switch />);
      const switchElement = screen.getByTestId('switch-element');
      expect(switchElement).toHaveClass('switch-component primary medium');
  });

  it('should render switch with different props', () => {
    const switchProps: PatSwitchProps = {
      swColor: 'primary',
      swSize: 'small',
      label: "small-blue-switch",
      disabled: true,
      className: "toggle-switch"
    };
    const wrapper = render(<Switch {...switchProps} />);
    const element = wrapper.queryByText('small-blue-switch');
    expect(element).toBeInTheDocument();
    const switchElement = screen.getByTestId('switch-element');
    expect(switchElement).toHaveClass('switch-component small primary toggle-switch disabled');
  });

  it('should callback function can be triggered', () => {
    const switchProps: PatSwitchProps = {
      onChange: jest.fn(),
    };
    const wrapper = render(<Switch {...switchProps} />);
    const switchElement = screen.getByTestId('switch-element');
    expect(switchElement.tagName.toLowerCase()).toBe('label');
    expect(switchProps.onChange).toHaveBeenCalledTimes(0);
    fireEvent.click(switchElement);
    expect(switchProps.onChange).toHaveBeenCalledTimes(1);
  });
})