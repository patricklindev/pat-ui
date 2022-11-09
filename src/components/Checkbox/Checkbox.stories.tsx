import React from 'react';
import { action } from '@storybook/addon-actions';
import Checkbox from './Checkbox';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdTurnedInNot,
  MdTurnedIn,
  MdOutlineFavoriteBorder,
  MdOutlineFavorite,
} from 'react-icons/md';
export default {
  title: 'Checkbox',
  component: Checkbox,
};

export const DefaultCheckbox = () => (
  <div style={{ display: 'flex', gap: '30px' }}>
    <Checkbox />
  </div>
);

export const DisabledCheckbox = () => (
  <div style={{ display: 'flex', gap: '30px' }}>
    <Checkbox disabled color="primary" checkedIcon={<MdOutlineFavorite />} />
    <Checkbox disabled />
  </div>
);

export const DiffSizeCheckbox = () => (
  <div style={{ display: 'flex', gap: '30px' }}>
    <Checkbox size="small" label="Small size" />
    <Checkbox size="medium" label="Medium size" />
  </div>
);

export const DiffColorCheckbox = () => (
  <div style={{ display: 'flex', gap: '30px' }}>
    <Checkbox color="primary" />
    <Checkbox color="secondary" />
    <Checkbox color="default" />
  </div>
);

export const DiffIconCheckbox = () => (
  <div style={{ display: 'flex', gap: '30px' }}>
    <Checkbox />
    <Checkbox
      icon={<MdOutlineFavoriteBorder />}
      checkedIcon={<MdOutlineFavorite />}
    />
    <Checkbox icon={<MdTurnedInNot />} checkedIcon={<MdTurnedIn />} />
  </div>
);

export const CheckboxWithLabel = () => (
  <div>
    <Checkbox label="Checkbox" />
  </div>
);

export const CheckboxOnChange = () => (
  <div>
    <Checkbox onChange={action('checked')} />
  </div>
);

export const CheckboxIsChecked = () => (
  <div>
    <Checkbox checked />
  </div>
);
