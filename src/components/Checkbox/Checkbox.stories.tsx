import React, { useState } from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

export const BasicCheckbox = () => (
  <div className="checkboxes">
    <Checkbox label="Default Checked" defaultChecked />
    <Checkbox label="Default" />
    {/* <Checkbox label="Indeterminate" /> */}
    <Checkbox label="Disabled" disabled />
    <Checkbox label="Disabled Checked" disabled checked />
  </div>
);

export const DiffSizeCheckbox = () => (
  <div className="checkboxes">
    <Checkbox label="Small" size="small" defaultChecked />
    <Checkbox label="Default" defaultChecked />
    <Checkbox label="Large" size="large" defaultChecked />
  </div>
);

export const DiffColorCheckbox = () => (
  <div className="checkboxes">
    <Checkbox label="Primary" defaultChecked />
    <Checkbox label="Secondary" color="secondary" defaultChecked />
    <Checkbox label="Success" color="success" defaultChecked />
    <Checkbox label="Default" color="default" defaultChecked />
  </div>
);

export const DiffIconCheckbox = () => (
  <div className="checkboxes">
    <Checkbox icon="home" />
    <Checkbox icon="heart" />
    <Checkbox icon="check" />
    <Checkbox icon="star" />
    <Checkbox icon="moon" />
    <Checkbox icon="plus" />
  </div>
);

export const ControlledCheckbox = () => {
  const [checked, setCheck] = useState(true);

  const onChangeHandler = () => {
    setCheck((prev) => !prev);
  };

  return (
    <Checkbox label="Controlled" onChange={onChangeHandler} checked={checked} />
  );
};
