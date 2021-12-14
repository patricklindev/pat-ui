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
    it('should render top switch', () => {
        // Top switch
        const switchTopProps: ISwitchProps = {
            switchSize: 'large',
            textPosition: 'top',
            disabled: true,
            onClick: () => {
                console.log('Here')
            },
            className: 'test-two'
        }
        const switchWrapper = render(<Switch {...switchTopProps}></Switch>);
        const switchElement = screen.getByTestId('switch-label');
        expect(switchElement).toHaveClass('switch large top test-two true');
    });
    it('should render left switch', () => {
        // Left switch
        const switchLeftProps: ISwitchProps = {
            switchSize: 'small',
            textPosition: 'left',
            onClick: () => {
                console.log('Here')
            },
            className: 'test-two'
        }
        const switchWrapper = render(<Switch {...switchLeftProps}></Switch>);
        const switchElement = screen.getByTestId('switch-label');
        expect(switchElement).toHaveClass('switch small left test-two');
    });


});
