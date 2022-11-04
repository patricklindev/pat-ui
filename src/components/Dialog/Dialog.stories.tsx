import Dialog from './Dialog';
import React from 'react';
import { DialogProps } from './Dialog';

export default {
  title: 'Dialog',
  component: Dialog,
};

export const Alerts = () => (
  <Dialog
    title="Use Google's location service?"
    content="Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."
    actions={[
      { text: 'AGREE', onClick: () => console.log('AGREE') },
      { text: 'DISAGREE', onClick: () => console.log('DISAGREE') },
    ]}
  ></Dialog>
);
