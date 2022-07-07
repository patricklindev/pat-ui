//SECTION 1 Import your component and REACT libary
import React, {useState} from 'react';
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
        <Switch/>
        <Switch toggle="on"/>
    </div>
)        

export const DisabledSwitch = () => (
    <div>
        <h1>Disabled Switches</h1>
        <br/>
        <Switch disabled></Switch>
        <Switch disabled toggle="on"/>
    </div>
    
)        

export const DiffColorSwitch = () => (
        <div>
            <h1>Color Switches</h1>
            <br/>
            <Switch color="primary" toggle="on"/>
            <Switch color="secondary" toggle="on"/>
            <Switch color="success" toggle="on"/>
            <Switch color="info" toggle="on"/>
            <Switch color="warning" toggle="on"/>
            <Switch color="danger" toggle="on"/>
            <Switch color="light" toggle="on"/>
            <Switch color="dark" toggle="on"/>
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
        <Switch label="Label"></Switch>
        <Switch label="Disabled" disabled></Switch>
    </div>
)

export const OnChangeEvent = () => {
    const [checked, setChecked] = useState<boolean>(false);
    const switchHandler = () => {
        setChecked(!checked);
      };
    return(

    <div>
        <h2>Controlled: Pass the onChecked and checked props</h2>
        <br/>
        <Switch checked={checked} onChecked={switchHandler}/>
    </div>
    )
}

//Property 'checked' does not exist on type 'IntrinsicAttributes & ISwitchProps & { children?: ReactNode; }'.ts(2322)
