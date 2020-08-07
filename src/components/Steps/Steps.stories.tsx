import React from 'react';
import {action} from '@storybook/addon-actions';
import Steps from './Steps';
import MainSteps from "./MainSteps"
import {StepStyle} from "./MainSteps" 

export default {
    title: 'Steps',
    component: Steps,
  };

export const horizontalSteps = ()=>{
    return(
    <div className="App" onClick={action('Steps')}>
    <h1>Create your own steps</h1>
    <h5> Horizontal Steps</h5>
    <MainSteps stepStyle={StepStyle.Horizontal}/>
  </div>
    )
}
export const verticalSteps = ()=>{
    return(
    <div className="App" onClick={action('Steps')}>
    <h1>Create your own steps</h1>
    <h5> Vertical Steps</h5>
    <MainSteps stepStyle={StepStyle.Vertical}/>
  </div>
    )
}