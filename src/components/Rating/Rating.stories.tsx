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
      <h3>Basic Rating</h3>
      Large
      <Rating value={rating} onChange={handleRatingChange} size={'large'} />
      Default
      <Rating value={rating} onChange={handleRatingChange} size={'default'} />
      Small
      <Rating value={rating} onChange={handleRatingChange} size={'small'} />
    </div>
  );
};
export const RatingDisabled = () => {
  const [rating, setRating] = useState<number>(3);

  return (
    <div>
      <h3>Disabled Rating</h3>
      <p>
        set the rating to be disabled, and the rating component will not be
        modified
      </p>
      <Rating value={rating} size={'large'} disabled precision={0.5} />
    </div>
  );
};
export const RatingPrecision = () => {
  const [rating, setRating] = useState<number>(3);

  return (
    <div>
      <h3>Precision Rating</h3>
      <p>
        set the precision of the rating component can rate a fraction of stars
      </p>
      <Rating value={rating} size={'large'} precision={0.5} />
    </div>
  );
};
export const RatingLabel = () => {
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
      <h3>Label Rating</h3>
      <p>set the label of the rating component</p>
      <p>{labels[rating]}</p>
      <Rating
        value={rating}
        onChange={handleRatingChange}
        size={'large'}
        getLabelText={getLabelText}
        precision={0.5}
      />
    </div>
  );
};
