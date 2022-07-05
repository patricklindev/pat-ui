import { action } from '@storybook/addon-actions';
import React from 'react';
import { IconSize } from '../Icon/Icon';
import Rating from './Rating';

export default {
  title: 'Rating',
  component: Rating,
};

const sizeArr = ['small', 'medium', 'large'];

export const DefaultRating = () => (
  <Rating onChange={action('rating value is')} />
);

export const DisabledRating = () => (
  <div>
    <Rating disabled defaultRating={4} />
    <Rating disabled defaultRating={2.5} half />
  </div>
);

export const DiffSizeRating = () =>
  sizeArr.map((item, index) => <Rating size={item as IconSize} key={index} />);

export const ReadyOnlyRating = () => (
  <div>
    <Rating readonly defaultRating={4} />
    <Rating readonly defaultRating={2.5} half />
  </div>
);

export const HalfFractionRating = () => <Rating defaultRating={3.5} half />;

export const LabelRating = () => (
  <div>
    <Rating isLabel defaultRating={1} ratingCount={6} />
    <Rating isLabel half defaultRating={2.5} ratingCount={6} />
  </div>
);

export const CustomCountsRating = () => (
  <div>
    <Rating ratingCount={10} defaultRating={5} />
    <Rating ratingCount={10} defaultRating={6.5} half />
  </div>
);
