import React from 'react'

import { render, fireEvent } from '@testing-library/react';
import Dialog from './Dialog';

describe('Dialog component should work as expected in different conditions', ()=>{
    it('Dialog component should match with the snapshop',()=>{
        const wrapper = render(<Dialog />);
        expect(wrapper).toMatchSnapshot();
    });

    // test if dialog component has children props
     it('Dialog contains dialog window and dialog dim background elements inside', ()=>{
        const wrapper = render(<Dialog />);
        const Dialogwindow = wrapper.queryByTestId('dialog-window');
        const Dialogchildren = wrapper.queryByTestId('dialog-children');
        const Dimbackground = wrapper.queryByTestId('dialog-dim-background');

        //check if chilren element is found in the dialog window
        expect(Dialogwindow).not.toEqual(null); //pass
        expect(Dialogwindow).toContainElement(Dimbackground); //Dialog contains Dimbackground
        expect(Dialogwindow).toContainElement(Dialogchildren); //Dialog contains children props
        expect(Dialogchildren).toHaveClass('dialog-window'); //Expect dialog-window has style
    
    })
   
    //test dimed backdrop function
    it('Dialog will open with dim background underearth', ()=>{
        const mockOnClose = jest.fn()
        const wrapper = render(<Dialog onClose={mockOnClose}/>);
        const Dimbackground = wrapper.queryByTestId('dialog-dim-background');
        expect(Dimbackground).toHaveClass('overlay');
        expect(Dimbackground).toBeInTheDocument();
        expect(mockOnClose.mock.calls.length).toBe(0) //default dim background default is not triggered
        Dimbackground&&fireEvent.click(Dimbackground);
        expect(mockOnClose.mock.calls.length).toBe(1) //user clicks the button trigger dim background       
        
    })

    //test if dialog component isOpen prop, isOpen is true
    it('Dialog has isOpen prop and when isOpen is true, it will not has overlay-display this class', ()=>{
        const mockOnClose = jest.fn()
        const wrapper = render(<Dialog isOpen={true} onClose={mockOnClose}/>);
        const Dialogwindow = wrapper.queryByTestId('dialog-window');
        expect(Dialogwindow).toBeInTheDocument();  
        expect(Dialogwindow).not.toHaveClass('overlay-display')

    })


     //test if dialog component isOpen prop, isOpen is false
    it('Dialog has isOpen prop and when isOpen is false, it will has overlay-display this class', ()=>{
        const mockOnClose = jest.fn()
        const wrapper = render(<Dialog isOpen={false} onClose={mockOnClose}/>);
        const Dialogwindow = wrapper.queryByTestId('dialog-window');
        expect(Dialogwindow).toBeInTheDocument();  
        expect(Dialogwindow).toHaveClass('overlay-display')
    })


})





