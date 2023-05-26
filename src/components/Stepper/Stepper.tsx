import React, {FC, useEffect, useState} from 'react';

import StepperStep from './StepperStep';
import StepperButtonGroup from './Stepper.ButtonGroup';
import StepperStepVertical from './StepperStepVertical';
import Button from '../Button';
import {forceReRender} from '@storybook/react';


interface className {
    horizontalContainerClassName?: string | undefined,
    verticalContainerClassName?: string | undefined,
    horizontalItemClassName?: string | undefined,
    horizontalContentClassName?: string | undefined,
    verticalItemStyle?: string | undefined,
    iconContainerStyle?: string | undefined,
    verticalTitleStyle?: string | undefined,
    horizontalLabelClassName?: string | undefined,
    horizontalTitleStyle?: string | undefined,
    buttonGroupClassName?: string | undefined,
    backButtonClassName?: string | undefined,
    resetButtonClassName?: string | undefined,
    skipButtonClassName?: string | undefined,
    continueButtonClassName?: string | undefined,
}

interface IStepperProps {

    className?: className,
    initActiveStep?: number,
    alternative?: boolean,
    verticalStepper?: boolean,
    stepsArr: string[],
    detectError?(step: number): boolean,
    detectOptional?(step: number): boolean,
    customErrorSvg?: React.ReactNode,
    customFinishedSvg?: React.ReactNode,
    children?: React.ReactNode[],

}


