import { render } from '@testing-library/react';
import Skeleton from './Skeleton';
import React from 'react';

describe('Skeleton', () => {
    // snapshot testing
    it('should match snapshot', () => {
        // const { asFragment } = render(<Progress pgValue={0}></Progress>);
        // expect(asFragment()).toMatchSnapshot();
        const { container } = render(<Skeleton></Skeleton>);
        expect(container.firstChild).toMatchSnapshot();
    });
})