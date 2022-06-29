import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Stepper, { patStepperProps } from './Stepper';

describe ('Stepper', () => {

    it('should render default stepper', () => {
        const stepperProps : patStepperProps = {

        }
        const wrapper = render(<Stepper {...stepperProps}></Stepper>)
        const stepperElement = screen.getByTestId('stepper-element')
        expect(stepperElement).toHaveClass('stepper all-container');
    })
})