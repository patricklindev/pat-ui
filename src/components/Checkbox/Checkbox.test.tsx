import React from 'react';

import { render } from '@testing-library/react';
import Checkbox, { ICheckboxProps } from './Checkbox';

describe('Checkbox', () => {
  it('should render default checkbox', () => {
    const wrapper = render(<Checkbox />);
    const element = wrapper.getByTestId('checkbox');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('LABEL');
    expect(element).toHaveClass('checkbox checkbox-default');
  });

  it('should render correct checkbox based on different props', () => {
    const checkboxPrimarySmallProps: ICheckboxProps = {
      checkboxType: 'primary',
      checkboxSize: 'sm',

      className: 'test',
    };
    const checkboxPrimarySmallWrapper = render(
      <Checkbox {...checkboxPrimarySmallProps} />
    );
    const checkboxPrimarySmallElement = checkboxPrimarySmallWrapper.getByTestId(
      'checkbox'
    );
    expect(checkboxPrimarySmallElement).toBeInTheDocument();
    expect(checkboxPrimarySmallElement.tagName).toBe('LABEL');
    expect(checkboxPrimarySmallElement).toHaveClass(
      'checkbox checkbox-primary checkbox-sm test'
    );
  });

  it('should render square checkbox ', () => {
    const checkboxSquareProps: ICheckboxProps = {
      checkboxShape: 'square',
    };
    const checkboxSquareWrapper = render(<Checkbox {...checkboxSquareProps} />);
    const checkboxSquareElement = checkboxSquareWrapper.getByTestId('checkbox');
    expect(checkboxSquareElement).toBeInTheDocument();
    expect(checkboxSquareElement.tagName).toBe('LABEL');
    expect(checkboxSquareElement).toHaveClass('checkbox checkbox-square');
  });
});
