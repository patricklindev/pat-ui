import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Stepper from './Stepper';
import Step from './Step';
import StepLabel from './StepLabel';

const steps = [
  'Select campaign settings',
  'Create an ad group',
  'Create an ad',
];

describe('Stepper', () => {
  it('should match snapshot', () => {});

  it('should render three Steps given three strings', () => {
    const wrapper = render(
      <Stepper>
        {steps.map((label, index) => {
          return (
            <Step key={label} index={index}>
              <StepLabel index={0}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    );
  });

  it('should render given label in each step', () => {
    const wrapper = render(
      <Stepper>
        {steps.map((label, index) => {
          return (
            <Step key={label} index={index}>
              <StepLabel index={0}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    );
  });

  it('should render horizontal Stepper in default', () => {});

  it('should render vertical Stepper when given props', () => {});

  it('should skip a step when clicking skip button', () => {});

  it('should mark completion of a step when clicking complete button', () => {});

  it('should render an error icon when given props', () => {});
});
