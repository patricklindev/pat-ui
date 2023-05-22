import React, {FC} from 'react';
import {classNames} from "../../utils/classNames";
import Button from "../Button";
import useIconElement from "./useIconElement";

export interface StepInfoObj {
    label: string,
    description: string,
}

interface verticalStepperProps {
    label: string,
    description:string,
    index: number,
    totalSteps: number,
    activeStep: number,
    isOptional: boolean,
    isAlternative: boolean,
    isError: boolean,
    handleBackClick(): void,
    handleSkipClick(): void,
    handleNextClick(step: number): void,
    checkIsOptional(step: number): boolean,
    checkIsSKipped(step: number): boolean,
}

const StepperStepVertical:FC<verticalStepperProps> = (props) => {
    const {
        label,
        description,
        index,
        totalSteps,
        activeStep,
        isOptional,
        isError,
        handleBackClick,
        handleNextClick,
        handleSkipClick,
        checkIsOptional,
        checkIsSKipped,
    } = props;

    let styleClasses;

    styleClasses = classNames('stepper-item-container', {
        ['stepper-label-container-finished']: activeStep >= index,
    })

    const {IconLabel} = useIconElement(isError, activeStep, index);

    return (
        <div className={styleClasses}>

            <div className='stepper-label-container'>
                <div className={activeStep === index ?
                    isError ? 'stepper-icon-container stepper-icon-container-active stepper-icon-container-error' : 'stepper-icon-container stepper-icon-container-active'
                    : isError ? 'stepper-icon-container stepper-icon-container-error' : 'stepper-icon-container'}>
                    {IconLabel}
                </div>
                <div className={isError ? 'stepper-title-container stepper-title-error-container' : 'stepper-title-container'}>
                    <p>{label}</p>
                    {isOptional ? <p className='stepper-step-optional'>Optional {checkIsSKipped(index) ? '(skipped)' : null}</p> : null}
                </div>
            </div>

            {activeStep === index ? (
                <div className='stepper-description-buttons-container--vertical stepper-label-container-active'>
                    <div className='stepper-description-container--vertical'>
                        {description}
                    </div>
                    <div className='stepper-buttons-container--vertical'>
                        {checkIsOptional(activeStep) ? <Button className='stepper-skip-button' onClick={handleSkipClick}>Skip</Button> : null}
                        <div>
                            <Button className='stepper-continue-button' onClick={() => handleNextClick(index)}>{activeStep === totalSteps ? 'FINISH' : 'CONTINUE'}</Button>
                            <Button className='stepper-back-button' disabled={activeStep === 0} onClick={handleBackClick}>Back</Button>
                        </div>
                    </div>

                </div>
            ) : null}

            {index !== totalSteps ? <div className='stepper-item-inactive-place-holder--vertical'></div> : null}

        </div>
    );
};

export default StepperStepVertical;