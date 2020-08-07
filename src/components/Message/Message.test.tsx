import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Message, {messageType, iconType} from './Message';

describe('Message', () => {
    it('should match snapshot', () => {
        const {asFragment} = render(<Message> Snapshot Message </Message>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should render default message', () => {
        // Default message
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
    })

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
        const msgListProps = {
            msgType: messageType.List,
            className: 'test'
        }
        const msgListWrapper = render (
            <Message {...msgListProps}>List Message</Message>
        );
        const msgListElement = msgListWrapper.queryByText('List Message') as HTMLElement;
        expect(msgListElement).toBeInTheDocument();
        expect(msgListElement).toHaveClass('msg msg-ls test');

        // Icon message
        const msgIconProps = {
            msgType: messageType.Icon,
            className: 'test',
            iconType: iconType.Spinner
        }
        const msgIconWrapper = render (
            <Message {...msgIconProps}>Icon Message</Message>
        );
        const msgIconElement = msgIconWrapper.queryByText('Icon Message') as HTMLElement;
        expect(msgIconElement).toBeInTheDocument();
        expect(msgIconElement).toHaveClass('msg msg-ic msg-spinner test');

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