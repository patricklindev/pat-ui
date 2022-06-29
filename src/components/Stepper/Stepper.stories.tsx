import React from 'react';
import { action } from '@storybook/addon-actions';
import Stepper from './Stepper';
import { Icon } from '../../index';

export default {
    title: 'Stepper',
    component: Stepper
}

export const DefaultStepper = () => (
    <div>
        <Stepper
            stepperType={"circle"}
            stepperElements={[
                "Lets begin planning",
                "Lets start developing",
                "Lets begin live deployment"
            ]}
        >
        </Stepper>
    </div>
)

export const SquareStepper = () => (
    <div>
        <Stepper
            stepperType={"square"}
            stepperElements={[
                "Lets begin planning",
                "Lets start developing",
                "Lets begin live deployment"
            ]}
        >
        </Stepper>
    </div>
)