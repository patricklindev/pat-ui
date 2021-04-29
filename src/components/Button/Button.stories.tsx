import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const buttonStyle: React.CSSProperties = {
  marginRight: '5px',
  marginTop: '5px',
};

export const DefaultButton = () => (
  <Button onClick={action('Default Button clicked')}>Default Button</Button>
);

export const DiffSizeButton = () => (
  <div>
    <Button
      style={buttonStyle}
      btnSize='sm'
      onClick={action('Small Button clicked')}
    >
      Small Button
    </Button>
    <Button style={buttonStyle} onClick={action('Default Button clicked')}>
      Default Button
    </Button>

    <Button btnSize='lg' onClick={action('Large Button clicked')}>
      Large Button
    </Button>
  </div>
);

export const DiffTypeButton = () => (
  <div>
    <Button
      style={buttonStyle}
      btnType='primary'
      onClick={action('Primary Button clicked')}
    >
      Primary Button
    </Button>
    <Button
      style={buttonStyle}
      btnType='secondary'
      onClick={action('Secondary Button clicked')}
    >
      Secondary Button
    </Button>
    <Button
      style={buttonStyle}
      btnType='danger'
      onClick={action('Danger Button clicked')}
    >
      Danger Button
    </Button>
    <Button
      style={buttonStyle}
      btnType='default'
      onClick={action('Default Button clicked')}
    >
      Default Button
    </Button>
    <Button
      style={buttonStyle}
      disabled
      btnType='default'
      onClick={action('DisabledDefault Button clicked should not work')}
    >
      Disabled Default Button
    </Button>
    <Button
      style={buttonStyle}
      btnType='link'
      onClick={action('Link Button clicked')}
    >
      Link Button
    </Button>
    <Button
      disabled
      btnType='link'
      onClick={action('Disabled Link Button clicked should not work')}
    >
      Disabled Link Button
    </Button>
  </div>
);