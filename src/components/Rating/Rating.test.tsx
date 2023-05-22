import React, { useState } from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Rating, { patRatingProp } from './Rating';

describe('Rating', () => {
  it('should match snapshot 1', () => {
    const { container } = render(<Rating value={3}></Rating>);
    const mockIds = ['star-1', 'star-2', 'star-3', 'star-4', 'star-5'];

    const svgElements = container.querySelectorAll('svg');
    svgElements.forEach((svg, index) => {
      svg
        .querySelector('path')
        ?.setAttribute('fill', `url(#star-${index + 1})`);
      svg
        .querySelector('linearGradient')
        ?.setAttribute('id', `star-${index + 1}`);
    });
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render default rating', () => {
    const ratingProps: patRatingProp = {
      value: 3,
    };
    render(<Rating {...ratingProps} />);
    const ratingStar = screen.getByTestId('star-0');
    expect(ratingStar).toBeInTheDocument();
  });
  it('should render rating with different size', () => {
    const ratingProps: patRatingProp = {
      value: 3,
      size: 'small',
    };
    render(<Rating {...ratingProps} />);
    const ratingStar = screen.getByTestId('star-0');
    expect(ratingStar).toHaveClass('rating_star-small');
  });
  it('should render the correct value of rating', () => {
    const ratingProps: patRatingProp = {
      value: 3,
    };

    render(<Rating {...ratingProps} />);
    const allStars = screen.getAllByTestId(/star/i);
    allStars.forEach((star, index) => {
      if (index < 3) {
        expect(star).toHaveClass('rating_star-100'); // full star
      } else {
        expect(allStars[3]).toHaveClass('rating_star-0'); // empty star
      }
    });
  });
  it('should disbabled the rating', () => {
    const ratingProps: patRatingProp = {
      value: 3,
      disabled: true,
      onChange: jest.fn(),
    };
    render(<Rating {...ratingProps} />);
    const ratingStar = screen.getByTestId('star-0');
    expect(ratingProps.onChange).toHaveBeenCalledTimes(0);
    fireEvent.click(ratingStar);
    expect(ratingProps.onChange).toHaveBeenCalledTimes(0);
  });
  it('should render the correct precision of rating', () => {
    const ratingProps: patRatingProp = {
      value: 3.5,
      precision: 0.5,
    };
    render(<Rating {...ratingProps} />);
    const ratingStar = screen.getByTestId('star-3');
    expect(ratingStar).toHaveClass('rating_star-50');
  });

  it('should render the correct label of rating', () => {
    const labels: { [index: string]: string } = {
      0: 'No Rating',
      0.5: 'Useless',
      1: 'Useless+',
      1.5: 'Poor',
      2: 'Poor+',
      2.5: 'Ok',
      3: 'Ok+',
      3.5: 'Good',
      4: 'Good+',
      4.5: 'Excellent',
      5: 'Excellent+',
    };
    function getLabelText(value: number) {
      return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
    }
    const ratingProps = {
      value: 3.5,
      precision: 0.5,
      getLabelText: getLabelText,
    };

    render(<Rating {...ratingProps} />);
    expect(ratingProps.getLabelText(3.5)).toBe('3.5 Stars, Good');
  });
  it('Should render the correct number of stars', () => {
    const ratingProps = {
      value: 3.5,
      precision: 0.5,
      max: 10,
    };
    render(<Rating {...ratingProps} />);
    const allStars = screen.getAllByTestId(/star/i);
    expect(allStars.length).toBe(ratingProps.max);
  });
});
