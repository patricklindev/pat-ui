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
      <Dropdown.Option>Spark</Dropdown.Option>
      <Dropdown.Option>Kafka</Dropdown.Option>
      <Dropdown.Option>Flink</Dropdown.Option>
      <Dropdown.Option>Storm</Dropdown.Option>
    </Dropdown>
  </div>
);

export const DisabledDropdown = () => (
  <div>
    <Dropdown disabled onChange={action('selected')} placeholder='this is a disabled dropdown'>
      <Dropdown.Option>Java</Dropdown.Option>
      <Dropdown.Option>Go</Dropdown.Option>
      <Dropdown.Option>Ruby</Dropdown.Option>
    </Dropdown>
  </div>
);

