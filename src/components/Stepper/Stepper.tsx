import React, { FC, ReactNode, useEffect, useState } from 'react';
import { classNames } from '../../utils/classNames';
// What is below this comment is opptional for imports and dependent on your component
import Button from '../Button/Button';
import Progress from '../Progress/Progress';

export type StepperSize = 'lg' | 'md' | 'sm'
export type StepperType = "circle" | "square" | "progress"
export type StepperLinear = "linear" | "nonlinear"
// JASON MA 6/29/2022
// Code below is for when I develop a stepper variation for row vs vertical display
export type StepperOrientaion = "row" | "vertical"

export type StepperObject = {
    title?: string;
    description?: string
}

export type TitleAndDescription<Type> = {
    [Property in keyof Type]: string;
}


export interface IStepperProps {
    // set customized Stepper //
    className?: string;
    allowSkip?: boolean;
    // set Steppersize  //
    stepperSize?: StepperSize;
    // set StepperType //
    stepperType?: StepperType;
    // set if the stepper is going to be horizontal or vertical
    stepperLinear?: StepperLinear;
    stepperOrientation: StepperOrientaion;
    // Allow the user to define specific sets of strings
    stepperElements?: StepperObject[];
    buttonTitleNext?: string;
    buttonTitlePrev?: string;
}

export type patStepperProps = IStepperProps;

