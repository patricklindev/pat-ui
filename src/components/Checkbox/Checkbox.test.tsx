import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Checkbox test cases', () => {
  test('component should be rendered', () => {
    render(<Checkbox />);
    const checkboxId = screen.getByTestId('medium-checkbox');
    expect(checkboxId).toBeInTheDocument();
  });

  test('should change color based on color props', async () => {
    const { rerender } = render(<Checkbox color="primary" />);
    let checkboxEl = await screen.findByRole('checkbox');
    expect(checkboxEl).toHaveClass('chk-primary-medium');

    rerender(<Checkbox color="secondary" />);
    checkboxEl = await screen.findByRole('checkbox');
    expect(checkboxEl).toHaveClass('chk-secondary-medium');

    rerender(<Checkbox color="default" />);
    checkboxEl = await screen.findByRole('checkbox');
    expect(checkboxEl).toHaveClass('chk-default-medium');
  });

  test('should change size based on size props', async () => {
    const { rerender } = render(<Checkbox size="small" />);
    let checkboxEl = await screen.findByRole('checkbox');
    expect(checkboxEl).toHaveClass('chk-small');

    rerender(<Checkbox size="medium" />);
    checkboxEl = await screen.findByRole('checkbox');
    expect(checkboxEl).toHaveClass('chk-medium');
  });

  test('should render checkbox with label', () => {
    const wrapper = render(<Checkbox label="checkbox" />);
    const element = wrapper.queryByText('checkbox');
    expect(element).toBeInTheDocument();
  });

  test('should be disabled or not, should be true initially, false after clicking', async () => {
    const mockClickHandler = jest.fn();
    render(<Checkbox onClick={mockClickHandler} />);
    const checkbox = screen.getByTestId('hidden-chk') as HTMLInputElement;
    expect(checkbox.checked).toEqual(false);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
  });

  test('by clicking label, should be disabled or not, should be true initially, false after clicking', async () => {
    const mockClickHandler = jest.fn();
    render(<Checkbox onClick={mockClickHandler} label="checkbox" />);
    const checkboxLabel = screen.getByLabelText('checkbox') as HTMLInputElement;
    expect(checkboxLabel.checked).toEqual(false);
    fireEvent.click(checkboxLabel);
    expect(checkboxLabel.checked).toEqual(true);
  });

  test('should render unchecked checkbox', () => {
    render(<Checkbox checked={false} />);
    const checkedCheckbox = screen.queryByRole('checkbox');
    expect(checkedCheckbox).toBeInTheDocument();
  });

  test('should render checked checkbox', () => {
    render(<Checkbox checked={true} />);
    const checkedCheckbox = screen.queryByRole('checkbox');
    expect(checkedCheckbox).toBeInTheDocument();
  });

  test('should call cb function passed to onChange', () => {
    const checkProps = {
      onChange: jest.fn(),
    };
    render(<Checkbox {...checkProps} />);
    const element = screen.queryByRole('checkbox');
    expect(element).toBeInTheDocument();
    expect(checkProps.onChange).toHaveBeenCalledTimes(0);
    element && fireEvent.click(element);
    expect(checkProps.onChange).toHaveBeenCalledTimes(1);
  });
});
