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
    <MainSteps stepStyle={StepStyle.Horizontal}/>
  </div>
    )
}
export const verticalSteps = ()=>{
    return(
    <div className="App" onClick={action('Steps')}>
    <MainSteps stepStyle={StepStyle.Vertical}/>
  </div>
    )
}