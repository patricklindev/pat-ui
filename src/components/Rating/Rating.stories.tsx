import React from 'react';
import Rating from './Rating';

export default {
  title: 'Rating',
  component: Rating,
};

export const DefaultRating = () => <Rating />;

export const DisabledRating = () => <Rating disabled ratingValueControll={3} />;

export const ReadyOnlyRating = () => (
  <Rating readonly ratingValueControll={3} />
);
