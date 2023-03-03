import React from 'react';

import {render, fireEvent,act} from '@testing-library/react';
import Rating from './Rating';

describe('Rating', ()=>{
    it('should render the component with default props', () => {
        const { getByTestId } = render(<Rating data-testid="rating" />);
        const ratingComponent = getByTestId('rating');
        expect(ratingComponent).toBeInTheDocument();
      });

      it('should render the correct number of stars', () => {
        const { getByTestId } = render(<Rating data-testid="rating" totalStars={7} />);
        const ratingComponent = getByTestId('rating');
        const stars = ratingComponent.querySelectorAll('.ui-rating.rating-empty-star');
        expect(stars.length).toEqual(7);
      });

      it('should render the correct value', () => {
        const { getByTestId } = render(<Rating data-testid="rating" value={3} />);
        const ratingComponent = getByTestId('rating');
        const filledStars = ratingComponent.querySelectorAll('.ui-rating.rating-full-star'); 
        const filledCnt = filledStars.length - 5; //5 is the default rating count to use on hover.
        expect(filledCnt).toBe(3);
      });

      it('should render the correct default value with total stars: 10', () => {
        const { getByTestId } = render(<Rating data-testid="rating" defaultValue={2} totalStars={10}/>);
        const ratingComponent = getByTestId('rating');
        const filledStars = ratingComponent.querySelectorAll('.ui-rating.rating-full-star'); 
        const filledCnt = filledStars.length - 10; //10 is the default rating count to use on hover.
        expect(filledCnt).toBe(2);
      });

      it('should render the correct size', () => {
        const { getByTestId } = render(<Rating data-testid="rating" size="small" />);
        const ratingComponent = getByTestId('rating');
        expect(ratingComponent).toHaveClass('rating-small');
      });
      
      it('should be read-only when readOnly prop is set to true', () => {
        const { getByTestId } = render(<Rating data-testid="rating" readOnly={true} />);
        const ratingComponent = getByTestId('rating');
        expect(ratingComponent).toHaveClass('rating-readonly');
      });

      it('should be disabled when disabled prop is set to true', () => {
        const { getByTestId } = render(<Rating data-testid="rating" disabled={true} />);
        const ratingComponent = getByTestId('rating');
        expect(ratingComponent).toHaveClass('rating-disabled');
        expect(ratingComponent.firstChild).toHaveStyle('cursor: not-allowed;');
      });      
});
