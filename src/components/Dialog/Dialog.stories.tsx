import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import Dialog from './index';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import TextField from '@mui/material/TextField';

export default {
  title: 'Dialog',
  component: Dialog,
};

export const SimpleDialogWithChildren = () => {
  const [showModal, setModalState] = React.useState(false);
  const toggleModal = React.useCallback(() => {
    setModalState((prevState) => !prevState);
  }, []);

  // for TESTING  ONLY
  const emails = ['username@gmail.com', 'user02@gmail.com'];
  interface SimpleDialogProps {
    open: boolean;
    selectedValue: string;
    onClose: (value: string) => void;
  }

  return (
    <div>
      <button
        className={`${showModal ? 'blur' : ''}`}
        onClick={() => {
          //   action('button clicked');
          toggleModal();
        }}
      >
        Click here for Dialog
      </button>
      <Dialog open={showModal} toggleModal={toggleModal}>
        <h5 className="title">Set backup account</h5>
        <List sx={{ pt: 0 }}>
          {emails.map((email) => (
            <ListItem button onClick={action(email)} key={email}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={email} />
            </ListItem>
          ))}
          <ListItem autoFocus button onClick={action('add account')}>
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add account" />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
};

export const AlertDialog = () => {
  const [showModal, setModalState] = React.useState(false);
  const toggleModal = React.useCallback(() => {
    setModalState((prevState) => !prevState);
  }, []);

  return (
    <div>
      <button
        className={`${showModal ? 'blur' : ''}`}
        onClick={() => {
          //   action('button clicked');
          toggleModal();
        }}
      >
        Click here for Dialog
      </button>
      <Dialog open={showModal} toggleModal={toggleModal}>
        <h5 className="title">Use Google's location service?</h5>
        <p className="modal__paragraph">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </p>
        <section className="modal-button__section">
          <button className="modal-button" onClick={toggleModal}>
            Cancel
          </button>
          <button className="modal-button"> Subscribe</button>
        </section>
      </Dialog>
    </div>
  );
};

export const SubscribeDialog = () => {
  const [showModal, setModalState] = React.useState(false);
  const toggleModal = React.useCallback(() => {
    setModalState((prevState) => !prevState);
  }, []);

  return (
    <div>
      <button
        className={`${showModal ? 'blur' : ''}`}
        onClick={() => {
          //   action('button clicked');
          toggleModal();
        }}
      >
        Click here for Dialog
      </button>
      <Dialog open={showModal} toggleModal={toggleModal}>
        <h5 className="title">Subscribe</h5>
        <p className="modal__paragraph">
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally
        </p>
        <TextField
          autoFocus
          margin="normal"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
        <section className="modal-button__section">
          <button className="modal-button" onClick={toggleModal}>
            Cancel
          </button>
          <button className="modal-button"> Subscribe</button>
        </section>
      </Dialog>
    </div>
  );
};
