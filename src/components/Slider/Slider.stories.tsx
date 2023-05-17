import React from 'react';
import { action } from '@storybook/addon-actions';
import Slider from './Slider';

export default {
  title: 'Slider',
  component: Slider,
};

export const DefaultSlider = () => (
  <div>
    <div>Default Slider</div>
    <Slider />
  </div>
);

export const DiffSizeSlider = () => (
  <div>
    <div>Small Slider</div>
    <Slider sliderSize="sm" />
    <div>Medium Slider</div>
    <Slider sliderSize="md" />
  </div>
);

export const DiffTypeSlider = () => (
  <div>
    <div>Primary Slider</div>
    <Slider sliderType="primary" />
    <div>Secondary Slider</div>
    <Slider sliderType="secondary" />
    <div>Disabled Slider</div>
    <Slider disabled />
  </div>
);
