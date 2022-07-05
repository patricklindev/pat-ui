import React from 'react';
import Slider from './Slider'
import renderer from 'react-test-renderer';

describe('Slider', () => {
    //snapshot
    it('should match snapshot', () => {
        const component = renderer.create(<Slider />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Developers should be able to set the color of the component using props', () => {
        fail('Needs to be done')
    });

    it('Developers should be able to set the size of the component using props', () => {
        fail('Needs to be done')
    });

    it('Developers can choose to have number marks on the slider track by providing value in props. (Marks on any arbitrary value', () => {
        fail('Needs to be done')
    });
})

