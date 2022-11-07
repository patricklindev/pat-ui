import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { Dialog, DialogActions } from './Dialog';
import { Button, Icon } from '../../index';
// sub elements used for stories, import from MUI
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import { blue } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

export default {
  title: 'Dialog',
  component: Dialog,
};

export const BasicDialogue = () => {
  const emails = ['username@gmail.com', 'user02@gmail.com'];

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[0]);

  const handleClickOpen = (e: React.MouseEvent) => {
    setOpen(true);
    action('Dialog window opened')(e);
  };

  const handleClose = (e: string | React.MouseEvent) => {
    setOpen(false);
    if (typeof e === 'string') setSelectedValue(e);
    action('Dialog window closed')(e);
  };

  return (
    <div className="display-container">
      <p style={{ marginBottom: '0.5rem' }}>Selected: {selectedValue}</p>
      <Button btnSize="sm" onClick={handleClickOpen}>
        OPEN SIMPLE DIALOG
      </Button>
      <Dialog
        dialogType="basic"
        open={open}
        onClose={handleClose}
        dialogTitle={'Set backup account'}
      >
        <List>
          {emails.map((email) => (
            <ListItem button onClick={() => handleClose(email)} key={email}>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: blue[100], color: blue[600] }}
                >
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={email} />
            </ListItem>
          ))}

          <ListItem autoFocus button onClick={() => handleClose('addAccount')}>
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

export const AlertDialogue = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (e: React.MouseEvent) => {
    setOpen(true);
    action('Dialog window opened')(e);
  };

  const handleClose = (e: React.MouseEvent) => {
    setOpen(false);
    action('Dialog window closed')(e);
  };
  return (
    <div className="display-container">
      <Button onClick={handleClickOpen}>OPEN ALERT DIALOG</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        dialogTitle={"Use Google's location service?"}
        dialogContent="Let Google help apps determine location. 
        This means sending anonymous location data to Google, even when no apps are running."
      >
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export const FormDialogue = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (e: React.MouseEvent) => {
    setOpen(true);
    action('Dialog window opened')(e);
  };

  const handleClose = (e: React.MouseEvent | string) => {
    setOpen(false);
    action('Dialog window closed')(e);
  };
  return (
    <div className="display-container">
      <Button onClick={handleClickOpen}>OPEN FORM DIALOG</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        dialogTitle={'Subscribe'}
        dialogContent="To subscribe to this website, please enter your email address here. We
        will send updates occasionally."
      >
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
        <DialogActions>
          <Button onClick={() => handleClose('cancel')}>Cancel</Button>
          <Button onClick={() => handleClose('subscribe')}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export const FullScreenDialogue = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (e: React.MouseEvent) => {
    setOpen(true);
    action('Dialog window opened')(e);
  };

  const handleClose = (e: React.MouseEvent | string) => {
    setOpen(false);
    action('Dialog window closed')(e);
  };
  return (
    <div className="display-container">
      <Button onClick={handleClickOpen}>OPEN FULL-SCREEN DIALOG</Button>
      <Dialog dialogType="full-screen" open={open} onClose={handleClose}>
        <Toolbar style={{ backgroundColor: 'lightgrey' }}>
          <Button btnType="link" onClick={() => handleClose('close')}>
            <Icon disabled={false} loading={false} name="times" />
          </Button>
          <Typography style={{ flex: 1 }} variant="h6" component="div">
            Sound
          </Typography>
          <Button btnType="secondary" onClick={() => handleClose('save')}>
            Save
          </Button>
        </Toolbar>
        <List onClick={action('Clicked an item')}>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
};
