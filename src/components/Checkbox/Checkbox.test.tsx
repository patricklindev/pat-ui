import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Checkbox, { ICheckboxProps } from './Checkbox';

describe('Checkbox', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Checkbox />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render default checkbox', () => {
    const props: ICheckboxProps = {
      label: 'Default',
    };

    render(<Checkbox {...props} />);
    const checkbox = screen.queryByText('Default');
    expect(checkbox).toBeInTheDocument();
  });

  it('should render default-checked checkbox', () => {
    const props: ICheckboxProps = {
      defaultChecked: true,
      label: 'Checked',
    };

    render(<Checkbox {...props} />);
    const checkbox = screen.getByTestId('checkbox-input');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it('should render large checkbox', () => {
    const props: ICheckboxProps = {
      size: 'large',
    };

    render(<Checkbox {...props} />);
    const checkbox = screen.getByTestId('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveClass('checkbox-large');
  });

  it('should render secondary checkbox', () => {
    const props: ICheckboxProps = {
      color: 'secondary',
    };

    render(<Checkbox {...props} />);
    const checkbox = screen.getByTestId('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveClass('checkbox-secondary');
  });

  it('should render icon checkbox', () => {
    const props: ICheckboxProps = {
      icon: 'home',
    };

    render(<Checkbox {...props} />);
    const checkbox = screen.getByTestId('checkbox-icon-input');
    expect(checkbox).toBeInTheDocument();

    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it('should be able to change the checked state from the outside of the component', () => {
    const props: ICheckboxProps = {
      onChange: jest.fn(),
    };

    render(<Checkbox {...props} />);

    const checkbox = screen.getByTestId('checkbox-input');
    expect(checkbox).not.toBeChecked();
    fireEvent.change(checkbox, { target: { checked: true } });
    expect(checkbox).toBeChecked();
  });
});
