import React from 'react';
import Icon from './Icon';
import { render } from '@testing-library/react';

describe('Icon', () => {
  it('should match snapshot', () => {});

  it('should render nothing if IconPath[name] is undefined', () => {
    const iconProps = {
      name: '__!!dne!!__',
    };

    const wrapper = render(<Icon {...iconProps} />);
    expect(wrapper.container.childNodes.length).toBe(0);
  });
});
