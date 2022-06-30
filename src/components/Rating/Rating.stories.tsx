import React from 'react';
import { IconSize } from '../Icon/Icon';
import Rating from './Rating';

export default {
  title: 'Rating',
  component: Rating,
};

const diffSizeRatingStyle: React.CSSProperties = {
  display: 'flex',
  height: '50px',
  alignItems: 'center',
};

const ratingStyle: React.CSSProperties = {
  height: '30px',
};

const sizeArr = ['small', 'medium', 'large'];

export const DefaultRating = () => (
  <div style={ratingStyle}>
    <Rating />
  </div>
);

export const DisabledRating = () => <Rating disabled ratingValueControll={3} />;

export const DiffSizeRating = () =>
  sizeArr.map((item, index) => (
    <div key={index} style={diffSizeRatingStyle}>
      <Rating size={item as IconSize} />
    </div>
  ));

export const ReadyOnlyRating = () => (
  <Rating readonly ratingValueControll={3} />
);
