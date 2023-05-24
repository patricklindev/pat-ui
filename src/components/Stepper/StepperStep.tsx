import React, {FC} from 'react';
import useIconElement from './useIconElement';
import {classNames} from '../../utils/classNames';


export interface StepperStepProps {
    className?: string,
    label: string,
    index: number,
    activeStep: number,
    isOptional: boolean,
    isAlternative: boolean,
    isError: boolean,
    checkIsSKipped(step: number): boolean,
    customErrorSvg?: React.ReactNode,
    customFinishedSvg?: React.ReactNode,
}
const StepperStep:FC<StepperStepProps> = (props) => {
    const {className, label, index, activeStep, isOptional, isAlternative, isError, checkIsSKipped, customErrorSvg, customFinishedSvg} = props;
    const {IconLabel} = useIconElement(isError, activeStep, index, customErrorSvg, customFinishedSvg);

    let styleClasses = classNames('stepper-label-container', {
        ['stepper-label-container-alternative']: isAlternative,
        ['stepper-label-container-finished']: activeStep >= index,
    })

    let iconContainerClasses = classNames('stepper-icon-container', {
        ['stepper-icon-container-active']: activeStep === index,
        ['stepper-icon-container-finished']: activeStep > index,
        ['stepper-icon-container-error']: isError,
    })

    let titleContainerClasses = classNames('stepper-title-container', {
        ['stepper-title-error-container']: isError,
    })

    if (className) {
        styleClasses += ' ' + className;
        iconContainerClasses += ' ' + className;
        titleContainerClasses += ' ' + className;
    }

    return (
        <div className={styleClasses}>
            <div className={iconContainerClasses}>
                {IconLabel}
            </div>

            <div className={titleContainerClasses}>
                <p>{label}</p>
                {isOptional ? <p className='stepper-step-optional'>Optional {checkIsSKipped(index) ? '(skipped)' : null}</p> : null}
            </div>
        </div>
    );
};

export default StepperStep;