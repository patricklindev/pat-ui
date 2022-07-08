import React from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

export const BasicCheckBox = () => {
  return (
    <div className="checkboxes">
      <Checkbox defaultChecked />
      <Checkbox />
      <Checkbox disabled />
      <Checkbox disabled checked />
    </div>
  );
};
