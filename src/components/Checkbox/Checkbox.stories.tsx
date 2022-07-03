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
      <Checkbox checked />
      <br />
      <Checkbox checkboxSize='large' checkboxId={2}/>
  </div>
);

export const DiffThemeCheckbox = () => (
  <div className='diffThemeCheckboxWrapper'>
    <Checkbox checkboxColor="primary" checked />
    <Checkbox checkboxColor="secondary" checked/>
    <Checkbox checkboxColor="success" checked/>
    <Checkbox checkboxColor="info" checked/>
    <Checkbox checkboxColor="warning" checked/>
    <Checkbox checkboxColor="danger" checked/>
    <Checkbox checkboxColor="light" checked/>
    <Checkbox checkboxColor="dark" checked/>
  </div>
);


export const OtherDiffCheckbox = () => (
  <div>
    <Checkbox>DiffCheckbox</Checkbox>
  </div>
);