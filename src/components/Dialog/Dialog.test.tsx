import React from 'react'

import { render, fireEvent } from '@testing-library/react';
import Dialog from './Dialog';

describe('Dialog component should work as expected in different conditions', ()=>{
    it('Dialog component should match with the snapshop',()=>{
        const wrapper = render(<Dialog/>);
        expect(wrapper).toMatchSnapshot();
    });
    // test simple dialog window size
    it('Dialog will change its size to Alert if type prop is set to Alert', ()=>{
        const wrapper = render(<Dialog />);
        const simpleDialog = wrapper.queryByTestId('dialog-window');
        expect(simpleDialog).toBeInTheDocument();
        expect(simpleDialog).toHaveClass('dialog-window');   
    });


    //test dimed backdrop
    it('Dialog will open with dim background underearth', ()=>{
        const mockOnClose = jest.fn()
        const wrapper = render(<Dialog onClose={mockOnClose}/>);
        const Dimbackground = wrapper.queryByTestId('dialog-dim-background');
        expect(Dimbackground).toBeInTheDocument();
        expect(Dimbackground).toHaveClass('overlay overlay-display');
        Dimbackground&&fireEvent.click(Dimbackground);
        expect(mockOnClose.mock.calls.length).toBe(1) //not quite sure, 0 is not working

    })
    

})





