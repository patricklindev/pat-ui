import Stepper from './Stepper';
import React from 'react';

const stepsArr = ['Select campaign settings', 'Create an ad group', 'Create an ad'];
const stepContentArr = ['step1', 'step2', 'step3'];

const stepsArrVertical = ['Select campaign settings', 'Create an ad group', 'Create an ad'];
const stepContentArrVertical = [
    `For each ad campaign that you create, you can control how much you're 
    willing to spend on clicks and conversions, which networks and geographical 
    locations you want your ads to show on, and more.`,

    'An ad group contains one or more ads which target a shared set of keywords.',

    `Try out different ad text to see what brings in the most customers,and learn how 
    to enhance your ads using features like ad extensions.If you run into any problems 
    with your ads, find out how to tell if they're running and how to resolve approval issues.`,
]


const customErrorSvg = (
    <svg viewBox='0 0 24 24'>
        <path d="M10 10 L90 10 L90 90 L10 90 Z" />
    </svg>
)

const customFinishedSvg = (
    <svg viewBox='0 0 24 24'>
        <path d="M12 2l3.09 6.35 6.91.81-5 4.87 1.18 6.88L12 18.2l-6.18 3.82 1.18-6.88-5-4.87 6.91-.81z"/>
    </svg>
)


const detectError = (step: number) => {
    return step === 1;
}

const detectOptional = (step: number) => {
    return step === 1;
}

export default {
    title: 'Stepper',
    component: Stepper,
}
export const defaultStepper = () => (
    <div>
        <Stepper stepsArr={stepsArr}>
            {stepContentArr.map(stepContent => (
                <div key={stepContent}>{stepContent}</div>
            ))}
        </Stepper>
    </div>
)

export const stepperAlternative = () => (
    <div>
        <Stepper
            alternative
            stepsArr={stepsArr}
            detectError={detectError}
            detectOptional={detectOptional}
            customErrorSvg={customErrorSvg}
            customFinishedSvg={customFinishedSvg}
        >
            {stepContentArrVertical.map(stepContent => (
                <div key={stepContent}>{stepContent}</div>
            ))}
        </Stepper>
    </div>
)

export const stepperVertical = () => (
    <div>
        <Stepper
            stepsArr={stepsArrVertical}
            detectOptional={detectOptional}
            verticalStepper detectError={detectError}
        >
            {stepContentArrVertical.map(stepContent => (
                <div key={stepContent}>{stepContent}</div>
            ))}
        </Stepper>
    </div>
)