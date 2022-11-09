import React from 'react';
import Switch, { SwitchProps } from './Switch';
import { render, fireEvent, screen } from '@testing-library/react';

describe('Switch', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Switch label="Snapshot Switch" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render default switch', () => {
    render(<Switch label="Default Switch"></Switch>);
    const track = screen.getByTestId('switch-track');
    const thumb = screen.getByTestId('switch-thumb');
    const checkbox = screen.getByTestId('switch-checkbox');
    const label = screen.getByText('Default Switch');

    expect(track).toBeInTheDocument();
    expect(thumb).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    //test track
    expect(track).toHaveClass('switch-m');
    expect(track).toHaveClass('switch-default');
    //test thumb
    expect(thumb).toHaveClass('switch-m');
    expect(thumb).toHaveClass('switch-default');

    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
  it('should render primary switch', () => {
    const switchMediumPrimary: SwitchProps = {
      color: 'primary',
      size: 'm',
    };

    render(<Switch label="Primary Switch" {...switchMediumPrimary}></Switch>);
    const track = screen.getByTestId('switch-track');
    const thumb = screen.getByTestId('switch-thumb');
    const checkbox = screen.getByTestId('switch-checkbox');
    const label = screen.getByText('Primary Switch');

    expect(track).toBeInTheDocument();
    expect(thumb).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    //test track
    expect(track).toHaveClass('switch-m');
    expect(track).toHaveClass('switch-primary');
    //test thumb
    expect(thumb).toHaveClass('switch-m');
    expect(thumb).toHaveClass('switch-primary');

    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
  it('should render default switch which is on by default and disabled', () => {
    const switchSmallSecondary: SwitchProps = {
      size: 'm',
      on: true,
      disabled: true,
    };

    render(<Switch label="Default Switch" {...switchSmallSecondary}></Switch>);
    const track = screen.getByTestId('switch-track');
    const thumb = screen.getByTestId('switch-thumb');
    const checkbox = screen.getByTestId('switch-checkbox');
    const label = screen.getByText('Default Switch');

    expect(track).toBeInTheDocument();
    expect(thumb).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    //test track
    expect(track).toHaveClass('switch-m');
    expect(track).toHaveClass('switch-default');
    //test thumb
    expect(thumb).toHaveClass('switch-m');
    expect(thumb).toHaveClass('switch-default');

    //checkbox should be on and disabled
    expect(checkbox).toBeChecked();
    expect(checkbox).toBeDisabled();
  });

  it('should render secondary small switch which is on by default', () => {
    const switchSmallSecondary: SwitchProps = {
      color: 'secondary',
      size: 'sm',
      on: true,
    };

    render(
      <Switch label="Secondary Switch" {...switchSmallSecondary}></Switch>
    );
    const track = screen.getByTestId('switch-track');
    const thumb = screen.getByTestId('switch-thumb');
    const checkbox = screen.getByTestId('switch-checkbox');
    const label = screen.getByText('Secondary Switch');

    expect(track).toBeInTheDocument();
    expect(thumb).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    //test track
    expect(track).toHaveClass('switch-sm');
    expect(track).toHaveClass('switch-secondary');
    //test thumb
    expect(thumb).toHaveClass('switch-sm');
    expect(thumb).toHaveClass('switch-secondary');

    expect(checkbox).toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
});
