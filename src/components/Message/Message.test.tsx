import React from 'react';

import {render, fireEvent} from '@testing-library/react';
import Message, {messageType} from './Message';

describe('Message', () => {
    it('should match snapshot', () => {
        const {asFragment} = render(<Message> Snapshot Message </Message>);
        expect(asFragment()).toMatchSnapshot();
    });
});