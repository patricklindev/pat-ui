import React from 'react';
import { action } from '@storybook/addon-actions';
import Checkbox from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

const chekcboxStyle: React.CSSProperties = {
  marginRight: '5px',
  marginTop: '5px',
};

export const DefaultCheckbox = () => (
  <div>
    <h3>Default Checkbox</h3>
    <Checkbox />
  </div>
);

export const DiffSizeCheckbox = () => (
  <div>
    <div>
      <h3>Small Size of Checkbox</h3>
      <Checkbox
        style={chekcboxStyle}
        checkboxSize="sm"
        onClick={action('Small Checkbox clicked')}
      />
    </div>

    <div>
      <h3>Large Size of Checkbox</h3>
      <Checkbox
        style={chekcboxStyle}
        checkboxSize="lg"
        onClick={action('Large Checkbox clicked')}
      />
    </div>
  </div>
);

export const DiffTypeCheckbox = () => (
  <div>
    <div>
      <h3>Primary Type of Checkbox</h3>
      <Checkbox
        style={chekcboxStyle}
        checkboxType="primary"
        onClick={action('Primary Checkbox clicked')}
      />
    </div>
    <div>
      <Checkbox
        style={chekcboxStyle}
        checkboxType="primary"
        checkboxSize="lg"
        onClick={action('Primary Large Checkbox clicked')}
      />
    </div>
    <div>
      <h3>Default Type of Checkbox</h3>
      <Checkbox
        style={chekcboxStyle}
        checkboxType="default"
        onClick={action('Default Checkbox clicked')}
      />
    </div>
    <div>
      <Checkbox
        style={chekcboxStyle}
        checkboxType="default"
        checkboxSize="lg"
        onClick={action('Default Large Checkbox clicked')}
      />
    </div>
    <div>
      <h3>Secondary Type of Checkbox</h3>
      <Checkbox
        style={chekcboxStyle}
        checkboxType="secondary"
        onClick={action('Secondary Checkbox clicked')}
      />
    </div>
    <div>
      <Checkbox
        style={chekcboxStyle}
        checkboxType="secondary"
        checkboxSize="lg"
        onClick={action('Secondary Large Checkbox clicked')}
      />
    </div>
  </div>
);

export const DiffShapeCheckbox = () => (
  <div>
    <div>
      <h3>Square Shape of Checkbox</h3>
      <Checkbox checkboxShape="square" checkboxSize="lg" />
    </div>
    <div>
      <h3>Circle Shape of Checkbox</h3>
      <Checkbox checkboxShape="circle" checkboxSize="lg" />
    </div>
  </div>
);
