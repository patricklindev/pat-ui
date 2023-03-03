import React, { useState } from 'react';
import Button from '../Button';
import Dialogue from './Dialogue';
import Input from '../Input';
import Icon from '../Icon';
export default {
  title: 'Dialogue',
  component: Dialogue,
};

export const SimpleDialogue = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button btnType="default" disabled={false} onClick={() => setOpen(true)}>
        Open Dialog
      </Button>

      <Dialogue
        open={open}
        onClose={() => setOpen(false)}
        dialogueTitle="Set backup account"
      >
        <div>
          <Icon name="users" />
          <a>&nbsp;someone@example.com</a>
        </div>
        <br />
        <div>
          <Icon name="users" />
          <a>&nbsp;anyone@example.com</a>
        </div>
        <br />
        <div>
          <Icon name="plus" />
          <a>&nbsp;&nbsp;&nbsp;&nbsp;Add Account</a>
        </div>
      </Dialogue>
    </div>
  );
};

export const AlertsDialogue = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button btnType="default" disabled={false} onClick={() => setOpen(true)}>
        Open Dialog
      </Button>

      <Dialogue
        open={open}
        onClose={() => setOpen(false)}
        dialogueTitle="Use google's location service?"
      >
        <p>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </p>
        <div style={{ textAlign: 'right' }}>
          <Button
            btnType="link"
            disabled={false}
            onClick={() => setOpen(false)}
          >
            Agree
          </Button>
          <Button
            btnType="link"
            disabled={false}
            onClick={() => setOpen(false)}
          ></Button>
        </div>
      </Dialogue>
    </div>
  );
};

export const FormDialogue = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button btnType="default" disabled={false} onClick={() => setOpen(true)}>
        Open Dialog
      </Button>
      <Dialogue
        open={open}
        onClose={() => setOpen(false)}
        dialogueTitle="Subscribe"
      >
        <p>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </p>
        <Input fluid placeholder="Email Address" />
        <div style={{ textAlign: 'right' }}>
          <Button
            btnType="link"
            disabled={false}
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            btnType="link"
            disabled={false}
            onClick={() => setOpen(false)}
          >
            Subscribe
          </Button>
        </div>
      </Dialogue>
    </div>
  );
};
