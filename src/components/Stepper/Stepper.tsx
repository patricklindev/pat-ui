import React, { FC, ReactNode, useEffect, useState } from 'react';
import { classNames } from '../../utils/classNames';
// What is below this comment is opptional for imports and dependent on your component
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
// import Progress from '../Progress/Progress';

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
    // Will the user allow skip button to appear
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
    // DEVELOPMENT PHILOSOPHY
    // I COULD LET END USERS DEFINE THEIR OWN FUNCTIONS TO BE PASSED AS PROPS INTO THIS COMPONENT
    // HOWEVER, THIS SEEMS TO BE WASTEFUL.
    // WOULD YOU HAVE A TEAM OF DEVELOPERS DEFINE THEIR OWN FUNCTION NAME / VARIABLES FOR NEXT, WHEN 
    // ALL FUNCTIONS BOIL DOWN TO A INCREMENT OF A VALUE?
    // skipOnClick?: () => void;
    // nextOnClick?: () => void;
    // prevOnClick?: () => void;
    // finishOnClick?: ()=> void;
    // resetOnClick?: ()=> void;
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
    // let HTMLarray = []
    // let TitleAndDescription = stepperElements
    const [Currentindex, setCurrentIndex] = useState(0)
    const [CurrentStep, setCurrentStep] = useState(1)
    const [skipIndex, setSkipIndex] = useState<number>(9999999)
    const [SkipIndexArray, setSkipIndexArray] = useState<number[]>([])
    const [skipButtonActive, setSkipButtonActive] = useState(false)
    const [Initialize, setIntialize] = useState(true)
    const [Finish, setFinish] = useState(false);
    // const [zpriority, setzpriority] = useState('nopriority');
    
    // WARNING - Using state to set color in HTML affects all square/dots.
    // I previoused to using HTML to designate specific segments of the stepper.
    let totalSteps = stepperElements!.length
    let renderSteps = totalSteps - 1


    // Jason Ma 7/5/2022 On load, we check to see if the user has allowed the display of the skip button.
    useEffect(() => {
        if (allowSkip == true) {
            setSkipButtonActive(true)
        }
        console.log("we have initialized")
    }, [Initialize]);

    // Jason Ma 7/5/2022 Each time we add an index to the SkipIndexArray, we produce a console.log.
    useEffect(() => {
        console.log("We have added to the array of indexes to be skipped", SkipIndexArray)
    }, [SkipIndexArray]);

    useEffect(() => {
        if (stepperOrientation == 'vertical') {
        let initialreset = 'description-0'
        let initialresetHTML = document.getElementById(initialreset)
        initialresetHTML!.style.height="175px"
        initialresetHTML!.style.zIndex="2"
        }
    }, [])

    useEffect(() => {
        if (Currentindex <= 0) {
            setCurrentIndex(0)
            setSkipIndex(999999999)
            setCurrentStep(1)
            setIntialize(true)
        }
        if (Currentindex >= renderSteps) {
            setCurrentIndex(renderSteps)
            setCurrentStep(totalSteps)
        }
    }, [Currentindex])


    const select = (value:number) => {
        setIntialize(false)
        if (stepperLinear == 'linear') {
            console.log("You have not declared stepperLinear props as nonlinear")
        }

        if (SkipIndexArray.includes(value) == true) {
            let target = value-1
            let removeSkip = SkipIndexArray.filter(function(element){return(element == target)})
            setSkipIndexArray( removeSkip )
        }

        if (stepperLinear == 'nonlinear') {
            if (stepperOrientation === 'row') {
                setCurrentIndex(value)
                setCurrentStep(value+1)
            }
    
            if (stepperOrientation === 'vertical') {
                setCurrentIndex(value)
                setCurrentStep(value+1)
                let currentTarget = 'description-' + `${value}`
                let prevTarget = 'description-' + `${value-1}`
                let prevElement = document.getElementById(prevTarget)
                let currentElement = document.getElementById(currentTarget)
                prevElement!.style.height="50px"
                currentElement!.style.height="175px"
            }
        }
        
        
    }  
    
    function next() {
        console.log("Current index", Currentindex)
        console.log("Current Steps", CurrentStep)
        setIntialize(false)
        setCurrentStep(CurrentStep + 1)
        setCurrentIndex(Currentindex + 1)
        let target = Currentindex+1
        let removeSkip = SkipIndexArray.filter(function(element){return(element != target)})
        setSkipIndexArray( removeSkip )

        if (stepperOrientation === 'vertical') {
            let currentTarget = 'description-' + `${Currentindex}`
            let nextTarget = 'description-' + `${Currentindex+1}`
            let nextElement = document.getElementById(nextTarget)
            let currentElement = document.getElementById(currentTarget)
            
            nextElement!.style.height="175px"
            nextElement!.style.zIndex="1"
            currentElement!.style.height="75px"
            nextElement!.style.zIndex="0"
        }
    }

    function previous() {
        setFinish(false)
        setCurrentStep(CurrentStep - 1)
        setCurrentIndex(Currentindex - 1)

        
        let filterArrayCheck = SkipIndexArray.includes(Currentindex-1)
        if (filterArrayCheck === true) {
        let skipArrayLength = SkipIndexArray.length
        let lastValue = SkipIndexArray[skipArrayLength-1]
        console.log(lastValue)
        let removeSkip = SkipIndexArray.filter(function(element){return(element != lastValue)})
        setSkipIndexArray( removeSkip )

        }

        if (stepperOrientation === 'vertical') {
            let currentTarget = 'description-' + `${Currentindex}`
            let nextTarget = 'description-' + `${Currentindex-1}`
            let nextElement = document.getElementById(nextTarget)
            let currentElement = document.getElementById(currentTarget)
            nextElement!.style.height="175px"
            currentElement!.style.height="75px"
            nextElement!.style.zIndex="0"
        }
    }

    function finishStepper() {
        setFinish(true)
    }

    function reset() {
        setIntialize(true)
        setFinish(false)
        setCurrentStep(1)
        setCurrentIndex(0)
        setSkipIndex(9999999)
        setSkipIndexArray([])

        if (stepperOrientation === 'vertical') {
           let laststep = 'description-' + renderSteps
           let initialreset = 'description-0'
           let initialresetHTML = document.getElementById(initialreset)
           let laststepHTML = document.getElementById(laststep)
           initialresetHTML!.style.height="175px"
           initialresetHTML!.style.zIndex="1"
           laststepHTML!.style.height="75px"
           } 
    }

    function skip() {
        setIntialize(false)
        let skipthisStep:number = CurrentStep
        let skipthisIndex = Currentindex 
        
        console.log("We will attempt to skip this step", skipthisStep)
        console.log("We will attempt to skip this index", skipthisIndex)
     
        setSkipIndex(skipthisIndex)
        if (CurrentStep == totalSteps-1) {
            setCurrentStep(CurrentStep + 1)
            setCurrentIndex(Currentindex + 1)
            setSkipIndexArray( arr => [...arr, skipthisIndex])
        } else {
        setCurrentStep(CurrentStep + 1)
        setCurrentIndex(Currentindex + 1)
        setSkipIndexArray( arr => [...arr, skipthisIndex])
        }

        if (stepperOrientation === 'vertical') {

        
            let currentTarget = 'description-' + `${Currentindex}`
            let nextTarget = 'description-' + `${Currentindex+1}`
            let nextElement = document.getElementById(nextTarget)
            let currentElement = document.getElementById(currentTarget)
            nextElement!.style.height="175px"
            currentElement!.style.height="75px"
            nextElement!.style.zIndex="0"
            

            
        }
    }



    let Stepper =
        // JASON MA 6/29/2022
        // ====> Main Code for the Stepper Component
        // This component has to first detect which variation of stepper we are going to be using
        <div className={'all-container-' + stepperSize} data-testid="stepper-element" >
        <div className="center-main-body" data-testid="stepper-main-body">
{/* ROW CODE */}
        {stepperOrientation == 'row' ? (
        <div className={'flex-row-container'} data-testid="flex-row-container">
            {/* iterate through the array of strings*/}
            {stepperElements!.map(function (item: any, index: any) {
                return (
                <div className="progress-container" data-testid="progress-container">
                    {index < renderSteps ? (
                    <div className={'flex-row-container'} data-testid="progress-container">
                        <div className="icon-area" onClick={() => select(index)} >
                       {/* Error Check, if error, dont even bother rendering the other conditionals */}
                        { SkipIndexArray.includes(index) == true?(
                        <div className="test-1a">
                            <span className={`${stepperType}` + ` orange`} id={"Index-" + index}> X </span>
                           
                        </div>
                         ) : (
                        <div className="test-1b">
                        {/* Test 1 Did the user click / "mark" this index for skip */}
                            { item.label != 'error' ?(
                            <div className="test-2a">
                            {/* Logic Test 2, is the current step greater than the index of the array */}
                            {CurrentStep > index ? (
                                <div className="test-3a">
                                {/* If the current step is greater than the index of this item */}
                                {/* This logic will deterimine if you will see a checkmark or a number*/}
                                 {/* If the current step is 1 higher than the index of this item, this means */}
                                 {/* ---> The next element in line should be marked green, with a number */}
                                 {/* ---> This current element should be marked green, with a checkmark */}
                                    {CurrentStep > index + 1 ? (
                                        <div className="test-4a">
                                        <span className={`${stepperType}` + ` green`} id={"Index-" + index}> ✔ </span>
                                        </div>
                                    ) : (
                                        <div className="test-4b">
                                        <span className={`${stepperType}` + ` green`} id={"Index-" + index}> {index + 1} </span>
                                        </div>
                                    )}
                                     {/* Logic Test 2 conclusion, if the current step is not greater than the index of this item, we need to 
                                     mark this gray */}
                                </div>
                            ) :(
                                <div className="test-3b">
                                <span className={`${stepperType}` + ` gray`} id={"Index-" + index}> {index + 1} </span>
                                </div>
                            )}
                            </div>
                            ) : (
                            <div className="test-2b">
                             <span className={`${stepperType}` + ` red`} id={"Index-" + index}> ! </span>
                            </div>
                        )}
                        </div>
                        )}
                        </div>


                        <div className="description-area" data-testid="stepper-description-area" >
                            <ul>
                                <li className="font-variant-main"> {item.title} </li>
                                {/* Logic Test 1, This test checks to see if error has been denoted */}
                                {item.label == "error" ? (
                                <li className="font-variant-error"> Warning: Step {index + 1}  </li>
                                ) : (
                                <li className="font-variant-row"> {item.label} </li>
                                )}
                            </ul>
                        </div>
                     
                       
                        <div className="bar-area">
                        {SkipIndexArray.includes(index) == false? (
                            <div>
                            {index < CurrentStep ? (
                                <span className="bar green" id={"bar-" + index}> </span>
                                ) : (
                                <span className="bar gray" id={"bar-" + index}> </span>
                                 )}
                            </div>
                         ) : (
                            <span className="bar gray" id={"bar-" + index}> </span>
                         )}
                             
                        </div>
                        
                    </div>
                    ) : (
                <div className={styleClasses + ' flex-row-container'}>
{/* Specific code for the very last section / string in the array */}
                    <div className="icon-area" onClick={() => select(index)} data-testid="select-function">
                        <div className="check-index-preliminary">
                            {item.label == 'error' ? (
                                <div className="test-1a">
                                    <span className={stepperType + ` red`} id={"Index-" + index}> ! </span>
                                </div>
                                 ) : (
                                 <div className="test-1b">
                                     {SkipIndexArray.includes(index) == true? (
                                        <div className="test-2b">
                                        <span className={`${stepperType}` + ` orange`} id={"Index-" + index}> X </span>
                                        </div>
                                     ) : (
                                        <div className="test-3b">
                                            {CurrentStep == totalSteps ? (
                                         <div className="check-index-secondary">
                                        {/* If the current step is equal to the total length of array passed */}
                                        {/* If Finish is true, render checkmark, otherwise leave it at step in progress */}
                                        {Finish ===  true? (
                                         <span className={`${stepperType}` + ` green`} id={"Index-" + index}> ✔ </span>
                                         // <Icon name="check" size="small" className={`${stepperType}` + ` green`}/>
                                        ) : (
                                        <span className={stepperType + ` green`} id={"Index-" + index}> {index + 1} </span>
                                        )}
                                        </div>
                                            ) : (
                                            <span className={stepperType + ` gray`} id={"Index-" + index}> {index + 1} </span>
                                            )}
                                            </div>
                                    )}
                                 </div>
                                 )}
                        </div>
                    </div>
                    <div className="description-area"  >
                        <ul>
                            <li className="font-variant-main"> {item.title} </li>
                            {item.label === "error" ?(
                                <li className="font-variant-error"> Warning: Step {index + 1} </li>
                            ) : (
                                <li className="font-variant-row"> {item.label} </li>     
                            )}                
                        </ul>
                    </div>
                </div>
            )}
                </div>
                )})}
       
        </div>

        ) : (
        <div className={stepperOrientation + "-container"}>
{/* VERTICAL CODE */}
        {stepperElements!.map(function (item: any, index: any) {
            return (
            <div className={stepperOrientation + "-description"} data-testid={`stepper-vertical-` + `${index}`} >
                <div className={'flex-row-container item'} >
                <div className="icon-area" onClick={() => select(index)} data-testid={`icon-area-` + `${index}`}>
                        {SkipIndexArray.includes(index) == true ? (
                             <div className="test-1a">
                            
                            <span className={`${stepperType}` + ` orange`} id={"Index-" + index}> X </span>
                            </div>
                            ) : (
                            <div className="test-1b" >
                                 {  item.label != 'error' ?(
                                  <div className="test-2a">
                                    {CurrentStep > index ? (
                                        <div className="test-3a">
                                        {CurrentStep != totalSteps ? (
                                            <div className = "test-4A">
                                            {CurrentStep > 1 + index  ? (
                                                <span className={`${stepperType}` + ` green`} id={"Index-" + index}> ✔ </span>
                                                ) : (
                                                <span className={`${stepperType}` + ` green`} id={"Index-" + index}> {index + 1} </span>
                                                )}
                                            </div>
                                            ) : (
                                        <   div className = "test-4b">
                                             {CurrentStep == totalSteps? (
                                                <span className={`${stepperType}` + ` green`} id={"Index-" + index}> ✔ </span>
                                                // <Icon name="check" size="small" className={`${stepperType}` + ` green`}/>
                                                ) : (
                                                <span className={stepperType + ` green`} id={"Index-" + index}> {index + 1} </span>
                                                )}
                                            </div>
                                        )}
                                        </div>
                                    ) : (
                                    <div className="test -3b">
                                        <span className={`${stepperType}` + ` gray`} id={"Index-" + index}> {index + 1} </span>
                                    </div>
                                     )}
                                </div>
                                    ) : (
                                    <span className={`${stepperType}` + ` red`} id={"Index-" + index}> ! </span>
                                    )}
                            </div>
                                
                            )}
                           
                          
                    </div>
                    <div className={"description-area "} id={"description-" + `${index}`}>
                        <ul>
                            <li className="font-variant-main "> {item.title} </li>
                             {item.label === "error" ?(
                            <li className="font-variant-error"> Warning: Step {index + 1} </li>
                            ):(
                            <li className="font-variant-vertical "> {item.label} </li>
                            )}
                            {index === Currentindex && <li className="font-variant-vertical"> {item.description} </li>}
                        </ul>
                    {index == Currentindex && 
                        <div className={'flex-row-container button-vertical-margin'} >
                            {Finish == true ? (
                                <Button
                                    className="Stepper-Button-Reset"
                                    btnType='primary'
                                    data-testid='button-element-reset'
                                    onClick={reset}
                                    btnSize='sm'
                                    >
                                    {"Reset"}
                                </Button>
                            ) : (
                            <div className={'flex-row-container'} >
                            {/* Determine if we are starting from index 0 aka step 1 */}
                                {Initialize == false ? (
                                    <Button
                                        className="Stepper-Button-Left"
                                        btnType='primary'
                                        data-testid='button-element-previous'
                                        onClick={previous}
                                        >
                                        {props.buttonTitlePrev}
                                    </Button>
                                ) : (
                                    <Button
                                        className="Stepper-Button-Left"
                                        btnType='primary'
                                        data-testid='button-element-previous'
                                        disabled={true}
                                        >
                                    {props.buttonTitlePrev}
                                    </Button>
                                )}
                                                        
                                <span className="vertical-spacer"></span>

                            {/* Check to see if we pass in skipButton */}
                                {skipButtonActive == true &&  
                                    <Button
                                        className="Stepper-Button-Skip"
                                        btnType='primary'
                                        data-testid='button-element-skip'
                                        onClick={skip}
                                        btnSize='sm'
                                        >
                                        {"Skip"}
                                    </Button>
                                }

                            {/* if we hit the last step, do we display finish or not */}
                                {CurrentStep == totalSteps ? (
                                    <Button
                                        className="Stepper-Button-Right"
                                        btnType='primary'
                                        data-testid='button-element-finish'
                                        onClick={finishStepper}
                                        btnSize='sm'
                                    >
                                        {"Finish"}
                                    </Button>
                                ) : (
                                    <Button
                                        className="Stepper-Button-Right"
                                        btnType='primary'
                                        data-testid='button-element-next'
                                        onClick={next}
                                        btnSize='sm'
                                    >
                                    {props.buttonTitleNext}
                                    </Button>)}
                            </div>
                                        )}
                        </div>
                     }
                                   
                              
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
            )}

            {stepperOrientation  == 'row' && 
            <div className="display-in-row">
                {Finish == true ? (
                    <div className="stepper-display">
                        <p> You finished all your steps </p>
                    </div>
                ) : (
                    <div className="stepper-display">
                        <p> You are currently on step {CurrentStep} </p>
                    </div>
                )}
            </div>
            }

{/* if orientation == row  */}

            {stepperOrientation === 'row' &&
                <div className={'flex-row-container'} >
                        {Finish == true ? (
                            <Button
                                className="Stepper-Button-Reset"
                                btnType='primary'
                                data-testid='button-element-reset'
                                onClick={reset}
                                btnSize='sm'
                            >
                                {"Reset"}
                            </Button>
                        ) : (
                        <div className={'flex-row-container'} >
{/* Determine if we are starting from index 0 aka step 1 */}
                            {Initialize == false ? (
                                <Button
                                    className="Stepper-Button-Left"
                                    btnType='primary'
                                    data-testid='button-element-prev'
                                    onClick={previous}
                                    // onClick={props.prevOnClick}
                                >
                                {props.buttonTitlePrev}
                                </Button>
                            ) : (
                                <Button
                                    className="Stepper-Button-Left"
                                    btnType='primary'
                                    data-testid='button-element-prev'
                                    disabled={true}
                                >
                                {props.buttonTitlePrev}
                                </Button>
                            )}

                                <span className="spacer"></span>

{/* Check to see if we pass in skipButton */}
                            {skipButtonActive == true &&  
                                <Button
                                    className="Stepper-Button-Skip"
                                    btnType='primary'
                                    data-testid='button-element-skip'
                                    onClick={skip}
                                    // onClick={props.skipOnClick}
                                    btnSize='sm'
                                >
                                {"Skip Next"}
                                </Button>
                            }

{/* if we hit the last step, do we display finish or not */}
                            {CurrentStep == totalSteps ? (
                                <Button
                                    className="Stepper-Button-Right"
                                    btnType='primary'
                                    data-testid='button-element-finish'
                                    onClick={finishStepper}
                                    // onClick={props.finishOnClick}
                                    btnSize='sm'
                                    >
                                    {"Finish"}
                                </Button>
                                ) : (
                                <Button
                                    className="Stepper-Button-Right"
                                    btnType='primary'
                                    data-testid='button-element-next'
                                    onClick={next}
                                    // onClick={props.nextOnClick}
                                    btnSize='sm'
                                    >
                                    {props.buttonTitleNext}
                                </Button>)}
                        </div>
                        )}
                </div>
            }

            {stepperOrientation == 'vertical' && 
                <div className="display-in-vertical">
                {Finish === true && 
                    <div className="stepper-display">
                        <p> You finished all your steps </p>
                    </div>
                }
                </div> 
            }    
        </div>
        </div>
    return Stepper;
}

Stepper.defaultProps = {
    stepperType: 'circle',
    stepperOrientation: 'row',
    stepperSize: 'sm',
    allowSkip: false,
    stepperElements: [  
        {
        title: "Step 1",
        description: "",
        label: ""
       },
       {
         title: "Step 2",
         description: "",
         label: ''
       },
       {
         title: "Step 3",
       description: "",
       label: ""
       },
    ]
};

export default Stepper;