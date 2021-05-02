import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Rating, { IRatingProps } from './Rating';

describe('Rating', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Rating> Snapshot of Rating</Rating>);
    expect(asFragment()).toMatchSnapshot();
  });

  //_________Test for Custom styles from user_________

  it('should have different class based on input for default type', () => {
    const ratingProps: IRatingProps = {
      className: 'custom',
    };
    const wrapper = render(<Rating {...ratingProps}></Rating>);
    const ratingElement = screen.getByTestId('rating-element');
    expect(ratingElement).toHaveClass('custom');
  });
  it('should have different class based on input for progress type', () => {
    const ratingProps: IRatingProps = {
      className: 'custom',
      ratingtype: 'progress',
    };
    const wrapper = render(<Rating {...ratingProps}></Rating>);
    const ratingElement = screen.getByTestId('rating-element');
    expect(ratingElement).toHaveClass('custom');
  });
  it('should have different class based on input for like type', () => {
    const ratingProps: IRatingProps = {
      className: 'custom',
      ratingtype: 'progress',
    };
    const wrapper = render(<Rating {...ratingProps}></Rating>);
    const ratingElement = screen.getByTestId('rating-element');
    expect(ratingElement).toHaveClass('custom');
  });

  // _______Test for disabled changing class______

  it('should have disabled class based on input for like type', () => {
    const ratingProps: IRatingProps = {
      ratingtype: 'like',
      disabled: true,
    };
    const wrapper = render(<Rating {...ratingProps}></Rating>);
    const ratingElement = screen.getByTestId('like-element');
    expect(ratingElement).toHaveClass('btn disabled');
  });
});
