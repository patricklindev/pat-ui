import React from 'react';
import { action } from '@storybook/addon-actions';
import Slider from './index';

export default {
  title: 'Slider',
  component: Slider,
};

export const DefaultSlider = () => (
  <div>
    <Slider />
  </div>
);

export const DiffColorSlider = () => (
  <div>
    <Slider SliderColor='slider-blue'/>
    <br></br>
    <br></br>
    <Slider SliderColor='slider-red'/>
  </div>
)