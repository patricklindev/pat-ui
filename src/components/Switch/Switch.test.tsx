import React from 'react';
import {render, screen} from '@testing-library/react';
import Switch ,{ ISwitchProps } from './Switch';

describe('Switch', () => {
    it('should match snapshot', () => {
        const { asFragment } = render(<Switch> Snapshot Switch </Switch>);
        expect(asFragment()).toMatchSnapshot();
      });

    it('should render default switch', () => {
        // Default switch
        const switchBasicProps: ISwitchProps = {
            switchSize: 'medium',
            textPosition: 'default',
            className: 'test'
        }
        const switchWrapper = render(<Switch {...switchBasicProps}></Switch>);
        const switchElement = screen.getByTestId('switch-element');
        expect(switchElement).toHaveClass('container default');
    });
    it('should render more complicated switch', () => {
        // More complicated switch
        const switchLargeProps: ISwitchProps = {
            switchSize: 'large',
            textPosition: 'top',
            disabled: true,
            onClick: () => {
                console.log('Here')
            },
            className: 'test-two'
        }
        const switchWrapper = render(<Switch {...switchLargeProps}></Switch>);
        const switchElement = screen.getByTestId('switch-label');
        expect(switchElement).toHaveClass('switch large top test-two true');
    });


});
