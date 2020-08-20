import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import Message ,{ IMessagesProps } from './Message';
import { Icon } from '../..';

describe('Message', () => {
    it('should match snapshot', () => {
        const {asFragment} = render(<Message> Snapshot Message </Message>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should render default message', () => {
        // Default message
        const msgBasicProps: IMessagesProps = {
            msgType: 'basic',
            msgSize: 'large',
            msgColor: 'white',
            className: 'test'
        }
        const msgBasicWrapper = render(<Message {...msgBasicProps}></Message>);
        const msgElement = screen.getByTestId('message-element');
        expect(msgElement).toHaveClass('msg msg-basic msg-large msg-white test');
    });

    it('should render message with different props', () => {
        // List message
        const msgListProps: IMessagesProps = {
            msgType: 'list',
            msgSize: 'large',
            msgColor: 'white',
            className: 'test',
            msgHeader: 'List Message'
        }
        const msgListWrapper = render(<Message {...msgListProps}></Message>);
        const msgListElement = msgListWrapper.queryByText('List Message');
        expect(msgListElement).toBeInTheDocument();
        const listElement = screen.queryByTestId('message-element');
        expect(listElement).toHaveClass('msg msg-list msg-large msg-white test');

        // Icon message
        const msgIconProps: IMessagesProps = {
            msgType: 'icon',
            msgSize: 'large',
            msgColor: 'white',
            className: 'test',
            msgHeader: 'Icon Message'
        }
        const msgIconWrapper = render(<Message {...msgIconProps}></Message>);
        const msgIconElement = msgIconWrapper.queryByText('Icon Message');
        expect(msgIconElement).toBeInTheDocument();

        // Dismiss message
        const msgDismissProps: IMessagesProps = {
            msgType: 'dismiss',
            msgSize: 'large',
            msgColor: 'white',
            msgHeader: 'Dismiss Message',
            msgOnClick: jest.fn()
        }
        const msgDismissWrapper = render(<Message></Message>);
        const dismissElement = screen.queryAllByTestId('message-element');
        expect(msgDismissProps.msgOnClick).toHaveBeenCalledTimes(0);
    });

});