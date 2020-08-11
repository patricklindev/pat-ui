import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dropdown from './index';

describe('dropdown', () => {
  it('should render a dropdown without a child', () => {
    const dropdownProps = {
      placeholder: 'select',
    };

    const wrapper = render(<Dropdown {...dropdownProps}></Dropdown>);
    const element = wrapper.queryByText('select');
    expect(element).not.toBeNull();
    expect(element).toBeInTheDocument();
    expect(element?.tagName).toBe('DIV');
  });

  it('should render a dropdown with three children', () => {
    const dropdownProps = {
      placeholder: 'select',
      onClick: jest.fn(),
    };

    const wrapper = render(
      <Dropdown {...dropdownProps}>
        <Dropdown.Option value="1">1</Dropdown.Option>
        <Dropdown.Option value="12">12</Dropdown.Option>
        <Dropdown.Option value="123">123</Dropdown.Option>
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
        <Dropdown.Option>1</Dropdown.Option>
        <Dropdown.Option>12</Dropdown.Option>
        <Dropdown.Option>123</Dropdown.Option>
      </Dropdown>
    ).container.firstChild;

    expect(wrapper).toHaveClass('dropdown__wrapper custom');
    expect(wrapper?.firstChild?.childNodes.length).toBe(2);

    fireEvent.click(
      wrapper?.firstChild?.lastChild?.childNodes.item(0) as Element
    );
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
        <Dropdown.Option>1</Dropdown.Option>
        <Dropdown.Option>12</Dropdown.Option>
        <Dropdown.Option>123</Dropdown.Option>
      </Dropdown>
    ).container.firstChild;

    expect(wrapper).toHaveClass('dropdown__wrapper custom');
    expect(wrapper?.firstChild?.childNodes.length).toBe(2);
    expect(wrapper?.firstChild?.firstChild).toHaveClass('disabled');
  });

  it('should render a disabled dropdown with a custom class and default value is set to 123', () => {
    const dropdownProps = {
      placeholder: 'select',
      className: 'custom',
      disabled: true,
      onChange: jest.fn(),
    };

    const wrapper = render(
      <Dropdown {...dropdownProps}>
        <Dropdown.Option>1</Dropdown.Option>
        <Dropdown.Option>12</Dropdown.Option>
        <Dropdown.Option active>123</Dropdown.Option>
      </Dropdown>
    ).container.firstChild;

    expect(wrapper).toHaveClass('dropdown__wrapper custom');
    expect(wrapper?.firstChild?.childNodes.length).toBe(2);
    expect(wrapper?.firstChild?.firstChild?.firstChild).toHaveTextContent('123');
  });
});
