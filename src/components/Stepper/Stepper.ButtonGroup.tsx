import React, {FC} from 'react';
import Button from '../Button';
import {classNames} from "../../utils/classNames";

interface buttonGroupPropsType {
    buttonGroupClassName?: string,
    backButtonClassName?: string,
    resetButtonClassName?: string,
    skipButtonClassName?: string,
    continueButtonClassName?: string,
    activeStep: number,
    totalSteps: number,

    handleBackClick(): void,

    handleResetClick(): void,

    handleSkipClick(): void,

    handleNextClick(step: number): void,

    checkIsOptional(step: number): boolean,

}

const StepperButtonGroup: FC<buttonGroupPropsType> = (props) => {
    const {
        buttonGroupClassName,
        continueButtonClassName,
        backButtonClassName,
        resetButtonClassName,
        skipButtonClassName,
        activeStep,
        totalSteps,
        handleBackClick,
        handleResetClick,
        handleNextClick,
        handleSkipClick,
        checkIsOptional
    } = props;

    let buttonGroupStyle = classNames('stepper-horizontal-buttons-group-container');
    let backButtonStyle = classNames('stepper-back-button');
    let resetButtonStyle = classNames('stepper-reset-button');
    let skipButtonStyle = classNames('stepper-skip-button');
    let continueButtonStyle = classNames('stepper-continue-button');

    buttonGroupStyle = buttonGroupClassName ? buttonGroupStyle + ' ' + buttonGroupClassName : buttonGroupStyle;
    backButtonStyle = backButtonClassName ? backButtonStyle + ' ' + backButtonClassName : backButtonStyle;
    resetButtonStyle = resetButtonClassName ? resetButtonStyle + ' ' + resetButtonClassName : resetButtonStyle;
    skipButtonStyle = skipButtonClassName ? skipButtonStyle + ' ' + skipButtonClassName : skipButtonStyle;
    continueButtonStyle = continueButtonClassName ? continueButtonStyle + ' ' + continueButtonClassName : continueButtonStyle;

    return (
        <div className={buttonGroupStyle}>
            <div>
                {activeStep > totalSteps ? null : <Button className={backButtonStyle} disabled={activeStep === 0}
                                                          onClick={handleBackClick}>Back</Button>}
            </div>
            <div>
                {activeStep > totalSteps ? (
                    <React.Fragment>
                        <Button className={resetButtonStyle} onClick={handleResetClick}>RESET</Button>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        {
                            checkIsOptional(activeStep) ?
                                <Button className={skipButtonStyle} onClick={handleSkipClick}>Skip</Button> : null
                        }
                        <Button className={continueButtonStyle}
                                onClick={() => handleNextClick(activeStep)}>{activeStep === totalSteps ? 'FINISH' : 'CONTINUE'}</Button>
                    </React.Fragment>
                )}
            </div>
        </div>
    );
};

export default StepperButtonGroup;