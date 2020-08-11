import React from 'react';
import { action } from '@storybook/addon-actions';
import Dropdown from './index';
import Icon from '../Icon';

export default {
  title: 'Dropdown',
  component: Dropdown,
};

export const DefaultDropdown = () => (
  <div>
    <Dropdown onChange={action('selected')} placeholder="select a framework">
      <Dropdown.Option value="spark">Spark</Dropdown.Option>
      <Dropdown.Option value="kafka">Kafka</Dropdown.Option>
      <Dropdown.Option value="flink">Flink</Dropdown.Option>
      <Dropdown.Option value="storm">Storm</Dropdown.Option>
    </Dropdown>
  </div>
);

export const DisabledDropdown = () => (
  <div>
    <Dropdown
      disabled
      onChange={action('selected')}
      placeholder="this is a disabled dropdown"
    >
      <Dropdown.Option value="java">Java</Dropdown.Option>
      <Dropdown.Option value="go">Go</Dropdown.Option>
      <Dropdown.Option value="ruby">Ruby</Dropdown.Option>
    </Dropdown>
  </div>
);

export const DropdownWithActive = () => (
  <div>
    <Dropdown onChange={action('selected')} placeholder="this is a dropdown">
      <Dropdown.Option value="java" active>
        Java
      </Dropdown.Option>
      <Dropdown.Option value="go">Go</Dropdown.Option>
      <Dropdown.Option value="ruby">Ruby</Dropdown.Option>
    </Dropdown>
  </div>
);

export const DropdownWithIcon = () => (
  <div>
    <Dropdown onChange={action('selected')} placeholder="this is a dropdown">
      <Dropdown.Option value="java" active>
        <Icon name="home" size="small" />
        Java
      </Dropdown.Option>
      <Dropdown.Option value="go">Go</Dropdown.Option>
      <Dropdown.Option value="ruby">Ruby</Dropdown.Option>
    </Dropdown>
  </div>
);
