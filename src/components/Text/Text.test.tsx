import React from 'react';

import { render } from '@testing-library/react';
import Text from './Text';

describe('Text', () => {
  it('should render default Text', function () {
    const wrapper = render(<Text placeholder={'Search...'}></Text>);
    const text_bar = wrapper.getByPlaceholderText('Search...') as HTMLInputElement;
    const element = wrapper.container.firstElementChild as HTMLElement;
    expect(text_bar).toBeInTheDocument();
    expect(text_bar.tagName).toBe('INPUT');
    expect(element).toHaveClass('tx');
});

it('should render Error Text', function () {
    const wrapper = render(<Text error placeholder={'Search...'}></Text>);
    const text_bar = wrapper.getByPlaceholderText('Search...') as HTMLInputElement;
    const element = wrapper.container.firstElementChild as HTMLElement;
    expect(text_bar).toBeInTheDocument();
    expect(text_bar.tagName).toBe('INPUT');
    expect(element).toHaveClass('tx--error');
});
});