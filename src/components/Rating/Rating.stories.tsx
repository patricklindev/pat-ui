import { action } from '@storybook/addon-actions';
import React from 'react';
import { IconSize } from '../Icon/Icon';
import Rating from './Rating';

export default {
  title: 'Rating',
  component: Rating,
};

const ratingStyle: React.CSSProperties = {
  display: 'flex',
  height: '40px',
  alignItems: 'center',
};

const sizeArr = ['small', 'medium', 'large'];

export const DefaultRating = () => (
  <Rating
    onClick={action('hi')}
    onChange={action('rating value is')}
    style={ratingStyle}
  />
);

export const DisabledRating = () => (
  <div>
    <Rating disabled defaultRating={4} style={ratingStyle} />
    <Rating disabled defaultRating={2.5} half style={ratingStyle} />
  </div>
);

export const DiffSizeRating = () =>
  sizeArr.map((item, index) => (
    <Rating size={item as IconSize} style={ratingStyle} key={index} />
  ));

export const ReadyOnlyRating = () => (
  <div>
    <Rating readonly defaultRating={4} style={ratingStyle} />
    <Rating readonly defaultRating={2.5} half style={ratingStyle} />
  </div>
);

export const HalfFractionRating = () => (
  <Rating defaultRating={3.5} half style={ratingStyle} />
);

export const LabelRating = () => (
  <div>
    <Rating isLabel defaultRating={1} style={ratingStyle} />
    <Rating isLabel half defaultRating={2.5} style={ratingStyle} />
  </div>
);

export const CustomCountsRating = () => (
  <div>
    <Rating ratingCount={10} defaultRating={5} style={ratingStyle} />
    <Rating ratingCount={10} defaultRating={6.5} half style={ratingStyle} />
  </div>
);
