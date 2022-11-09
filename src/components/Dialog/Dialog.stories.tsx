import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogList,
  DialogTitle,
  DialogListItem,
  DialogListItemAvatar,
  DialogListItemText,
} from './Dialog';
import React from 'react';
import { DialogProps } from './Dialog';
import Button from '../Button';
import Input from '../Input';
import Message from '../Message';
import Icon from '../Icon';
import { action } from '@storybook/addon-actions';
import { useState } from 'react';

export default {
  title: 'Dialog',
  component: Dialog,
};

const emails = ['username@gmail.com', 'user02@gmail.com'];

/**
 *
 * @returns A dialog component with a list of clickable items
 */
export const Simple = () => {
  //Controlling the open and close of the dialog
  const [open, setOpen] = useState(true);
  const setModalOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* A button to open back the dialog when closed */}
      <Button btnSize="sm" btnType="primary" onClick={setModalOpen}>
        Toggle Dialog
      </Button>

      <Dialog
        onClose={action('Dialog closed')}
        open={open}
        setModalOpen={setModalOpen}
      >
        <DialogTitle>Set backup account</DialogTitle>
        <DialogList>
          {emails.map((email) => (
            <DialogListItem key={email} handler={action('Account clicked')}>
              <DialogListItemAvatar>
                <Icon color="blue" name="heart" />
              </DialogListItemAvatar>
              <DialogListItemText>{email}</DialogListItemText>
            </DialogListItem>
          ))}
          <DialogListItem handler={action('Add button clicked')}>
            <DialogListItemAvatar>
              <Icon color="grey" name="plus" />
            </DialogListItemAvatar>
            <DialogListItemText>Add account</DialogListItemText>
          </DialogListItem>
        </DialogList>
      </Dialog>
    </>
  );
};

/**
 *
 * @returns A dialog component which has a text description and two action buttons
 */
export const Alerts = () => {
  //Controlling the open and close of the dialog
  const [open, setOpen] = useState(true);
  const setModalOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* A button to open back the dialog when closed */}
      <Button btnSize="sm" btnType="primary" onClick={setModalOpen}>
        Toggle Dialog
      </Button>
      <Dialog
        onClose={action('Dialog closed')}
        open={open}
        setModalOpen={setModalOpen}
      >
        <DialogTitle>Use Google's location service?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            btnSize="sm"
            btnType="default"
            onClick={action('Disagree button clicked')}
          >
            DISAGREE
          </Button>
          <Button
            btnSize="sm"
            btnType="default"
            onClick={action('Agree button clicked')}
          >
            AGREE
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

/**
 *
 * @returns A dialog component which has a text description, an input, and two action buttons
 */
export const Form = () => {
  //Controlling the open and close of the dialog
  const [open, setOpen] = useState(true);
  const setModalOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* A button to open back the dialog when closed */}
      <Button btnSize="sm" btnType="primary" onClick={setModalOpen}>
        Toggle Dialog
      </Button>

      <Dialog
        onClose={action('Dialog closed')}
        open={open}
        setModalOpen={setModalOpen}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <Input fluid placeholder="Search..." inputSize="small" />
        </DialogContent>
        <DialogActions>
          <Button
            btnSize="sm"
            btnType="default"
            onClick={action('Cancel button clicked')}
          >
            CANCEL
          </Button>
          <Button
            btnSize="sm"
            btnType="default"
            onClick={action('Subscribe button clicked')}
          >
            SUBSCRIBE
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
