import { action } from '@storybook/addon-actions';
import React from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

const checkboxStyle: React.CSSProperties = {
  marginRight: '10px',
  marginTop: '10px',
};

export const DefaultCheckbox = () => <Checkbox>Default Checkbox</Checkbox>;

export const DiffSizeCheckBox = () => (
  <div>
    <Checkbox
      style={checkboxStyle}
      size="sm"
      onChange={action('Small Checkbox clicked')}
    >
      Small Checkbox
    </Checkbox>
    <Checkbox
      style={checkboxStyle}
      onChange={action('Default Checkbox clicked')}
    >
      Default(medium) Checkbox
    </Checkbox>
    <Checkbox
      style={checkboxStyle}
      size="lg"
      onChange={action('Small Checkbox clicked')}
    >
      Large Checkbox
    </Checkbox>
  </div>
);