export const Stepper: FC<IStepperProps> = ({
                                               className,
                                               initActiveStep,
                                               alternative = false,
                                               verticalStepper = false,
                                               stepsArr,
                                               detectError,
                                               detectOptional,
                                               customErrorSvg,
                                               customFinishedSvg,
                                               children
                                           }) => {

    const [activeStep, setActiveStep] = useState<number>(0);
    const [skipped, setSkipped] = useState(new Set<number>());
    const [errorSteps, setErrorSteps] = useState(new Set<number>());

    const checkIsOptional = (step: number): boolean => {
        if (detectOptional) {
            return detectOptional(step);
        } else {
            return false;
        }
    }

    const checkIsError = (step: number) => {
        if (detectError) {
            return detectError(step);
        } else {
            return false;
        }
    }

    const checkIsSKipped = (step: number) => {
        return skipped.has(step);
    }

    const handleSkipClick = () => {
        if (!checkIsOptional(activeStep)) {
            throw new Error('You can\'t skip a step that is not optional.')
        }
        setActiveStep(prevState => prevState + 1);
        setSkipped(prevState => {
            const newSkipped = new Set(prevState.values())
            newSkipped.add(activeStep);
            return newSkipped;
        })
    }

    const handleBackClick = () => {
        if (checkIsSKipped(activeStep - 1)) {
            setSkipped(prevState => {
                const newSkipped = new Set(prevState.values())
                newSkipped.delete(activeStep - 1);
                return newSkipped;
            })
        }
        setActiveStep(prevState => prevState - 1);

    }

    const handleNextClick = (step: number) => {
        const isError = checkIsError(step);
        if (!isError) {
            setActiveStep(prevState => prevState + 1);
        } else {
            setErrorSteps(errorSteps.add(step));
            forceReRender();
        }
    }

    const handleResetClick = () => {
        setSkipped(new Set());
        setErrorSteps(new Set());
        setActiveStep(0);
    }

    useEffect(() => {
        if (initActiveStep || initActiveStep === 0) {
            if (initActiveStep <= stepsArr.length - 1) {
                setActiveStep(initActiveStep)
            }
        }
    }, [initActiveStep])

    let horizontalContainerClassName: string | undefined, verticalContainerClassName: string | undefined,
        horizontalItemClassName: string | undefined, horizontalContentClassName: string | undefined,
        verticalItemStyle: string | undefined, iconContainerStyle: string | undefined,
        verticalTitleStyle: string | undefined, horizontalLabelClassName: string | undefined,
        horizontalTitleStyle: string | undefined, buttonGroupClassName: string | undefined,
        backButtonClassName: string | undefined, resetButtonClassName: string | undefined,
        skipButtonClassName: string | undefined, continueButtonClassName: string | undefined;

    if (className) {
        horizontalContainerClassName = className.horizontalContainerClassName ? className.horizontalContainerClassName : undefined;
        verticalContainerClassName = className.verticalContainerClassName ? className.verticalContainerClassName : undefined;
        horizontalItemClassName = className.horizontalItemClassName ? className.horizontalItemClassName : undefined;
        horizontalContentClassName = className.horizontalContentClassName ? className.horizontalContentClassName : undefined;
        verticalItemStyle = className.verticalItemStyle ? className.verticalItemStyle : undefined;
        iconContainerStyle = className.iconContainerStyle ? className.iconContainerStyle : undefined;
        verticalTitleStyle = className.verticalTitleStyle ? className.verticalTitleStyle : undefined;
        horizontalLabelClassName = className.horizontalLabelClassName ? className.horizontalLabelClassName : undefined;
        horizontalTitleStyle = className.horizontalTitleStyle ? className.horizontalTitleStyle : undefined;
        buttonGroupClassName = className.buttonGroupClassName ? className.buttonGroupClassName : undefined;
        backButtonClassName = className.backButtonClassName ? className.backButtonClassName : undefined;
        resetButtonClassName = className.resetButtonClassName ? className.resetButtonClassName : undefined;
        skipButtonClassName = className.skipButtonClassName ? className.skipButtonClassName : undefined;
        continueButtonClassName = className.continueButtonClassName ? className.continueButtonClassName : undefined;
    }


    let verticalStyle = 'stepper-container--vertical';
    let horizontalStyle = 'stepper-container--horizontal';
    let horizontalItemStyle = 'stepper-item-container--horizontal';
    let horizontalContentStyle = 'stepper-content-container--horizontal';

    verticalStyle = verticalContainerClassName ? verticalStyle + ' ' + verticalContainerClassName : verticalStyle;
    horizontalStyle = horizontalContainerClassName ? horizontalStyle + ' ' + horizontalContainerClassName : horizontalStyle;
    horizontalItemStyle = horizontalItemClassName ? horizontalItemStyle + ' ' + horizontalItemClassName : horizontalItemStyle;
    horizontalContentStyle = horizontalContentClassName ? horizontalContentStyle + ' ' + horizontalContentClassName : horizontalContentStyle;

    return verticalStepper ? (
        <div data-testid='vertical-stepper' className={verticalStyle}>
            {stepsArr.map((item, index) => {
                const label = item;
                const description = children? children[index] : null;
                const isOptional: boolean = checkIsOptional(index);
                const isError: boolean = errorSteps.has(index);
                return (
                    <StepperStepVertical
                        verticalItemStyle={verticalItemStyle}
                        iconContainerStyle={iconContainerStyle}
                        verticalTitleStyle={verticalTitleStyle}
                        key={label}
                        label={label}
                        index={index}
                        activeStep={activeStep}
                        isOptional={isOptional}
                        isAlternative={alternative}
                        isError={isError}
                        totalSteps={stepsArr.length - 1}
                        description={description}
                        customErrorSvg={customErrorSvg}
                        customFinishedSvg={customFinishedSvg}
                        handleBackClick={handleBackClick}
                        handleNextClick={handleNextClick}
                        handleSkipClick={handleSkipClick}
                        checkIsOptional={checkIsOptional}
                        checkIsSKipped={checkIsSKipped}
                    />
                )
            })}

            {activeStep > stepsArr.length - 1 ? (
                <div>
                    <p>All steps completed - you're finished</p>
                    <Button onClick={handleResetClick}>RESET</Button>
                </div>
            ) : null}
        </div>
    ) : (
        <div data-testid='horizontal-stepper' className={horizontalStyle}>
            <div className={horizontalItemStyle}>
                {stepsArr.map((item, index) => {
                    const label = item as string;
                    const isOptional: boolean = checkIsOptional(index);
                    const isError: boolean = errorSteps.has(index);
                    return (
                        <React.Fragment key={label}>
                            <StepperStep
                                horizontalLabelClassName={horizontalLabelClassName}
                                iconContainerStyle={iconContainerStyle}
                                horizontalTitleStyle={horizontalTitleStyle}
                                label={label}
                                index={index}
                                activeStep={activeStep}
                                isOptional={isOptional}
                                isAlternative={alternative}
                                isError={isError}
                                customErrorSvg={customErrorSvg}
                                customFinishedSvg={customFinishedSvg}
                                checkIsSKipped={checkIsSKipped}
                            />
                            {index === stepsArr.length - 1 ? null : <hr/>}
                        </React.Fragment>
                    )
                })}
            </div>


            <div className={horizontalContentStyle}>
                {activeStep === stepsArr.length ? <div>All Steps completed</div> : <div>{children ? children[activeStep] : null}</div>}
            </div>
            <React.Fragment>
                <StepperButtonGroup
                    buttonGroupClassName={buttonGroupClassName}
                    backButtonClassName={backButtonClassName}
                    resetButtonClassName={resetButtonClassName}
                    skipButtonClassName={skipButtonClassName}
                    continueButtonClassName={continueButtonClassName}
                    activeStep={activeStep}
                    totalSteps={stepsArr.length - 1}
                    handleBackClick={handleBackClick}
                    handleResetClick={handleResetClick}
                    handleNextClick={handleNextClick}
                    handleSkipClick={handleSkipClick}
                    checkIsOptional={checkIsOptional}
                />
            </React.Fragment>
        </div>
    );
}

export default Stepper;