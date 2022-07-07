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
    component?:any
}

export interface IStepperProps {
    color?:String
    className?: string;
    allowSkip?: boolean;
    StepperSize?: StepperSize;
    StepperType?: StepperType;
    StepperLinear?: StepperLinear;
    StepperOrientation: StepperOrientaion;
    StepperElements?: StepperObject[];
    buttonTitleNext?: string;
    buttonTitlePrev?: string;
}

export type patStepperProps = IStepperProps;

export const Stepper: FC<patStepperProps> = (props) => {

    const {
        className,
        color,
        StepperSize,
        StepperType,
        StepperElements,
        StepperOrientation,
        buttonTitleNext,
        buttonTitlePrev,
        StepperLinear,
        allowSkip,
        ...rest
    } = props;


    let styleClasses = classNames('Stepper', {
        [`Stepper-${StepperType}`]: true,
        [`Stepper-${StepperSize}`]: !!StepperSize
    });

    if (className) {
        styleClasses += ' ' + className;
    }

    const [Currentindex, setCurrentIndex] = useState(0)
    const [Count, setCount] = useState(1)
    const [triggerVertical, setTriggerVertical] = useState("flex-container")
    const [skipIndex, setSkipIndex] = useState<number>(9999999)
    const [SkipIndexArray, setSkipIndexArray] = useState<number[]>([])
    const [skipButtonActive, setSkipButtonActive] = useState(false)
    const [Initialize, setIntialize] = useState(true)
    const [Finish, setFinish] = useState(false);
    let totalSteps = StepperElements!.length
    let renderSteps = totalSteps - 1

        useEffect(() => {
        if (allowSkip == true) {
            setSkipButtonActive(true)
        }
        if (StepperOrientation == 'vertical') {
            setTriggerVertical("vertical");
        }
        
        
    }, []);


    function next(value:number) {
        if (Currentindex >= renderSteps) {
            setCurrentIndex(renderSteps)
        } else { 
            setCurrentIndex(Currentindex+value)
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
        if (Currentindex <= 0) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(Currentindex-value)
        }
        
    }

    let Stepper =
        <div className="flex-container">
        <div className={"center-main-body " + {StepperOrientation}}>
         {triggerVertical != 'vertical' &&
            <div className="component-display">
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

            <div className={triggerVertical}> 
             {StepperElements!.map(function (item: any, index: number) {
                return (
                        <div className={"description-area " + StepperSize } >
                            
                                {index == Currentindex ? (
                                    <div>
                                     <p className={`font-variant-main `+ color}> {item.title} </p>
                                     </div>
                                ): (
                                    <p className="font-variant-main"> {item.title} </p>
                                )}
                                    <p className={`font-variant-secondary `}> {item.label} </p>
                            
                        </div> 
                )
             })}
             </div>
             <div className="flex-container">    
                        <Button
                                className={props.buttonTitlePrev}
                                btnType='primary'
                                data-testid='button-element-prev'
                                onClick={()=>prev(1)}
                                btnSize='sm'
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
                                    btnSize='sm'
                                >
                                {"Skip Next"}
                                </Button>
                        }
                        <span className="spacer"></span>
                        <Button
                                className={props.buttonTitleNext}
                                btnType='primary'
                                data-testid='button-element-next'
                                onClick={()=>next(Count)}
                                btnSize='sm'
                                >
                                {props.buttonTitleNext}
                        </Button>
            </div>
        </div>
        {triggerVertical == 'vertical' &&
            <div className="component-display">
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
    color:'green',
    StepperType: 'circle',
    StepperOrientation: 'row',
    StepperSize: 'sm',
    allowSkip: false,
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