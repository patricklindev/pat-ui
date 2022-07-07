import React from 'react';

import { render } from '@testing-library/react';
import Rating from './Rating';

describe('Rating', () => {
    it('should match snapshot', () => {
        const {asFragment} = render(<Rating> Snapshot Message </Rating>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should be able to preview the rating by hovering on the stars', () => {
        fail('Needs to be done')
    });

    it('should be able to disable the component from props', () => {
        fail('Needs to be done')
    });

    it('should be able to provide the label of the component from props', () => {
        fail('Needs to be done')
    });
    
    it('should be able to set the precision of the rating component', () => {
        fail('Needs to be done')
    });

    it('should choose sizes of the rating component from props', () => {
        fail('Needs to be done')
    });

    it('should decide the number of stars in total from props', () => {
        fail('Needs to be done')
    });

    it('should be able to control the value of the rating from outside of the component by providing a prop', () => {
        fail('Needs to be done')
    });

    it('should be able to listen to the change of the value of the component from outside of the component by providing the onChange callback function as a prop', () => {
        fail('Needs to be done')
    });
})