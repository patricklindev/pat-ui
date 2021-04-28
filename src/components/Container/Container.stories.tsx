import React from 'react';
import { action } from '@storybook/addon-actions';
import Container from './Container';

export default {
    title: 'Container',
    component: Container,
}

export const DefaultContainer = () => {
    <Container>
        <p>child 1</p>
        <p>child 2</p>
        <p>child 3</p>
    </Container>
}