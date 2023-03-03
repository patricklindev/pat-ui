import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import Rating, { IRatingProps } from './Rating';

describe('Rating', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Rating />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render default rating', () => {
    render(<Rating />);
    const ratingElement = screen.getByTestId('rating-element');
    expect(ratingElement).toHaveClass('rating');
  });

  it('should render correct rating styles based on props', () => {
    const ratingProps: IRatingProps = {
      size: 'sm',
      max: 10,
      textDisplay: false,
      className: 'test',
      defaultRating: 5,
    };
    render(<Rating {...ratingProps} />);
    const ratingElement = screen.getByTestId('rating-element');
    expect(ratingElement).toHaveClass('rating rating-sm test');

    const svgs = screen.getAllByRole('star-svg');
    expect(svgs).toHaveLength(10);

    const coverElement = screen.getByTestId('rating-cover');
    expect(coverElement.style.width).toBe('50%');

    const labelElement = screen.queryByRole('rating-label');
    expect(labelElement).not.toBeInTheDocument();
  });

  it('should render correct label based on props', () => {
    const ratingProps: IRatingProps = {
      max: 3,
      defaultRating: 2,
      precision: 1,
      label: { 1: 'Poor', 2: 'Acceptable', 3: 'Good' },
    };
    render(<Rating {...ratingProps} />);

    const svgs = screen.getAllByRole('star-svg');
    expect(svgs).toHaveLength(3);

    const labelElement = screen.queryByRole('rating-label');
    expect(labelElement?.textContent).toBe('Acceptable');
  });

  it('should render rating can be clicked', () => {
    const ratingProps: IRatingProps = {
      onChange: jest.fn(),
    };
    render(<Rating {...ratingProps} />);
    const starsElement = screen.getByTestId('rating-stars');
    expect(ratingProps.onChange).toHaveBeenCalledTimes(0);
    fireEvent.click(starsElement);
    expect(ratingProps.onChange).toHaveBeenCalledTimes(1);
  });

  it('should render disabled rating', () => {
    const ratingProps: IRatingProps = {
      disabled: true,
      onChange: jest.fn(),
    };
    render(<Rating {...ratingProps} />);

    const ratingElement = screen.getByTestId('rating-element');
    expect(ratingElement).toHaveClass('rating disabled');

    const starsElement = screen.getByTestId('rating-stars');
    expect(ratingProps.onChange).toHaveBeenCalledTimes(0);
    fireEvent.click(starsElement);
    expect(ratingProps.onChange).toHaveBeenCalledTimes(0);
  });
});
