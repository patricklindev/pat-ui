import React from 'react';
import Switch from './Switch';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Switch',
  component: Switch,
};

export const defaultSwitch = () => <Switch onChange={action('Switch clicked')} required />;

export const disabledSwitch = () => <Switch disabled />;

export const checkedSwitch = () => <Switch checked onChange={action('Switch clicked')} />;

export const checkedDisabledSwitch = () => <Switch checked disabled />;

export const labelSwitch = () => <Switch label="Switch Label" onChange={action('Switch clicked')} />;

export const labelDisabledSwitch = () => <Switch label="Switch Label" disabled />;

export const labelCheckedSwitch = () => <Switch label="Switch Label" checked onChange={action('Switch clicked')} />;

export const labelCheckedDisabledSwitch = () => <Switch label="Switch Label" checked disabled />;

export const primarySwitch = () => (
  <Switch color="primary" label="Switch Label" onChange={action('Switch clicked')} />
);

export const primaryCheckedSwitch = () => (
  <Switch color="primary" label="Switch Label" checked />
);

export const secondarySwitch = () => (
  <Switch color="secondary" label="Switch Label" onChange={action('Switch clicked')} />
);

export const smallSwitch = () => (
  <Switch size="small" label="Switch Label" onChange={action('Switch clicked')} />
);

export const smallDisabledNoLabelSwitch = () => (
  <Switch size="small" disabled />
);

export const smallCheckedSwitch = () => (
  <Switch size="small" label="Switch Label" checked onChange={action('Switch clicked')} />
);

export const smallPrimarySwitch = () => (
  <Switch size="small" color="primary" label="Switch Label" onChange={action('Switch clicked')} />
);

export const smallSecondarySwitch = () => (
  <Switch size="small" color="secondary" label="Switch Label" onChange={action('Switch clicked')} />
);
