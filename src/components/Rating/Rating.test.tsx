import React from 'react';

import { fireEvent, render } from '@testing-library/react';
import Rating, {propTypes} from './Rating';

describe('Rating', () => {
    it('should match snapshot', () => {
        const {asFragment} = render(<Rating> Snapshot Message </Rating>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should be able to preview the rating by hovering on the stars', () => {
        const { getAllByRole } = render(<Rating />);
        const stars = getAllByRole('star');
        expect(stars.length).toBe(5);
        
        for (let i = 0; i < stars.length; i++) {
            expect(stars[i]).toBeInTheDocument();
        }

        for(let j = 0; j < stars.length; j++) {
            expect(stars[j]).toHaveAttribute('style',"position: relative; cursor: pointer; display: block; float: left; color: gray; font-size: 30px;");
            fireEvent.mouseOver(stars[j]);
            expect(stars[j]).toHaveAttribute('style',"position: relative; cursor: pointer; display: block; float: left; color: orange; font-size: 35px;");
        }
    });


    it('should be able to disable the component from props', () => {
        const starProps: propTypes = {
            edit: false,
            value: 0,
            count: 5,
            size: 30,
            onChange: undefined,
            labels: [],
            labelIndex: 0
        }
        const { getAllByRole } = render(<Rating {...starProps}/>);
        const stars = getAllByRole('star');
        
        for (let i = 0; i < stars.length; i++) {
            expect(stars[i]).toBeInTheDocument();
        }

        for(let j = 0; j < stars.length; j++) {
            expect(stars[j]).toHaveAttribute('data-edit',"false");
        }
    });

    it('should be able to provide the label of the component from props', () => {
        const labels = ['Very bad','Bad','Okay','Good','Great']
        const starProps: propTypes = {
            value: 0,
            count: 5,
            size: 30,
            onChange: undefined,
            labels: labels,
            labelIndex: 0
        }
        const { getAllByRole } = render(<Rating {...starProps}/>);
        const stars = getAllByRole('star');

        for(let j = 0; j < stars.length; j++) {
            fireEvent.mouseOver(stars[j]);
            expect(stars[j]).toHaveAttribute('data-label',labels[j]);
        }
    });

    it('should be able to set the precision of the rating component', () => {
        const starProps: propTypes = {
            half: true,
            value: 3.5,
            count: 5,
            size: 30,
            onChange: undefined,
            labels: [],
            labelIndex: 0
        }
        const { getAllByRole } = render(<Rating {...starProps}/>);
        const stars = getAllByRole('star');
        fireEvent.mouseOver(stars[3]);
        expect(stars[3]).toHaveAttribute('data-halfIndex',"3.5");
    });

    it('should choose sizes of the rating component from props', () => {
        const starProps: propTypes = {
            value: 0,
            count: 5,
            size: 50,
            onChange: undefined,
            labels: [],
            labelIndex: 0
        }
        const { getAllByRole } = render(<Rating {...starProps}/>);
        const stars = getAllByRole('star');

        for(let j = 0; j < stars.length; j++) {
            expect(stars[j]).toHaveAttribute('style',"position: relative; cursor: pointer; display: block; float: left; color: gray; font-size: 50px;");
        }
    });

    it('should decide the number of stars in total from props', () => {
        const count = 10;
        const starProps: propTypes = {
            value: 0,
            count: count,
            size: 30,
            onChange: undefined,
            labels: [],
            labelIndex: 0
        }
        const { getAllByRole } = render(<Rating {...starProps}/>);
        const stars = getAllByRole('star');

        expect(stars.length).toBe(count);
  
    });

    it('should be able to control the value of the rating from outside of the component by providing a prop', () => {
        const starProps: propTypes = {
            edit: false,
            value: 4,
            count: 5,
            size: 30,
            onChange: undefined,
            labels: [],
            labelIndex: 0
        }
        const { getAllByRole } = render(<Rating {...starProps}/>);
        const stars = getAllByRole('star');

        for(let j = 0; j < stars.length; j++) {
            if(j === 4){
                expect(stars[j]).toHaveAttribute('data-active',"false");
            } else {
                expect(stars[j]).toHaveAttribute('data-active',"true");
            }
        }
    });
})