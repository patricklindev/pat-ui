
import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import Text, {  } from './Text';

describe('Text', () => {
//   it('should match snapshot', () => {
//     const { asFragment } = render(<Text> Snapshot Text </Text>);
//     expect(asFragment()).toMatchSnapshot();
//   });

  it('should render default text', () => {
    const txtProps = {
      onClick: jest.fn(),
    };
    const wrapper = render(<Text {...txtProps}>Default Text</Text>);
    const element = wrapper.queryByText('Default Text') as HTMLElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('TEXT');
    expect(txtProps.onClick).toHaveBeenCalledTimes(0);
    fireEvent.click(element);
    expect(txtProps.onClick).toHaveBeenCalledTimes(1);
  });

  
});