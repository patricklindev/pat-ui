import React, { useState } from 'react';
import Button from '../Button';
import Dialogue from './Dialogue';
import Input from '../Input';
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
        DialogueType="simple"
        open={open}
        onClose={()=>setOpen(false)}
        dialogueTitle="Set backup account"
      >
        <p>Some Account</p>
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
        DialogueType="alerts"
        open={open}
        onClose={()=>setOpen(false)}
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
          >
            Disagree
          </Button>
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
        DialogueType="form"
        open={open}
        onClose={()=>setOpen(false)}
        dialogueTitle="Subscribe"
      >
        <p>
          To subscribe to this website, please enter your email address here. We will send updates occasionally.
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
