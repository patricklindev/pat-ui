import React from 'react';
import {action} from '@storybook/addon-actions';
import Steps from './Steps';
import MainSteps, { StepSize } from "./MainSteps"
import {StepStyle} from "./MainSteps" ;
import { FaTruck } from 'react-icons/fa';
import {GrCreditCard} from 'react-icons/gr';
import{FaInfo} from "react-icons/fa"
import {FcCheckmark} from "react-icons/fc"

export default {
    title: 'Steps',
    component: Steps,
  };
  
  const steps =  [ {
    id: 0,
    label: "shipping",
    description: "Choose your shipping option",
    icon: <FaTruck /> ,
    active: false,
    enable: true
},
{
    id:1,
    label: "billing",
    description: "Enter billing information",
    icon: <GrCreditCard/>,
    active: false,
    enable: false
},
{
    id:2,
    label: "Confirm Order",
    description: "Verify order details",
    icon: <FaInfo/>,
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