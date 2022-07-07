import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Stepper, { patStepperProps } from './Stepper';
import Button from '../Button'
// import {renderer} from 'react-test-renderer'; // ES6

describe ('Stepper', () => {

// THE FOLLOWING 2 TESTS VERIFIES THE HTML STRUCTURE OF Stepper
// THE FIRST TEST VERIFIES THE HTML STRUCTURE OF A "ROW" Stepper
    it('should render a default horizontal Stepper', () => {
        const StepperProps : patStepperProps = {
            // StepperType: 'circle',
            StepperOrientation: 'row',
            StepperSize: 'sm',
            allowSkip: false,
            StepperElements: [
                {
                 title: "Step 1",
                 description: "",
                 label: 'This is a test for step 1',
                 component: ""
                },
                {
                  title: "Step 2",
                  description: "",
                  label: 'This is a test for step 2',
                  component: ""
                },
                {  
                  title: "Step 3",
                  description: '',
                  label:'This is a test for step 3',
                  component: ""
                },
            ]
        }

        const wrapper = render(<Stepper {...StepperProps}></Stepper>)
        // THESE ARE THE DIV CONTAINERS
        const centermainbody = screen.getByTestId("center-main-body")
        const rowelementRenderCheck1 = screen.getByTestId("element-render-1")
        const rowelementRenderCheck2 = screen.getByTestId("element-render-2")
        expect(centermainbody).toHaveClass('center-main-body row');
        expect(rowelementRenderCheck1).toBeInTheDocument();
        expect(rowelementRenderCheck1).toHaveClass('component-display');
        expect(rowelementRenderCheck2).toBeInTheDocument();
        expect(rowelementRenderCheck2).toHaveClass('flex-container');

        // Does the description area render, and does it contain a class that represents the size of the stepper
        const checkmaprender = screen.getByTestId('description-area-0')
        expect(checkmaprender).toBeInTheDocument();
        expect(checkmaprender).toHaveClass('description-area sm')

    //     // LETS TEST PRESENCE FUNCTIONS
    //     // NEXT()
    //     // PREV()

        const nextFunction = wrapper.getByTestId("button-element-next")
        const prevFunction = wrapper.getByTestId("button-element-prev")
        expect(nextFunction).toBeInTheDocument();
        expect(nextFunction).toBeDefined()
        expect(prevFunction).toBeInTheDocument();
        expect(prevFunction).toBeDefined()
        
    })

    it( 'should render a default vertical Stepper', () => {
      const StepperProps : patStepperProps = {
        // StepperType: 'circle',
        StepperOrientation: 'vertical',
        StepperSize: 'sm',
        allowSkip: false,
        StepperElements: [
          {
            title: "Step 1",
            description: "",
            label: 'This is a test for step 1',
            component: ""
           },
           {
             title: "Step 2",
             description: "",
             label: 'This is a test for step 2',
             component: ""
           },
           {  
             title: "Step 3",
             description: '',
             label:'This is a test for step 3',
             component: ""
           },
        ]
    }
        const wrapper = render(<Stepper {...StepperProps}></Stepper>)
        const centermainbody = screen.getByTestId("center-main-body")
        expect(centermainbody).toHaveClass('center-main-body vertical');
  
        const rowelementRenderCheck2 = wrapper.getByTestId("element-render-2")
        const rowelementRenderCheck3 = wrapper.getByTestId("element-render-3")
       
        expect(rowelementRenderCheck2).toBeInTheDocument();
        expect(rowelementRenderCheck2).toHaveClass('vertical');
        expect(rowelementRenderCheck3).toBeInTheDocument();
        expect(rowelementRenderCheck3).toHaveClass('component-display');
    })
})