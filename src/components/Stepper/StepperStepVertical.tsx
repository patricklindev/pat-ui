import React, {FC} from 'react';
import {classNames} from '../../utils/classNames';
import Button from '../Button';
import useIconElement from './useIconElement';

interface verticalStepperProps {
    className?: string,
    label: string,
    description:React.ReactNode,
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
    customErrorSvg?: React.ReactNode,
    customFinishedSvg?: React.ReactNode,
}

const StepperStepVertical:FC<verticalStepperProps> = (props) => {
    const {
        className,
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
        customErrorSvg,
        customFinishedSvg
    } = props;

    let styleClasses = classNames('stepper-item-container', {
        ['stepper-label-container-finished']: activeStep >= index,
    })

    let iconContainerStyle = classNames('stepper-icon-container', {
        ['stepper-icon-container-active']: activeStep === index,
        ['stepper-icon-container-error']: isError
    })

    let titleContainer = classNames('stepper-title-container', {
        ['stepper-title-error-container']: isError,
    })

    if (className) {
        styleClasses += ' ' + className;
        iconContainerStyle += ' ' + className;
        titleContainer += ' ' + className;
    }


    const {IconLabel} = useIconElement(isError, activeStep, index, customErrorSvg, customFinishedSvg);

    return (
        <div className={styleClasses}>

            <div className='stepper-label-container'>
                <div className={iconContainerStyle}>
                    {IconLabel}
                </div>
                <div className={titleContainer}>
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