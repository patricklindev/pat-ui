import { nextTick } from 'process';
import React, { FC, ReactNode, useEffect, useState } from 'react';
import { classNames } from '../../utils/classNames';
import Button from '../Button/Button';


export type StepperSize = 'lg' | 'md' | 'sm'
export type StepperType = "circle" | "square" | "progress"
export type StepperLinear = "linear" | "nonlinear"
export type StepperOrientaion = "row" | "vertical"

export type StepperObject = {
    title?: string;
    description?: any;
    label?: any;
    component?:any;
    icon?:any;
    iconCompleted?:any;
}

export interface IStepperProps {
    className?: string;
    allowSkip?: boolean;
    StepperSize?: StepperSize;
    // StepperType?: StepperType;
    // StepperLinear?: StepperLinear;
    FinishMessage?: any;
    StepperOrientation: StepperOrientaion;
    StepperElements?: StepperObject[];
    buttonTitleNext?: string;
    buttonTitlePrev?: string;
}

export type patStepperProps = IStepperProps;

export const Stepper: FC<patStepperProps> = (props) => {

    const {
        className,
        StepperSize,
        // StepperType,
        StepperElements,
        StepperOrientation,
        buttonTitleNext,
        buttonTitlePrev,
        // StepperLinear,
        allowSkip,
        ...rest
    } = props;


    let styleClasses = classNames('Stepper', {
        [`Stepper-${StepperSize}`]: !!StepperSize
    });

    if (className) {
        styleClasses += ' ' + className;
    }

    const [Currentindex, setCurrentIndex] = useState(0)
    const [triggerVertical, setTriggerVertical] = useState("flex-container")
    const [Initialize, setInitialize] = useState(true)
    let totalSteps = StepperElements!.length
    let renderSteps = totalSteps - 1

        useEffect(() => {
        // if (allowSkip === true) {
        //     setSkipButtonActive(true)
        // }

        if (StepperOrientation === 'vertical') {
            setTriggerVertical("vertical");
        }
        
        if (StepperOrientation === 'vertical') {
            let currentTarget = 'description-area-' + `${Currentindex}`
            let currentElement = document.getElementById(currentTarget)
            currentElement!.style.height="20vh"
        }
        
    }, []);

    useEffect(() => {  
        if (Currentindex > 0) {
        setInitialize(false) 
        }

        if (Currentindex === 0) {
            setInitialize(true) 
            }
    }, [Currentindex]);


    function expand(direction:string,value:number) {
        console.log("Currentindex", Currentindex)
        console.log("Direction",direction)
        console.log("Value of increment",value)

        let current = 'description-area-' + `${Currentindex}`
        let currentStep = document.getElementById(current)
        let previous = 'description-area-' + `${Currentindex-1}`
        let previousStep = document.getElementById(previous)
        let next = 'description-area-' + `${Currentindex+1}`
        let nextStep = document.getElementById(next)
        let skipto = 'description-area-' + `${Currentindex+2}`
        let skiptoStep = document.getElementById(skipto)

        if (direction === 'back') {
            if(Currentindex===0) {
            currentStep!.style.height="25vh"
            currentStep!.style.zIndex="0"
            } else {
                currentStep!.style.height="20vh"
                previousStep!.style.height="25vh"
                currentStep!.style.zIndex="0"
                previousStep!.style.zIndex="1" 
            }
        
        }
        if (direction === 'next') {
            if (Currentindex < renderSteps) {
            currentStep!.style.height="20vh"
            currentStep!.style.zIndex="0"
            nextStep!.style.height="25vh"
            nextStep!.style.zIndex="1" 
            }
        }

        if (direction === 'skip') {
            currentStep!.style.height="20vh"
            nextStep!.style.height="20vh"
            skiptoStep!.style.height="25vh"
            skiptoStep!.style.zIndex="0"  
        }  
    }

    function next(value:number) {
        let direction='next'
        if (Currentindex >= renderSteps) {
            setCurrentIndex(renderSteps)
        } else { 
            setCurrentIndex(Currentindex+value)
        }

        if (StepperOrientation === 'vertical') {
            expand(direction,value)
        }
    }

    function skip(value:number) {
        
        if (Currentindex >= renderSteps) {
            setCurrentIndex(renderSteps)
        } else if (Currentindex === renderSteps-1){ 
           console.log("you cannot skip past")
        } else {
            setCurrentIndex(Currentindex+value)
            if (StepperOrientation === 'vertical') {
                expand('skip',value)
            }
        }

       
        
    }

    function prev(value:number) {
        let direction='back'
        if (Currentindex <= 0) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(Currentindex-value)
        }
        
        if (StepperOrientation === 'vertical') {
            expand(direction,value)
        }
    }

    let Stepper =
        <div className="flex-container">
        <div className={"center-main-body " + `${StepperOrientation}`} data-testid="center-main-body">
         {triggerVertical != 'vertical' &&
            <div className="component-display" data-testid="element-render-1" >
                {StepperElements!.map(function (item: any, index: number) {
                    return (
                        <div className="component-display-inner">
                            {index === Currentindex &&
                                <div className="component-display-inner">
                                {item.component}
                                </div>
                            }
                            
                        </div>
                    )})}
            </div>
        }

            <div className={triggerVertical} data-testid="element-render-2">
             {StepperElements!.map(function (item: any, index: number) {
                return (
                        <div className={"description-area " + StepperSize } id={"description-area-" + index } data-testid={`description-area-` + `${index}`}>
                            <div className={"expand"} id={`expand-` + index} data-testid={`expand-` + `${index}`}>
                                {index === Currentindex ? (
                                    <div>
                                     <div className="flex-container">
                                        {item.iconCompleted}
                                     </div>
                                     <p className={`font-variant-main`}> {item.title} </p>
                                     </div>
                                ): (
                                    <div>
                                    <div className="flex-container">
                                        {item.icon}
                                     </div>
                                    <p className="font-variant-main"> {item.title} </p>
                                    </div>
                                )}

                                <div className="label-container">
                                {item.label === 'error' ? (
                                    <p className={`font-variant-secondary red`}> {item.label} </p>
                                ) : (
                                    <p className={`font-variant-secondary `}> {item.label} </p>
                                )}
                                </div>

                                {index === Currentindex && 
                                <div>
                                    <p className={`font-variant-secondary `}> {item.description}</p>
                                </div>
                                }
                            </div>
                        </div> 
                )
             })}
             </div>

            {Currentindex === StepperElements?.length &&
             <div className="flex-container">
                    {props.FinishMessage}
             </div>
            }

             <div className={"flex-container"}>  
                        <Button
                                className={props.buttonTitlePrev}
                                btnType='primary'
                                data-testid='button-element-prev'
                                onClick={()=>prev(1)}
                                btnSize={'sm'}
                                disabled={Initialize}
                                >
                                {props.buttonTitlePrev}
                        </Button>
                        
                        {allowSkip && 
                       
                                <Button
                                    className="Stepper-Button-Skip"
                                    btnType='primary'
                                    data-testid='button-element-skip'
                                    onClick={()=>skip(2)}
                                    // onClick={props.skipOnClick}
                                    btnSize={'sm'}
                                >
                                {"Skip Next"}
                                </Button>
                            
                            
                        }
                        <Button
                                className={props.buttonTitleNext}
                                btnType='primary'
                                data-testid='button-element-next'
                                onClick={()=>next(1)}
                                btnSize={'sm'}
                                >
                                {props.buttonTitleNext}
                        </Button>
            </div>
        </div>

        {triggerVertical === 'vertical' &&
            <div className="component-display" data-test-id="element-render-3">
                {StepperElements!.map(function (item: any, index: number) {
                    return (
                        <div className="component-display-inner">
                            {index===Currentindex &&
                                <div className="component-display-inner">
                                {item.component}
                                </div>
                            }
                        </div>
                    )})}
            </div>
        }
        </div>
    return Stepper;
}

Stepper.defaultProps = {
    // StepperType: 'circle',
    StepperOrientation: 'row',
    StepperSize: 'sm',
    allowSkip: false,
    FinishMessage: "Completed all steps",
    buttonTitleNext:"Next",
    buttonTitlePrev:"Back",
    StepperElements: [  
        {
        title: "Step 1",
        description: "Vertical only",
        label: "Label 1",
        component: ""
       },
       {
         title: "Step 2",
         description: "",
         label: "Label 2",
         component: ""
       },
       {
         title: "Step 3",
       description: "",
       label: "Label 3",
       component: ""
       },
    ]
};

export default Stepper;