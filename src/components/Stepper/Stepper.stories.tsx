import React from 'react';
import Stepper from './Stepper';

export default {
    title: 'Stepper',
    component: Stepper, 
};

const skips=[2]
const des =['First step', 'Second step', 'Third step']
const des2 =['First step', 'Second step need to provide more details', 'Third step', 'Last step']
const errorObject = [{errStep:3, title:'There is an error', message:"The error will be fixed soon"}];

export const DefaultStepper = () => (
    <Stepper descriptions={des}>
    </Stepper>
  );

export const StepperOrientationVertical = () => (
    <Stepper descriptions={des} orientation='vertical'>
    </Stepper>
);

export const StepperWithSkip = () => (
    <Stepper descriptions={des} skipSteps={skips}>
    </Stepper>
);

export const StepperWithError = () => (
    <Stepper descriptions={des} errorsIndexMessage={errorObject}>
    </Stepper>
);

export const StepperWithSkipAndError = () => (
    <Stepper descriptions={des2} skipSteps={skips} errorsIndexMessage={errorObject}>
    </Stepper>
);