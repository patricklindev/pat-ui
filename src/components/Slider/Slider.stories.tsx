import React from 'react';
import { action } from '@storybook/addon-actions';
import Slider from './Slider';

export default {
  title: 'Slider',
  component: Slider,
};

export const DefaultSlider = () => <div>
  <Slider onChange={action('value changed')} />
  <h3>Default Slider</h3>
  </div>;

export const DiffColorSliders = () => (
  <div>
    <Slider color="primary" />
    <h3>Primary Color</h3>
    <Slider color="secondary" />
    <h3>Secondary Color</h3>
    <Slider color="success" />
    <h3>Success Color</h3>
    <Slider color="info" />
    <h3>Info Color</h3>
    <Slider color="warning" />
    <h3>Warning Color</h3>
    <Slider color="danger" />
    <h3>Danger Color</h3>
    <Slider color="light" />
    <h3>Light Color</h3>
    <Slider color="dark" />
    <h3>Dark Color</h3>
  </div>
);

export const DiffSizeSliders = () => (
  <div>
    <Slider setSize="sm" />
    <h3>Small</h3>
    <Slider setSize="md" />
    <h3>Medium (Default)</h3>
    <Slider setSize="lg" />
    <h3>Large</h3>
  </div>
);

export const DisabledSlider = () => <Slider disabled={true} />;

export const MarkedSliders = () => (
  <div>
    <Slider rangeTicks={[1, 2, 3, 4]} />
    <h3>Continuous Marking</h3>
    <Slider rangeTicks={[0, 32, 100]} />
    <h3>Arbitrary Marking</h3>
  </div>
);

export const VerticalSliders = () => (
  <div style={{display: 'flex', alignItems: 'center', padding: '180px' }}>
    <Slider orientation='vertical' setSize='sm'  />
    <Slider orientation='vertical' setSize='md' />
    <Slider orientation='vertical' setSize='lg' />

  </div>
)
