import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../Button';
import { Box } from './Box';

export default {
  title: 'Box',
  component: Box,
};

export const DefaultBox = () => (
  <Box
    className="test-default-box"
    boxType="default"
    boxInlineStyle={{ width: 300, height: 300, backgroundColor: 'teal' }}
  >
    {
      <>
        <p>This is an example of default Box with inline style and Button</p>
        <Button
          btnType="primary"
          disabled={false}
          onClick={action('Primary Button clicked')}
          style={{
            marginRight: '5px',
            marginTop: '5px',
          }}
        >
          Primary Button
        </Button>
        <Button
          btnType="secondary"
          disabled={false}
          onClick={action('Secondary Button clicked')}
          style={{
            marginRight: '5px',
            marginTop: '5px',
          }}
        >
          Secondary Button
        </Button>
      </>
    }
  </Box>
);

export const DefaultBorderBox = () => (
  <Box
    className="test-default-border-box"
    boxType="default-border"
    boxInlineStyle={{ border: '1px dashed grey' }}
  >
    {
      <>
        <p>This is a Box with dotted border and Button</p>
        <Button
          btnType="primary"
          disabled={false}
          onClick={action('Primary Button clicked')}
          style={{
            marginRight: '5px',
            marginTop: '5px',
          }}
        >
          Primary Button
        </Button>
        <Button
          btnType="secondary"
          disabled={false}
          onClick={action('Secondary Button clicked')}
          style={{
            marginRight: '5px',
            marginTop: '5px',
          }}
        >
          Secondary Button
        </Button>
      </>
    }
  </Box>
);

export const SpanRootBox = () => (
  <Box
    boxType="rootComponentWrapped"
    rootComponent="span"
    boxInlineStyle={{ backgroundColor: 'teal' }}
  >
    {
      <>
        <p>This is a Box with span as root component</p>
        <Button
          btnType="primary"
          disabled={false}
          onClick={action('Primary Button clicked')}
          style={{
            marginRight: '5px',
            marginTop: '5px',
          }}
        >
          Primary Button
        </Button>
        <Button
          btnType="secondary"
          disabled={false}
          onClick={action('Secondary Button clicked')}
          style={{
            marginRight: '5px',
            marginTop: '5px',
          }}
        >
          Secondary Button
        </Button>
      </>
    }
  </Box>
);
