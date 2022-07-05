import React, {useState} from 'react';
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
        <Switch color="primary" defaultChecked onClick={action('Primary Switch clicked')}>primary</Switch>
        <Switch color="secondary" defaultChecked onClick={action('Secondary Switch clicked')}>secondary</Switch>
        <Switch color="success" defaultChecked onClick={action('Success Switch clicked')}>success</Switch>
        <Switch color="info" defaultChecked onClick={action('Info Switch clicked')}>info</Switch>
        <Switch color="warning" defaultChecked onClick={action('Warning Switch clicked')}>warning</Switch>
        <Switch color="danger" defaultChecked onClick={action('Danger Switch clicked')}>danger</Switch>
        <Switch color="light" defaultChecked onClick={action('Light Switch clicked')}>light</Switch>
        <Switch color="dark" defaultChecked onClick={action('Dark Switch clicked')}>dark</Switch>
    </div>  
)

export const DiffSizeSwitch = () => (
    <div>
        <h1>Size Switches</h1>
        <br/>
        <Switch size="sm" onClick={action('Small Switch clicked')}>small</Switch>
        <Switch onClick={action('Default Switch clicked')}>default</Switch>
    </div>
)

export const OnChangeSwitch = () => {
    const [checked, setChecked] = useState(false);
    const switchHandler = (event: any): void => {
        setChecked(event.target.checked);
        console.log('Checked:', event.target.checked)
      };
    
    return(

    <div>
        <h1>OnChange Switch</h1>
        <br/>
        <Switch defaultChecked={checked} onChange={switchHandler} onClick={action('Default Switch clicked')}>default</Switch>
    </div>
    )
}
