import React from 'react';
import { action } from '@storybook/addon-actions';
import Switch from './Switch';

export default {
  title: 'Switch',
  component: Switch,
};

export const DefaultSwitch = () => (
  <>
    <Switch />
    <Switch label="Default With Label" />
  </>
);
export const DiffColorSwitch = () => (
  <div>
    <Switch color="primary" label="Switch Primary Color" />
    <Switch color="secondary" label="Switch Secondary Color" />
    <Switch label="Switch Default Color" />
  </div>
);
export const DiffSizeSwitch = () => (
  <div>
    <Switch size="sm" label="Small Switch" />
    <Switch size="m" label="Medium Switch" />
  </div>
);
export const DiffOnOffSwitch = () => (
  <div>
    <Switch on={true} label="Switch On" />
    <Switch label="Switch Off" />
  </div>
);
export const DiffDisabledSwitch = () => (
  <div>
    <Switch disabled={true} label="Switch Disabled" />
    <Switch label="Switch Not Disabled" />
  </div>
);
export const SwitchWithCallback = () => (
  <div>
    <Switch
      label="Switch With Callback"
      handleToggle={action('state changed')}
    />
  </div>
);
