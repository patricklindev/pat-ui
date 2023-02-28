import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  it('should render different size checkbox', () => {
    const wrapper = render(<Checkbox size="sm">Small Checkbox</Checkbox>);
    const element = wrapper.getByText('Small Checkbox') as HTMLInputElement;
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('cb cb-sm');
  });

  it('should render different color checkbox', () => {
    const wrapper = render(
      <Checkbox color="primary">Primary color Checkbox</Checkbox>
    );
    const element = wrapper.getByText(
      'Primary color Checkbox'
    ) as HTMLInputElement;
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('cb cb-primary');
  });

  it('should render checkbox with and without label', () => {
    const wrapper = render(<Checkbox>Checkbox with label</Checkbox>);
    const element = wrapper.getByText('Checkbox with label');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('cb');

    const wrapper2 = render(<Checkbox />).container.firstChild;
    expect(wrapper2).toBeInTheDocument();
  });

  it('should render checked and unchecked checkbox', () => {
    const checkboxProps = {
      checked: true,
      onChange: jest.fn(),
    };
    const wrapper = render(
      <Checkbox {...checkboxProps}>checked checkbox</Checkbox>
    );
    const element = wrapper.getByText('checked checkbox') as HTMLInputElement;
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('cb');
    expect(element.querySelector('input')?.checked).toBeTruthy();

    const checkboxProps2 = {
      checked: false,
      onChange: jest.fn(),
    };
    const wrapper2 = render(
      <Checkbox {...checkboxProps2}>unchecked checkbox</Checkbox>
    );
    const element2 = wrapper2.getByText(
      'unchecked checkbox'
    ) as HTMLInputElement;
    expect(element2).toBeInTheDocument();
    expect(element2).toHaveClass('cb');
    expect(element2.querySelector('input')?.checked).toBeFalsy();
  });

  it('Should listen to the onChange and run callback function', () => {
    const onChangeMock: jest.Mock = jest.fn();
    const wrapper = render(
      <Checkbox onChange={onChangeMock} checked>
        Checkbox
      </Checkbox>
    );
    const element = wrapper.getByText('Checkbox') as HTMLInputElement;
    expect(onChangeMock).toBeCalledTimes(0);
    fireEvent.click(element);
    expect(onChangeMock).toBeCalledTimes(1);
  });
});
