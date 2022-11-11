import React from 'react';
import { render } from '@testing-library/react';
import Rating from './Rating';

describe('Rating', () => {
  it('Should render rating component', () => {
    const { asFragment } = render(<Rating />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render default button', () => {
    const ratingProps = {
      onClick: jest.fn(),
      onMouseEnter: jest.fn()
    };
    const wrapper = render(<Rating {...ratingProps}>Default Rating</Rating>);
    const element = wrapper.queryByText('Default Rating') as HTMLElement;
    expect(element).toBeInTheDocument();

  });

  it('Should change color on hover', () => {
    const ratingProps = {
      onMouseEnter: jest.fn(),
      onmouseleave: jest.fn()
    };
    
  })
});
