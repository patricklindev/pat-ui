import React from 'react';
import {action} from '@storybook/addon-actions';
import Steps from './Steps';
import MainSteps, { StepSize,StepStyle } from './MainSteps'
import {steps} from './stepsData'

export default {
    title: 'Steps',
    component: Steps,
  };
  
 
export const horizontalSteps = ()=>{
    return(
    <div className="App" onClick={action('Steps')}>
    <MainSteps stepStyle={StepStyle.Horizontal} 
    step= { steps } >Horizontal steps:</MainSteps> 
  </div>
    )
}
export const verticalSteps = ()=>{
    return(
    <div className="App" onClick={action('Steps')}>
    <MainSteps stepStyle={StepStyle.Vertical} 
     step= { steps } >Vertical Steps:</MainSteps>
  </div>
    )
}
export const SizeVariations = ()=>{
  return(
  <div className="App" onClick={action('Steps')}>
  <div >
    <MainSteps stepStyle={StepStyle.Horizontal} stepSize={StepSize.Small}  step= { steps } >Small Size:</MainSteps>
  </div>
  <br/>
  <br/>
  <div >
    <MainSteps stepStyle={StepStyle.Horizontal} stepSize={StepSize.Midium}  step= { steps } >Medium Size:</MainSteps>
  </div>
  <br/>
  <div >
    <MainSteps stepStyle={StepStyle.Horizontal} stepSize={StepSize.large}  step= { steps } >Large Size:</MainSteps>
  </div>
  <br/>
  </div>
  
  )
}