import React from 'react';
import { action } from '@storybook/addon-actions';
import Rating from './Rating';

export default {
  title: 'Rating',
  component: Rating,
};

//Diff Label Rating
const labelText1 = {
  1: 'Useless',
  2: 'Poor',
  3: 'OK',
  4: 'Good',
  5: 'Excellent',
};

const labelText2 = {
  0.5: 'Useless',
  1.0: 'Useless+',
  1.5: 'Poor',
  2.0: 'Poor+',
  2.5: 'Ok',
  3.0: 'Ok+',
  3.5: 'Good',
  4.0: 'Good+',
  4.5: 'Excellent',
  5.0: 'Excellent+',
};

export const DefaultRating = () => <Rating onChange={action('value')} />;

export const DiffLabelRating = () => (
  <div>
    <Rating max={5} onChange={action('value')} />
    <br />
    <br />
    <Rating precision={1} label={labelText1} onChange={action('value')} />
    <br />
    <br />
    <Rating label={labelText2} onChange={action('value')} />
    <br />
    <br />
    No Label Display <Rating textDisplay={false} onChange={action('value')} />
  </div>
);

export const DiffPrecisionRating = () => (
  <div>
    <div>
      <Rating precision={0.1} onChange={action('value')} />
      <br />
      <br />
      <Rating onChange={action('value')} />
      <br />
      <br />
      <Rating precision={1} onChange={action('value')} />
    </div>
  </div>
);

export const DiffStarNumberRating = () => (
  <div>
    <div>
      <Rating onChange={action('value')} />
      <br />
      <br />
      <Rating max={8} onChange={action('value')} />
      <br />
      <br />
      <Rating max={10} onChange={action('value')} />
    </div>
  </div>
);

export const DisabledRating = () => <Rating disabled={true} />;

export const DiffSizeRating = () => (
  <div>
    <Rating size="sm" />
    <br />
    <br />
    <Rating />
    <br />
    <br />
    <Rating size="lg" />
  </div>
);
