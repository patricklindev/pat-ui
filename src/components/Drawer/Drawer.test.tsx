import React from 'react';
import Drawer from './drawer';
import { fireEvent, render } from '@testing-library/react';

describe('Drawer component should work as expected in different conditions ', ()=>{

    it('Drawer component should match with the snapshop', ()=>{
        const wrapper = render(<Drawer />);
        expect(wrapper).toMatchSnapshot();
    });

    it('', ()=>{
        
    });

    it('', ()=>{
        
    });

    it('', ()=>{
        
    });
    
});
