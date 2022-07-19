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
        <Switch onChange={action('Default Switch clicked')}/>
    </div>
)        

export const ToggleSwitch = () => (
    <div>
        <h1>Toggle Switches</h1>
        <br/>
        <div className="switch--flex-container">
            <div className="switch--flex-row">
                <Switch onChange={action('Default Switch clicked')} toggle='off'/>
                <Switch onChange={action('Default Switch clicked')} toggle='on'/>
            </div>
        </div>
    </div>
)        

export const DisabledSwitch = () => (
    <div>
        <h1>Disabled Switches</h1>
        <br/>
        <div className="switch--flex-container">
            <div className="switch--flex-row">
                <Switch onChange={action('Disabled Button clicked should not work')} disabled></Switch>
                <Switch onChange={action('Disabled Button clicked should not work')} disabled toggle="on"/>
            </div>
        </div>
    </div>
    
)        

export const DiffColorSwitch = () => (
        <div>
            <h1>Color Switches</h1>
            <br/>
            <div className="switch--flex-container">
                <div className="switch--flex-row">
                    <Switch color="primary" onChange={action('Primary Switch clicked')} toggle="on"/>
                    <Switch color="secondary" onChange={action('Secondary Switch clicked')} toggle="on"/>
                    <Switch color="success" onChange={action('Success Switch clicked')} toggle="on"/>
                    <Switch color="info" onChange={action('Info Switch clicked')} toggle="on"/>
                    <Switch color="warning" onChange={action('Warning Switch clicked')} toggle="on"/>
                    <Switch color="danger" onChange={action('Danger Switch clicked')} toggle="on"/>
                    <Switch color="light" onChange={action('Light Switch clicked')} toggle="on"/>
                    <Switch color="dark" onChange={action('Dark Switch clicked')} toggle="on"/>
                </div>
             </div>
        </div>  
)

export const DiffSizeSwitch = () => (
    <div>
        <h1>Size Switches</h1>
        <br/>
        <div className="switch--flex-container">
            <div className="switch--flex-row">
                <Switch sizes="sm" onChange={action('Small Switch clicked')} label="Small"/>
                <Switch onChange={action('Default Switch clicked')} label="Default"/>
            </div>
        </div>
    </div>
)

export const LabelSwitch = () => (
    <div>
        <h1>Label Switch</h1>
        <br/>
        <div className="switch--flex-container">
            <div className="switch--flex-row">
                <Switch onChange={action('Labeled Switch clicked')} label="Label"></Switch>
                <Switch onChange={action('Disabled Switch clicked should not work')} label="Disabled" disabled></Switch>
            </div>
        </div>
    </div>
)

export const OnChangeEvent = () => {
    const [isChecked, setChecked] = useState<boolean>(false);
    const handleChange = (event: any) => {
        setChecked(event.target.checked);
      };
    return(

    <div>
        <h3>Controlled Component</h3>
        <br/>
        <Switch checked={isChecked} onChange={handleChange}/>
    </div>
    )
}


