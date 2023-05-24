import React, {FC} from 'react';
import Button from '../Button';

interface buttonGroupPropsType {
    className?: string,
    activeStep: number,
    totalSteps: number,
    handleBackClick(): void,
    handleResetClick(): void,
    handleSkipClick(): void,
    handleNextClick(step: number): void,
    checkIsOptional(step: number): boolean,

}
const StepperButtonGroup: FC<buttonGroupPropsType> = (props) => {
    const {className, activeStep, totalSteps, handleBackClick, handleResetClick, handleNextClick,handleSkipClick, checkIsOptional} = props;

    return (
        <div className={className ? `stepper-horizontal-buttons-group-container ${className}` : 'stepper-horizontal-buttons-group-container'}>
            <div>
                {activeStep > totalSteps ? null : <Button className='stepper-back-button' disabled={activeStep === 0} onClick={handleBackClick}>Back</Button>}
            </div>
            <div>
                {activeStep > totalSteps ? (
                    <React.Fragment>
                        <Button className='stepper-reset-button' onClick={handleResetClick}>RESET</Button>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        {
                            checkIsOptional(activeStep) ?
                                <Button className='stepper-skip-button' onClick={handleSkipClick}>Skip</Button> : null
                        }
                        <Button className='stepper-continue-button' onClick={() => handleNextClick(activeStep)}>{activeStep === totalSteps ? 'FINISH' : 'CONTINUE'}</Button>
                    </React.Fragment>
                )}
            </div>
        </div>
    );
};

export default StepperButtonGroup;