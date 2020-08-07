import React from 'react';
import {action} from '@storybook/addon-actions';
import Dropdown from './Dropdown';

export default {
  title: 'Dropdown',
  component: Dropdown,
};

export const DefaultDropdown = () => (
  <div>
    <Dropdown onChange={action('selected')} placeholder='select a framework'>
      <Dropdown.Item>Spark</Dropdown.Item>
      <Dropdown.Item>Kafka</Dropdown.Item>
      <Dropdown.Item>Flink</Dropdown.Item>
      <Dropdown.Item>Storm</Dropdown.Item>
    </Dropdown>
  </div>
);

export const DisabledDropdown = () => (
  <div>
    <Dropdown disabled onChange={action('selected')} placeholder='this is a disabled dropdown'>
      <Dropdown.Item>Java</Dropdown.Item>
      <Dropdown.Item>Go</Dropdown.Item>
      <Dropdown.Item>Ruby</Dropdown.Item>
    </Dropdown>
  </div>
);

