import React, { useState, useCallback } from 'react';
import { action } from '@storybook/addon-actions';
import Dialog from './index';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { blue } from '@mui/material/colors';
import Input from '../Input';
import Button from '../Button';

export default {
  title: 'Dialog',
  component: Dialog,
};

const emails = ['username@gmail.com', 'user02@gmail.com'];

const buttonStyle: React.CSSProperties = {
  marginRight: '5px',
  marginTop: '5px',
};

export const SimpleDialogWithChildrenAndDraggable = () => {
  // The actions addon is used to display data received by event handler (callback) arguments in your stories.
  // lines: 25-32 provided by the user to control the dialog
  const [showModal, setModalState] = useState(false);
  const handleOpen = useCallback(() => {
    setModalState((prevState) => !prevState);
  }, []);
  const handleClose = (inputValue: string) => {
    action(inputValue);
    setModalState(false);
  };

  return (
    <>
      <Button style={buttonStyle} btnSize="sm" onClick={handleOpen}>
        click here for button
      </Button>

      <Dialog open={showModal} onClose={handleClose} draggable>
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
    </>
  );
};

export const AlertDialog = () => {
  const [showModal, setModalState] = useState(false);
  const handleOpen = useCallback(() => {
    setModalState((prevState) => !prevState);
  }, []);
  const handleClose = (inputValue?: string) => {
    setModalState(false);
  };

  return (
    <div>
      <button
        className={`${showModal ? 'blur' : ''}`}
        onClick={() => {
          //   action('button clicked');
          handleOpen();
        }}
      >
        Click here for Dialog
      </button>
      <Dialog open={showModal} onClose={handleClose}>
        <h5 className="title">Use Google's location service?</h5>
        <p className="modal__paragraph">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </p>
        <section className="modal-button__section">
          <button
            className="modal-button"
            onClick={() => {
              setModalState(false);
            }}
          >
            Cancel
          </button>
          <button className="modal-button" onClick={action('subscribed')}>
            Subscribe
          </button>
        </section>
      </Dialog>
    </div>
  );
};

export const SubscribeDialog = () => {
  const [showModal, setModalState] = useState(false);
  const handleOpen = useCallback(() => {
    setModalState((prevState) => !prevState);
  }, []);
  const handleClose = (inputValue?: string) => {
    setModalState(false);
  };
  const [email, setEmail] = useState<string>('');

  return (
    <div>
      <button
        className={`${showModal ? 'blur' : ''}`}
        onClick={() => {
          //   action('button clicked');
          handleOpen();
        }}
      >
        Click here for Dialog
      </button>
      <Dialog open={showModal} onClose={handleClose}>
        <h5 className="title">Subscribe</h5>
        <p className="modal__paragraph">
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally
        </p>
        <Input
          onChange={(e) => {
            setEmail(e.target.value as string);
          }}
          placeholder="Email Here ..."
        />
        <section className="modal-button__section">
          <button
            className="modal-button"
            onClick={() => {
              handleClose();
            }}
          >
            Cancel
          </button>
          <button className="modal-button" onClick={action(email as string)}>
            Subscribe
          </button>
        </section>
      </Dialog>
    </div>
  );
};

export const DialogWithFullScreen = () => {
  const [showModal, setModalState] = useState(false);
  const handleOpen = useCallback(() => {
    setModalState((prevState) => !prevState);
  }, []);
  const handleClose = (inputValue: string) => {
    action(inputValue);
    setModalState(false);
  };

  return (
    <>
      <Button style={buttonStyle} btnSize="sm" onClick={handleOpen}>
        click here for button
      </Button>

      <Dialog open={showModal} onClose={handleClose} fullScreen>
        <h5 className="title">Use Google's location service?</h5>
        <p className="modal__paragraph">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </p>
        <section className="modal-button__section">
          <button
            className="modal-button"
            onClick={() => {
              setModalState(false);
            }}
          >
            Cancel
          </button>
          <button className="modal-button" onClick={action('subscribed')}>
            Subscribe
          </button>
        </section>
      </Dialog>
    </>
  );
};

export const DialogWithCustomStyling = () => {
  const [showModal, setModalState] = useState(false);
  const handleOpen = useCallback(() => {
    setModalState((prevState) => !prevState);
  }, []);
  const handleClose = (inputValue: string) => {
    action(inputValue);
    setModalState(false);
  };

  const customStyling: React.CSSProperties = {
    backgroundColor: 'yellow',
    display: 'flex',
    justifyContent: 'flex-end',
  };

  return (
    <>
      <Button style={buttonStyle} btnSize="sm" onClick={handleOpen}>
        click here for button
      </Button>

      <Dialog open={showModal} onClose={handleClose} style={customStyling}>
        <h5 className="title">Use Google's location service?</h5>
        <p className="modal__paragraph">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </p>
        <section className="modal-button__section">
          <button
            className="modal-button"
            onClick={() => {
              setModalState(false);
            }}
          >
            Cancel
          </button>
          <button className="modal-button" onClick={action('subscribed')}>
            Subscribe
          </button>
        </section>
      </Dialog>
    </>
  );
};
