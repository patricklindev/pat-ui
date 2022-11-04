import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { Dialog, DialogActions } from './Dialogue';
import { Button } from '../../index';

import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { blue } from '@mui/material/colors';
import TextField from '@mui/material/TextField';

export default {
  title: 'Dialogue',
  component: Dialog,
};

export const BasicDialogue = () => {
  const emails = ['username@gmail.com', 'user02@gmail.com'];

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = (e: React.MouseEvent) => {
    setOpen(true);
    action('Dialog window opened!')(e);
  };

  const handleClose = (e: string | React.MouseEvent) => {
    setOpen(false);
    if (typeof e === 'string') setSelectedValue(e);
    action('Dialog window closed!')(e);
  };

  return (
    <div>
      <p style={{ marginBottom: '0.5rem' }}>Selected: {selectedValue}</p>
      <Button btnType="default" onClick={handleClickOpen}>
        OPEN SIMPLE DIALOG
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        dialogTitle={'Set backup account'}
      >
        <List sx={{ pt: 0 }}>
          {emails.map((email) => (
            <ListItem button onClick={() => handleClose(email)} key={email}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
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
    action('Dialog window opened!')(e);
  };

  const handleClose = (e: React.MouseEvent) => {
    setOpen(false);
    action('Dialog window closed!')(e);
  };
  return (
    <div>
      <Button btnType="default" onClick={handleClickOpen}>
        OPEN ALERT DIALOG
      </Button>
      <Dialog
        dialogType="alert"
        open={open}
        onClose={handleClose}
        dialogTitle={"Use Google's location service?"}
        dialogContent="Let Google help apps determine location. 
        This means sending anonymous location data to Google, even when no apps are running."
      >
        <DialogActions>
          <Button btnSize="sm" onClick={handleClose}>
            Disagree
          </Button>
          <Button btnSize="sm" onClick={handleClose} autoFocus>
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
    action('Dialog window opened!')(e);
  };

  const handleClose = (e: React.MouseEvent) => {
    setOpen(false);
    action('Dialog window closed!')(e);
  };
  return (
    <div>
      <Button btnType="default" onClick={handleClickOpen}>
        OPEN FORM DIALOG
      </Button>
      <Dialog
        dialogType="alert"
        open={open}
        onClose={handleClose}
        // aria-labelledby="alert-dialog-title"
        // aria-describedby="alert-dialog-description"
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
          <Button btnSize="sm" onClick={handleClose}>
            Cancel
          </Button>
          <Button btnSize="sm" onClick={handleClose}>
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

// export const DefaultCard = () => (
//   <div>
//     <Card
//       btnOnClick={action('Default Button clicked')}
//       cardImgSrc={'https://via.placeholder.com/150'}
//       cardParagraph={
//         <div>
//           <Icon disabled={false} loading={false} name="home" size="tiny" />{' '}
//           <span>
//             You can put any ReactNode including ReactElement, ReactFragment,
//             string, number, array of ReactNodes, null, undefined, boolean in the
//             card content{' '}
//           </span>
//         </div>
//       }
//       cardTitle={'Default Card'}
//       buttonTitle={'show more info'}
//     ></Card>
//   </div>
// );
