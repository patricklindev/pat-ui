import React from 'react';
import {render} from '@testing-library/react';
import MainSteps,{StepStyle} from '../../components/Steps/MainSteps';
import {steps} from '../Steps/stepsData'

 describe('Steps', () => {
  // it('should match snapshot', () => {
  //   const {asFragment} = render(<MainSteps> Snapshot Steps </MainSteps>);
  //   expect(asFragment()).toMatchSnapshot();
  // });

 it('renders horizontal step without crashing', () => {
     let wrappper = render(<MainSteps stepStyle={StepStyle.Horizontal}  step= { steps }>Horizontal steps:</MainSteps>);
    let element = wrappper.queryByText('Horizontal steps:') as HTMLElement;
    console.log(element)
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('DIV');
  });

  it('renders vertical step without crashing', () => {
    let wrappper = render(<MainSteps stepStyle={StepStyle.Vertical}  step= { steps }>Vertical steps:</MainSteps>);
   let element = wrappper.queryByText('Vertical steps:') as HTMLElement;
   expect(element).toBeInTheDocument();
   expect(element.tagName).toBe('DIV');
 });

 it('renders small size step without crashing', () => {
  let wrappper = render(<MainSteps stepStyle={StepStyle.Horizontal}  step= { steps }>Small size:</MainSteps>);
 let element = wrappper.queryByText('Small size:') as HTMLElement;
 expect(element).toBeInTheDocument();
 expect(element.tagName).toBe('DIV');
});
 
it('renders Medium size step without crashing', () => {
  let wrappper = render(<MainSteps stepStyle={StepStyle.Horizontal}  step= { steps }>Medium size:</MainSteps>);
 let element = wrappper.queryByText('Medium size:') as HTMLElement;
 expect(element).toBeInTheDocument();
 expect(element.tagName).toBe('DIV');
});

it('renders Large size step without crashing', () => {
  let wrappper = render(<MainSteps stepStyle={StepStyle.Horizontal}  step= { steps }>Large size:</MainSteps>);
 let element = wrappper.queryByText('Large size:') as HTMLElement;
 expect(element).toBeInTheDocument();
 expect(element.tagName).toBe('DIV');
});

 });