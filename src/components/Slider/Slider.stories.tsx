import React from 'react';
import { action } from '@storybook/addon-actions';
import Slider from './Slider';

export default {
    title: 'Slider',
    component: Slider,
  };
  
  
  export const DefaultSlider = () => (
    <Slider />
  );

  export const DiffColorSliders = () => (
    <div>
    <Slider color='primary' />
    <Slider color='secondary' />
    </div>
  )

  export const DiffSizeSliders = () => (
    <div>
      <Slider setSize='sm' />
      <Slider setSize='md' />
      <Slider setSize='lg' />
    </div>
  )

  export const DisabledSlider = () => (
    <Slider disabled={true} />
  )
