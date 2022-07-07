import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import Switch from './Switch';

export default {
    title: 'Switch',
    component: Switch
}

export const DefaultSwitch = () => (
    <div>
        <h1>Basic Switches</h1>
        <br/>
        <Switch onAction={action('Default Switch clicked')}/>
        <Switch onAction={action('Default Button clicked')}/>
    </div>
)        

export const DisabledSwitch = () => (
    <div>
        <h1>Disabled Switches</h1>
        <br/>
        <Switch onAction={action('Disabled Button clicked should not work')} disabled></Switch>
        <Switch onAction={action('Disabled Button clicked should not work')} disabled toggle="on"/>
    </div>
    
)        

export const DiffColorSwitch = () => (
        <div>
            <h1>Color Switches</h1>
            <br/>
            <Switch color="primary" onAction={action('Primary Switch clicked')} toggle="on"/>
            <Switch color="secondary" onAction={action('Secondary Switch clicked')} toggle="on"/>
            <Switch color="success" onAction={action('Success Switch clicked')} toggle="on"/>
            <Switch color="info" onAction={action('Info Switch clicked')} toggle="on"/>
            <Switch color="warning" onAction={action('Warning Switch clicked')} toggle="on"/>
            <Switch color="danger" onAction={action('Danger Switch clicked')} toggle="on"/>
            <Switch color="light" onAction={action('Light Switch clicked')} toggle="on"/>
            <Switch color="dark" onAction={action('Dark Switch clicked')} toggle="on"/>
        </div>  
)

export const DiffSizeSwitch = () => (
    <div>
        <h1>Size Switches</h1>
        <br/>
        <Switch sizes="sm" onAction={action('Small Switch clicked')} label="small"/>
        <Switch onAction={action('Default Switch clicked')} label="default"/>
    </div>
)

export const LabelSwitch = () => (
    <div>
        <h1>Label Switch</h1>
        <br/>
        <Switch onAction={action('Labeled Switch clicked')} label="Label"></Switch>
        <Switch onAction={action('Disabled Switch clicked should not work')} label="Disabled" disabled></Switch>
    </div>
)

export const OnChangeEvent = () => {
    const [checked, setChecked] = useState<boolean>(false);
    console.log(checked);
    const switchHandler = () => {
        setChecked(!checked);
      };
    return(

    <div>
        <h3>Controlled: Pass the onChecked and checked props</h3>
        <br/>
        <Switch checked={checked} onChecked={switchHandler} onAction={action('Controlled Switch clicked')}/>
    </div>
    )
}

