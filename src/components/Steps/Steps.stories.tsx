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
    step= { steps } />
  </div>
    )
}
export const verticalSteps = ()=>{
    return(
    <div className="App" onClick={action('Steps')}>
    <MainSteps stepStyle={StepStyle.Vertical} 
     step= { steps } />
  </div>
    )
}
export const SizeVariations = ()=>{
  return(
  <div className="App" onClick={action('Steps')}>
  <div >
    <h5>Small Size</h5>
    <MainSteps stepStyle={StepStyle.Horizontal} stepSize={StepSize.Small}  step= { steps } />
  </div>
  <br/>
  <br/>
  <div >
    <h5>Midium Size</h5>
    <MainSteps stepStyle={StepStyle.Horizontal} stepSize={StepSize.Midium}  step= { steps } />
  </div>
  <br/>
  <div >
    <h5>Large Size</h5>
    <MainSteps stepStyle={StepStyle.Horizontal} stepSize={StepSize.large}  step= { steps } />
  </div>
  <br/>
  </div>
  
  )
}