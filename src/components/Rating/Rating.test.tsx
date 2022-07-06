import React from 'react';

import { render } from '@testing-library/react';
import Rating from './Rating';

describe('Rating', () => {
    it('should match snapshot', () => {
        const {asFragment} = render(<Rating> Snapshot Message </Rating>);
        expect(asFragment()).toMatchSnapshot();
    });
})