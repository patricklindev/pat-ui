import { nextTick } from 'process';
import React, { FC, ReactNode, useEffect, useState } from 'react';
import { classNames } from '../../utils/classNames';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

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
        FinishMessage,
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
    const [Initialize, setInitialize] = useState(true)
    let totalSteps = StepperElements!.length
    let renderSteps = totalSteps - 1

        useEffect(() => {

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


    function next(value:number) {
        // let direction='next'
        if (Currentindex >= renderSteps) {
            setCurrentIndex(renderSteps)
        } else { 
            setCurrentIndex(Currentindex+value)
        }
    }

    function skip(value:number) {
        
        if (Currentindex >= renderSteps) {
            setCurrentIndex(renderSteps)
        } else if (Currentindex === renderSteps-1){ 
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
    }

    let Stepper =
        <div className="flex-container">
        <div className={"center-main-body " + `${StepperOrientation}`} data-testid="center-main-body">
         {StepperOrientation != 'vertical' &&
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

            <div className={` ${StepperOrientation != 'row' ? "vertical" : "flex-container"}`}
            data-testid="element-render-2">
             {StepperElements!.map(function (item: any, index: number) {
                return (
                    <div>
                        {StepperOrientation == 'vertical' &&
                        <div className={"description-area " + styleClasses }
                        style={{height: `${index === Currentindex ? '30vh' : '20vh'}` }}
                        id={"description-area-" + index } 
                        data-testid={`description-area-` + `${index}`}>
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

                                <div className="label-container" data-testId={`error-check-` + `${index}`}>
                                {item.label == 'error' ? (
                                    <p className={`font-variant-secondary red`} > Error </p>
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
                        }
                         {StepperOrientation == 'row' &&
                        <div className={"description-area " + styleClasses }
                        id={"description-area-" + index } 
                        data-testid={`description-area-` + `${index}`}>
                            
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

                                <div className="label-container" data-testId={`error-check-` + `${index}`}>
                                {item.label == 'error' ? (
                                    <p className={`font-variant-secondary red`} > Error </p>
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
                        }
                    </div>  
                )
             })}
             </div>

             {Currentindex == renderSteps  &&
                                <div className="flex-container">
                                     {FinishMessage}
                                </div>
                                 }
          

             <div className={"flex-container"}>  
                        <Button
                                className={props.buttonTitlePrev}
                                btnType='primary'
                                data-testid='button-element-prev'
                                onClick={()=>prev(1)}
                                btnSize={StepperSize}
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
                                    btnSize={StepperSize}
                                >
                                {"Skip Next"}
                                </Button>
                        }
                        <Button
                                className={props.buttonTitleNext}
                                btnType='primary'
                                data-testid='button-element-next'
                                onClick={()=>next(1)}
                                btnSize={StepperSize}
                                >
                                {props.buttonTitleNext}
                        </Button>
            </div>
        </div>

        {StepperOrientation === 'vertical' &&
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
            title: "Default array length 3",
            description: "",
            label: "Vertical for arrays > 3",
            icon: <Icon name="check"  />,
            iconCompleted: <Icon name="check" color="green"/>
           },
           {
             title: "Define props in component",
             description: "",
             label: 'Mandatory',
             icon: <Icon name="check"  />,
             iconCompleted: <Icon name="check" color="green"/>
           },
           {
             title: "Feed an string array",
           description: "",
           label: "Keep strings short",
           icon: <Icon name="check"  />,
           iconCompleted: <Icon name="check" color="green"/>
           },
    ]
};

export default Stepper;