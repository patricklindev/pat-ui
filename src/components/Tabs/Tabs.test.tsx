import React from 'react';

import { render } from '@testing-library/react';

import Tabs from '../Tabs/Tabs';

describe('Tabs', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <Tabs headings={['t1', 't2']}> Snapshot Tabs </Tabs>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render tab1', () => {
    const liProps = {
      onClick: jest.fn(),
    };
    const wrapper = render(<Tabs headings={['Tab1', 'Tab2']}></Tabs>);
    const element = wrapper.queryByText('Tab1') as HTMLElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('LI');
    expect(liProps.onClick).toHaveBeenCalledTimes(0);
  });
});
