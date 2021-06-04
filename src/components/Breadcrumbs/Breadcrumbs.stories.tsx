import React from 'react';
import { action } from '@storybook/addon-actions';
// import { Bread } from './Breadcrumbs';
import Bread from './index';

export default {
    title: 'Breadcrumbs',
    component: Bread,
}

const breadStyle: React.CSSProperties = {
    marginRight:'5px',
    marginTop:'5px',
} 

export const defaultBreadcrumbs = () => (
    <div>
        <h3>Default</h3>
        <Bread>
            <Bread.Option value='about' anchor='#'>About</Bread.Option>
            <Bread.Option anchor='#'>Contact</Bread.Option>
        </Bread>
    </div>
)

export const differentdividerBreadcrumbs = () => (
    <div>
        <h3>Slash</h3>
        <Bread divider='slash'>
            <Bread.Option onClick={action('About clicked')}>About</Bread.Option>
            <Bread.Option onClick={action('Contact clicked')}>Contact</Bread.Option>
        </Bread>
        <h3>Arrow</h3>
        <Bread divider='arrow'>
            <Bread.Option onClick={action('About clicked')}>About</Bread.Option>
            <Bread.Option onClick={action('Contact clicked')}>Contact</Bread.Option>
        </Bread>
    </div>
)

export const differentTypeBreadcrumbs = () => (
    <div>
        <h3>Default</h3>
        <Bread breadType='default'>
            <Bread.Option onClick={action('About clicked')}>About</Bread.Option>
            <Bread.Option onClick={action('Contact clicked')}>Contact</Bread.Option>
        </Bread>
        <h3>Primary</h3>
        <Bread breadType='primary'>
            <Bread.Option onClick={action('About clicked')}>About</Bread.Option>
            <Bread.Option onClick={action('Contact clicked')}>Contact</Bread.Option>
        </Bread>
        <h3>Secondary</h3>
        <Bread breadType='secondary'>
            <Bread.Option onClick={action('Contact clicked')}>About</Bread.Option>
            <Bread.Option onClick={action('Contact clicked')}>Contact</Bread.Option>
        </Bread>
    </div>
)