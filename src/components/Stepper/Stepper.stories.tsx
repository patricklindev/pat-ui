import React from 'react';
import { action } from '@storybook/addon-actions';
import Stepper from './Stepper';


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
                "Lets begin live deployment",
                "Lets conduct usability tests",
                "Lets revise our product",
                "Lets market our product"
            ]}
            buttonTitleNext={"NEXT"}
            buttonTitlePrev={"PREV"}
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
            buttonTitleNext={"NEXT"}
            buttonTitlePrev={"PREV"}
        >
        </Stepper>
    </div>
)

export const ExampleStepper = () => (
    <div>
        <Stepper
            stepperType={"square"}
            stepperElements={[
                "This is an example",
                "Another example",
                "11111111111111111111"
            ]}
            buttonTitleNext={"NEXT"}
            buttonTitlePrev={"PREV"}
        >
        </Stepper>
    </div>
)