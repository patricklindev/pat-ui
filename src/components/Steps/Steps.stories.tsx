import React from 'react';
import {action} from '@storybook/addon-actions';
import Steps from './Steps';
import MainSteps, { StepSize } from "./MainSteps"
import {StepStyle} from "./MainSteps" 

export default {
    title: 'Steps',
    component: Steps,
  };

export const horizontalSteps = ()=>{
    return(
    <div className="App" onClick={action('Steps')}>
    <MainSteps stepStyle={StepStyle.Horizontal} />
  </div>
    )
}
export const verticalSteps = ()=>{
    return(
    <div className="App" onClick={action('Steps')}>
    <MainSteps stepStyle={StepStyle.Vertical} />
  </div>
    )
}
export const SizeVariations = ()=>{
  return(
  <div className="App" onClick={action('Steps')}>
  <div >
    <h5>Small Size</h5>
  <MainSteps stepStyle={StepStyle.Horizontal} stepSize={StepSize.Small}/>
  </div>
  <br/>
  <br/>
  <div >
    <h5>Midium Size</h5>
  <MainSteps stepStyle={StepStyle.Horizontal} stepSize={StepSize.Midium}/>
  </div>
  <br/>
  <div >
  <h5>Large Size</h5>
  <MainSteps stepStyle={StepStyle.Horizontal} stepSize={StepSize.large}/>
  </div>
  <br/>
  </div>
  
  )
}