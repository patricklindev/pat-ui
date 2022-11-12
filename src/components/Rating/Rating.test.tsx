import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
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
    let ratingEl = render(<Rating/>);
    // fireEvent(MouseEvent)
    expect(ratingEl)
  })

  it('Should change size based on user specification', async () => {
    const { rerender } = render(<Rating/>);
    let ratingEl = await screen.queryAllByTitle('rating');
  })

  it('Should render the right amount of stars', async () => {
    const { rerender } = render(<Rating />);

    let ratingEl = render(<Rating />);
    expect(ratingEl).toHaveLength(5);
    ratingEl = render(<Rating ratingCount={10}/>);
    expect(ratingEl).toHaveLength(10);
  });
});
