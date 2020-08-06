import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

describe('dropdown', () => {
  it('should render a dropdown without a child', () => {
    const dropdownProps = {
      placeholder: 'select',
    };

    const wrapper = render(<Dropdown {...dropdownProps}></Dropdown>);
    const element = wrapper.queryByText('select');
    expect(element).not.toBeNull();
    expect(element).toBeInTheDocument();
    expect(element?.tagName).toBe('SPAN');
  });

  it('should render a dropdown with three children', () => {
    const dropdownProps = {
      placeholder: 'select',
      onClick: jest.fn(),
    };

    const wrapper = render(
      <Dropdown {...dropdownProps}>
        <Dropdown.Item>1</Dropdown.Item>
        <Dropdown.Item>12</Dropdown.Item>
        <Dropdown.Item>123</Dropdown.Item>
      </Dropdown>
    ).container.firstChild;

    expect(wrapper).toHaveClass('dropdown__wrapper');
    expect(wrapper?.firstChild?.childNodes.length).toBe(2);
    expect(wrapper?.firstChild?.lastChild?.childNodes.length).toBe(3);
  });

  it('should render a dropdown with a custom class', () => {
    const dropdownProps = {
      placeholder: 'select',
      className: 'custom',
      onChange: jest.fn(),
    };

    const wrapper = render(
      <Dropdown {...dropdownProps}>
        <Dropdown.Item>1</Dropdown.Item>
        <Dropdown.Item>12</Dropdown.Item>
        <Dropdown.Item>123</Dropdown.Item>
      </Dropdown>
    ).container.firstChild;

    expect(wrapper).toHaveClass('dropdown__wrapper');
    expect(wrapper?.firstChild?.childNodes.length).toBe(2);
    expect(wrapper?.firstChild).toHaveClass('dropdown custom');

    fireEvent.click(wrapper?.firstChild?.lastChild?.childNodes.item(0) as Element);
    expect(dropdownProps.onChange).toBeCalledTimes(1);
  });

  it('should render a disabled dropdown with a custom class', () => {
    const dropdownProps = {
      placeholder: 'select',
      className: 'custom',
      disabled: true,
      onChange: jest.fn(),
    };

    const wrapper = render(
      <Dropdown {...dropdownProps}>
        <Dropdown.Item>1</Dropdown.Item>
        <Dropdown.Item>12</Dropdown.Item>
        <Dropdown.Item>123</Dropdown.Item>
      </Dropdown>
    ).container.firstChild;

    expect(wrapper).toHaveClass('dropdown__wrapper');
    expect(wrapper?.firstChild?.childNodes.length).toBe(2);
    expect(wrapper?.firstChild).toHaveClass('dropdown custom');
    expect(wrapper?.firstChild?.firstChild).toHaveClass('disabled');
  });
});
