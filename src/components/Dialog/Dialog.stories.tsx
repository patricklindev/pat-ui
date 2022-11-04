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

export default {
  title: 'Dialog',
  component: Dialog,
};

const emails = ['username@gmail.com', 'user02@gmail.com'];

export const Simple = () => (
  <Dialog>
    <DialogTitle>Set backup account</DialogTitle>
    <DialogList>
      {emails.map((email) => (
        <DialogListItem key={email} handler={() => console.log('clicked user')}>
          <DialogListItemAvatar>
            <Icon color="blue" name="heart" />
          </DialogListItemAvatar>
          <DialogListItemText>{email}</DialogListItemText>
        </DialogListItem>
      ))}
      <DialogListItem handler={() => console.log('adding account')}>
        <DialogListItemAvatar>
          <Icon color="grey" name="plus" />
        </DialogListItemAvatar>
        <DialogListItemText>Add account</DialogListItemText>
      </DialogListItem>
    </DialogList>
  </Dialog>
);

export const Alerts = () => (
  <Dialog>
    <DialogTitle>Use Google's location service?</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Let Google help apps determine location. This means sending anonymous
        location data to Google, even when no apps are running.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button btnSize="sm" btnType="link">
        DISAGREE
      </Button>
      <Button btnSize="sm" btnType="link">
        AGREE
      </Button>
    </DialogActions>
  </Dialog>
);

export const Form = () => (
  <Dialog>
    <DialogTitle>Subscribe</DialogTitle>
    <DialogContent>
      <DialogContentText>
        To subscribe to this website, please enter your email address here. We
        will send updates occasionally.
      </DialogContentText>
      <Input fluid placeholder="Search..." inputSize="small" />
    </DialogContent>
    <DialogActions>
      <Button btnSize="sm" btnType="link">
        CANCEL
      </Button>
      <Button btnSize="sm" btnType="link">
        SUBSCRIBE
      </Button>
    </DialogActions>
  </Dialog>
);
