import React from 'react';
import { action } from '@storybook/addon-actions';
import Switch from './Switch';

export default {
  title: 'Switch',
  component: Switch,
};

const buttonStyle: React.CSSProperties = {
  marginRight: '5px',
  marginTop: '5px',
};

export const DefaultSwitch = () => (
  <Switch onClick={action('Default Switch clicked')}
  >Default Switch</Switch>
);

export const DisabledSwitch = () => (
    <div>
    <Switch onClick={action('Activated Switch clicked')}
>Enabled</Switch>
    <Switch disabled={true}>Disabled</Switch>
    </div>
  );

export const DifferentSizeSwitch = () => (
  <div>
    <Switch
      switchSize='small'
      onClick={action('Small Switch clicked')}
    >
      Small Switch
    </Switch>
    <Switch
      switchSize='medium'
      onClick={action('Medium Switch clicked')}
    >
      Default Switch
    </Switch>

    <Switch
      switchSize='large'
      onClick={action('Large Switch clicked')}
    >
      Large Switch
    </Switch>
  </div>
);

export const DiffTypeSwitch = () => (
  <div>
    <Switch
      onClick={action('Default Switch clicked')}
    >
      Primary Switch
    </Switch>
    <Switch
      textPosition='top'
      onClick={action('Secondary Switch clicked')}
    >
      Secondary Switch
    </Switch>
  </div>
);