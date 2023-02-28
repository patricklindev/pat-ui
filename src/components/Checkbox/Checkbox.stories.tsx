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

export const DiffColorCheckBox = () => (
  <div>
    <Checkbox
      style={checkboxStyle}
      color="primary"
      onChange={action('Primary Checkbox clicked')}
    >
      Primary color Checkbox
    </Checkbox>
    <Checkbox
      style={checkboxStyle}
      color="secondary"
      onChange={action('Secondary Checkbox clicked')}
    >
      Secondary color Checkbox
    </Checkbox>
    <Checkbox
      style={checkboxStyle}
      color="danger"
      onChange={action('Danger Checkbox clicked')}
    >
      Danger color Checkbox
    </Checkbox>
    <Checkbox
      style={checkboxStyle}
      color="info"
      onChange={action('Danger Checkbox clicked')}
    >
      Info color Checkbox
    </Checkbox>
    <Checkbox
      style={checkboxStyle}
      color="success"
      onChange={action('Danger Checkbox clicked')}
    >
      Success color Checkbox
    </Checkbox>
    <Checkbox
      style={checkboxStyle}
      color="warning"
      onChange={action('Danger Checkbox clicked')}
    >
      Warning color Checkbox
    </Checkbox>
  </div>
);
