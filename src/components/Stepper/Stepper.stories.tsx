import Stepper from "./Stepper";
import React from "react";

const stepsArr = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

const stepsArrVertical = [
    {
        label: 'Select campaign settings',
        description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
    },
    {
        label: 'Create an ad group',
        description:
            'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
        label: 'Create an ad',
        description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    },
];

export default {
    title: 'Stepper',
    component: Stepper,
}
export const defaultStepper = () => (
    <div>
        <Stepper stepsArr={stepsArr}></Stepper>
    </div>
)

export const stepperAlternative = () => (
    <div>
        <Stepper stepsArr={stepsArr} alternative></Stepper>
    </div>
)

export const stepperVertical = () => (
    <div>
        <Stepper stepsArr={stepsArrVertical} verticalStepper></Stepper>
    </div>
)