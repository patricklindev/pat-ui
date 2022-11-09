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
        <p>Rating</p>
        <Rating ></Rating>
    </div>
)