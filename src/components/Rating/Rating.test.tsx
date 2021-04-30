import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Rating, { IRatingProps } from './Rating';

describe('Rating', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Rating> Snapshot of Rating</Rating>);
    expect(asFragment()).toMatchSnapshot();
  });
it('should render the default Reating component with user given class name for custom styles',()=>{
    const ratingProps:IRatingProps = {
        className:"custom"
    }
    const wrapper = render(<Rating {...ratingProps} ></Rating>);
    const ratingElement = screen.getByTestId('rating-element')
    expect(ratingElement).toHaveClass('custom')
})
//test for the disable functionality
it('should render the disabled class if user gives disabled. (for svg tag)',()=>{
    const ratingProps:IRatingProps = {
        disabled:true
    }
    const wrapper = render(<Rating {...ratingProps} ></Rating>);
    const ratingElement = screen.getByTestId('rating-svg')
    expect(ratingElement).toHaveClass('rating rating--disabled')
})

//test for propety values 
it('disabled rating should not click',()=>{
    const ratingProps:IRatingProps = {
        disabled:true,
        getRating: jest.fn(),
    }
    const wrapper = render(<Rating {...ratingProps} ></Rating>);
    const ratingElement = screen.getByTestId('rating-click')
    fireEvent.click(ratingElement)
    expect(ratingProps.getRating).toHaveBeenCalledTimes(0);
})
});
