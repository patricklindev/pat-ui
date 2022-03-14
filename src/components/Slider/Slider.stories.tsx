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
    <Slider color="slider-blue" />
    <br></br>
    <br></br>
    <Slider color="slider-red" />
  </div>
);

export const DiffSizeSlider = () => (
  <div>
    <Slider size="small" />
    <br></br>
    <br></br>
    <Slider size="large" />
  </div>
);

export const TickMarkSlider = () => (
  <div>
    <Slider RangeSlider={true} Tick={true} min={10} max={100} />
  </div>
);

export const DoubleRangeSlider = () => (
  <div>
    <Slider DoubleRangeSlider={true} />
  </div>
);

export const DisabledSlider = () => (
  <div>
    <Slider disabled />
  </div>
);
