import React from 'react';

import {render, fireEvent} from '@testing-library/react';
import Message, {messageType} from './Message';
import { ButtonType } from '../Button/Button';

describe('Message', () => {
    it('should match snapshot', () => {
        const {asFragment} = render(<Message> Snapshot Message </Message>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should render correct message based on different props', () => {
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
    });
});

// const btnPrimarySmallWrapper = render(
//     <Button {...btnPrimarySmallProps}>Primary Small Button</Button>
//   );
//   const btnPrimarySmallElement = btnPrimarySmallWrapper.queryByText(
//     'Primary Small Button'
//   ) as HTMLElement;
//   expect(btnPrimarySmallElement).toBeInTheDocument();
//   expect(btnPrimarySmallElement.tagName).toBe('BUTTON');
//   expect(btnPrimarySmallElement).toHaveClass('btn btn-primary btn-sm test');
//   expect(btnPrimarySmallProps.onClick).toHaveBeenCalledTimes(0);
//   fireEvent.click(btnPrimarySmallElement);
//   expect(btnPrimarySmallProps.onClick).toHaveBeenCalledTimes(1);