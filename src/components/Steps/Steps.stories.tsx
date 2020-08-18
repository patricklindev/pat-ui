import React from 'react';
import {action} from '@storybook/addon-actions';
import Steps from './Steps';
import MainSteps, { StepSize } from "./MainSteps"
import {StepStyle} from "./MainSteps" ;
import Icon from '../Icon';

export default {
    title: 'Steps',
    component: Steps,
  };
  
  const steps =  [ {
    id: 0,
    label: "Shipping",
    description: "Choose your shipping option",
    icon: <Icon name="truck"/> ,
    active: false,
    enable: true
},
{
    id:1,
    label: "Billing",
    description: "Enter billing information",
    icon: <Icon name="credit card"/>,
    active: false,
    enable: false
},
{
    id:2,
    label: "Confirm Order",
    description: "Verify order details",
    icon: <Icon name="info"/>,
    active: false,
    enable: false
}
] 

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