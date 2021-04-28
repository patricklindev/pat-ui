import React, { useState } from 'react';
// import { action } from '@storybook/addon-actions';
import Icon from '../Icon/';
import StarRating from './StarRating';

export default {
  title: 'Rating',
  component: Icon,
};
//used _ here for documentation purposes as StarRating conflicts.
export const Star_rating = () => {
  const [rating, setRating] = useState(0);
  return (
    <div>
      <StarRating
        defaultRating={2}
        selectedColor="yellow"
        getRating={(rating: number) => setRating(rating)}
      />
      <h5>Rating: {rating}</h5>
    </div>
  );
};
