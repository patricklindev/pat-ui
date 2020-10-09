import React from 'react';
import Input from './Input';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Input',
    component: Input,
}

export const DefaultInput = () => (
    <div>
        <h1>Input</h1>
        <p>A standard input field.</p>
        <Input placeholder={'Search...'} onChange={(event)=>action(event.target.value)(event)}></Input>
    </div>
);

export const TypesInput = () => (
    <div>
        <h1>Focus</h1>
        <p>An input field can show a user is currently interacting with it.</p>
        <Input focus placeholder='Search...' icon={'search'}/>
        <br/>
        <br/>
        <h1>Transparent</h1>
        <p>A transparent input has no background.</p>
        <Input transparent placeholder={'Transparent Search...'} icon={'search'}/>
        <br/>
        <br/>
        <h1>Fluid</h1>
        <p>An input can take on the size of its container.</p>
        <Input fluid icon='search' placeholder='Search...'/>


    </div>
);

export const DisabledErrorInput = () => (
    <div>
        <h1>Disabled</h1>
        <p>An input field can show that it is disabled.</p>
        <Input disabled placeholder='Search...'/>
        <br/>
        <br/>
        <h1>Error</h1>
        <p>An input field can show that the data contains errors.</p>
        <Input error placeholder='Search...'/>
    </div>
);

export const LoadingInput = () => (
    <div>
        <h1>Loading</h1>
        <p>An icon input field can show that it is currently loading data.</p>
        <Input loading icon='users' placeholder='Search...'/>
        <br/>
        <br/>
        <Input loading icon='users' iconPosition='left' placeholder='Search...'/>
        <br/>
        <br/>
        <p>An input field can show that it is currently loading data without an icon, too.</p>
        <Input loading placeholder='Search...'/>
    </div>
);

export const IconInput = () => (
    <div>
        <h1>ICON</h1>
        <p>An input can be formatted with an icon.</p>
        <Input icon='search' placeholder='Search...'/>
        <br/>
        <br/>
        <p>You can position the icon</p>
        <Input icon='users' iconPosition='left' placeholder='Search users...'/>
        <br/>
        <br/>
        <p>You can pass an Icon props object.</p>
        <Input
            icon={{name: 'search', circular: true, link: true}}
            placeholder='Search...'
        />
    </div>
);

export const SizeInput = () => (
    <div>
        <h1>Size</h1>
        <p>An input can vary in size.</p>
        <Input inputSize='mini' icon='search' placeholder='Search...'/>
        <br/>
        <br/>
        <Input inputSize='small' icon='search' placeholder='Search...'/>
        <br/>
        <br/>
        <Input inputSize='large' icon='search' placeholder='Search...'/>
        <br/>
        <br/>
        <Input inputSize='big' icon='search' placeholder='Search...'/>
        <br/>
        <br/>
        <Input inputSize='huge' icon='search' placeholder='Search...'/>
        <br/>
        <br/>
        <Input inputSize='massive' icon='search' placeholder='Search...'/>
    </div>
);
