import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Stepper from './Stepper';
import Step from './Step';
import StepLabel from './StepLabel';

const steps = [
  'Select campaign settings',
  'Create an ad group',
  'Create an ad',
];

describe('Stepper', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <Stepper>
        {steps.map((label, index) => {
          return (
            <Step key={label} index={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render three Steps given three strings', () => {
    const { container } = render(
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

    expect(container.firstChild).toHaveClass('stepper');
    expect(screen.queryAllByRole('listitem').length).toBe(3);
  });

  it('should render given label in each step', () => {
    const { container } = render(
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
    expect(screen.queryByText('Select campaign settings')).toBeInTheDocument;
    expect(screen.queryByText('Create an ad group')).toBeInTheDocument;
    expect(screen.queryByText('Create an ad')).toBeInTheDocument;
  });

  it('should render horizontal Stepper in default', () => {
    const { container } = render(
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
    expect(container.querySelector('.vertical')).toBeNull();
  });

  it('should render vertical Stepper when given props', () => {
    const { container } = render(
      <Stepper orientation="vertical">
        {steps.map((label, index) => {
          return (
            <Step key={label} index={index}>
              <StepLabel index={0}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    );
    expect(container.querySelector('.vertical')).toBeTruthy();
  });

  it('should skip a step when clicking skip button', () => {});

  it('should mark completion of a step when clicking complete button', () => {});

  it('should render an error icon when given props', () => {});
});
