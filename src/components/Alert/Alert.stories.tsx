import React from 'react';
import { action } from '@storybook/addon-actions';
import Alert from './Alert';

export default {
  title: 'Alert',
  component: Alert,
};

export const DiffTypeAlert = () => {
  <div>
    <Alert
      atType='standard'
    >
      Standard Alert
    </Alert>
  </div>
}