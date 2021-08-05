import React from 'react';
import { action } from '@storybook/addon-actions';
import Alert from './Alert';

export default {
    title: 'Alert',
    component: Alert,
  };

export const DefaultAlert = () => (
    <Alert>Default Alert-Check it out</Alert>
)

export const AlertSizes = () => (
    <div>
      <Alert alertSize="sm">Small Default Alert-Check it out</Alert>
      <Alert>Default Alert-Check it out</Alert>
      <Alert alertSize="lg">Large Default Alert-Check it out</Alert>
    </div>
)

export const AlertTypes = () => (
    <div>
      <Alert alertType="default">Default Alert-Check it out</Alert>
      <Alert alertType="primary">Primary  Alert-Check it out</Alert>
      <Alert alertType="secondary">Secondary  Alert-Check it out</Alert>
      <Alert alertType="danger">Danger  Alert-Check it out</Alert>
      <Alert alertType="warning">Warning  Alert-Check it out</Alert>
      <Alert alertType="info">Info  Alert-Check it out</Alert>
      <Alert alertType="success">Success  Alert-Check it out</Alert>
    </div>
)