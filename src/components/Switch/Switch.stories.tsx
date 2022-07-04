import React from 'react';
import { action } from '@storybook/addon-actions';
import Switch from './Switch';
// SECTION 1 Import your component and REACT libary

//SECTION 2: Define default render 
export default {
    title: 'Switch',
    component: Switch
}
// const label = { inputProps: { 'aria-label': 'Switch demo' } };

//SECTION 3: Define what is shown on Storybook

export const DefaultSwitch = () => (
    <div>
        <h1>Basic Switches</h1>
        <br/>
        <Switch onClick={action('Basic Switch clicked')}/>
        <Switch onClick={action('Basic Switch clicked')} defaultChecked/>
    </div>
    
)        

export const DisabledSwitch = () => (
    <div>
        <h1>Disabled Switches</h1>
        <br/>
        <Switch disabled></Switch>
        <Switch disabled defaultChecked/>
    </div>
    
)        

export const DiffColorSwitch = () => (
    <div>
        <h1>Color Switches</h1>
        <br/>
        <Switch color="primary" defaultChecked>primary</Switch>
        <Switch color="secondary" defaultChecked>secondary</Switch>
        <Switch color="success" defaultChecked>success</Switch>
        <Switch color="info" defaultChecked>info</Switch>
        <Switch color="warning" defaultChecked>warning</Switch>
        <Switch color="danger" defaultChecked>danger</Switch>
        <Switch color="light" defaultChecked>light</Switch>
        <Switch color="dark" defaultChecked>dark</Switch>
    </div>  
)

export const DiffSizeSwitch = () => (
    <div>
        <h1>Size Switches</h1>
        <br/>
        <Switch size="sm">small</Switch>
        <Switch>default</Switch>
    </div>
)


