import React from 'react';
import Switch from './Switch';

export default {
  title: 'Switch',
  component: Switch,
};

export const DefaultSwitch = () => {
  return (
    <>
      <Switch />
      <Switch defaultChecked />
    </>
  );
};

export const DiffSizeSwitch = () => {
  return (
    <div>
      <Switch size="small" />
      <p></p>
      <br />

      <Switch size="medium" />
      <p></p>

      <br />
    </div>
  );
};

export const DiffColorSwitch = () => {
  return (
    <div>
      <Switch color="primary" />
      <p></p>

      <br />

      <Switch color="secondary" />
      <p></p>

      <br />
    </div>
  );
};

export const DiffTypeSwitch = () => {
  return (
    <div>
      <Switch color="primary" size="small" />
      <p>primary</p>
      <br />

      <Switch color="secondary" size="small" />
      <p>secondary</p>
      <br />
      <Switch defaultChecked />
      <p>defaultChecked</p>
      <br />
      <Switch disabled />
      <p>disabled</p>
    </div>
  );
};
