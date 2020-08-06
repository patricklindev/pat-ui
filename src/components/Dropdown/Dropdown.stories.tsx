import React from 'react';
import {action} from '@storybook/addon-actions';
import Dropdown from './Dropdown';

export default {
  title: 'Dropdown',
  component: Dropdown,
};

export const DefaultDropdown = () => (
  <div>
    <Dropdown onChange={action('selected')} placeholder='Select a type'>
      <Dropdown.Item>Sedan</Dropdown.Item>
      <Dropdown.Item>SUV</Dropdown.Item>
      <Dropdown.Item>Convertible</Dropdown.Item>
    </Dropdown>
  </div>
);

export const DisabledDropdown = () => (
  <div>
    <Dropdown disabled onChange={action('selected')} placeholder='Select a type'>
      <Dropdown.Item>Sedan</Dropdown.Item>
      <Dropdown.Item>SUV</Dropdown.Item>
      <Dropdown.Item>Convertible</Dropdown.Item>
    </Dropdown>
  </div>
);

