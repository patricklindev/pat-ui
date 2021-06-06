import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import Snackbar from './Snackbar';
import Dropdown from '../Dropdown/Dropdown';
import DropdownOption from '../Dropdown/DropdownOption';
import Button from '../Button';
import { SnackbarProps, SnackbarSeverity } from './Snackbar';

export default {
  title: 'Snackbar',
  component: Snackbar,
};

export const DefaultSnackbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>
        Click here to display the snackbar
      </Button>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        message="Default Snackbar"
      ></Snackbar>
    </div>
  );
};

export const DiffSnackbarType = () => {
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState<SnackbarSeverity>('default');
  const setSnackbar = (severity: SnackbarSeverity) => {
    setOpen(true);
    setSeverity(severity);
  };
  return (
    <div>
      <Button onClick={() => setSnackbar('default')}>
        Click here to display default snackbar
      </Button>
      <Button onClick={() => setSnackbar('error')}>
        Click here to display error snackbar
      </Button>
      <Button onClick={() => setSnackbar('success')}>
        Click here to display success snackbar
      </Button>
      <Button onClick={() => setSnackbar('info')}>
        Click here to display info snackbar
      </Button>
      <Button onClick={() => setSnackbar('warning')}>
        Click here to display warning snackbar
      </Button>
      <Snackbar open={open} onClose={() => setOpen(false)} severity={severity}>
        Hello from Snackbar
      </Snackbar>
    </div>
  );
};

export const DiffPositionButton = () => {
  const [open, setOpen] = useState(false);
  const [horizontal, setHorizontal] = useState('left');
  const [vertical, setVertical] = useState('bottom');
  return (
    <div>
      <label>Choose a vertical position</label>

      <Dropdown
        onChange={(val) => setVertical(val)}
        placeholder="Choose a vertical position"
      >
        <DropdownOption active={true} value="bottom">
          Bottom
        </DropdownOption>
        <DropdownOption active={false} value="top">
          Top
        </DropdownOption>
        <DropdownOption active={false} value="center">
          Center
        </DropdownOption>
      </Dropdown>

      <label>Choose a horizontal position</label>
      <Dropdown
        onChange={(val) => setHorizontal(val)}
        placeholder="Choose a horizontal position"
      >
        <DropdownOption active={true} value="left">
          Left
        </DropdownOption>
        <DropdownOption active={false} value="right">
          Right
        </DropdownOption>
        <DropdownOption active={false} value="center">
          Center
        </DropdownOption>
      </Dropdown>

      <Button onClick={() => setOpen(true)}>
        Click here to display the snackbar
      </Button>
      <Snackbar
        severity="success"
        open={open}
        vertical={vertical}
        horizontal={horizontal}
        onClose={() => setOpen(false)}
      >
        Snackbar at {vertical} {horizontal}
      </Snackbar>
    </div>
  );
};
