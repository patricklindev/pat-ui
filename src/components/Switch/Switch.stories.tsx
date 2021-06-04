import React from 'react';
import { action } from '@storybook/addon-actions';
import Switch from './Switch';

export default {
    title: 'Switch',
    component: Switch,
}

const switchStyle: React.CSSProperties = {
    marginRight: '20px',
    marginTop: '5px',
    marginBottom: '30px',
}

export const DefaultSwitch = () => (
    <Switch onChange={action('Default Switch changed')}></Switch>
);

export const DiffSizeSwitch = () => (
    <div>
        <Switch
            id='sw-sm'
            style={switchStyle}
            swSize='sm'
            onChange={action('Small Switch changed')}
        ></Switch>
        <Switch
            id='sw-default'
            style={switchStyle}
            onChange={action('Default Switch changed')}
        ></Switch>
        <Switch
            id='sw-lg'
            style={switchStyle}
            swSize='lg'
            onChange={action('Large Switch changed')}
        ></Switch>
    </div>
)

export const DiffTypeSwitch = () => (
    <div>
        <Switch
            id='sw-primary'
            style={switchStyle}
            swType='primary'
            onChange={action('Primary Switch changed')}
        ></Switch>
        <Switch
            id='sw-secondary'
            style={switchStyle}
            swType='secondary'
            onChange={action('Secondary Switch changed')}
        ></Switch>
        <Switch
            id='sw-plain'
            style={switchStyle}
            defaultChecked={true}
            onChange={action('Default checked Switch changed')}
        ></Switch>
    </div>
)