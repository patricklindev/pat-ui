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


    // let styleClasses = classNames('Stepper', {
    //     [`Stepper-${StepperType}`]: true,
    //     [`Stepper-${StepperSize}`]: !!StepperSize
    // });

    // if (className) {
    //     styleClasses += ' ' + className;
    // }

    const [Currentindex, setCurrentIndex] = useState(0)
    const [triggerVertical, setTriggerVertical] = useState("flex-container")

    const [skipButtonActive, setSkipButtonActive] = useState(false)
    // LEGACY CODE FROM PREVIOUS VERSION OF STEPPER
    // const [skipIndex, setSkipIndex] = useState<number>(9999999)
    // const [SkipIndexArray, setSkipIndexArray] = useState<number[]>([])
    // const [Initialize, setIntialize] = useState(true)
    // const [Finish, setFinish] = useState(false);
    let totalSteps = StepperElements!.length
    let renderSteps = totalSteps - 1

        useEffect(() => {
        if (allowSkip == true) {
            setSkipButtonActive(true)
        }
        if (StepperOrientation == 'vertical') {
            setTriggerVertical("vertical");
        }
        
        if (StepperOrientation == 'vertical') {
            let currentTarget = 'description-area-' + `${Currentindex}`
            let currentElement = document.getElementById(currentTarget)
            currentElement!.style.height="100px"
        }
        
    }, []);


    function expand(direction:string,value:number) {
        console.log("Currentindex", Currentindex)
        console.log("Direction",direction)
        console.log("Value of increment",value)
        if (direction == 'back') {
       
           

            if(Currentindex==0) {
            let nextTarget = 'description-area-' + `${Currentindex}`
            let nextElement = document.getElementById(nextTarget)
            nextElement!.style.height="150px"
            nextElement!.style.zIndex="0"
            } else {
                let currentTarget = 'description-area-' + `${Currentindex}`
                let currentElement = document.getElementById(currentTarget)
                let previousTarget = 'description-area-' + `${Currentindex-1}`
                let previousElement = document.getElementById(previousTarget)
                currentElement!.style.height="75px"
                previousElement!.style.height="150px"
                currentElement!.style.zIndex="1"
                previousElement!.style.zIndex="0" 
            }
        
        }

        if (direction == 'next') {
           

            if(Currentindex==0) {
            let previousTarget = 'description-area-0'
            let previousElement = document.getElementById(previousTarget)
            let currentTarget = 'description-area-1'
            let currentElement = document.getElementById(currentTarget)
            previousElement!.style.height="75px"
            currentElement!.style.height="150px"
            currentElement!.style.zIndex="1"
            previousElement!.style.zIndex="0" 
            } else {
            let previousTarget = 'description-area-' + `${Currentindex}`
            let nextTarget = 'description-area-' + `${Currentindex+1}`
            let previousElement = document.getElementById(previousTarget)
            let nextElement = document.getElementById(nextTarget)
            nextElement!.style.height="150px"
            previousElement!.style.height="75px"
            previousElement!.style.zIndex="0"  
            nextElement!.style.zIndex="1"  
            }
        
        }
        
    }

    function next(value:number) {
        let direction='next'
        if (Currentindex >= renderSteps) {
            setCurrentIndex(renderSteps)
        } else { 
            setCurrentIndex(Currentindex+value)
        }

        if (StepperOrientation == 'vertical') {
            expand(direction,value)
        }
    }

    function skip(value:number) {
        
        if (Currentindex >= renderSteps) {
            setCurrentIndex(renderSteps)
        } else if (Currentindex == renderSteps-1){ 
           console.log("you cannot skip past")
        } else {
            setCurrentIndex(Currentindex+value)
        }
        
    }

    function prev(value:number) {
        let direction='back'
        if (Currentindex <= 0) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(Currentindex-value)
        }
        
        if (StepperOrientation == 'vertical') {
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
                            {index===Currentindex &&
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
                            
                                {index == Currentindex ? (
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

                                {item.label == 'error' ? (
                                    <p className={`font-variant-secondary red`}> {item.label} </p>
                                ) : (
                                    <p className={`font-variant-secondary `}> {item.label} </p>
                                )}

                                {index == Currentindex && 
                                <div>
                                    <p className={`font-variant-secondary `}> {item.description}</p>
                                </div>
                                }

                        </div> 
                )
             })}
             </div>

            {Currentindex == StepperElements?.length &&
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
                                >
                                {props.buttonTitlePrev}
                        </Button>
                        <span className="spacer"></span>
                        {skipButtonActive == true &&  
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
                        <span className="spacer"></span>
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
        {triggerVertical == 'vertical' &&
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