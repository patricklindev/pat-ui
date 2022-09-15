import React from 'react';
import { action } from '@storybook/addon-actions';
import Dialog from './index';
export default {
    title: 'Dialog',
    component: Dialog,
  };
export const SampleDialog = () => (
    <div>
        <Dialog open={true}> </Dialog>
    </div>
);