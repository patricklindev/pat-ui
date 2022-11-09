import React from 'react';
import { action } from '@storybook/addon-actions';
import Slider from './Slider';

export default {
  title: 'Slider',
  component: Slider,
};

export const DefaultSlider = () => (
  <div>
    <h3>default</h3>
    <Slider onChange={(event) => action('' + event.target.value)(event)} />
  </div>
);

export const DiffSizeSlider = () => (
  <div>
    <h3>sm</h3>
    <Slider sliderSize="sm" />
    <br />
    <h3>md</h3>
    <Slider sliderSize="md" />
    <br />
    <h3>lg</h3>
    <Slider sliderSize="lg" />
  </div>
);

export const DiffColorSlider = () => (
  <div>
    <h3>primary</h3>
    <Slider sliderColor="primary" />
    <br />
    <h3>secondary</h3>
    <Slider sliderColor="secondary" />
    <br />
    <h3>default</h3>
    <Slider sliderColor="default" />
  </div>
);

export const DiffLabelOptions = () => (
  <div>
    <h3>off</h3>
    <Slider displayValueLabel="off" />
    <br />
    <h3>on</h3>
    <Slider displayValueLabel="on" />
    <br />
    <h3>auto</h3>
    <Slider displayValueLabel="auto" />
    <br />
  </div>
);

export const DiffInputModes = () => (
  <div>
    <h3>{'Step is not defined (continuous input mode)'}</h3>
    <Slider displayValueLabel="on" />
    <br />
    <h3>{'Step is defined (discrete input mode)'}</h3>
    <Slider displayValueLabel="on" step={10} />
    <br />
  </div>
);

export const DiffMarkOptions = () => (
  <div>
    <h3>marks with default</h3>
    <Slider marks={true} displayValueLabel={'auto'} />
    <br />
    <h3>marks with steps</h3>
    <br />
    <Slider marks={true} step={25} displayValueLabel={'auto'} />
    <br />
    <h3>custom marks</h3>
    <Slider marks={[20, 60, 75]} displayValueLabel={'auto'} />

    <br />
    <h3>custom marks with non-default length</h3>
    <Slider marks={[20, 60, 75]} max={80} displayValueLabel={'auto'} />
  </div>
);

export const RangeSlider = () => (
  <div>
    <h3>Range Slider with 2 thumbs</h3>
    <Slider rangePositions={[25, 75]} displayValueLabel={'on'} />
    <br />
    <h3>Range Slider with 3 thumbs</h3>
    <Slider rangePositions={[30, 60, 90]} displayValueLabel={'on'} />
    <br />
  </div>
);

export const DisabledSlider = () => <Slider disabled={true} />;
