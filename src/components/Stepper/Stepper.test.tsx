import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Stepper, { patStepperProps } from './Stepper';
import Button from '../Button'
// import {renderer} from 'react-test-renderer'; // ES6

describe ('Stepper', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Stepper> Snapshot Stepper </Stepper>);
    expect(asFragment()).toMatchSnapshot();
  });
// THE FOLLOWING 2 TESTS VERIFIES THE HTML STRUCTURE OF Stepper
// THE FIRST TEST VERIFIES THE HTML STRUCTURE OF A "ROW" Stepper
    it('should render a default horizontal Stepper', () => {
        const StepperProps : patStepperProps = {
            // StepperType: 'circle',
            StepperOrientation: 'row',
            buttonTitlePrev: "Example1",
            buttonTitleNext: "Example2",
            StepperSize: 'sm',
            allowSkip: false,
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
        expect(nextFunction).toHaveClass('Example2')
        expect(prevFunction).toHaveClass('Example1')
  
      
        
    })

    it( 'should render a vertical stepper with error and skip props', () => {
      const StepperProps : patStepperProps = {
        // StepperType: 'circle',
        StepperOrientation: 'vertical',
        StepperSize: 'sm',
        allowSkip: true,
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
             label: 'error',
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
        
       
        expect(rowelementRenderCheck2).toBeInTheDocument();
        expect(rowelementRenderCheck2).toHaveClass('vertical');

        const title1 = screen.queryByText('Step 1') as HTMLElement;
        const title2 = screen.queryByText('Step 2') as HTMLElement;
        const title3 = screen.queryByText('Step 3') as HTMLElement;
        const label1 = screen.queryByText('This is a test for step 1') as HTMLElement;
        const label3= screen.queryByText('This is a test for step 3') as HTMLElement;
        expect(title1).toBeInTheDocument();
        expect(title2).toBeInTheDocument();
        expect(title3).toBeInTheDocument();
        expect(label1).toBeInTheDocument();
        expect(label3).toBeInTheDocument();


        const labelContainer2 = screen.getByTestId('error-check-1');
        expect(labelContainer2).toHaveClass('label-container')
        expect(labelContainer2).toContainHTML
    })
})