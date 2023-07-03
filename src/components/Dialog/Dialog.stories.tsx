import React, { useState } from 'react';
import Dialog from './Dialog';
import Button from '../Button/Button';

export default {
  title: 'Dialog',
  component: Dialog,
};

export const DefaultDialog = () => (
  <Dialog dialogType="simple" dialogTitle="Simple Dialog" onClose={()=> console.log('dialog closed')}></Dialog>
);

export const AllertDialog = () => <Dialog></Dialog>;

export const FormDialog = () => <Dialog></Dialog>;
