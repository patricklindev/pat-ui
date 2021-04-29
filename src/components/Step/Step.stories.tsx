import React from 'react';
import { action } from '@storybook/addon-actions';
import { Stepper, Step } from './Step';
import Icon from '../Icon/Icon'
console.log('hi')
export default {
  title: 'MyStep',
  component: Step,
};


export const DefaultStepper = () => (
  <Stepper>
    <Step stepStatus="completed">This is step one</Step>
    <Step stepStatus="active">This is step two</Step>
    <Step>This is step three</Step>
  </Stepper>
);

export const VerticalStepper = () => (
  <Stepper stepperType="vertical">
    <Step stepStatus="completed">This is step one</Step>
    <Step stepStatus="active">This is step two</Step>
    <Step>This is step three</Step>
  </Stepper>
);

