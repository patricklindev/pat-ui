import React, {FC, useState} from "react";

import './_Stepper.scss'
import StepperStep from "./StepperStep";
import StepperButtonGroup from "./Stepper.ButtonGroup";
import StepperStepVertical, {StepInfoObj} from "./StepperStepVertical";
import Button from "../Button";

type stepsArrElement = string | StepInfoObj;

interface IStepperProps {
    className?: string,
    alternative?: boolean,
    verticalStepper?: boolean,
    stepsArr: stepsArrElement[],
}



export const Stepper: FC<IStepperProps> = (props) => {
    const {className, alternative, verticalStepper, stepsArr} = props;
    let styleClasses;

    const [activeStep, setActiveStep] = useState<number>(0);
    const [skipped, setSkipped] = useState(new Set<number>());


    const checkIsOptional = (step: number) => {
        return step === 1;
    }

    const checkIsError = (step: number) => {
        return  step === 1;
    }

    const checkIsAlternative = () => {
        return alternative? alternative : false;
    }

    const checkIsSKipped = (step: number) => {
        return skipped.has(step);
    }

    const handleSkipClick = () => {
        if (!checkIsOptional(activeStep)) {
            throw new Error("You can't skip a step that is not optional.")
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
        if (checkIsError(step) && checkIsSKipped(step)) {
            setSkipped(prevState => {
                const newSkipped = new Set(prevState.values())
                newSkipped.delete(activeStep);
                return newSkipped;
            })
        }
        setActiveStep(prevState => prevState + 1);
    }

    const handleResetClick = () => {
        setSkipped(new Set());
        setActiveStep(0);
    }


    let Stepper = verticalStepper ? (
        <div className='stepper-container--vertical'>
            {stepsArr.map((item, index) => {
                const stepInfo = item as StepInfoObj;
                const {label, description} = stepInfo;
                const isOptional: boolean = checkIsOptional(index);
                const isError: boolean = checkIsError(index);
                const isAlternative: boolean = checkIsAlternative();

                return (
                    <StepperStepVertical
                        key={label}
                        label={label}
                        index={index}
                        activeStep={activeStep}
                        isOptional={isOptional}
                        isAlternative={isAlternative}
                        isError={isError}
                        totalSteps={stepsArr.length - 1}
                        description={description}
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
        <div className='stepper-container--horizontal'>
            <div className='stepper-item-container--horizontal'>
                {stepsArr.map((item, index) => {
                    const label = item as string;
                    const isOptional: boolean = checkIsOptional(index);
                    const isError: boolean = checkIsError(index);
                    const isAlternative: boolean = checkIsAlternative();

                    return (
                        <React.Fragment key={label} >
                            <StepperStep
                                label={label}
                                index={index}
                                activeStep={activeStep}
                                isOptional={isOptional}
                                isAlternative={isAlternative}
                                isError={isError}
                                checkIsSKipped={checkIsSKipped}
                            />
                            {index === stepsArr.length - 1 ? null : <hr/>}
                        </React.Fragment>
                    )
                })}
            </div>


            <div>
                {activeStep === stepsArr.length ? <p>All Steps completed</p> : <p>Step {activeStep + 1}</p>}
            </div>
            <React.Fragment>
                <StepperButtonGroup
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


    return Stepper;
}

export default Stepper;