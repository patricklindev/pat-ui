import React from 'react';
import Switch from './Switch';
// SECTION 1 Import your component and REACT libary

//SECTION 2: Define default render
export default {
  title: 'Switch',
  component: Switch,
};

//SECTION 3: Define what is shown on Storybook

export const DefaultSwitch = () => <Switch />;

export const DisabledSwitch = () => <Switch disabled/>;

export const DiffSizeSwitch = () => (
  <div>
    <h3>sm</h3>
    <Switch swSize="sm" />

    <h3>md (default)</h3>
    <Switch swSize="md" />
  </div>
);

export const DiffColorSwitch = () => (
  <div>
    <Switch />

    <Switch swColor="purple"/>

    <Switch swColor="orange"/>
    
    <Switch swColor="pink"/>
   
  </div>
);


export const WithLabel = () => (
  <div>
    <Switch swType="labeled" label="Label"/>
    <br />
    <Switch swType="labeled" label="Disabled" disabled/>
   
  </div>
);