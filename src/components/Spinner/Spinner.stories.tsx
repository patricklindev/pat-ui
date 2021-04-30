import React from 'react';
import { action } from '@storybook/addon-actions';
import Spinner from './Spinner';

export default {
  title: 'Spinner',
  component: Spinner,
};

export const DefaultSpinner = () => (
    <Spinner />
)

export const DiffSizeSpinner = () => (
  <div>
    <Spinner size="sm" />
    <p>Small spinner</p>
    <Spinner />
    <p>Default spinner</p>
    <Spinner size="lg" />
    <p>Large spinner</p>
  </div>
);
