import React from 'react';
import Switch, { PatSwitchProps } from './Switch';
import { render, fireEvent, screen } from '@testing-library/react';

describe('Switch', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Switch> Snapshot Switch </Switch>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render default switch', () => {
    render(<Switch>Defualt Switch</Switch>);
    const element = screen.getByTestId('switch-element');
    const checkbox = screen.getByRole('checkbox');

    expect(element).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
    expect(element).toHaveClass('switch switch-default switch-sm');
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it('should render corrsonding button based on props', () => {
    const switchLargePrimary: PatSwitchProps = {
      switchColor: 'primary',
      switchSize: 'lg',
    };

    render(<Switch {...switchLargePrimary}></Switch>);
    const element = screen.getByTestId('switch-element');
    const checkbox = screen.getByRole('checkbox');
    expect(element).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
    expect(element).toHaveClass('switch switch-default switch-lg');
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it('should render on switch', () => {
    const switchDefualtOn: PatSwitchProps = {
      isChecked: true,
      onClick: jest.fn(),
    };

    render(<Switch {...switchDefualtOn}></Switch>);
    const element = screen.getByTestId('switch-element');
    const checkbox = screen.getByRole('checkbox');
    expect(element).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
    expect(element).toHaveClass('switch switch-default switch-sm');
    expect(checkbox).toBeChecked();
  });

  it('should render on switch', () => {
    const switchDefualtOn: PatSwitchProps = {
      isChecked: true,
      onClick: jest.fn(),
    };

    render(<Switch {...switchDefualtOn}></Switch>);
    const element = screen.getByTestId('switch-element');
    const checkbox = screen.getByRole('checkbox');
    expect(element).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
    expect(element).toHaveClass('switch switch-default switch-sm');
    expect(checkbox).toBeChecked();
  });

  it('should render a disabled switch', () => {
    const disabledSwitchProp: PatSwitchProps = {
      disabled: true,
      onClick: jest.fn(),
    };
    render(<Switch {...disabledSwitchProp}></Switch>);
    const element = screen.getByTestId('switch-element');
    const checkbox = screen.getByRole('checkbox');
    expect(element).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
    expect(element).toHaveClass('switch switch-default switch-sm');
    expect(disabledSwitchProp.onClick).toHaveBeenCalledTimes(0);
    fireEvent.click(element);
    expect(disabledSwitchProp.onClick).toHaveBeenCalledTimes(0);
  });
});
