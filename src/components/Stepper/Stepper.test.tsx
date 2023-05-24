import {fireEvent, render, screen} from '@testing-library/react';
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


    it('should match snapshot --default', function () {
        const {asFragment} = render(<Stepper stepsArr={stepsArr}></Stepper>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should match snapshot --alternative', function () {
        const {asFragment} = render(<Stepper stepsArr={stepsArr} alternative></Stepper>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should match snapshot --vertical', function () {
        const {asFragment} = render(<Stepper stepsArr={stepsArrVertical} verticalStepper></Stepper>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should able to skip a step if the step is optional', function () {
        render(<Stepper stepsArr={stepsArr}></Stepper>);
        const continueBtn = screen.getByText('CONTINUE') as HTMLElement;
        fireEvent.click(continueBtn);
        const skipBtn = screen.getByText('Skip');
        expect(skipBtn).toBeInTheDocument();
        fireEvent.click(continueBtn);
        expect(skipBtn).not.toBeInTheDocument();
    });

    it('should have continue button', function () {
        render(<Stepper stepsArr={stepsArr}></Stepper>);
        const continueBtn = screen.getByText('CONTINUE') as HTMLElement;
        expect(continueBtn).toHaveProperty('disabled', false)
        expect(continueBtn).toBeInTheDocument();
        expect(continueBtn).toHaveClass('stepper-continue-button');
    });

    it('should have skip button', function () {
        render(<Stepper stepsArr={stepsArr}></Stepper>);
        let backBtn = screen.getByText('Back') as HTMLElement;
        const continueBtn = screen.getByText('CONTINUE') as HTMLElement;
        expect(backBtn).toHaveProperty('disabled', true)
        expect(backBtn).toBeInTheDocument();
        fireEvent.click(continueBtn);
        backBtn = screen.getByText('Back') as HTMLElement;
        expect(backBtn).toHaveProperty('disabled', false)
    });

    it('should change icon if continue button is clicked', function () {
        render(<Stepper stepsArr={stepsArr}></Stepper>);
        const continueBtn = screen.getByText('CONTINUE') as HTMLElement;
        fireEvent.click(continueBtn);
        const finishedIcon = document.querySelector('.stepper-finished-icon');
        expect(finishedIcon).toBeInTheDocument();
    });

    it('should have a error icon if the step has an error', function () {
        render(<Stepper stepsArr={stepsArr}></Stepper>);
        const errorIcon = document.querySelector('.stepper-error-icon');
        expect(errorIcon).toBeInTheDocument();
    });

    it('should allow users to use alternative horizontal stepper', function () {
        render(<Stepper stepsArr={stepsArr} alternative></Stepper>);
        const alternativeLabel = document.querySelector('.stepper-label-container-alternative');
        expect(alternativeLabel).toBeInTheDocument();

    });

    it('should allow users to use vertical stepper', function () {
        render(<Stepper stepsArr={stepsArrVertical} verticalStepper></Stepper>);
        const verticalBtn = document.querySelector('.stepper-description-buttons-container--vertical');
        expect(verticalBtn).toBeInTheDocument();
    });

})