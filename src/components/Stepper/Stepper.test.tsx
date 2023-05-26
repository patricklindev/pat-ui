import {fireEvent, render, screen, waitForElement} from '@testing-library/react';
import React from 'react';

import Stepper from './Stepper';

describe('Stepper', () => {

    const stepsArr = ['Select campaign settings', 'Create an ad group', 'Create an ad'];
    const stepContentArr = ['step1', 'step2', 'step3'];

    const stepsArrVertical = ['Select campaign settings', 'Create an ad group', 'Create an ad'];
    const stepContentArrVertical = [
        `For each ad campaign that you create, you can control how much you're 
    willing to spend on clicks and conversions, which networks and geographical 
    locations you want your ads to show on, and more.`,

        'An ad group contains one or more ads which target a shared set of keywords.',

        `Try out different ad text to see what brings in the most customers,and learn how 
    to enhance your ads using features like ad extensions.If you run into any problems 
    with your ads, find out how to tell if they're running and how to resolve approval issues.`,
    ]

    const className = {
        horizontalContainerClassName: 'testHorizontalContainerClassName',
        verticalContainerClassName: 'testVerticalContainerClassName',
        horizontalItemClassName: 'testHorizontalItemClassName',
        horizontalContentClassName: 'testHorizontalContentClassName',
        verticalItemStyle: 'testVerticalItemStyle',
        iconContainerStyle: 'testIconContainerStyle',
        verticalTitleStyle: 'testVerticalTitleStyle',
        horizontalLabelClassName: 'testHorizontalLabelClassName',
        horizontalTitleStyle: 'testHorizontalTitleStyle',
        buttonGroupClassName: 'testButtonGroupClassName',
        backButtonClassName: 'testBackButtonClassName',
        resetButtonClassName: 'testResetButtonClassName',
        skipButtonClassName: 'testSkipButtonClassName',
        continueButtonClassName: 'testContinueButtonClassName',
    }

    const customErrorSvg = (
        <svg viewBox='0 0 24 24'>
            <path d="M10 10 L90 10 L90 90 L10 90 Z" />
        </svg>
    )

    const customFinishedSvg = (
        <svg viewBox='0 0 24 24'>
            <path d="M12 2l3.09 6.35 6.91.81-5 4.87 1.18 6.88L12 18.2l-6.18 3.82 1.18-6.88-5-4.87 6.91-.81z"/>
        </svg>
    )

    const detectError = (step: number) => { return step === 1; }

    const detectOptional = (step: number) => { return step === 1; }

    it('should match snapshot --default', function () {
        const {asFragment} = render(
            <Stepper stepsArr={stepsArr}>
                {stepContentArr.map(stepContent => (
                    <div key={stepContent}>{stepContent}</div>
                ))}
            </Stepper>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should match snapshot --alternative', function () {
        const {asFragment} = render(
            <Stepper
                alternative
                stepsArr={stepsArr}
                detectError={detectError}
                detectOptional={detectOptional}
            >
                {stepContentArrVertical.map(stepContent => (
                    <div key={stepContent}>{stepContent}</div>
                ))}
            </Stepper>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should match snapshot --vertical', function () {
        const {asFragment} = render(
            <Stepper
                stepsArr={stepsArrVertical}
                detectOptional={detectOptional}
                verticalStepper detectError={detectError}
            >
                {stepContentArrVertical.map(stepContent => (
                    <div key={stepContent}>{stepContent}</div>
                ))}
            </Stepper>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should feed an array of string description', function () {
        render(<Stepper stepsArr={stepsArr} initActiveStep={0}></Stepper>);
        stepsArr.forEach(label => {
            const labelElement = screen.getByText(label);
            expect(labelElement).toBeInTheDocument();
        })
    });

    it('should allow users to choose whether to skip a step if the step is optional', function () {
        render(<Stepper stepsArr={stepsArr} detectOptional={detectOptional}></Stepper>);
        const continueBtn = screen.getByText('CONTINUE') as HTMLElement;
        fireEvent.click(continueBtn);
        const skipBtn = screen.getByText('Skip');
        expect(skipBtn).toBeInTheDocument();
        fireEvent.click(continueBtn);
        expect(skipBtn).not.toBeInTheDocument();
    });

    it('should allow users to click on the buttons to mark completion of steps', function () {
        render(<Stepper stepsArr={stepsArr}></Stepper>);
        const continueBtn = screen.getByText('CONTINUE') as HTMLElement;
        fireEvent.click(continueBtn);
        const finishedIcon = screen.getByTestId('finished-icon');
        expect(finishedIcon).toBeInTheDocument();
    });

    it('should allow users to  dictate orientation of stepper (row vs column)', function () {
        render(<Stepper stepsArr={stepsArr} verticalStepper></Stepper>);
        const verticalStepper = screen.getByTestId('vertical-stepper');
        expect(verticalStepper).toBeInTheDocument();
        render(<Stepper stepsArr={stepsArr}></Stepper>);
        const horizontalStepper = screen.getByTestId('horizontal-stepper');
        expect(horizontalStepper).toBeInTheDocument();
    });

    it('should have a error icon if the step has an error', function () {
        const myObj = {
            detectError: (step: number) => { return step === 0; },
        }
        const spy = jest.spyOn(myObj, 'detectError')
        render(<Stepper stepsArr={stepsArr} detectError={myObj.detectError}></Stepper>);
        const continueBtn = screen.getByText('CONTINUE') as HTMLElement;
        fireEvent.click(continueBtn);
        expect(spy).toHaveBeenCalled();
        waitForElement(() => {
            const errorIcon = screen.getByTestId('error-icon');
            expect(errorIcon).toBeInTheDocument();
        })
    });


    it('should allow users to customize icon and class name', function () {
        const myObj = {
            myDetectError: detectError,
            myDetectOptional: detectOptional,
        }
        render(<Stepper stepsArr={stepsArr}
                        className={className}
                        customErrorSvg={customErrorSvg}
                        customFinishedSvg={customFinishedSvg}
                        detectOptional={myObj.myDetectOptional}
                        detectError={myObj.myDetectError}
        ></Stepper>);
        let continueBtn = screen.getByText('CONTINUE') as HTMLElement;
        fireEvent.click(continueBtn);
        const backBtn = screen.getByText('Back') as HTMLElement;
        fireEvent.click(backBtn)
        continueBtn = screen.getByText('CONTINUE') as HTMLElement;
        fireEvent.click(continueBtn);
        const skipBtn = screen.getByText('Skip') as HTMLElement;
        fireEvent.click(skipBtn)
        const finishBtn = screen.getByText('FINISH') as HTMLElement;
        fireEvent.click(finishBtn);
        const resetBtn = screen.getByText('RESET') as HTMLElement;
        fireEvent.click(resetBtn);
    });
})