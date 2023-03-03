import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Stepper from './Stepper';
import Step from './Step';
import StepLabel from './StepLabel';
import { LinearStepper } from './Stepper.stories';

import { addons, mockChannel } from '@storybook/addons';

addons.setChannel(mockChannel());

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

  it('should skip a step when clicking skip button', () => {
    const { container } = render(<LinearStepper />);
    const completeButton = screen.getByText('Complete');
    const skipButton = screen.getByText('Skip');
    fireEvent.click(completeButton);
    fireEvent.click(skipButton);
    expect(
      container
        .querySelectorAll('li')[1]
        ?.querySelector('.stepper__label-completed')
    ).toBeNull();
  });

  it('should mark completion of a step when clicking complete button', () => {
    const { container } = render(<LinearStepper />);
    const completeButton = screen.getByText('Complete');
    fireEvent.click(completeButton);
    expect(
      container.querySelector('li')?.querySelector('.stepper__label-completed')
    ).toBeTruthy();
  });

  it('should render an error icon when given props', () => {
    const errorIndex = 1;
    const { container } = render(
      <Stepper>
        {steps.map((label, index) => {
          return (
            <Step key={label} index={index}>
              <StepLabel error={index === errorIndex}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    );
    expect(container.querySelector('.stepper__label-error')).toBeTruthy();
  });
});
