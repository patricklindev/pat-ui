import React from 'react';
import Spinner from './Spinner';

export default {
  title: 'Spinner',
  component: Spinner,
};

export const DefaultSpinner = () => <Spinner />;

export const DiffSizeSpinner = () => (
  <div>
    <Spinner size="sm"/>
    <p>Small spinner</p>
    <Spinner />
    <p>Default spinner</p>
    <Spinner size="lg" />
    <p>Large spinner</p>
  </div>
);

export const DiffColorSpinner = () => (
  <div>
    <Spinner color="light" />
    <p>Light spinner</p>
    <Spinner />
    <p>Default (Dark) spinner</p>
  </div>
);