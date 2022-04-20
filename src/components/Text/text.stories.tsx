import React from 'react';
import Text from './Text';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Text',
  component: Text,
};

export const DefaultText = () => <Text />;
export const DefaultDanger = () => <Text error={true} />;
