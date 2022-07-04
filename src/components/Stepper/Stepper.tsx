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
    description?: string;
    label?: string;
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
    const [skipIndex, setSkipIndex ] = useState(9999999)
    const [skipButtonActive, setSkipButtonActive] = useState(false)
    const [Initialize, setIntialize] = useState(true)
    const [Finish, setFinish] = useState(false);


    // WARNING - Using state to set color in HTML affects all square/dots.
    // I previoused to using HTML to designate specific segments of the stepper.
    const [Color, setColor] = useState('green');
    let totalSteps = stepperElements!.length
    let renderSteps = totalSteps - 1
  


    useEffect(() => {
        if (allowSkip == true) {
            setSkipButtonActive(true)
        }

        console.log("we have initialized")
    }, [Initialize]);


    function next() {
        setColor('green')
        console.log("Current index", Currentindex)
        console.log("Current Steps", CurrentStep)
        setIntialize(false)
             setCurrentStep(CurrentStep + 1)
            setCurrentIndex(Currentindex + 1)

        if (Currentindex >= renderSteps) {
            setCurrentIndex(renderSteps)
        }

        if (CurrentStep >= totalSteps) {
            setCurrentStep(totalSteps)
        }
    }

    function previous() {
        setFinish(false)
        setCurrentStep(CurrentStep  - 1)
        setCurrentIndex(Currentindex -  1)

        if (Currentindex <= 0 ) {
            setCurrentIndex(0)
        }

        if (CurrentStep <= 1) {
            setCurrentStep(1)
        }
    }

    function finishStepper() {
        next()
        setFinish(true)
    }

    function reset() {
        setIntialize(true)
        setFinish(false)
        setCurrentStep(1)
        setCurrentIndex(0)
        setSkipIndex(9999999)
    }

    function skip() {
        setColor('green')
        console.log("Current index", Currentindex)
        console.log("Current Steps", CurrentStep)
        let skipthisStep = CurrentStep + 1
        let skipthisIndex = Currentindex + 1
  
    
        console.log("We will attempt to skip this step", skipthisStep)
        console.log("We will attempt to skip this index", skipthisIndex)

        setSkipIndex(skipthisIndex)
        setCurrentStep(CurrentStep + 2)
        setCurrentIndex(Currentindex + 2)

    if (Currentindex >= renderSteps) {
        setCurrentIndex(renderSteps)
    }

    if (CurrentStep >= totalSteps) {
        setCurrentStep(totalSteps)
    }
    }

    function nextVertical() {
        let target = document.getElementById("Index-" + Currentindex)
        let htmlInner2 = document.getElementById("bar-" + Currentindex)
        console.log(htmlInner2)

        target!.innerHTML = "✔"
        target?.setAttribute('class', `${stepperType + "-vertical"} + completed `)
        htmlInner2?.setAttribute('class', "bar green")

        if (Currentindex < totalSteps) {
            setCurrentIndex(Currentindex + 1)

        }

        if (Currentindex > totalSteps) {
            setCurrentIndex(0)

        }
    }

    function previousVertical() {
        let target = document.getElementById("Index-" + Currentindex)
        let htmlInner2 = document.getElementById("bar-" + Currentindex)
        target!.innerHTML = Currentindex + 1 + ""
        target?.setAttribute('class', `${stepperType + "-vertical"}`)
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
                        {stepperElements!.map(function (item: any, index: any) {
                            return (
                                <div className="progress-container" >
                                    {index != renderSteps ? (
                                        <div>

                                            {/* REACT MUI STEPPER renders the first value highlighted in green/blue */}
                                            {index == 0 ? (
                                                <div className={'flex-row-container'} id={"item-" + index}>


                                                    <div className="icon-area">

                                                            {Currentindex === 0 ? ( 
                                                                <span className={`${stepperType +'-start'}` +` green`} id={"Index-" + index}> {index+1} </span>
                                                            ) : (
                                                                <span className={`${stepperType +'-start'}` +` green`} id={"Index-" + index}> ✔ </span>
                                                            )
                                                                }
                                                    </div>
                                                    <div className="description-area">
                                                        <ul>
                                                            <li className="font-variant-main"> {item.title} </li>
                                                            
                                                           

                                                            {item.label == "error" ? 
                                                            (<li className="font-variant-error"> Warning: Step {index + 1}  </li>) 
                                                            :
                                                            (<li className="font-variant-secondary"> {item.label} </li>)
                                                            }

                                                        </ul> 
                                                    </div>
                                                  
                                                    <span className="bar green" id={"bar-" + index}> </span>
                                                   
                                                    
                                                </div>
                                            ) : (
                                                <div className={'flex-row-container'} id={"item-" + index}>
                                                    <div className="icon-area">


                                                        {skipIndex === index? (
                                                           <span className={`${stepperType}` + ` gray`} id={"Index-" + index}> {index + 1} </span>
                                                        ) : (
                                                            <div className="check-index-preliminary">
                                                            {CurrentStep > index ? ( 
                                                                <div className ="check-index-secondary">
                                                                {index + 1 < CurrentStep ? (
                                                                    <span className={`${stepperType}`+ ` green`} id={"Index-" + index}> ✔ </span> 
                                                                    ) : (
                                                                    <span className={`${stepperType}`+ ` green`} id={"Index-" + index}> {index+1} </span>
                                                                )}
                                                               </div>
                                                            ) : (
                                                                <span className={`${stepperType}` + ` gray`} id={"Index-" + index}> {index + 1} </span>
                                                            )}
                                                            </div>   
                                                        )}
                                                    </div>
                                                    <div className="description-area">
                                                    <ul>
                                                        <li className="font-variant-main"> {item.title} </li>

                                                       

                                                        {item.label == "error" ? 
                                                             (<li className="font-variant-error"> Warning: Step {index + 1}  </li>) 
                                                             :
                                                             (<li className="font-variant-secondary"> {item.label} </li>)
                                                             }
                                                    </ul> 
                                                    </div>

                                                    {index  < CurrentStep ? ( 
                                                    <span className="bar green" id={"bar-" + index}> </span>
                                                    ) : (
                                                    <span className="bar gray" id={"bar-" + index}> </span>
                                                    )}
                                                </div>)}
                                        </div>
                                    ) : (
                                        <div className={styleClasses + ' flex-row-container'}>
                                             {index < CurrentStep ? ( 
                                                                <span className={`${stepperType +'-last'}` + ` green`} id={"Index-" + index}> ✔ </span>
                                                            ) : (
                                                                <span className={`${stepperType +'-last'}` + ` gray`} id={"Index-" + index}> {index + 1} </span>
                                                            )
                                                                }
                                                <div className="description-area">
                                                    <ul>
                                                        <li className="font-variant-main"> {item.title} </li>

                                                        

                                                        {item.label ==="error" ? 
                                                            (<li className="font-variant-error"> Warning: Step {index + 1} </li>) 
                                                            :
                                                            (<li className="font-variant-secondary"> {item.label} </li>)
                                                            }
                                                    </ul> 
                                                </div>
                                            <span className="bar hide" id={"bar-" + index}> </span>
                                        </div>
                                    )}
                                </div>
                            )
                        })}

                    </div>
                ) : (
                    <div className={stepperOrientation + "-container"}>
                        {/* If the stepper is not horizontal, then the stepper must be Vertical */}
                        {stepperElements!.map(function (item: any, index: any) {
                            return (
                                <div className={stepperOrientation + "-description"}>
                                    <div className={'flex-row-container'} id={"item-" + index}>
                                        <span className={stepperType + "-" + stepperOrientation} id={"Index-" + index}> {index + 1} </span>
                                        <div className={stepperOrientation + "-description-inner"}>
                                            <p> {item.title} </p>
                                            {index == Currentindex ? (
                                                <div>
                                                    <p className=''> {item.description}</p>
                                                    <Button
                                                        className="Stepper-Button-Left"
                                                        btnType='primary'
                                                        data-testid='button-element'
                                                        onClick={previousVertical}
                                                    >
                                                        {props.buttonTitlePrev}
                                                    </Button>
                                                    <span className="vertical-spacer"></span>
                                                    <Button
                                                        className="Stepper-Button-Right"
                                                        btnType='primary'
                                                        data-testid='button-element'
                                                        onClick={nextVertical}
                                                    >
                                                        {props.buttonTitleNext}
                                                    </Button>
                                                </div>
                                            ) : (
                                                <br></br>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}

                {Finish == true ? (
                    <div className="stepper-display">
                        <p> You finished all your steps </p>
                    </div>
                ) : (
                    <div className="stepper-display">
                        <p> Step {CurrentStep} </p>
                        <p> Index {Currentindex} </p>
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
                                        onClick={previous}
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
                                        onClick={next}
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