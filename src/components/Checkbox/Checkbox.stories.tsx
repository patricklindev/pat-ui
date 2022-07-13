import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import Checkbox from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

export const DefaultCheckBox = () => {
  const [checked, setChecked] = useState(true);
  
  return (
    <div>
        <Checkbox label='Default'/>
        <Checkbox label="Disabled" disabled/>
        <Checkbox label='indeterminate' indeterminate />
        <Checkbox label="Function" onChange={action('Checkbox clicked')}/>
        <Checkbox checkedState={checked} onChange={() => setChecked(!checked)} label='two way data binding'/>
    </div>)
};

export const DiffSizeCheckbox = () => (
  <div>
    <Checkbox checkSize='md' label='medium'/>
    <Checkbox checkSize='sm' label='small'/>
  </div>
);

export const DiffTypeCheckbox = () => {

  return (
    <div>
      <Checkbox checkType='primary' label='primary' />
      <Checkbox checkType='secondary' label='secondary'/>
      <Checkbox checkType='default' label='default'/>
    </div>
  )
};

export const DiffIconCheckbox = () => {
  const [checked, setChecked] = useState(true);

  return (
    <div>
      <Checkbox icon='bookmark' />
      <Checkbox icon='bookmark' checkType='primary' checkedState={checked} onChange={() => setChecked(!checked)}/>
      <Checkbox icon='bookmark' checkType='secondary'/>
      <Checkbox icon='heart'/>
      <Checkbox icon='heart' checkSize='sm'/>
    </div>
  )
}