import React from 'react'
import { render } from '@testing-library/react'
import { Stepper, Step } from './Step'

// shallow test 
describe('Stepper', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <Stepper>
        <Step stepStatus='active'>Step1</Step>
        <Step>Step2</Step>
        <Step>Step3</Step>
      </Stepper>
    ); // like a DOM
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render horizontal stepper with active and incompleted steps', () => {
    const wrapper = render(
      <Stepper>
        <Step stepStatus='active'>Step1</Step>
        <Step>Step2</Step>
        <Step>Step3</Step>
      </Stepper>
    ); // like a DOM
    
    // test Stepper
    const stepperElement = wrapper.getByTestId('stepper-element') as HTMLElement;
    expect(stepperElement).toBeInTheDocument();
    expect(stepperElement).toHaveClass('stepper stepper-horizontal')
    
    // test Step
    const activeStepElement  = wrapper.getByText('1').closest('div') as HTMLElement;
    expect(activeStepElement).toHaveClass('step step-active')
    const incompletedStepElement  = wrapper.getByText('2').closest('div') as HTMLElement;
    expect(incompletedStepElement).toHaveClass('step step-incompleted')
    
    const stepLabelElement = wrapper.queryByText('Step1') as HTMLElement;
    expect(stepLabelElement ).toBeInTheDocument();
    expect(stepLabelElement.tagName).toBe('SPAN')
    expect(stepLabelElement ).toHaveClass('step-label')
  });

  it('should render vertical stepper with active and incompleted steps', () => {
    const wrapper = render(
      <Stepper stepperType='vertical'>
        <Step stepStatus='completed'>Step1</Step>
        <Step stepStatus='active'>Step2</Step>
        <Step>Step3</Step>
      </Stepper>
    ); // like a DOM
    
    const stepperElement = wrapper.getByTestId('stepper-element') as HTMLElement;
    expect(stepperElement).toHaveClass('stepper stepper-vertical')
    const completedStepElement  = wrapper.getByTestId('step-1-element') as HTMLElement;
    expect(completedStepElement).toHaveClass('step step-completed')
    const activeStepElement  = wrapper.getByText('2').closest('div') as HTMLElement;
    expect(activeStepElement).toHaveClass('step step-active')
    const incompletedStepElement  = wrapper.getByText('3').closest('div') as HTMLElement;
    expect(incompletedStepElement).toHaveClass('step step-incompleted')
    
    const stepLabelElement = wrapper.queryByText('Step1') as HTMLElement;
    expect(stepLabelElement ).toBeInTheDocument();
    expect(stepLabelElement.tagName).toBe('SPAN')
    expect(stepLabelElement ).toHaveClass('step-label')
  });
})