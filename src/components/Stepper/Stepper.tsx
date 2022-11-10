import React, { FC, useState, useEffect, Fragment } from 'react';
import './_Stepper.scss';

export type orientationType = 'horizontal' | 'vertical';
export type errType = {errStep:number, title:string, message:string} | null;

export interface IStepperProps {
    /** set stepper orientation, horizontal or vertical*/
    orientation?: orientationType;
    /** set stepper description, array of strings */
    descriptions:string[];  
    /** set stepper error message, array of objects */
    errorsIndexMessage?: errType[];
    /** set stepper skip options, array of numbers */
    skipSteps?: number[];
}
export const Stepper: FC<IStepperProps> = (props) => {
    const { orientation, descriptions, skipSteps, errorsIndexMessage } = props;
    const lastStep = descriptions.length;
    const [activeStep, setActiveStep] = useState<number>(0);
    const [allCompleted, setAllCompleted] = useState<boolean[]>(new Array(lastStep).fill(false))
    const [skipOptions, setSkipOptions] = useState <boolean[]>(new Array(lastStep).fill(false))
    const [errArr, setErrArr] = useState <errType[]>(new Array(lastStep).fill(false)) 

    useEffect(() => {
        if(skipSteps?.length){
            let newSkipOption = [...skipOptions];
            skipSteps.forEach( step => newSkipOption[step-1] = true)
            setSkipOptions(newSkipOption)
        }
        if(errorsIndexMessage?.length){
            const newErrors = [...errArr];
            errorsIndexMessage.forEach( (err) => {
                if(err?.errStep){
                    newErrors[err.errStep - 1] = err;
                }
            } )
            setErrArr(newErrors)
        }
    }, [])
    const handleSkip = () => {
        handleCompletion();
    }
    const handleNext = () => {
        if(!allComplete()){
            if(skipOptions[activeStep]){
                const newCompleted = [...allCompleted];
                newCompleted[activeStep] = true;
                setAllCompleted(newCompleted);
            }
            setActiveStep(findNextActiveStep(activeStep))
        }
    }
    const handleCompletion = () => {
        const newCompleted = [...allCompleted];
        newCompleted[activeStep] = true;
        setAllCompleted(newCompleted);
        handleNext(); 
    }
    const handleBack = () => {
        setActiveStep(prev => prev - 1 );
    }
    const handleReset = () => {
        setActiveStep(0);
        setAllCompleted(new Array(lastStep).fill(false))
      };
    const allComplete = () => {  
        for(let i = 0; i < lastStep; i++){
            if(allCompleted[i] === false) return false
        }
        return true;
    }
    const findNextActiveStep = (idx:number):number => {
        for(let i = idx+1; i < lastStep; i++){
            if(allCompleted[i] === false) return i;
        }
        for(let i = 0; i <= idx; i++){
            if(allCompleted[i] === false) return i;
        }
        return idx;
    }

    return (
        <div className={`stepper ${orientation === 'vertical' && 'stepper-width'}`}>
            <div className={`steps-container ${orientation}`}>
            {descriptions?.map((label, index) => (
                < Fragment key={label}>
                    <Step 
                    key={label}
                    label={label} 
                    index={index}
                    skip={skipOptions[index]} 
                    error={errArr[index]}
                    completed={allCompleted[index]} 
                    activeStep={activeStep}
                    lastStep={lastStep}
                    orientation={orientation}
                    />
                    { lastStep-1 !== index && <span className='step-connector'></span>}
                </Fragment>

            ))}
            </div>

           { !allComplete() && <div data-testid="current-step" className='current-step'>Step {activeStep + 1}</div> }
            
            {
                allComplete() ? ( 
                <div> 
                    <div>All steps completed - you're finished</div>
                    <button className='btn-flow-right' data-testid="reset-btn" onClick={handleReset}>RESET</button>
                </div> 
                ) : (          
                <div className="stepper-control">
                    <button  className={`btn-back ${activeStep === 0 && 'btn-text--gray'}`} disabled={activeStep === 0} onClick={handleBack}>BACK</button>
                    <button data-testid='btn-next' onClick={handleNext}>NEXT</button>
                    { (skipOptions[activeStep] && !allCompleted[activeStep]) && <button data-testid='skip' onClick={handleSkip}>SKIP</button>}
                    {
                        allCompleted[activeStep] ? (
                            <p>Step {activeStep +1 } is completed</p>
                        ):(
                            <button onClick={handleCompletion}>COMPLETE STEP</button>
                        )
                    }
                </div>

                )}

        </div>
    )
}

Stepper.defaultProps = {
    orientation : 'horizontal',
};
export default Stepper;



// export type errType = {title:string, messge:string} | null;
/** Step */
export interface StepProps {
    label: string;
    activeStep: number;
    index:number;
    lastStep:number;
    skip?:boolean;
    error?: errType;
    completed?:boolean;
    orientation?:string;
}

export const Step:FC<StepProps> = ( props ) => {
    const {label, skip, error, lastStep, completed, activeStep, index, orientation} = props; 
    return (
          <div className='step-container'>
                {
                error ? (
                    <div className="step">
                        <div className={'triangle'}></div>
                        <div className='step-label text--red'>
                            <span>{error.title}</span>
                            <span className="step-label--small text--red">{error.message}</span>
                        </div>
                    </div>
                ) : (
                    <div className="step">
                        <div className={`${orientation === 'vertical' && 'step-vertical'}`}>
                            <div className={`step-number ${(activeStep === index || completed) ? 'active' : 'inactive' }`}>
                                {completed ? <span data-testid='check-mark'>✓</span> : index + 1 }
                            </div>
                            { (lastStep-1 !== index && orientation === 'vertical') && <span className='step-vertical-connector'></span>}
                        </div>
                        
                        <div className='step-label'>
                            <span className={`margin-bottom ${(activeStep === index || completed) && 'text--bold' }`}>{label}</span>
                            { skip && <span className="step-label--small">Optional</span>}
                        </div>

                    </div>
                )
                }
          </div>
    )
}

Step.defaultProps = {
    skip : false,
    error: null,
    orientation:'horizontal'
};

