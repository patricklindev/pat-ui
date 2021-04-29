import * as React from 'react';
import Rating from './Rating';

export default {
  title: 'Rating',
  component: Rating,
};
//used _ here for documentation purposes as Rating conflicts.
export const DefaultRating = () => {
  const [rating, setRating] = React.useState(0);
  return (
    <div>
      <Rating
        getRating={(rating: number) => setRating(rating)}
      />
      <span>Rating: {rating}</span>
    </div>
  );
};
export const DiffRating = () => {
  const [rating, setRating] = React.useState(0);
  return (
    <div>
      <Rating
        ratingtype="progress"
      />
    </div>
  );
};
