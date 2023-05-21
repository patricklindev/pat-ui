import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import Rating from './Rating';
export default {
  title: 'Rating',
  component: Rating,
};
export const DefaultRating = () => {
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
    setRating(value);
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }
  const [rating, setRating] = useState<number>(3);

  const handleRatingChange = (value: number) => {
    setRating(value);
  };
  return (
    <div>
      {`  Label: ${labels[rating]}, value: ${rating}`}
      <Rating
        value={rating}
        onChange={handleRatingChange}
        getLabelText={getLabelText}
        size={'large'}
        precision={0.5}
      />
    </div>
  );
};
