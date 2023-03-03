import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import Switch from './Switch';

export default {
  title: 'Switch',
  component: Switch,
};

export const DefaultSwitch = () => (
  <Switch />
);

// export const DiffSizeSwitch = () => (
//   <div>
//     <Switch
//       swSize='small'
//       label="Small Switch"
//       onChange={action('Small Switch clicked')}
//     />
//     <Switch swSize="medium" onChange={action('Medium Switch clicked')} label="Medium Switch"/>
//   </div>
// );

export const DiffTypeSwitch = () => (
  <div>
    <Switch
      swColor='primary'
      onChange={action('Primary Button clicked')}
      label="Primary Button"
    />
    <Switch
      swColor='secondary'
      onChange={action('Secondary Button clicked')}
      label="Secondary Button"
    />
    <Switch
      swColor='default'
      onChange={action('default Button clicked')}
      label="Default Button"
    />
    <Switch
      disabled
      swColor='primary'
      onChange={action('DisabledDefault Button clicked should not work')}
      label="Disabled Button"
    />
    <br/>
    <Switch
      swSize='small'
      swColor='primary'
      onChange={action('Primary Button clicked')}
      label="Primary Button"
    />
    <Switch
      swSize='small'
      swColor='secondary'
      onChange={action('Secondary Button clicked')}
      label="Secondary Button"
    />
    <Switch
      swSize='small'
      swColor='default'
      onChange={action('default Button clicked')}
      label="Default Button"
    />
    <Switch
      swSize='small'
      disabled
      swColor='primary'
      onChange={action('DisabledDefault Button clicked should not work')}
      label="Disabled Button"
    />
  </div>
);

export const DiffPropsSwitch = () => {
  const [isChecked, setIsChecked] = useState(true);
  function toggleSwitch (e: React.ChangeEvent<HTMLInputElement>) {
    action("Switch Clicked");
    setIsChecked(prev => !prev);
  }

  return (
    <div>
      <Switch
        swColor='primary'
        checked={isChecked}
        onChange={toggleSwitch}
        label="Decided by external props"
      />
      <Switch
        disabled
        swColor='primary'
        checked={true}
        onChange={action('DisabledDefault Button clicked should not work')}
        label="Disabled"
      />
    </div>
  )
};