import React from 'react';
import Rating from './Rating';
import './Rating';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Rating',
    component: Rating,
};

export const DefaultRating = () => (
    <div>
        <h3>Rating</h3>
        <Rating />
    </div>
)

export const SizeRating = () => (
  <div>
    <h4>Different Rating Sizes</h4>

    <h6>Small</h6>
    <Rating ratingSize="sm" />
    {' '}
    <h6>Medium</h6>
    <Rating ratingSize="md" />
    {' '}
    <h6>Large</h6>
    {' '}
    <Rating ratingSize="lg" />
    {' '}
    <h6>Custom</h6>
    <Rating customSize='1.2rem'/>
  </div>
);

export const LabelRating = () => (
  <div>
    <p>Rating</p>
    <Rating hoverLabel/>
  </div>
);

export const DisabledRating = () => (
  <div>
    <p>Rating</p>
    
    <Rating disabled/>
  </div>
);

export const AmountRating = () => (
  <div>
    <p>Diffents amount of Stars</p>
    <Rating ratingCount={10}/>
  </div>
);