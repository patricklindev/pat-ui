import React from 'react';
import { action } from '@storybook/addon-actions';
import Text from './Text';

export default {
  title: 'Text',
  component: Text,
};
export const DefaultText = () => (
  <div>
    <Text invalid={false}></Text>
    <Text invalid={false} placeholder="Placeholder"></Text>
    <Text invalid={false} value="Input"></Text>
  </div>
);
export const ErrorText = () => (
  <div>
    <Text invalid={true}></Text>
    <Text invalid={true} placeholder="Placeholder"></Text>
    <Text invalid={true} value="Input"></Text>
  </div>
);
