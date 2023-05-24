import React, {FC, useState} from 'react';

import './_Stepper.scss'
import StepperStep from './StepperStep';
import StepperButtonGroup from './Stepper.ButtonGroup';
import StepperStepVertical from './StepperStepVertical';
import Button from '../Button';
import {forceReRender} from '@storybook/react';
import {classNames} from '../../utils/classNames';

interface IStepperProps {
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

    alternative?: boolean,
    verticalStepper?: boolean,
    stepsArr:string[],
    detectError?(step: number): boolean,
    detectOptional?(step: number) : boolean,
    customErrorSvg?: React.ReactNode,
    customFinishedSvg?: React.ReactNode,
    children?: React.ReactNode[],
}


export const Stepper: FC<IStepperProps> = ({
                                               horizontalContainerClassName,
                                               verticalContainerClassName,
                                               horizontalItemClassName,
                                               horizontalContentClassName,
                                               verticalItemStyle,
                                               iconContainerStyle,
                                               verticalTitleStyle,
                                               horizontalLabelClassName,
                                               horizontalTitleStyle,
                                               buttonGroupClassName,
                                               backButtonClassName,
                                               resetButtonClassName,
                                               skipButtonClassName,
                                               continueButtonClassName,
                                               alternative=false,
                                               verticalStepper=false,
                                               stepsArr,
                                               detectError,
                                               detectOptional,
                                               customErrorSvg,
                                               customFinishedSvg,
                                               children}) => {

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


    let verticalStyle = classNames('stepper-container--vertical');
    let horizontalStyle = classNames('stepper-container--horizontal');
    let horizontalItemStyle = classNames('stepper-item-container--horizontal');
    let horizontalContentStyle = classNames('stepper-content-container--horizontal');

    verticalStyle = verticalContainerClassName ? verticalStyle + ' ' + verticalContainerClassName : verticalStyle;
    horizontalStyle = horizontalContainerClassName ? horizontalStyle + ' ' + horizontalContainerClassName : horizontalStyle;
    horizontalItemStyle = horizontalItemClassName ? horizontalItemStyle + ' ' + horizontalItemClassName : horizontalItemStyle;
    horizontalContentStyle = horizontalContentClassName ? horizontalContentStyle + ' ' + horizontalContentClassName : horizontalContentStyle;

    return verticalStepper ? (
        <div className={verticalStyle}>
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
        <div className={horizontalStyle}>
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