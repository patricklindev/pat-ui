import React, {FC} from 'react';
import useIconElement from './useIconElement';
import {classNames} from '../../utils/classNames';


export interface StepperStepProps {
    horizontalLabelClassName?: string,
    iconContainerStyle?: string,
    horizontalTitleStyle?: string,
    label: string,
    index: number,
    activeStep: number,
    isOptional: boolean,
    isAlternative: boolean,
    isError: boolean,
    customErrorSvg?: React.ReactNode,
    customFinishedSvg?: React.ReactNode,

    checkIsSKipped(step: number): boolean,
}

const StepperStep: FC<StepperStepProps> = (props) => {
    const {
        horizontalLabelClassName,
        iconContainerStyle,
        horizontalTitleStyle,
        label,
        index,
        activeStep,
        isOptional,
        isAlternative,
        isError,
        checkIsSKipped,
        customErrorSvg,
        customFinishedSvg
    } = props;
    const {IconLabel} = useIconElement(isError, activeStep, index, customErrorSvg, customFinishedSvg);

    let horizontalLabelStyle = classNames('stepper-label-container', {
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

    horizontalLabelStyle = horizontalLabelClassName ? horizontalLabelStyle + ' ' + horizontalLabelClassName : horizontalLabelStyle;
    iconContainerClasses = iconContainerStyle ? iconContainerClasses + ' ' + iconContainerStyle : iconContainerClasses;
    titleContainerClasses = horizontalTitleStyle ? titleContainerClasses + ' ' + horizontalTitleStyle : titleContainerClasses;

    return (
        <div className={horizontalLabelStyle}>
            <div className={iconContainerClasses}>
                {IconLabel}
            </div>

            <div className={titleContainerClasses}>
                <p>{label}</p>
                {isOptional ?
                    <p className='stepper-step-optional'>Optional {checkIsSKipped(index) ? '(skipped)' : null}</p> : null}
            </div>
        </div>
    );
};

export default StepperStep;