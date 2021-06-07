import React from 'react';
import {action} from '@storybook/addon-actions';
// import StepItem from './StepItem';
import Step from './Step'
import {steps} from './data.mock'

export default {
    title: 'Steps',
    component: Step,
  };
  
 
export const horizontalSteps = ()=>{
    return(
    <div className="App" onClick={action('StepItem')}>
    <Step stepStyle='horizontal' 
    step= { steps } >Horizontal steps:</Step> 
  </div>
    )
}
export const verticalSteps = ()=>{
    return(
    <div className="App" onClick={action('StepItem')}>
    <Step stepStyle='vertical' 
     step= { steps } >Vertical Steps:</Step>
  </div>
    )
}
export const SizeVariations = ()=>{
  return(
  <div className="App" onClick={action('StepItem')}>
  <div >
    <Step stepStyle='horizontal' stepSize='sm'  step= { steps } >Small Size:</Step>
  </div>
  <br/>
  <br/>
  <div >
    <Step stepStyle='horizontal' stepSize='md'  step= { steps } >Medium Size:</Step>
  </div>
  <br/>
  <div >
    <Step stepStyle='horizontal' stepSize='lg'  step= { steps } >Large Size:</Step>
  </div>
  <br/>
  </div>
  
  )
}