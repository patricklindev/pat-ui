import React from 'react';

import { render } from '@testing-library/react';

import Tabs from '../Tabs/Tabs';

describe('Tabs', () => {
  it('should render tab1', () => {
    const wrapper = render(<Tabs headings={['Tab1', 'Tab2']}></Tabs>);
    const element = wrapper.queryByText('Tab1') as HTMLElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('LI');
  });
});
