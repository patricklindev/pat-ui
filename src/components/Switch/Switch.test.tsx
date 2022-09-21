import React from 'react';
import Switch, { PatSwitchProps } from './Switch';
import { render, fireEvent, screen } from '@testing-library/react';

describe('Switch', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Switch label="Snapshot Switch" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render default switch', () => {
    render(<Switch label="Default Switch"></Switch>);
    const element = screen.getByTestId('switch-element');
    const checkbox = screen.getByRole('checkbox');
    const label = screen.getByText('Default Switch');
    const slider = screen.getByTestId('test-slider');

    expect(element).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(slider).toBeInTheDocument();
    expect(slider).toHaveClass('switch-slider');
    expect(element).toHaveClass('switch switch-default switch-sm');
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it('should render corrsonding button based on props', () => {
    const switchLargePrimary: PatSwitchProps = {
      switchColor: 'primary',
      switchSize: 'lg',
      className: 'test',
    };

    render(
      <Switch label="Large Primary Switch" {...switchLargePrimary}></Switch>
    );
    const element = screen.getByTestId('switch-element');
    const checkbox = screen.getByRole('checkbox');
    const label = screen.getByText('Large Primary Switch');
    const slider = screen.getByTestId('test-slider');

    expect(element).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(slider).toBeInTheDocument();
    expect(slider).toHaveClass('switch-slider');
    expect(element).toHaveClass('switch switch-default switch-lg test');
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it('should render on switch', () => {
    const switchDefualtOn: PatSwitchProps = {
      isChecked: true,
    };

    render(<Switch label="Default On Switch" {...switchDefualtOn}></Switch>);
    const element = screen.getByTestId('switch-element');
    const checkbox = screen.getByRole('checkbox');
    const label = screen.getByText('Default On Switch');
    const slider = screen.getByTestId('test-slider');

    expect(element).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(slider).toBeInTheDocument();
    expect(slider).toHaveClass('switch-slider');
    expect(element).toHaveClass('switch switch-default switch-sm');
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it('should render a disabled switch', () => {
    const disabledSwitchProp: PatSwitchProps = {
      disabled: true,
      onClick: jest.fn(),
    };
    render(<Switch label="Disabled Switch" {...disabledSwitchProp}></Switch>);
    const element = screen.getByTestId('switch-element');
    const checkbox = screen.getByRole('checkbox');
    const label = screen.getByText('Disabled Switch');
    const slider = screen.getByTestId('test-slider');
    expect(element).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(slider).toBeInTheDocument();
    expect(slider).toHaveClass('switch-slider');
    expect(element).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(slider).toBeInTheDocument();
    expect(element).toHaveClass('switch switch-default switch-sm');
    expect(disabledSwitchProp.onClick).toHaveBeenCalledTimes(0);
    fireEvent.click(element);
    expect(disabledSwitchProp.onClick).toHaveBeenCalledTimes(0);
  });
});
