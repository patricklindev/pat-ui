import React from 'react';
import { action } from '@storybook/addon-actions';
import Text from './Text';

export default {
  title: 'Text',
  component: Text,
};
export const DefaultText = () => (
  <div>
    <Text invalid={false}>With Error</Text>
    <Text invalid={false} placeholder="Placeholder">
      With Error
    </Text>
    <Text invalid={false} value="Input">
      With Error
    </Text>
  </div>
);

export const ErrortText = () => (
  <div>
    <Text invalid={true}>With Error</Text>
    <Text invalid={true} placeholder="Placeholder">
      With Error
    </Text>
    <Text invalid={true} value="Input">
      With Error
    </Text>
  </div>
);
