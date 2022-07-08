import React from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

export const BasicCheckBox = () => {
  return (
    <div className="checkboxes">
      <Checkbox label="Default Checked" defaultChecked />
      <Checkbox label="Default" />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled Checked" disabled checked />
    </div>
  );
};
