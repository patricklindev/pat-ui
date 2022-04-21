import React from 'react';

import { render } from '@testing-library/react';
import Text, { JTextProps } from './Text';

describe('Text', ()=>{

    it('should match snapshot', () => {
        const {asFragment} = render(<Text />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should render default text', () => {
        // Default text
        const txBasicProps: JTextProps = {
            type: 'text',
            vaild: true
        }
        const txBasicWrapper = render(<Text {...txBasicProps} />);
        const element = txBasicWrapper.container.firstElementChild as HTMLElement;
        expect(element).toBeInTheDocument();
        expect(element.tagName).toBe('INPUT');
        expect(element).toHaveClass('input-box');
    });

    it('should render error text', () => {
        // error text
        const txBasicProps: JTextProps = {
            type: 'text',
            vaild: false
        }
        const txBasicWrapper = render(<Text {...txBasicProps} />);
        const element = txBasicWrapper.container.firstElementChild as HTMLElement;
        expect(element).toBeInTheDocument();
        expect(element.tagName).toBe('INPUT');
        expect(element).toHaveClass('error-box');
    });


});