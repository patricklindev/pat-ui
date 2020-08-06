import React from 'react';
import { render } from '@testing-library/react';
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
    };

    const wrapper = render(<Dropdown {...dropdownProps}></Dropdown>).container.firstChild;

    expect(wrapper).toHaveClass('dropdown__wrapper');
  });
});
