import React from 'react';
import { action } from '@storybook/addon-actions';
import Switch from './Switch';

export default {
  title: 'Switch',
  component: Switch,
};

export const DefaultSwitch = () => (
  <Switch onClick={action('Default Switch clicked')}>Default Switch</Switch>
);

export const DiffSizeSwitch = () => (
  <div>
    <Switch switchSize="sm" onClick={action('Small Switch clicked')}>
      Small Switch
    </Switch>

    <Switch switchSize="lg" onClick={action('Large Switch clicked')}>
      Small Switch
    </Switch>
  </div>
);

export const DiffColorSwitch = () => (
  <div>
    <Switch switchColor="primary" onClick={action('Primary Switch clicked')}>
      Primary color Switch
    </Switch>

    <Switch
      switchColor="secondary"
      onClick={action('Secondary Switch clicked')}
    >
      Secondary color Switch
    </Switch>
  </div>
);

export const DiffTypeSwitch = () => (
  <div>
    <Switch onClick={action('Default Switch clicked')}>Default Switch</Switch>
    <Switch
      label="switch label"
      onClick={action('switch with label clicked')}
    ></Switch>
    <Switch checked onClick={action('On switch clicked')}>
      On as default switch
    </Switch>

    <Switch disabled onClick={action('Disabled switch clicked')}>
      Defualt disabled switch
    </Switch>
  </div>
);
