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
  <div style={ratingStyle}>
    <Rating onClick={action('hi')} />
  </div>
);

export const DisabledRating = () => (
  <div style={ratingStyle}>
    <Rating disabled ratingValueControll={3} />
  </div>
);

export const DiffSizeRating = () =>
  sizeArr.map((item, index) => (
    <div key={index} style={ratingStyle}>
      <Rating size={item as IconSize} />
    </div>
  ));

export const ReadyOnlyRating = () => (
  <div style={ratingStyle}>
    <Rating readonly ratingValueControll={3} />
  </div>
);
