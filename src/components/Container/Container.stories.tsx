import React from 'react';
import { action } from '@storybook/addon-actions';
import Container from './Container';
import { DefaultCard } from '../Card/Card.stories'

export default {
    title: 'Container',
    component: Container,
}

export const DefaultContainer = () => (
    <Container>
        <DefaultCard />
        <DefaultCard />
        <DefaultCard />
        <DefaultCard />
    </Container>
)