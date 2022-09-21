import React from 'react';
import Slider from './Slider';

export default {
  title: 'Slider',
  component: Slider,
};

export const DefaultSlider = () => {
  // onscroll show value
  return (
    <Slider sliderValue={60} onInput={(e) => console.log(e.target.value)} />
  );
};

export const DiffColorSlider = () => (
  <div>
    <Slider />
    <Slider color="secondary" />
    <Slider color="disabled" disable={true} />x
  </div>
);

export const DiffSizeSlider = () => (
  <div>
    <h1>Large</h1>
    <Slider sliderSize="lg" />
    <Slider sliderSize="lg" color="secondary" />
    <Slider sliderSize="lg" color="disabled" disable={true} />
    <br />
    <br />
    <h1>Small</h1>
    <Slider sliderSize="sm" />
    <Slider sliderSize="sm" color="secondary" />
    <Slider sliderSize="sm" color="disabled" disable={true} />
  </div>
);

export const ValueLabelSlider = () => <Slider showValueLabel={true} />;

export const RangeSlider = () => (
  <div>
    <Slider range={true} />
    <Slider range={true} color="secondary" />
    <Slider range={true} disable={true} />
    <h1>Large</h1>
    <Slider range={true} sliderSize="lg" />
    <Slider range={true} sliderSize="lg" color="secondary" />
    <Slider range={true} sliderSize="lg" disable={true} />
    <h1>Small</h1>
    <Slider range={true} sliderSize="sm" />
    <Slider range={true} sliderSize="sm" color="secondary" />
    <Slider range={true} sliderSize="sm" disable={true} />
    <h1>Value Label</h1>
    <Slider range={true} showValueLabel={true} />
  </div>
);
