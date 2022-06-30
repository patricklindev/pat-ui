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

  export const DiffTypeSliders = () => (
    <div>
    <Slider sliderColor='primary' />
    <Slider sliderColor='secondary' />
    </div>

  )