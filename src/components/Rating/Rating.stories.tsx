import * as React from 'react';
import Rating from './Rating';
import { action } from '@storybook/addon-actions';

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
      <h4>Five Point Rating</h4>
      <p>Five point rating is used for fixed scale</p>
      <Rating className="patComponent" defaultRating={3} />

      <h4>Progress Rating</h4>
      <p>Progress is used to show results from ratings</p>
      <Rating className="patComponent" ratingtype="progress" barValue={60} />

      <h4>Thumb Rating</h4>
      <p>
        Like and dislike ratings are used when results are either good or bad
      </p>
      <Rating
        className="patComponent"
        clickThumbsDown={action('Disliked')}
        clickThumbsUp={action('Liked')}
        ratingtype="thumb"
      />
    </div>
  );
};
