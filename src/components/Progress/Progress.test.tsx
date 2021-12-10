import React from 'react';

import { render } from '@testing-library/react';
import Progress, { IProgressProps } from './Progress';

describe('Progress', () => {
  // snapshot testing
  it('should match snapshot', () => {
    const { asFragment } = render(<Progress pgValue={0}></Progress>);
    expect(asFragment()).toMatchSnapshot();
  });

  // default progress (linear)
  it('should render default progress, which is linear progress', () => {
    const wrapper = render(<Progress pgValue={0}></Progress>);
  });

  // circular progress
  // it('should render circular progress', () => {});

  // render progress based on props
  // it('should render correct progress based on different props', () => {});
});
