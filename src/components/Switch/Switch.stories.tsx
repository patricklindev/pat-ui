import React from 'react';
import { action } from '@storybook/addon-actions';
import Switch from './Switch';
// SECTION 1 Import your component and REACT libary

//SECTION 2: Define default render 
export default {
    title: 'Switch',
    component: Switch
}

//SECTION 3: Define what is shown on Storybook

export const DefaultSwitch = () => (
    <Switch>Basic Switches</Switch>
    // <Switch onClick={action('Default Switch clicked')}>Basic Switches</Switch>
)        

export const DiffSizeSwitch = () => (
    <div>
        <Switch>small</Switch>
        <Switch>large</Switch>
    </div>
)

export const DiffColorSwitch = () => (
    <div>
        <Switch>primary</Switch>
        <Switch>secondary</Switch>
        <Switch>danger</Switch>
        <Switch>default</Switch>
    </div>  
)