export const Stepper: FC<patStepperProps> = (props) => {

    const {
        className,
        stepperSize,
        stepperType,
        stepperElements,
        stepperOrientation,
        buttonTitleNext,
        buttonTitlePrev,
        stepperLinear,
        allowSkip,
        // currentIndex,
        ...rest
    } = props;


    let styleClasses = classNames('stepper', {
        [`stepper-${stepperType}`]: true,
        [`stepper-${stepperSize}`]: !!stepperSize
    });

    let orientationStyle = ""

    // JASON MA 6/29/2022
    // This code defines a template of classnames to be used
    if (className) {
        styleClasses += ' ' + className;
    }

    if (stepperOrientation) {
        orientationStyle += ' ' + stepperOrientation;
    }

    // JASON MA 6/29/2022
    // HTMLarray is an array containing multiple strings
    // We will map through this HTML array to generate a row of "steps"
    // let HTMLarray = []
    // let TitleAndDescription = stepperElements
    const [Currentindex, setCurrentIndex] = useState(0)
    const [CurrentStep, setCurrentStep] = useState(1)
    const [skipButtonActive, setSkipButtonActive] = useState(false)
    const [Initialize, setIntialize] = useState(true)
    const [Finish, setFinish] = useState(false);


    // WARNING - Using state to set color in HTML affects all square/dots.
    // I reverted to using HTML to designate specific segments of the stepper.
    const [Color,setColor] = useState('gray');
    let totalSteps = stepperElements!.length
    let renderSteps = totalSteps - 1

   
    useEffect(() => {
        if(allowSkip == true) {
            setSkipButtonActive(true)
        }
        
        console.log("we have initialized")
      }, [Initialize]);


    function completion() {
        let next = Currentindex + 1
        let stepNow = document.getElementById("Index-" + Currentindex)
        let displayBarNow = document.getElementById("bar-" + Currentindex)
        let nextStep = document.getElementById("Index-" + next)
        setIntialize(false)
            if (CurrentStep == totalSteps) {
                stepNow!.innerHTML="✔"
                setCurrentStep(totalSteps)
            } else {
                stepNow!.innerHTML="✔"
                setCurrentStep(CurrentStep+1)
                setCurrentIndex(Currentindex+1)
                displayBarNow?.setAttribute('class', `bar + green`)
                if (CurrentStep == totalSteps-1) {
                    // IF THE SECOND TO LAST DOT/SQUARE IS DETECTED, WE ONLY NEED TO CHANGE THE STATE TO GREEN
                    // We only need to change the state of the dot/square color, since the last dot/square has different width
                    setColor('green');
                } else {
                    // YOU MUST SPECIFICALLY ONLY CHANGE THE NEXT DOT OVER
                    nextStep?.setAttribute('class', `${stepperType} + green`)
                }
            }
    }

    function revert() {
        setFinish(false)
        let prev = Currentindex + 1
        let stepNow = document.getElementById("Index-" + Currentindex)
        let displayBarNow = document.getElementById("bar-" + Currentindex)
        let prevStep = document.getElementById("Index-" + prev)
            if (CurrentStep == totalSteps) {

                stepNow!.innerHTML= CurrentStep +""
                stepNow?.setAttribute('class', `${stepperType +'-last'} + green`)
                displayBarNow?.setAttribute('class', "bar hide")
                setCurrentStep(CurrentStep-1);
                setCurrentIndex(Currentindex-1)
            } else if ( Currentindex == 0) {
                prevStep?.setAttribute('class', `${stepperType}`)
                stepNow!.innerHTML= CurrentStep +""
                stepNow?.setAttribute('class', `${stepperType} + completed`)
                displayBarNow?.setAttribute('class', "bar-completed ")
                // setColor('gray');
                setIntialize(true)
            } else {
                stepNow!.innerHTML= CurrentStep +""
                stepNow?.setAttribute('class', `${stepperType} + completed`)
                // setColor('gray');
                // if the current step is the second to last step in the array,
                // we are going to adjust the second to last icon (dot / square)
                if (CurrentStep == totalSteps-1) {
                    // prevStep?.setAttribute('class', `${stepperType +'-last'}`)
                } else {
                    prevStep?.setAttribute('class', `${stepperType}` + ` ${Color}`)
                }
                displayBarNow?.setAttribute('class', "bar ")
                setCurrentStep(CurrentStep-1);
                setCurrentIndex(Currentindex-1)
            }

    }

    function finishStepper() {
        completion()
        setFinish(true)
    }

    function reset() {
        setIntialize(true)
        setFinish(false)
        setCurrentStep(1)
        setCurrentIndex(0)
        setColor('gray')
        stepperElements?.forEach(function(item:any,index:any) {
            
            let currentStep = document.getElementById("Index-" + index)
            let displayBarNow = document.getElementById("bar-" + index)
            currentStep!.setAttribute('class', `${stepperType}`)
            currentStep!.innerHTML=index+1
            displayBarNow?.setAttribute('class', "bar ")
            if (index == 0 ) {
                currentStep!.setAttribute('class',  `${stepperType} + completed`)
                displayBarNow?.setAttribute('class', "bar-completed ")
            }
            if (index == renderSteps ) {
                currentStep!.setAttribute('class',  `${stepperType +'-last'}`)
                displayBarNow?.setAttribute('class', "bar-completed hide")
            }
        })
    }

    function skip() {
        let skippedIndex = Currentindex + 2
        let skippedStepNumber = CurrentStep + 2;
        let currentStep = document.getElementById("Index-" + Currentindex)
        let skippedStep = document.getElementById("Index-" + skippedIndex)
         let displayBarNow = document.getElementById("bar-" + skippedIndex)
        // let nextStep = document.getElementById("Index-" + next)
        setIntialize(false)
        if (skippedIndex == totalSteps-1) {
            currentStep!.innerHTML="✔"
            skippedStep!.innerHTML="✔"
            skippedStep?.setAttribute('class', `${stepperType +'-last'} + completed`)
            setSkipButtonActive(false)
            setCurrentStep(CurrentStep+2)
            setCurrentIndex(skippedIndex)
            setFinish(true)
            // displayBarNow?.setAttribute('class', "bar-completed hide")  
        } else {
            currentStep!.innerHTML="✔"
            skippedStep!.innerHTML= skippedStepNumber + ""
            skippedStep?.setAttribute('class', `${stepperType} + completed`)
            // if the current step is the second to last step in the array,
            // we are going to adjust the second to last icon (dot / square)
            displayBarNow?.setAttribute('class', "bar-completed")
            setCurrentIndex(skippedIndex)
            setCurrentStep(CurrentStep+2)
        }
    }

    function completionVertical() {
        let target = document.getElementById("Index-" + Currentindex)
        let htmlInner2 = document.getElementById("bar-" + Currentindex)
        console.log(htmlInner2)
       
            target!.innerHTML="✔"
            target?.setAttribute('class', `${stepperType+"-vertical"} + completed `)
            htmlInner2?.setAttribute('class', "bar-completed")
       
        if (Currentindex < totalSteps) {
            setCurrentIndex(Currentindex + 1)
          
        }

        if (Currentindex > totalSteps) {
            setCurrentIndex(0)
           
        }
    }

    function revertVertical() {
        let target = document.getElementById("Index-" + Currentindex)
        let htmlInner2 = document.getElementById("bar-" + Currentindex)
            target!.innerHTML= Currentindex+1 +""
            target?.setAttribute('class', `${stepperType+"-vertical"}`)
            htmlInner2?.setAttribute('class', "bar")
      
        setCurrentIndex(Currentindex - 2)
       
      
        console.log('This is the current index', Currentindex)

        if (Currentindex <= 0) {
            setCurrentIndex(0)
          
        }
    }

    let Stepper =
        // JASON MA 6/29/2022
        // ====> Main Code for the Stepper Component
        // This component has to first detect which variation of stepper we are going to be using
        <div className='all-container' data-testid="stepper-element" >
            <div className="center-main-body">
                {/* First detect if the Stepper is going to be horizontal */}
                {stepperOrientation == 'row' ? (
                    <div className={styleClasses + ' flex-row-container'}>
                        {stepperElements!.map(function (item: any, index:any) {
                            return (
                                <div className="progress-container" >
                                    {index != renderSteps ? (
                                        <div>

                                    {/* REACT MUI STEPPER renders the first value highlighted in green/blue */}
                                        {index == 0 ? ( 
                                            <div className={'flex-row-container'} id={"item-" + index}>
                                            <span className={`${stepperType} + green`} id={"Index-" + index}> {index+1} </span>
                                            <p className={stepperOrientation+"-description"}> {item.title} </p>
                                            <span className="bar-completed" id={"bar-" + index}> </span>
                                        </div>
                                        ) : ( <div className={'flex-row-container'} id={"item-" + index}>
                                        <span className={`${stepperType}` + ` ${Color}`} id={"Index-" + index}> {index+1} </span>
                                        <p className={stepperOrientation+"-description"}> {item.title} </p>
                                        <span className="bar" id={"bar-" + index}> </span>
                                    </div> )}
                                       
                                        </div>
                                    ) : (
                                        <div className={styleClasses + ' flex-row-container'}>
                                                <span className={`${stepperType +'-last'}` + ` ${Color}`} id={"Index-" + index}> {index+1} </span>
                                                <p className={stepperOrientation+"-description"}> {item.title} </p>
                                                <span className="bar hide" id={"bar-" + index}> </span>
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                       
                    </div>
                ) : (
                    <div className={stepperOrientation+"-container"}> 
                        {/* If the stepper is not horizontal, then the stepper must be Vertical */}
                        {stepperElements!.map(function (item: any, index:any) {
                            return (
                                    <div className={stepperOrientation+"-description"}>
                                        <div className={'flex-row-container'} id={"item-" + index}>
                                            <span className={stepperType + "-" + stepperOrientation} id={"Index-" + index}> {index+1} </span>
                                            <div className={stepperOrientation+"-description-inner"}>
                                            <p> {item.title} </p>
                                            { index == Currentindex ? ( 
                                                <div>
                                                <p className=''> {item.description}</p>
                                                <Button
                                                        className="Stepper-Button-Left"
                                                        btnType='primary'
                                                        data-testid='button-element'
                                                        onClick={revertVertical}
                                                    >
                                                        {props.buttonTitlePrev}
                                                    </Button>
                                                    <span className="vertical-spacer"></span>
                                                <Button
                                                        className="Stepper-Button-Right"
                                                        btnType='primary'
                                                        data-testid='button-element'
                                                        onClick={completionVertical}
                                                    >
                                                        {props.buttonTitleNext}
                                                    </Button>
                                                </div>
                                            ) : (
                                                <br></br>
                                            ) }
                                            </div>
                                        </div>
                                    </div> 
                                    )
                                    })}  
                    </div>
                )}
                                    {/* <div> */}
                                      
                                        {/* {Currentindex== index ? (
                                             <div className={stepperOrientation+"-description"}>
                                                
                                                <div className={'flex-row-container'} >
                                                    <Button
                                                        className="Stepper-Button-Left"
                                                        btnType='primary'
                                                        data-testid='button-element'
                                                        onClick={revertVertical}
                                                    >
                                                        {props.buttonTitlePrev}
                                                    </Button>
                                                    <span className="vertical-spacer"></span>
                                                    <Button
                                                        className="Stepper-Button-Right"
                                                        btnType='primary'
                                                        data-testid='button-element'
                                                        onClick={completionVertical}
                                                    >
                                                        {props.buttonTitleNext}
                                                    </Button>
                                                </div>
                                            </div>

                                        ) : (
                                            <p>  </p>
                                        )} */}

                                    {/* </div> */}
              
                
                {Finish == true ? (
                <div className="stepper-display"> 
                <p> You finished all your steps </p>
                </div>
                ) : (
                    <div className="stepper-display"> 
                <p> Step {CurrentStep} </p>
                </div>
                )}
                

 {/* if orientation == row  */}
                
                {stepperOrientation === 'row' ? (
                    <div className={'flex-row-container'} >
                {Finish == true ? (
                     <Button
                     className="Stepper-Button-Left"
                     btnType='primary'
                     data-testid='button-element'
                     onClick={reset}
                 >
                     {"RESET"}
                 </Button>
                ) : ( 
                    <div className={'flex-row-container'} > 
{/* Determine if we are starting from index 0 aka step 1 */}                      
{Initialize == false ? (
                            <Button
                                className="Stepper-Button-Left"
                                btnType='primary'
                                data-testid='button-element'
                                onClick={revert}
                            >
                                {props.buttonTitlePrev}
                            </Button>
                        ) : (
                            <Button
                                className="Stepper-Button-Left"
                                btnType='primary'
                                data-testid='button-element'
                                disabled={true}
                            >
                                {props.buttonTitlePrev}
                            </Button>

                        )}

                        <span className="spacer"></span>

{/* Check to see if we pass in skipButton */}    
                        {skipButtonActive == false ? (
                            <div>
                            </div>
                        ) : (
                            <Button
                                className="Stepper-Button-Skip"
                                btnType='primary'
                                data-testid='button-element'
                                onClick={skip}
                            >
                                {"Skip"}
                            </Button>
                        )}

{/* if we hit the last step, do we display finish or not */}    
                        {CurrentStep == totalSteps ? (
                            <Button
                                className="Stepper-Button-Right"
                                btnType='primary'
                                data-testid='button-element'
                                onClick={finishStepper}
                            >
                                {"FINISH"}
                            </Button>
                        ) : (
                            <Button
                                className="Stepper-Button-Right"
                                btnType='primary'
                                data-testid='button-element'
                                onClick={completion}
                            >
                                {props.buttonTitleNext}
                            </Button>)}
                    </div>
              
                
                )}
                        </div>
                ) : (
                    <footer> Vertical Component </footer>
                )}
            </div>

        </div>


    return Stepper;


}

Stepper.defaultProps = {
    stepperType: 'circle',
    stepperOrientation: 'row'
    // currentIndex: 0
};

export default Stepper;