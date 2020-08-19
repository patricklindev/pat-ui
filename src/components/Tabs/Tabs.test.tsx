import React from 'react';

import { render } from '@testing-library/react';

import Tabs from '../Tabs/Tabs';

describe('Tabs', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <Tabs
        tabs={[{ heading: 'Tab1', content: <div>This is tab1</div> }]}
      ></Tabs>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render tab1', () => {
    const tabProps = {
      tabs: [
        {
          heading: 'tab1',
          content: <div>content</div>,
        },
      ],
    };
    const wrapper = render(<Tabs {...tabProps}></Tabs>);
    const element = wrapper.queryByText('tab1') as HTMLElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('LI');
  });
});
