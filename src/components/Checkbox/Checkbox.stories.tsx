import React from 'react';
import { action } from '@storybook/addon-actions';
import Checkbox from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

export const DefaultCheckbox = () => <Checkbox />;

export const DiffSizeCheckbox = () => (
  <div>
    <Checkbox />
    <Checkbox />
  </div>
);

export const DiffColorCheckbox = () => (
  <div>
    <Checkbox />
    <Checkbox />
    <Checkbox />
  </div>
);

export const DiffIconCheckbox = () => (
  <div>
    <Checkbox />
    <Checkbox />
    <Checkbox />
  </div>
);

export const CheckboxWithLabel = () => (
  <div>
    <Checkbox />
  </div>
);

export const CheckboxWithOnChange = () => (
  <div>
    <Checkbox />
  </div>
);

export const CheckboxWithCheckedTrue = () => (
  <div>
    <Checkbox />
  </div>
);
