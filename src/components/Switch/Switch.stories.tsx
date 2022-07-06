//SECTION 1 Import your component and REACT libary
import React, {ChangeEvent, useState} from 'react';
import { action } from '@storybook/addon-actions';
import Switch from './Switch';


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
        <Switch disabled onClick={action('Basic Switch clicked should not work')}></Switch>
        <Switch disabled defaultChecked onClick={action('Disabled Switch clicked should not work')}/>
    </div>
    
)        

export const DiffColorSwitch = () => (
        <div>
            <h1>Color Switches</h1>
            <br/>
            <Switch color="primary" defaultChecked onClick={action('Primary Switch clicked')}/>
            <Switch color="secondary" defaultChecked onClick={action('Secondary Switch clicked')}/>
            <Switch color="success" defaultChecked onClick={action('Success Switch clicked')}/>
            <Switch color="info" defaultChecked onClick={action('Info Switch clicked')}/>
            <Switch color="warning" defaultChecked onClick={action('Warning Switch clicked')}/>
            <Switch color="danger" defaultChecked onClick={action('Danger Switch clicked')}/>
            <Switch color="light" defaultChecked onClick={action('Light Switch clicked')}/>
            <Switch color="dark" defaultChecked onClick={action('Dark Switch clicked')}/>
        </div>  
)

export const DiffSizeSwitch = () => (
    <div>
        <h1>Size Switches</h1>
        <br/>
        <Switch size="sm" onClick={action('Small Switch clicked') } label="small"/>
        <Switch onClick={action('Default Switch clicked')} label="default"/>
    </div>
)

export const LabelSwitch = () => (
    <div>
        <h1>Label Switch</h1>
        <br/>
        <Switch label="Label"  onClick={action('Label Switch clicked') }></Switch>
        <Switch label="Disabled" disabled  onClick={action('Disabled Switch clicked should not work') }></Switch>
    </div>
)

export const OnChangeEvent = () => {
    const [checked, setChecked] = useState<boolean>(false);
    // const switchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    //     setChecked(event.target.checked);
    //     console.log('Checked:', event.target.checked)
    //   };
    return(

    <div>
        <h2>Controlled: Add onChange Prop</h2>
        <br/>
        <Switch defaultChecked={checked} onChange={action('onChange triggered')} onClick={action('Controlled Switch clicked')}/>
    </div>
    )
}
