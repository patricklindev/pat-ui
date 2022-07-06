import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Stepper, { patStepperProps } from './Stepper';
// import {renderer} from 'react-test-renderer'; // ES6

describe ('Stepper', () => {

// THE FOLLOWING 2 TESTS VERIFIES THE HTML STRUCTURE OF STEPPER
// THE FIRST TEST VERIFIES THE HTML STRUCTURE OF A "ROW" STEPPER
    it('should render a default horizontal stepper', () => {
        const stepperProps : patStepperProps = {
            stepperType: 'circle',
            stepperOrientation: 'row',
            stepperSize: 'sm',
            allowSkip: false,
            stepperElements: [
                {
                 title: "Step 1",
                 description: "",
                 label: 'This is a test for step 1'
                },
                {
                  title: "Step 2",
                  description: "",
                  label: 'This is a test for step 2'
                },
                {  
                  title: "Step 3",
                  description: '',
                  label:'This is a test for step 3'
                },
            ]
        }

        const wrapper = render(<Stepper {...stepperProps}></Stepper>)
        // THESE ARE THE DIV CONTAINERS
        const stepperElement = screen.getByTestId('stepper-element')
        const centermainbody = screen.getByTestId("stepper-main-body")
        const flexcontainer = screen.getByTestId("flex-row-container")
        expect(stepperElement).toHaveClass('all-container-sm');
        expect(centermainbody).toHaveClass('center-main-body');
        expect(flexcontainer).toHaveClass('flex-row-container');

    
        const title1 = screen.queryByText('Step 1') as HTMLElement;
        const title2 = screen.queryByText('Step 2') as HTMLElement;
        const title3 = screen.queryByText('Step 3') as HTMLElement;
        const label1 = screen.queryByText('This is a test for step 1') as HTMLElement;
        const label2 = screen.queryByText('This is a test for step 2') as HTMLElement;
        const label3= screen.queryByText('This is a test for step 3') as HTMLElement;
        expect(title1).toBeInTheDocument();
        expect(title2).toBeInTheDocument();
        expect(title3).toBeInTheDocument();
        expect(label1).toBeInTheDocument();
        expect(label2).toBeInTheDocument();
        expect(label3).toBeInTheDocument();

        // LETS TEST FUNCTIONS
        // NEXT()

        const nextFunction = wrapper.getByTestId("button-element-next")
        expect(nextFunction).toBeInTheDocument();
        expect(nextFunction).toBeDefined()
        
    })
})