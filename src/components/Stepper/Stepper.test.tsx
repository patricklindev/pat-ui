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
        // PREV()

        const nextFunction = wrapper.getByTestId("button-element-next")
        const prevFunction = wrapper.getByTestId("button-element-prev")
        expect(nextFunction).toBeInTheDocument();
        expect(nextFunction).toBeDefined()
        expect(prevFunction).toBeInTheDocument();
        expect(prevFunction).toBeDefined()
        
    })

    it( 'should render a default vertical stepper', () => {
      const stepperProps : patStepperProps = {
        stepperType: 'circle',
        stepperOrientation: 'vertical',
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
    const verticalstepper0 = screen.getByTestId("stepper-vertical-0")
    const verticalstepper1 = screen.getByTestId("stepper-vertical-1")
    const verticalstepper2 = screen.getByTestId("stepper-vertical-2")
    expect(verticalstepper0).toHaveClass('vertical-description');
    expect(verticalstepper1).toHaveClass('vertical-description');
    expect(verticalstepper2).toHaveClass('vertical-description');

    // IS There a icon area produced?
    const verticalIconArea0 = screen.getByTestId('icon-area-0');
    const verticalIconArea1 = screen.getByTestId('icon-area-1');
    const verticalIconArea2 = screen.getByTestId('icon-area-2');
    expect(verticalIconArea0).toHaveClass('icon-area');
    expect(verticalIconArea1).toHaveClass('icon-area');
    expect(verticalIconArea2).toHaveClass('icon-area');

    // At initial load
    const nextFunction = wrapper.getByTestId("button-element-next")
    const prevFunction = wrapper.getByTestId("button-element-prev")
    expect(nextFunction).toBeInTheDocument();
    expect(nextFunction).toBeDefined()
    expect(prevFunction).toBeInTheDocument();
    expect(prevFunction).toBeDefined()


    })

    it("We should be able to test each function", () => {
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
    const next = jest.fn
    const prev = jest.fn
    const nextFunction = wrapper.getByTestId("button-element-next")
    const spy = jest.spyOn(next);
    const isNext= Stepper.next()
    expect(spy).toHaveBeenCalled();
    })
})