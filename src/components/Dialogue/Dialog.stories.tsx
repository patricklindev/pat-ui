import React from 'react';
import { action } from '@storybook/addon-actions';
import Dialog from './Dialog';

export default {
  title: 'Dialogue',
  component: Dialog,
};

const buttonStyle: React.CSSProperties = {
  marginRight: '5px',
  marginTop: '5px',
};

export const SimpleDialog = () => (
  <>
    <button>Open Dialog</button>
    <Dialog>
      <div>Simple Dialog</div>
    </Dialog>
  </>
);

export const AlertDialog = () => (
  <Dialog>
    <div>Alert Dialog</div>
  </Dialog>
);

export const FormDialog = () => (
  <Dialog>
    <div>Form Dialog</div>
  </Dialog>
);
