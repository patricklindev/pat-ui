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
      <h3>Default Rating</h3>
      <Rating getRating={(rating: number) => setRating(rating)} />
      <span>Rating: {rating}</span>
    </div>
  );
};

export const DiffTypeRating = () => {
  return (
    <div>
      <h3>Five Point Rating</h3>
      <p>Five point rating is used for fixed scale</p>
      <Rating defaultRating={3}/>
      <h3>Progress Rating</h3>
      <p></p>
      <Rating ratingtype="progress" barValue={60} />
      <p>Progress is used to show results from ratings</p>
    </div>
  );
};
