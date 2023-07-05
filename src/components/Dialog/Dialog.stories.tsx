import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import Dialog from './index';
import useHandelClose from '../../utils/hooks/useHandelClose';
import DialogAction from './DialogAction';
export default {
  title: 'Dialog',
  component: Dialog,
  args: {
    isOpen: true,
  },
};

export const DefaultDialog = () => (
  <Dialog triggerTitle="show Dialog" onClose={action('dialog closed')}>
    <Dialog.Title title="simple dialog"></Dialog.Title>
    <Dialog.Content contentMessage="this is the content message"></Dialog.Content>
    <Dialog.Action></Dialog.Action>
  </Dialog>
);

export const AllertDialog = () => (
  <Dialog triggerTitle="show dialog with child">
    <Dialog.Title title="dialog title"></Dialog.Title>
    <Dialog.Content contentMessage="this is content message">
      <div> this is children in dialog content</div>
    </Dialog.Content>
    <Dialog.Action></Dialog.Action>
  </Dialog>
);

export const FormDialog = () => {
  // const [{ isOpen } , updateArgs] = useArgs()
  // const handelClose = () => {
  //   action('cancel action');
  //   updateArgs({isOpen: false});
  //   console.log({isOpen});
  // }
  // return (
  //   <Dialog
  //     dialogType="simple"
  //     triggerTitle="show Dialog"
  //     isOpen={isOpen}
  //   >
  //     <Dialog.Title title="simple dialog"></Dialog.Title>
  //     <Dialog.Content contentMessage="this is the content message"></Dialog.Content>
  //     <Dialog.Action onCancel={()=>handelClose()}></Dialog.Action>
  //   </Dialog>
  // );
};

export const DialogCss = () => (
  <Dialog dialogTheme="dark">
    <Dialog.Title title="dialog title test"></Dialog.Title>
    <Dialog.Content contentMessage="dialog content message "></Dialog.Content>
    <DialogAction></DialogAction>
  </Dialog>
);

export const SmallDialog = () => (
  <Dialog dialogTheme="dark" dialogSize='sm'>
    <Dialog.Title title="dialog title test"></Dialog.Title>
    <Dialog.Content contentMessage="dialog content message "></Dialog.Content>
    <DialogAction></DialogAction>
  </Dialog>
);

export const LargeDialog = () => (
  <Dialog dialogTheme="light" dialogSize='lg'>
    <Dialog.Title title="dialog title test"></Dialog.Title>
    <Dialog.Content contentMessage="dialog content message "></Dialog.Content>
    <DialogAction></DialogAction>
  </Dialog>
);

