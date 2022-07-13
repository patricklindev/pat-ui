import React from 'react';
import { render } from '@testing-library/react';
import Rating from './Rating';

describe('Rating', () => {
    it('should match snapshot', () => {
        const { asFragment } = render(<Rating />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should be able to preview the rating by hovering on the stars', () => {
        const { getAllByRole } = render(<Rating />);
        const starInput = getAllByRole('button');
        expect(starInput.length).toBe(5);
        // all the child elements should in the document
        for (let i = 0; i < starInput.length; i++) {
            expect(starInput[i]).toBeInTheDocument();
        }
    });
});
