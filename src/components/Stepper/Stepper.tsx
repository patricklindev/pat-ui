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
    const [index, setCurrentIndex] = useState(0)
    const [active, setActive] = useState(0)
    const [dotComplete, setDotComplete] = useState('dot')
    let totalIndex = stepperElements!.length - 1

    function changeStatus(e) {
        console.log("Testing")
        console.log(index)
        console.log(e.target.id)
    }


    function completion() {
        let target = document.getElementById("Step-" + index)
        let htmlInner2 = document.getElementById("Solid-" + index)
        console.log(htmlInner2)
        if (stepperType == "circle") {
            if (index != totalIndex) {
                target?.setAttribute('class', "dot completed")
                htmlInner2?.setAttribute('class', "bar-completed")
            } else {
                target?.setAttribute('class', "dot-last completed")
                htmlInner2?.setAttribute('class', "bar-completed")
            }
        } else {
            if (index != totalIndex) {
                target?.setAttribute('class', "square completed")
                htmlInner2?.setAttribute('class', "bar-completed")
            } else {
                target?.setAttribute('class', "square-last progress-stepper completed")
                htmlInner2?.setAttribute('class', "bar-completed")
            }
        }
        if (index < totalIndex) {
            setCurrentIndex(index + 1)
        }

        if (index > totalIndex) {
            setCurrentIndex(0)
        }
    }

    function revert() {
        let target = document.getElementById("Step-" + index)
        let htmlInner2 = document.getElementById("Solid-" + index)
        if (stepperType == "circle") {
            if (index != totalIndex) {
                target?.setAttribute('class', "dot progress-stepper")
                htmlInner2?.setAttribute('class', "bar")
            } else {
                target?.setAttribute('class', "dot-last progress-stepper")
                htmlInner2?.setAttribute('class', "bar")
            }
        } else {
            if (index != totalIndex) {
                target?.setAttribute('class', "square progress-stepper")
                htmlInner2?.setAttribute('class', "bar")
            } else {
                target?.setAttribute('class', "square-last progress-stepper")
                htmlInner2?.setAttribute('class', "bar")
            }
        }
        setCurrentIndex(index - 1)


        if (index <= 0) {
            setCurrentIndex(0)
        }
    }

    function completionVertical() {
        let target = document.getElementById("Step-" + index)
        let htmlInner2 = document.getElementById("Solid-" + index)
        console.log(htmlInner2)
        if (stepperType == "circle") {
            target?.setAttribute('class', "dot-vertical completed")
            htmlInner2?.setAttribute('class', "bar-completed")
        } else {
            target?.setAttribute('class', "square-vertical progress-stepper completed")
            htmlInner2?.setAttribute('class', "bar-completed")

        }
        if (index < totalIndex) {
            setCurrentIndex(index + 1)
            setActive(index + 1)
        }

        if (index > totalIndex) {
            setCurrentIndex(0)
            setActive(0)
        }
    }

    function revertVertical() {
        let target = document.getElementById("Step-" + index)
        let htmlInner2 = document.getElementById("Solid-" + index)
        if (stepperType == "circle") {
            target?.setAttribute('class', "dot-vertical progress-stepper")
            htmlInner2?.setAttribute('class', "bar")
        } else {

            target?.setAttribute('class', "square-vertical progress-stepper")
            htmlInner2?.setAttribute('class', "bar")
        }
        setCurrentIndex(index - 1)
        setActive(index - 1)

        if (index <= 0) {
            setCurrentIndex(0)
            setActive(0)
        }
    }

    let Stepper =
        // JASON MA 6/29/2022
        // ====> Main Code for the Stepper Component
        // This component has to first detect which variation of stepper we are going to be using
        <div className='all-container' data-testid="stepper-element" >
            <div className="center-main-body">
                {/* First detect if the Stepper is going to be horizontal */}
                {stepperOrientation === 'row' ? (
                    <div className={styleClasses + ' flex-row-container'}>
                        {stepperElements!.map(function (item: any, index: any) {
                            console.log("This is the value", item)
                            console.log("This is the index", index)
                            return (
                                <div className="progress-container" >
                                    {index != totalIndex ? (
                                        <div className={'flex-row-container'} id={"item-" + index} onClick={changeStatus}>
                                            {stepperType === 'circle' ? (
                                                <span className="dot progress-stepper" id={"Step-" + index}> {index + 1} </span>
                                            ) : (
                                                <span className="square progress-stepper" id={"Step-" + index}> {index + 1} </span>
                                            )}
                                            <p className="progress-description"> {item.title} </p>
                                            <span className="bar" id={"Solid-" + index}> </span>
                                        </div>
                                    ) : (
                                        <div className={styleClasses + ' flex-row-container'}>
                                            {stepperType === 'circle' ? (
                                                <span className="dot-last progress-stepper " id={"Step-" + index}> {index + 1} </span>
                                            ) : (
                                                <span className="square-last progress-stepper " id={"Step-" + index}> {index + 1} </span>
                                            )}
                                            <p className="progress-description"> {item.title} </p>
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                ) : (
                    <div className={"progress-container"}>
                        
                        {/* If the stepper is not horizontal, then the stepper must be Vertical */}
                        {stepperElements!.map(function (item: any, index: any) {
                            return (
                                <div className={'flex-row-container'}>
                                    
                                    {stepperType === 'circle' ? (
                                        <span className="dot-vertical progress-stepper" id={"Step-" + index}> {index + 1} </span>
                                    ) : (
                                        <span className="square-vertical progress-stepper" id={"Step-" + index}> {index + 1} </span>
                                    )}
                                    {/* <div className = "container-vertical"> */}
                                    <div className="progress-description ">
                                        <p> {item.title} </p>
                                        {active == index ? (
                                            <div >
                                                <p> {item.description}</p>
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
                                        )}

                                    </div>
                                   
                                </div>
                                // </div>
                            )
                        })}
                        
                    </div>
                )}


                {stepperOrientation === 'row' ? (

                    <div className={'flex-row-container'} >
                        <Button
                            className="Stepper-Button-Left"
                            btnType='primary'
                            data-testid='button-element'
                            onClick={revert}
                        >
                            {props.buttonTitlePrev}
                        </Button>
                        <span className="spacer"></span>
                        <Button
                            className="Stepper-Button-Right"
                            btnType='primary'
                            data-testid='button-element'
                            onClick={completion}
                        >
                            {props.buttonTitleNext}
                        </Button>
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