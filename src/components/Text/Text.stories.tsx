import { action } from '@storybook/addon-actions';
import React from 'react';
import Text from './Text';

export default {
    title: 'Text',
    component: Text,
}

export const DefaultText = () => (

    <div>
        <h1>Text</h1>
        <p>A standard text component</p>
          <Text />
    </div>
)

export const ErrorText = () => (

    <div>
        <h1>Text</h1>
        <p>A text error component</p>
          <Text error={true}/>
    </div>
)
