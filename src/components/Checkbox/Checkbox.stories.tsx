import React from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

export const BasicCheckbox = () => (
  <div className="checkboxes">
    <Checkbox label="Default Checked" defaultChecked />
    <Checkbox label="Default" />
    <Checkbox label="Disabled" disabled />
    <Checkbox label="Disabled Checked" disabled checked />
  </div>
);

export const DiffSizeCheckbox = () => (
  <div className="checkboxes">
    <Checkbox label="Small" size="small" defaultChecked />
    <Checkbox label="Default" defaultChecked />
    <Checkbox label="Large" size="large" defaultChecked />
  </div>
);

export const DiffColorCheckbox = () => (
  <div className="checkboxes">
    <Checkbox label="Primary" defaultChecked />
    <Checkbox label="Secondary" color="secondary" defaultChecked />
    <Checkbox label="Success" color="success" defaultChecked />
    <Checkbox label="Default" color="default" defaultChecked />
  </div>
);
