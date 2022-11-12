import React, { FC, ReactNode } from 'react';
import { action } from '@storybook/addon-actions';
import { Dialog, DialogActions } from './Dialog';
import { Button, Icon, Input } from '../../index';

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
        {emails.map((email) => (
          <Item
            onClick={() => handleClose(email)}
            primary={email}
            key={email}
            avatar={<Icon loading={false} name="users" color="pink" />}
          />
        ))}
        <Item
          onClick={() => handleClose('addAccount')}
          primary="Add account"
          avatar={<Icon disabled loading={false} name="plus" />}
        />
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
        <Input inputSize="mini" fluid placeholder="Email Address" />
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

  const handleClickItem = (e: React.MouseEvent) => {
    const current = e.currentTarget as HTMLElement;
    action('Clicked an item')(current.innerText.split('\n\n').toString());
  };

  return (
    <div className="display-container">
      <Button onClick={handleClickOpen}>OPEN FULL-SCREEN DIALOG</Button>
      <Dialog dialogType="full-screen" open={open} onClose={handleClose}>
        <section
          style={{
            backgroundColor: 'lightgrey',
            display: 'flex',
            alignItems: 'center',
            padding: '0 0.5rem',
          }}
        >
          <Button btnType="link" onClick={() => handleClose('close')}>
            <Icon disabled={false} loading={false} name="times" />
          </Button>
          <h5 style={{ flex: 1, margin: '0' }}>Sound</h5>
          <Button btnType="secondary" onClick={() => handleClose('save')}>
            Save
          </Button>
        </section>
        <div>
          <hr style={{ margin: '0' }} />
          <Item
            primary="Phone ringtone"
            secondary="Titania"
            onClick={handleClickItem}
          />
          <Item
            primary="Default notification ringtone"
            secondary="Tethys"
            onClick={handleClickItem}
          />
        </div>
      </Dialog>
    </div>
  );
};

/*
 * Item component made for showcase the user stories
 */
interface IitemProps {
  /** set primary text */
  primary?: string;
  /** set secondary text */
  secondary?: string;
  /** set action on clicking */
  onClick?: (e: any) => void;
  /** set avatar for the item */
  avatar?: ReactNode;
}

const Item: FC<IitemProps> = (props) => {
  const { primary, secondary, onClick, avatar } = props;
  const [isHover, setIsHover] = React.useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const itemStyle: React.CSSProperties = {
    display: 'flex',
    gap: '0.75rem',
    padding: '1rem',
    cursor: 'pointer',
    backgroundColor: isHover ? '#eee' : 'white',
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={itemStyle}
      onClick={onClick}
    >
      {avatar ? (
        <span style={{ width: '17%', textAlign: 'center' }}>{avatar}</span>
      ) : null}
      <div style={{ flex: '1' }}>
        <p style={{ margin: '0' }}>{primary}</p>
        <span style={{ color: 'grey' }}>{secondary}</span>
      </div>
    </div>
  );
};
