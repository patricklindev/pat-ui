import React from 'react';
import Dialog from './Dialog';
import { DialogTitle, DialogActions, DialogContent } from './Dialog';
import UserAccount from '../../asset/icon/account.svg';
import AddUser from '../../asset/icon/addUser.svg';
import './Dialog.stories.style.scss';

export default {
  title: 'Dialog',
  component: Dialog,
};
export const DefaultDialog = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <button onClick={handleClickOpen}>Open default dialog</button>

      <Dialog isOpen={open} onClose={handleClose}>
        <DialogTitle>Dialog header</DialogTitle>
        <DialogContent>Dialog body text</DialogContent>
        <DialogActions>
          <div className="dialog-actions-row">
            <button className="dialog-btn" onClick={handleClose}>
              Action1
            </button>
            <button className="dialog-btn" onClick={handleClose} autoFocus>
              Action2
            </button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export const AlertDialog = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <button onClick={handleClickOpen}>Open alert dialog</button>

      <Dialog isOpen={open} onClose={handleClose}>
        <DialogTitle>Use Google's location service?</DialogTitle>
        <DialogContent>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContent>
        <DialogActions>
          <div className="dialog-actions-row">
            <button className="dialog-btn" onClick={handleClose}>
              Disagree
            </button>
            <button className="dialog-btn" onClick={handleClose} autoFocus>
              Agree
            </button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export const FormDialog = () => {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <button onClick={handleClickOpen}>Open form dialog</button>
      <Dialog isOpen={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={handleChange}
            autoFocus
          />
        </DialogContent>
        <DialogActions>
          <div className="dialog-actions-row">
            <button className="dialog-btn" onClick={handleClose}>
              Cancel
            </button>
            <button className="dialog-btn" onClick={handleClose}>
              Subscribe
            </button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export const SimpleDialog = () => {
  const emails = ['username@gmail.com', 'user02@gmail.com'];
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <button onClick={handleClickOpen}>Open simple dialog</button>
      <Dialog isOpen={open} onClose={handleClose}>
        <DialogTitle>Set backup account</DialogTitle>
        <DialogContent>
          {emails.map((email) => (
            <div className="email-row" onClick={handleClose}>
              <img src={UserAccount} alt="userAccount" />
              <span>{email}</span>
            </div>
          ))}
        </DialogContent>
        <div className="dialog-actions-simple-row">
          <img src={AddUser} alt="addUser" />
          <span>Add account</span>
        </div>
      </Dialog>
    </div>
  );
};