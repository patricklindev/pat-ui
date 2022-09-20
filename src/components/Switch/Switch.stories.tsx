import React from 'react';
import Switch from './Switch';

export default {
  title: 'Switch',
  component: Switch,
};

export const DefaultSwitch = () => {
  const [showOn, setShowOn] = React.useState(false);

  //why use switch
  //in controlled component, the input’s(switch) value is always driven by the React state.
  const handleClick = () => {
    setShowOn(!showOn);
  };
  console.log(showOn, showOn ? 'on' : 'off');
  return (
    <Switch onClick={handleClick} isChecked={showOn}>
      Default Switch
    </Switch>
  );
};

export const DiffSizeSwitch = () => {
  const [showOn, setShowOn] = React.useState(false);
  return (
    <div>
      <Switch
        switchSize="sm"
        onClick={() => setShowOn(!showOn)}
        isChecked={showOn}
      >
        Small Switch with default color
      </Switch>

      <Switch switchSize="lg">Large Switch with default color</Switch>
    </div>
  );
};

export const DiffColorSwitch = () => {
  const [showOnP, setShowOnP] = React.useState(false);
  const [showOnS, setShowOnS] = React.useState(false);

  return (
    <div>
      <Switch
        switchColor="primary"
        onClick={() => {
          setShowOnP(!showOnP);
        }}
        isChecked={showOnP}
      >
        Primary color Switch
      </Switch>

      <Switch
        switchColor="secondary"
        onClick={() => setShowOnS(!showOnS)}
        isChecked={showOnS}
      >
        Secondary color Switch
      </Switch>
    </div>
  );
};

export const DiffTypeSwitch = () => {
  const [showOn, setShowOn] = React.useState(false);
  const [defaultOn, setDefaultOn] = React.useState(true);
  return (
    <div>
      <Switch
        onClick={() => {
          setShowOn(!showOn);
        }}
        isChecked={showOn}
      >
        Default Switch
      </Switch>

      <Switch label="switch with label"></Switch>

      <Switch
        onClick={() => {
          setDefaultOn(!defaultOn);
        }}
        isChecked={defaultOn}
      >
        On as default switch
      </Switch>

      <Switch disabled>Defualt disabled switch</Switch>
    </div>
  );
};
