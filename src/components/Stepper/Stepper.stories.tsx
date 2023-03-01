import React, { useState } from 'react';
import Stepper from './Stepper';
import Step from './Step';
import StepLabel from './StepLabel';
import StepContent from './StepContent';

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
        if (index === activeStep - 1) return false;
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
          // const labelProps: {
          //   optional?: React.ReactNode;
          // } = {};
          // if (isStepOptional(index)) {
          //   labelProps.optional = <span>Optional</span>;
          // }
          return (
            <Step key={label} index={index}>
              <StepLabel
                completed={completed[index]}
                optional={
                  isStepOptional(index) ? <span>Optional</span> : undefined
                }
              >
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <div>
          <div>
            <span>All steps completed - you&apos;re finished</span>
          </div>
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
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<{
    [k: number]: boolean;
  }>({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <>
      <Stepper activeStep={activeStep} nonLinear>
        {steps.map((label, index) => {
          return (
            <Step key={label} index={index} onClick={handleStep(index)}>
              <StepLabel index={0} completed={completed[index]}>
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <>
            <div>
              <span>All steps completed - you&apos;re finished</span>
            </div>
            <button onClick={handleReset}>Reset</button>
          </>
        ) : (
          <>
            <div>
              <span>Step {activeStep + 1}</span>
            </div>
            <button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
            </button>
            <button onClick={handleNext}>Next</button>
            {activeStep !== steps.length &&
              (completed[activeStep] ? (
                <span>Step {activeStep + 1} already completed</span>
              ) : (
                <button onClick={handleComplete}>
                  {completedSteps() === totalSteps() - 1
                    ? 'Finish'
                    : 'Complete Step'}
                </button>
              ))}
          </>
        )}
      </div>
    </>
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
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = [
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

  const defaultCompleted = Array(steps.length).fill(false);
  const [completed, setCompleted] = useState(defaultCompleted);

  const handleNext = () => {
    // set activeStep(current) to completed
    setCompleted(
      [...completed].map((complete, index) => {
        if (index === activeStep) return true;
        else return complete;
      })
    );
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    // set activeStep(current) to NotCompleted
    setCompleted(
      [...completed].map((complete, index) => {
        if (index === activeStep - 1) return false;
        else return complete;
      })
    );
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted(defaultCompleted);
  };

  return (
    <div>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => {
          return (
            <Step key={step.label} index={index}>
              <StepLabel
                completed={completed[index]}
                optional={index === 2 ? <span>Last step</span> : null}
              >
                {step.label}
              </StepLabel>
              <StepContent>
                <span>{step.description}</span>
                <div>
                  <button onClick={handleNext}>
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </button>
                  <button disabled={index === 0} onClick={handleBack}>
                    Back
                  </button>
                </div>
              </StepContent>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length && (
        <div>
          <span>All steps completed - you&apos;re finished</span>
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </div>
  );
};
