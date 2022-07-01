import React from 'react';
import { action } from '@storybook/addon-actions';
import Checkbox from './Checkbox';


export default {
  title: 'Checkbox',
  component: Checkbox,
};


export const BasicCheckboxes = () => (
  <div className='basicCheckboxWrapper'>
      <Checkbox 
      checkboxSize="normal" />
      <Checkbox checked checkboxSize="normal" />
      <Checkbox 
      checkboxSize="large" />
      <Checkbox checked checkboxSize="large" />
      <Checkbox 
      checkboxSize="ex-larger"/>
      <Checkbox checked checkboxSize="ex-larger"/>
  </div>
);


export const DiffCheckbox = () => (
  <div>
    <Checkbox>DiffCheckbox</Checkbox>
  </div>
);


export const OtherDiffCheckbox = () => (
  <div>
    <Checkbox>DiffCheckbox</Checkbox>
  </div>
);