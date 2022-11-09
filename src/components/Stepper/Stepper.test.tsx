import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import Stepper, { IStepperProps, Step } from './Stepper';


describe('Stepper', () => {
    it('should match snapshot', () => {
        const descriptions = ['11','22']
        const { asFragment } = render(<Stepper descriptions={descriptions} > Snapshot Stepper </Stepper>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should render properly with orientation vertial', ()=>{
        const descriptions = ['First','Second','Third']
        const wrapper = render(<Stepper descriptions={descriptions} orientation='vertical'/>)
        const element = wrapper.container.firstElementChild as HTMLElement;
        expect(element  ).toHaveClass('stepper-width'); 
    })

    it('should render properly with error prop', ()=>{
        const descriptions = ['First','Second bla bla bla ','Third']
        const errorObject = [{errStep:3, title:'There is an error', message:"we will fix the error soon"}];
        const {container} = render(<Stepper descriptions={descriptions} errorsIndexMessage={errorObject}/>)
        const steps = container.getElementsByClassName('step');

        expect(steps.length).toBe(3) 
        expect(steps[2]).toHaveClass('step');
        expect(screen.getByText(/there is an error/i)).toBeInTheDocument();
    })
    it('should render properly with skip prop', ()=>{
        const descriptions = ['First','Second','Third']
        const {container} = render(<Stepper descriptions={descriptions} skipSteps={[2]}/>)
        const steps = container.getElementsByClassName('step');

        expect(steps.length).toBe(3);
        expect(screen.getByText(/optional/i)).toBeInTheDocument();
    })
    it('should reset stepper with active step 0', () => {
        const wrapper= render(<Stepper descriptions={['111','222','333']}/>); 
        const btnNext = wrapper.queryByText('NEXT') as HTMLElement;
        fireEvent.click(btnNext)
        expect(btnNext).toBeInTheDocument()
    })
    it('should display complete step button', () => {
        const wrapper= render(<Stepper descriptions={['111','222','333']}/>);
        const btnNext = wrapper.queryByText('COMPLETE STEP') as HTMLElement;
        expect(btnNext).toBeInTheDocument()
    })

});