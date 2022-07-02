import React from 'react';
import { action } from '@storybook/addon-actions';
import Checkbox from './Checkbox';


export default {
  title: 'Checkbox',
  component: Checkbox,
};

export const BasicCheckboxes = () => (
  <div className='basicCheckboxWrapper'>
      <Checkbox />
      <br />
      <Checkbox checked/>
      <br />
      <Checkbox checkboxSize='large'/>
  </div>
);

export const DiffThemeCheckbox = () => (
  <div>
    <Checkbox>DiffCheckbox</Checkbox>
  </div>
);


export const OtherDiffCheckbox = () => (
  <div>
    <Checkbox>DiffCheckbox</Checkbox>
  </div>
);