import React from 'react';
import { action } from '@storybook/addon-actions';
import Rating from './Rating';
export default {
  title: 'Rating',
  component: Rating,
};
export const DefaultRating = () => {
  return (
    <div>
      <Rating />
    </div>
  );
};
