// import { action } from '@storybook/addon-actions';
import React from 'react';
import Switch from './Switch';

export default {
  title: 'Switch',
  component: Switch,
};

export const DefaultSwitch = () => {
  const [showOn, setShowOn] = React.useState(false);
  const handleChange = () => {
    setShowOn(!showOn);
  };
  return (
    <Switch label="Default Switch" isChecked={showOn} onChange={handleChange} />
  );
};

export const DiffSizeSwitch = () => {
  const [showOn, setShowOn] = React.useState(false);
  return (
    <div>
      <Switch
        switchSize="sm"
        onChange={() => setShowOn(!showOn)}
        isChecked={showOn}
        label="Small Switch with default color"
      />

      <Switch switchSize="lg" label="Large Switch with default color" />
    </div>
  );
};

export const DiffColorSwitch = () => {
  const [showOnP, setShowOnP] = React.useState(false);
  const [showOnS, setShowOnS] = React.useState(false);

  console.log(showOnP);
  return (
    <div>
      <Switch
        switchColor="primary"
        onChange={() => {
          setShowOnP(!showOnP);
        }}
        label="Primary color Switch"
        isChecked={showOnP}
      />

      <Switch
        switchColor="secondary"
        onChange={() => setShowOnS(!showOnS)}
        isChecked={showOnS}
        label="Secondary color Switch"
      />
    </div>
  );
};

export const DiffTypeSwitch = () => {
  const [showOn, setShowOn] = React.useState(false);
  const [defaultOn, setDefaultOn] = React.useState(true);
  return (
    <div>
      <Switch
        onChange={() => {
          setShowOn(!showOn);
        }}
        isChecked={showOn}
        label="Default Switch"
      />

      <Switch label="switch with label" />

      <Switch
        onChange={() => {
          setDefaultOn(!defaultOn);
        }}
        isChecked={defaultOn}
        label="On as default switch"
      />

      <Switch
        disabled
        label="Defualt disabled switch"
        onChange={() => console.log('clicked')}
      />
    </div>
  );
};
