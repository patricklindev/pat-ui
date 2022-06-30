import React from 'react';
import { IconSize } from '../Icon/Icon';
import Rating from './Rating';

export default {
  title: 'Rating',
  component: Rating,
};

const ratingStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
};

const sizeArr = ['mini', 'small', 'medium', 'large'];

export const DefaultRating = () => <Rating />;

export const DisabledRating = () => <Rating disabled ratingValueControll={3} />;

export const DiffSizeRating = () =>
  sizeArr.map((item, index) => (
    <div key={index} style={ratingStyle}>
      <Rating size={item as IconSize} />
    </div>
  ));

export const ReadyOnlyRating = () => (
  <Rating readonly ratingValueControll={3} />
);
