import React, {FC} from 'react';
import {classNames} from '../../utils/classNames';
import Button from '../Button';
import useIconElement from './useIconElement';

interface verticalStepperProps {
    verticalItemStyle?: string,
    iconContainerStyle?: string,
    verticalTitleStyle?: string,
    label: string,
    description: React.ReactNode,
    index: number,
    totalSteps: number,
    activeStep: number,
    isOptional: boolean,
    isAlternative: boolean,
    isError: boolean,
    customErrorSvg?: React.ReactNode,
    customFinishedSvg?: React.ReactNode,

    handleBackClick(): void,

    handleSkipClick(): void,

    handleNextClick(step: number): void,

    checkIsOptional(step: number): boolean,

    checkIsSKipped(step: number): boolean,
}

const StepperStepVertical: FC<verticalStepperProps> = (props) => {
    const {
        verticalItemStyle,
        iconContainerStyle,
        verticalTitleStyle,
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

    let itemContainerStyle = classNames('stepper-item-container', {
        ['stepper-label-container-finished']: activeStep >= index,
    })

    let iconBoxStyle = classNames('stepper-icon-container', {
        ['stepper-icon-container-active']: activeStep === index,
        ['stepper-icon-container-error']: isError
    })

    let titleContainer = classNames('stepper-title-container', {
        ['stepper-title-error-container']: isError,
    })

    itemContainerStyle = verticalItemStyle ? itemContainerStyle + ' ' + itemContainerStyle : itemContainerStyle;
    iconBoxStyle = iconContainerStyle ? iconBoxStyle + ' ' + iconBoxStyle : iconBoxStyle;
    titleContainer = verticalTitleStyle ? titleContainer + ' ' + titleContainer : titleContainer;

    const {IconLabel} = useIconElement(isError, activeStep, index, customErrorSvg, customFinishedSvg);

    return (
        <div className={itemContainerStyle}>

            <div className='stepper-label-container'>
                <div className={iconBoxStyle}>
                    {IconLabel}
                </div>
                <div className={titleContainer}>
                    <p>{label}</p>
                    {isOptional ?
                        <p className='stepper-step-optional'>Optional {checkIsSKipped(index) ? '(skipped)' : null}</p> : null}
                </div>
            </div>

            {activeStep === index ? (
                <div className='stepper-description-buttons-container--vertical stepper-label-container-active'>
                    <div className='stepper-description-container--vertical'>
                        {description}
                    </div>
                    <div className='stepper-buttons-container--vertical'>
                        {checkIsOptional(activeStep) ?
                            <Button className='stepper-skip-button' onClick={handleSkipClick}>Skip</Button> : null}
                        <div>
                            <Button className='stepper-continue-button'
                                    onClick={() => handleNextClick(index)}>{activeStep === totalSteps ? 'FINISH' : 'CONTINUE'}</Button>
                            <Button className='stepper-back-button' disabled={activeStep === 0}
                                    onClick={handleBackClick}>Back</Button>
                        </div>
                    </div>

                </div>
            ) : null}

            {index !== totalSteps ? <div className='stepper-item-inactive-place-holder--vertical'></div> : null}

        </div>
    );
};

export default StepperStepVertical;