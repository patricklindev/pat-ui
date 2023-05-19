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

export const SliderWithMarks = () => {
  const marks = [{ value: 10 }, { value: 30 }, { value: 50 }, { value: 70 }, { value: 90 }];

  const marksWithLabels = [
    {
      label: '10',
      value: 10,
    },
    {
      label: '30',
      value: 30,
    },
    {
      label: '50',
      value: 50,
    },
    {
      label: '70',
      value: 70,
    },
    {
      label: '90',
      value: 90,
    },
  ];

  return (
    <div>
      <div>Slider with Marks</div>
      <Slider marks={marks} />
      <div>Slider with Marks and Labels</div>
      <Slider marks={marksWithLabels} />
    </div>
  )
}

export const rangeSlider = () => {
  return (
    <Slider value={[10, 20]} />
  )
}
