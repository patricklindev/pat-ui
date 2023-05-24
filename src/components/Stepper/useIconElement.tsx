import React, {ReactElement} from 'react';

const useIconElement = (isError: boolean, activeStep: number, index: number, customErrorSvg: React.ReactNode, customFinishedSvg: React.ReactNode) => {
    let IconLabel;
    if (isError) {
        if (activeStep >= index) {
            if (customErrorSvg) {
                IconLabel = React.cloneElement(customErrorSvg as ReactElement, {
                    className: 'stepper-error-icon',
                    fill: '#F44336'
                }) ;
            } else {
                IconLabel = (
                    <svg className='stepper-error-icon' fill='#F44336' viewBox='0 0 22 19'>
                        <path d="M0 19H22L11 0L0 19ZM12 16H10V14H12V16ZM12 12H10V8H12V12Z"></path>
                    </svg>
                )
            }
        } else {
            if (customErrorSvg) {
                IconLabel = React.cloneElement(customErrorSvg as ReactElement, {
                    className: 'stepper-error-icon',
                    fill: '#BDBDBD'
                }) ;
            } else {
                IconLabel = (
                    <svg className='stepper-error-icon' fill='#BDBDBD' viewBox='0 0 22 19'>
                        <path d="M0 19H22L11 0L0 19ZM12 16H10V14H12V16ZM12 12H10V8H12V12Z"></path>
                    </svg>
                )
            }
        }
    } else {
        if (activeStep > index) {
            if (customFinishedSvg) {
                IconLabel = React.cloneElement(customFinishedSvg as ReactElement, {
                    className: 'stepper-finished-icon',
                }) ;
            } else {
                IconLabel = (
                    <svg className='stepper-finished-icon' viewBox='0 0 24 24'>
                        <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"></path>
                    </svg>)
            }
        } else if (activeStep === index) {
            IconLabel = <span className='stepper-step-icon'>{index + 1}</span>
        } else {
            IconLabel = <span className='stepper-step-icon'>{index + 1}</span>
        }
    }
    return {IconLabel};
}

export default useIconElement;