import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import Dialog from './index';
import Input from '../Input';
export default {
  title: 'Dialog',
  component: Dialog,
  // args: {
  //   isOpen: true,
  // },
};

const emails = ['username@gmail.com', 'user02@gmail.com'];

export const DefaultDialog = () => (
  <Dialog triggerTitle="show Dialog" onClose={action('dialog closed')}>
    <Dialog.Title title="simple dialog"></Dialog.Title>
    {/* <Dialog.Content contentMessage="this is the content message"></Dialog.Content> */}
    <ul>
      {emails.map((email) => (
        <li>{email}</li>
      ))}
    </ul>
  </Dialog>
);

export const AlertDialog = () => (
  <Dialog triggerTitle="show alert dialog" dialogSize='md' onClose={action('alert Dialog closed')}>
    <Dialog.Title>Use Google's location service?</Dialog.Title>
    <Dialog.Content contentMessage="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. Dolor sit amet consectetur adipiscing elit ut aliquam.">
      Let Google help apps determine location. This means sending anonymous
      location data to Google, even when no apps are running.
    </Dialog.Content>
    <Dialog.Action
      cancelBtnTitle="Disagree"
      submitBtnTitle="Agree"
    ></Dialog.Action>
  </Dialog>
);

export const FormDialog = () => (
  <Dialog triggerTitle="show alert dialog" dialogSize='lg' onClose={action('form dialog closed')}>
    <Dialog.Title>{'Subscribe'}</Dialog.Title>
    <Dialog.Content>
      <p>
        To subscribe to this website, please enter your email address here. We
        will send updates occasionally.
      </p>
      <Input
        placeholder={'Email Address'}
        onChange={(event) => action(event.target.value)(event)}
      ></Input>
    </Dialog.Content>
    <Dialog.Action></Dialog.Action>
  </Dialog>
);

export const DialogTheme = () => (
  <div>
    <Dialog dialogTheme="dark" triggerTitle="Show Dark Theme">
      <Dialog.Title title="Dialog Dark Theme"></Dialog.Title>
      <Dialog.Content contentMessage="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. Dolor sit amet consectetur adipiscing elit ut aliquam."></Dialog.Content>
      <Dialog.Action></Dialog.Action>
    </Dialog>
    <br />
    <br />
    <Dialog dialogTheme="light" dialogSize='md' triggerTitle="show light them">
      <Dialog.Title title="Dialog light Theme"></Dialog.Title>
      <Dialog.Content contentMessage="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. Dolor sit amet consectetur adipiscing elit ut aliquam."></Dialog.Content>
      <Dialog.Action></Dialog.Action>
    </Dialog>
  </div>
);

export const DiffSizeDialog = () => (
  <div>
    <Dialog
      dialogTheme="light"
      dialogSize="sm"
      triggerTitle="Show small dialog"
    >
      <Dialog.Title title="Small dialog title"></Dialog.Title>
      <Dialog.Content contentMessage="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. Dolor sit amet consectetur adipiscing elit ut aliquam. "></Dialog.Content>
      <Dialog.Action
        showCancelBtn={false}
        showSubmitBtn={false}
      ></Dialog.Action>
    </Dialog>
    <br />
    <br />

    <Dialog
      dialogTheme="dark"
      dialogSize="md"
      triggerTitle="Show medium dialog"
    >
      <Dialog.Title title="medium dialog title"></Dialog.Title>
      <Dialog.Content contentMessage="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. Dolor sit amet consectetur adipiscing elit ut aliquam."></Dialog.Content>
      <Dialog.Action></Dialog.Action>
    </Dialog>
    <br />
    <br />

    <Dialog
      dialogTheme="light"
      dialogSize="lg"
      triggerTitle="Show large dialog"
    >
      <Dialog.Title title="Large dialog title"></Dialog.Title>
      <Dialog.Content contentMessage="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. Dolor sit amet consectetur adipiscing elit ut aliquam. "></Dialog.Content>
      <Dialog.Action></Dialog.Action>
    </Dialog>
    <br />
    <br />
  </div>
);
