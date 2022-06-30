import React, { FC, ReactNode,useEffect,useState } from 'react';
import { classNames } from '../../utils/classNames';
import Button from '../Button/Button';

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
    // currentIndex: number;
    // ** OR ** feed a string array as props
    stepperElements?: string [];
    buttonTitleNext?: string;
    buttonTitlePrev?: string;
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
        buttonTitleNext,
        buttonTitlePrev,
        // currentIndex,
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
    const [index,setCurrentIndex] = useState(0)
    
    // JASON MA 6/29/2022
    // If an array of string elements is fed into this component as props, 
    // we will assign this array to HTML array.
    if (stepperElements) {
         console.log("we have detected a array of html strings")
        for (let i = 0; i < stepperElements.length; i++ ) {
            HTMLarray.push(stepperElements[i])
        }
    } else {
    // JASON MA 6/29/2022
    // Or, if the component is fed a separate (individual) variables of strings, we can 
    // combine the strings into HTML array via the push prototype method
        if (item1 ) {HTMLarray?.push(item1!)}
        if ( item2 ) { HTMLarray?.push(item2!)}
        if ( item3 ) { HTMLarray?.push(item3!)}
    }
    let totalIndex = HTMLarray.length - 1

    function completion() {
         let target = document.getElementById("Step-"+index)
         let htmlInner = target?.textContent
         console.log(htmlInner)
         console.log(index)
         target?.setAttribute('class', "progress-stepper-completed") 
         if (index<totalIndex) {
            setCurrentIndex(index+1)
         }
       
         if(index > totalIndex) {
            setCurrentIndex(0)
         }
    }

    function revert() {
        let target = document.getElementById("Step-"+index)
        let htmlInner = target?.textContent
        console.log(htmlInner)
        console.log(index)
        target?.setAttribute('class', "progress-stepper") 
       setCurrentIndex(index-1)

       
        if(index <= 0) {
           setCurrentIndex(0)
        }
   }
  

    let Stepper = 
    // JASON MA 6/29/2022
    // ====> Main Code for the Stepper Component
    // This component has to first detect which variation of stepper we are going to be using
    // This first excerpt defines a "circle" stepper 
    <div className = 'all-container' data-testid="stepper-element" >
        <div className ={styleClasses + ' flex-row-container'}>
        {HTMLarray.map(function (item,index)  {
            console.log("This is the value", item)
            console.log("This is the index", index)
            return (
                <div>
                     <div className = {styleClasses + ' flex-element-container'}>
                        <div className={styleClasses + ' flex-element'}>  
                        <p className="progress-description"> {item} </p>
                        <p className="progress-stepper" id={"Step-"+index}>---------- Step {index + 1} ----------</p>
                         </div>
                    </div>
                </div>
            )
        })}
        </div>

    {/* This is the button menu for NEXT and previous */}
       
             <div className ={'flex-row-container'} >
                    
                        {/* <button className={styleClasses + ' button'} data-testid="button-next"> NEXT </button>
                        <button className={styleClasses + ' button'} data-testid="button-prev"> PREVIOUS </button> */}
                        <Button
                             className="Stepper-Button"
                            btnType='primary'
                            data-testid='button-element'
                            onClick={revert}
                        >
                            {props.buttonTitlePrev}
                        </Button>
                        <Button
                            className="Stepper-Button"
                            btnType='primary'
                            data-testid='button-element'
                            onClick={completion}
                        >
                            {props.buttonTitleNext}
                        </Button>
                   
            </div>
     
    </div>
        
    return Stepper;
        
   
        }

Stepper.defaultProps = {
    stepperType: 'circle',
    // currentIndex: 0
  };

  export default Stepper;