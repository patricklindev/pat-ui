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
        expect(element).toHaveClass('stepper-width'); 
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
    it('should display next button', () => {
        const wrapper = render(<Stepper descriptions={['111','222']}/>); 
        const btnComplete = screen.queryByText('COMPLETE STEP') as HTMLElement;
        fireEvent.click(btnComplete);
        expect(screen.getByText(/Step 2/)).toBeInTheDocument();

        const btnNext = screen.queryByText('NEXT') as HTMLElement;
        fireEvent.click(btnNext);                               
        expect(screen.getByText(/Step 2/)).toBeInTheDocument();
    })
    it('should work properly with back button', () => {
        const wrapper= render(<Stepper descriptions={['111','222']}/>);
        const btnBack = wrapper.queryByText('BACK') as HTMLElement;
        expect(btnBack).toBeInTheDocument()
        expect(btnBack).toBeDisabled();

        const btnNext = wrapper.queryByText('NEXT') as HTMLElement;
        fireEvent.click(btnNext)                   
        expect(btnNext).toBeInTheDocument();
        expect(screen.getByText(/Step 2/)).toBeInTheDocument();

        fireEvent.click(btnBack);                           
    })
    it('should display buttons complete', () => {
        const {container} = render(<Stepper descriptions={['only one step']}/>);
        const btnComplete = screen.queryByText('COMPLETE STEP') as HTMLElement;
        expect(btnComplete).toBeInTheDocument();
        fireEvent.click(btnComplete)
    })
    it('should display skip button initially and not display after click skip', () => {
        const wrapper= render(<Stepper descriptions={['only one step']} skipSteps={[1]}/>);
        const btnSkip = wrapper.queryByText('SKIP') as HTMLElement;               
        expect(btnSkip).toBeInTheDocument();
        fireEvent.click(btnSkip)
        expect(btnSkip).not.toBeInTheDocument();
    })
    it('should display properly with reset button', () => {
        const wrapper= render(<Stepper descriptions={['only one step']} skipSteps={[1]}/>);
        const btnSkip = wrapper.queryByText('SKIP') as HTMLElement;     
        expect(btnSkip).toBeInTheDocument();
        fireEvent.click(btnSkip)     
        
        const btnReset = wrapper.queryByText('RESET') as HTMLElement;           
        expect(btnReset).toBeInTheDocument();
        fireEvent.click(btnReset);                                                  
        expect(screen.getByText(/Step 1/)).toBeInTheDocument();
    })
});