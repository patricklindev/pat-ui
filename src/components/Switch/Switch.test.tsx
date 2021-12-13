import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import Switch ,{ ISwitchProps } from './Switch';

describe('Switch', () => {
    it('should match snapshot', () => {
        const { asFragment } = render(<Switch> Snapshot Switch </Switch>);
        expect(asFragment()).toMatchSnapshot();
      });

    it('should render default switch', () => {
        // Default message
        const switchBasicProps: ISwitchProps = {
            switchSize: 'medium',
            textPosition: 'default',
            className: 'test'
        }
        const msgBasicWrapper = render(<Switch {...switchBasicProps}></Switch>);
        const msgElement = screen.getByTestId('switch-element');
        expect(msgElement).toHaveClass('container default');
    });
    it('should render default switch', () => {
        // Default message
        const switchLargeProps: ISwitchProps = {
            switchSize: 'large',
            textPosition: 'top',
            disabled: true,
            onClick: () => {
                console.log('Here')
            },
            className: 'test-two'
        }
        const msgBasicWrapper = render(<Switch {...switchLargeProps}></Switch>);
        const msgElement = screen.getByTestId('switch-label');
        expect(msgElement).toHaveClass('switch large top test-two true');
    });


});
