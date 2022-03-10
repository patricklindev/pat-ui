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
    <Checkbox checkSize="small" />
    <Checkbox checkSize="medium" />
  </div>
);

export const DiffColorCheckbox = () => (
  <div>
    <Checkbox checkColor="primary" />
    <Checkbox checkColor="secondary" />
    <Checkbox checkColor="default" />
  </div>
);

export const DiffIconCheckbox = () => (
  <div>
    <Checkbox icon="checkbox" />
    <Checkbox icon="heart" />
    <Checkbox icon="bookmark" />
  </div>
);

export const CheckboxWithLabel = () => (
  <div>
    <Checkbox label="checkbox" />
  </div>
);

export const CheckboxWithOnChange = () => (
  <div>
    <Checkbox onChange={action('checked')} />
  </div>
);

export const CheckboxWithCheckedTrue = () => (
  <div>
    <Checkbox isChecked={true} />
  </div>
);
