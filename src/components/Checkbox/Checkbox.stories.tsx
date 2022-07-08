import React from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

export const BasicCheckbox = () => {
  return (
    <div className="checkboxes">
      <Checkbox label="Default Checked" defaultChecked />
      <Checkbox label="Default" />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled Checked" disabled checked />
    </div>
  );
};

export const DiffSizeCheckbox = () => {
  return (
    <div className="checkboxes">
      <Checkbox label="Small" size="small" defaultChecked />
      <Checkbox label="Default" defaultChecked />
      <Checkbox label="Large" size="large" defaultChecked />
    </div>
  );
};
