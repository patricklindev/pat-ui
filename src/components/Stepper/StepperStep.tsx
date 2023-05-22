import React, {FC} from 'react';
import useIconElement from "./useIconElement";
import {classNames} from "../../utils/classNames";


export interface StepperStepProps {
    label: string,
    index: number,
    activeStep: number,
    isOptional: boolean,
    isAlternative: boolean,
    isError: boolean,
    checkIsSKipped(step: number): boolean,
}
const StepperStep:FC<StepperStepProps> = (props) => {
    const {label, index, activeStep, isOptional, isAlternative, isError, checkIsSKipped,} = props;
    const {IconLabel} = useIconElement(isError, activeStep, index);

    let styleClasses = classNames('stepper-label-container', {
        ['stepper-label-container-alternative']: isAlternative,
        ['stepper-label-container-finished']: activeStep >= index,
    })

    return (
        <div className={styleClasses}>
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
    );
};

export default StepperStep;