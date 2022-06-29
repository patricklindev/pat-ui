import React, { FC, ReactNode } from 'react';
import Button from '../Button/Button';
import { classNames } from '../../utils/classNames';

export type StepperSize = 'lg' | 'md' | 'sm'
export type StepperType =  "circle" | "square"
// JASON MA 6/29/2022
// Code below is for when I develop a stepper variation for row vs vertical display
// export type StepperOrientaion = "row" | "vertical"

export interface IStepperProps {
    // set customized Stepper //
    className?: string;
    // set Steppersize  //
    stepperSize?: StepperSize;
    // set StepperType //
    stepperType?: StepperType;
    // Allow the user to define specific sets of strings
    item1?: string;
    item2?: string;
    item3?: string;
    // ** OR ** feed a string array as props
    stepperElements?: string [];
}

export type patStepperProps = IStepperProps;

export const Stepper: FC<patStepperProps> = (props) => {
    
    const {
        className,
        stepperSize,
        stepperType,
        item1,
        item2,
        item3,
        stepperElements,
        ...rest
    } = props;

   
    let styleClasses = classNames('stepper', {
        [`stepper-${stepperType}`]: true,
        [`stepper-${stepperSize}`]: !!stepperSize
    });

    // JASON MA 6/29/2022
    // This code defines a template of classnames to be used
    if (className) {
        styleClasses += ' ' + className;
    }

    // JASON MA 6/29/2022
    // HTMLarray is an array containing multiple strings
    // We will map through this HTML array to generate a row of "steps"
    let HTMLarray = []

    // JASON MA 6/29/2022
    // If an array of string elements is fed into this component as props, 
    // we will assign this array to HTML array.
    if (stepperElements) {
         HTMLarray = stepperElements
    } else {
    // JASON MA 6/29/2022
    // Or, if the component is fed a separate (individual) variables of strings, we can 
    // combine the strings into HTML array via the push prototype method
        if (item1 ) {HTMLarray?.push(item1!)}
        if ( item2 ) { HTMLarray?.push(item2!)}
        if ( item3 ) { HTMLarray?.push(item3!)}
    }
   
  

    let Stepper = 
    // JASON MA 6/29/2022
    // ====> Main Code for the Stepper Component
    // This component has to first detect which variation of stepper we are going to be using
    // This first excerpt defines a "circle" stepper 
    <div className = {styleClasses + "all-container"} data-testid="stepper-element" >
        <h1> Stepper Element </h1>
        {HTMLarray.forEach(function (value, index)  {
            <div  >
                <div className ={styleClasses + ' flex-row'} data-testid="stepper-element">
                    <div className = {styleClasses + ' flexcontainer' + index} data-testid="stepper-flex">
                        <div className ={styleClasses + " icon"}></div>
                    </div>
                     <div className = {styleClasses + ' flex-element-container'}>
                        <div className={styleClasses + ' flex-element'}> {value} </div>
                        <div className={styleClasses + " flex-element-line"}> ---------- </div>
                    </div>
                </div>
            </div>
        })}
    {/* This is the button menu for NEXT and previous */}
        <div className={styleClasses + " button-menu"} >
             <div className ={styleClasses + ' flex-row'} data-testid="stepper-element">
                    <div className = {styleClasses + ' flex-element-container'} data-testid="button-flex">
                        <button className={styleClasses + ' button'} data-testid="button-next"> NEXT </button>
                        <button className={styleClasses + ' button'} data-testid="button-prev"> PREVIOUS </button>
                    </div>
            </div>
        </div>
    </div>
        
    return Stepper;
        
   
        }

Stepper.defaultProps = {
    stepperType: 'circle',
  };

  export default Stepper