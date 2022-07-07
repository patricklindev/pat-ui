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
        <Switch />
        <Switch onClick={action('Basic Switch clicked')} toggle="on"/>
    </div>
)        

export const DisabledSwitch = () => (
    <div>
        <h1>Disabled Switches</h1>
        <br/>
        <Switch disabled onClick={action('Basic Switch clicked should not work')}></Switch>
        <Switch disabled onClick={action('Disabled Switch clicked should not work')} toggle="on"/>
    </div>
    
)        

export const DiffColorSwitch = () => (
        <div>
            <h1>Color Switches</h1>
            <br/>
            <Switch color="primary" toggle="on" onClick={action('Primary Switch clicked')}/>
            <Switch color="secondary" toggle="on" onClick={action('Secondary Switch clicked')}/>
            <Switch color="success" toggle="on" onClick={action('Success Switch clicked')}/>
            <Switch color="info" toggle="on" onClick={action('Info Switch clicked')}/>
            <Switch color="warning" toggle="on" onClick={action('Warning Switch clicked')}/>
            <Switch color="danger" toggle="on" onClick={action('Danger Switch clicked')}/>
            <Switch color="light" toggle="on" onClick={action('Light Switch clicked')}/>
            <Switch color="dark" toggle="on" onClick={action('Dark Switch clicked')}/>
        </div>  
)

export const DiffSizeSwitch = () => (
    <div>
        <h1>Size Switches</h1>
        <br/>
        <Switch sizes="sm" label="small"/>
        <Switch label="default"/>
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
    const switchHandler = () => {
        setChecked(true);
        alert(checked);
      };
    return(

    <div>
        <h2>Controlled: Pass a Callback</h2>
        <br/>
        <Switch checked={checked} callback={switchHandler}/>
    </div>
    )
}

//Property 'checked' does not exist on type 'IntrinsicAttributes & ISwitchProps & { children?: ReactNode; }'.ts(2322)
