import React from 'react';

import {render, fireEvent} from '@testing-library/react';
import Message, {messageType, iconType} from './Message';
import { ButtonType } from '../Button/Button';

describe('Message', () => {
    it('should match snapshot', () => {
        const {asFragment} = render(<Message> Snapshot Message </Message>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should render correct message based on different props', () => {
        // Basic message
        const msgBasicProps = {
            msgType: messageType.Basic,
            className: 'test'
        }
        const msgBasicWrapper = render (
            <Message {...msgBasicProps}>Basic Message</Message>
        );
        const msgBasicElement = msgBasicWrapper.queryByText('Basic Message') as HTMLElement;
        expect(msgBasicElement).toBeInTheDocument();
        expect(msgBasicElement).toHaveClass('msg msg-bs test');

        // List message

        // Icon message

        // Dismiss message
        const msgDismissProps = {
            msgType: messageType.Dismiss,
            onClick: jest.fn(),
            iconType: iconType.Remove
        }
        const msgDismissWrapper = render(
            <Message {...msgDismissProps}>Dismiss Message</Message>
        );
        const msgDismissElement = msgDismissWrapper.queryByText('Dismiss Message') as HTMLElement;
        expect(msgDismissElement).toBeInTheDocument();
        expect(msgDismissElement).toHaveClass('msg msg-ds msg-remove');
        expect(msgDismissProps.onClick).toHaveBeenCalledTimes(0);
        fireEvent.click(msgDismissElement);
        expect(msgDismissProps.onClick).toHaveBeenCalledTimes(1);
    });
});