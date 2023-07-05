import React from 'react';
import { action } from '@storybook/addon-actions';
import Switch from './Switch';

export default {
  title: 'Switch',
  component: Switch,
};

export const DefaultSwitch = () => (
  <div>
    <Switch onClick={action('Default Switch Toggled')} />
    <Switch
      onClick={action('Default Switch Toggled')}
      checked
      label="Checked Switch"
    />
    <Switch
      onClick={action('Disabled Switch Clicked')}
      disabled
      label="Disabled Switch"
    />
  </div>
);

export const DiffTypeSwitch = () => (
  <div>
    <Switch
      onClick={action('Primary Switch Toggled')}
      label="Primary Switch"
      switchType="primary"
      checked
    />
    <Switch
      onClick={action('Secondary Switch Toggled')}
      label="Secondary Switch"
      switchType="secondary"
      checked
    />
    <Switch
      onClick={action('Secondary Switch Toggled')}
      label="Customed Color Switch"
      switchType="secondary"
      color="#FFA500"
      checked
    />
  </div>
);

export const DiffSizeSwitch = () => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <Switch
      onClick={action('Medium-sized Switch Toggled')}
      // label="Medium"
      switchType="primary"
      checked
    />
    <Switch
      onClick={action('Small-sized Switch Toggled')}
      // label="Small"
      switchType="primary"
      switchSize="small"
      checked
    />
  </div>
);
