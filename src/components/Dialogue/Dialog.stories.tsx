import React, { useState} from 'react';
import { action } from '@storybook/addon-actions';
import Dialog from './Dialog';
import DialogTitle from './DialogTitle';
import DialogContent from './DialogContent';
import DialogContentText from './DialogContentText';
import DialogActions from './DialogActions';
import Icon from '../Icon';
import Button from '../Button';
import Input from '../Input';
import { DialogCloseReason } from './Dialog';
export default {
  title: 'Dialogue',
  component: Dialog,
};
interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}
function SimpleDialogBody(props: SimpleDialogProps) {
  const { onClose, open, selectedValue } = props;
  const emails = ['username@gmail.com', 'user02@gmail.com'];
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open} className="dialog">
      <DialogTitle>Set backup account</DialogTitle>
      <div>
      {emails.map((email) =>
          <div>
          <Icon name='plus' size='small' />
          <div>{email}</div>
          </div>)}
        <div>Add Account</div>  
      </div>
    </Dialog>
  );
}
export const SimpleDialog = ()=>{
  const emails = ['username@gmail.com', 'user02@gmail.com'];
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(emails[1]);
   const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };
  return (
    <>
      <Button onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <SimpleDialogBody
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </>
    )
}

export const AlertDialog = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    action('opening dialog box!')();
    setOpen(true);
  };

  const handleClose = () => {
    action('closing dialog box!')();
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions> 
      </Dialog>
    </div>
  );
}

export const FormDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    action('opening dialog box!')();
    setOpen(true);
  };

  const handleClose = () => {
    action('closing dialog box!')();
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} disableEscapeKeyDown={false}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent dividers={true}>
          To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          <Input />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}