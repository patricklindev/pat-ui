import React, { useState } from 'react';
import Stepper from './Stepper';
import Step from './Step';
import StepLabel from './StepLabel';

export default {
  title: 'Stepper',
  component: Stepper,
};

const steps = [
  'Select campaign settings',
  'Create an ad group',
  'Create an ad',
];

const defaultCompleted = Array(steps.length).fill(false);

export const LinearStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const [completed, setCompleted] = useState(defaultCompleted);

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    // set activeStep(current) to completed
    setCompleted(
      [...completed].map((complete, index) => {
        if (index === activeStep) return true;
        else return complete;
      })
    );

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    // set activeStep(current) to NotCompleted
    setCompleted(
      [...completed].map((complete, index) => {
        if (index === activeStep) return false;
        else return complete;
      })
    );
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted(defaultCompleted);
  };

  return (
    <div>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = { index: index };
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          if (isStepOptional(index)) {
            labelProps.optional = <span>Optional</span>;
          }
          // if (isStepSkipped(index)) {
          //   labelProps.completed = false;
          // }
          return (
            <Step activeStep={0} key={label} {...stepProps}>
              <StepLabel index={0} {...labelProps} completed={completed[index]}>
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <div>
          <span>All steps completed - you&apos;re finished</span>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : (
        <div>
          <div>
            <span>Step {activeStep + 1}</span>
          </div>
          <button disabled={activeStep === 0} onClick={handleBack}>
            Back
          </button>
          <button onClick={handleSkip} disabled={!isStepOptional(activeStep)}>
            Skip
          </button>
          <button onClick={handleNext}>
            {activeStep === steps.length - 1 ? 'Finish' : 'Complete'}
          </button>
        </div>
      )}
    </div>
  );
};

export const NonLinearStepper = () => {
  return (
    <Stepper activeStep={0}>
      {steps.map((label, index) => {
        return (
          <Step activeStep={0} key={label} index={index}>
            <StepLabel index={0}>{label}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
};

export const ErrorStepper = () => {
  const errorIndex = 1;
  return (
    <Stepper activeStep={0}>
      {steps.map((label, index) => {
        return (
          <Step activeStep={0} key={label} index={index}>
            <StepLabel index={0} error={index === errorIndex}>
              {label}
            </StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
};

export const VerticalStepper = () => {
  return (
    <Stepper activeStep={0} orientation="vertical">
      {steps.map((label, index) => {
        return (
          <Step activeStep={0} key={label} index={index}>
            <StepLabel index={0}>{label}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
};
