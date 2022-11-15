import React from 'react';
import Checkbox, { CheckboxProps } from './Checkbox';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';  

describe('Checkbox', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Checkbox label='snapshot checkbox'/>);
    expect(asFragment()).toMatchSnapshot();
  });
});

it('should render the default checkbox', () => {
  const wrapper = render(<Checkbox label='default button'/>);
  const innerDiv = wrapper.getByTestId('innerDiv') as HTMLDivElement;
  const checkbox = wrapper.getByRole('checkbox') as HTMLInputElement;
  const svg = wrapper.getByTestId('svg') as HTMLImageElement;

  expect(checkbox).toBeInTheDocument();
  expect(checkbox.tagName).toBe('INPUT');

  expect(innerDiv).toHaveClass('chkbx-label label-disabled-false chkbx--label-right');
  expect(checkbox).toHaveClass('chkbx chkbx--medium chkbx--default');
  expect(svg).toHaveClass('chkbx--svg chkbx--svg-medium chkbx--svg-default');
});

it('should render checkbox correctly with different props', () => {
  const checkboxProps: CheckboxProps = {
    color: 'secondary',
    checkboxSize: 'small',
    labelPosition: 'top',
    label: 'test',
  };
  const wrapper = render(<Checkbox {...checkboxProps}/>);
  const innerDiv = wrapper.getByTestId('innerDiv') as HTMLDivElement;
  const checkbox = wrapper.getByRole('checkbox') as HTMLInputElement;
  const svg = wrapper.getByTestId('svg') as HTMLImageElement;

  expect(checkbox).toBeInTheDocument();
  expect(checkbox.tagName).toBe('INPUT');

  expect(innerDiv).toHaveClass('chkbx-label label-disabled-false chkbx--label-top');
  expect(checkbox).toHaveClass('chkbx chkbx--small chkbx--secondary');
  expect(svg).toHaveClass('chkbx--svg chkbx--svg-small chkbx--svg-secondary');
});

it('should change state and update visually when clicked', () => {
  const wrapper = render(<Checkbox />);
  const checkbox = wrapper.getByRole('checkbox') as HTMLInputElement;
  const path = wrapper.getByTestId('path');

  expect(checkbox.checked).toEqual(false);
  expect(path).toHaveClass('path--checked-false');
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);
  expect(path).toHaveClass('path--checked-true');
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(false);
  expect(path).toHaveClass('path--checked-false');
});

it('should correctly render the disabled state of the checkbox', () => {
  const checkboxProps: CheckboxProps = {
    onChange: jest.fn(),
    checked: false,
    disabled: true,
  };
  const wrapper = render(<Checkbox {...checkboxProps}/>);
  const innerDiv = wrapper.getByTestId('innerDiv') as HTMLDivElement;
  const checkbox = wrapper.getByRole('checkbox') as HTMLInputElement;
  const path = wrapper.getByTestId('path');

  expect(innerDiv).toHaveClass('chkbx-label label-disabled-true chkbx--label-right');

  expect(checkbox.checked).toEqual(false);
  expect(path).toHaveClass('path--checked-false');
  expect(checkboxProps.onChange).toHaveBeenCalledTimes(0);
  userEvent.click(checkbox);
  expect(checkbox.checked).toEqual(false);
  expect(path).toHaveClass('path--checked-false');
  expect(checkboxProps.onChange).toHaveBeenCalledTimes(0);
});