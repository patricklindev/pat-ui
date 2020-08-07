import React from 'react';

import {render, fireEvent} from '@testing-library/react';
import Message, {messageType} from './Message';
import { ButtonType } from '../Button/Button';

describe('Message', () => {
    it('should match snapshot', () => {
        const {asFragment} = render(<Message> Snapshot Message </Message>);
        expect(asFragment()).toMatchSnapshot();
    });

    // it('should render basic message', () => {
    // const wrapper = render(<Message>Basic Message</Message>);
    // const element = wrapper.queryByText('Basic Message') as HTMLElement;
    // expect(element).toBeInTheDocument();
    // expect(element.tagName).toBe('MESSAGE');
    // expect(element).toHaveClass('msg msg-bs');
    // });
});

