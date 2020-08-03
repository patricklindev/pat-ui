import React from 'react';

import {render, fireEvent} from '@testing-library/react';
import Button from './Button';

describe('Buttton', () => {
  it('should render default button', () => {
    const btnProps = {
      onClick: jest.fn(),
    };
    const wrapper = render(<Button {...btnProps}>Default Button</Button>);
    const element = wrapper.queryByText('Default Button') as HTMLElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('BUTTON');
    expect(element).toHaveClass('btn btn-default');
    expect(btnProps.onClick).toHaveBeenCalledTimes(0);
    fireEvent.click(element);
    expect(btnProps.onClick).toHaveBeenCalledTimes(1);
  });

  it('should render correct button based on different props', () => {});
});
