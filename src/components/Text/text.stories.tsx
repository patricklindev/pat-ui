import React from 'react';
import Text from './Text';

export default {
  title: 'Text',
  component: Text,
};

export const DefaultText = () => <Text />;

export const DefaultDanger = () => <Text error={true} />;
