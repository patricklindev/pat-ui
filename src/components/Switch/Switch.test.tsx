import React from 'react';
import Switch, { SwitchProps } from './Switch'
import {fireEvent, render} from '@testing-library/react';
// import renderer from 'react-test-renderer';

describe('Switch', () => {
    //snapshot testing with react-test-renderer: generate snapshot dir
    // test('should match snapshot', () => {
    //     const component = renderer.create(<Switch>Switch</Switch>,
    //     );
    //     let tree = component.toJSON();
    //     expect(tree).toMatchSnapshot();
    // }); 

    it('should match snapshot', () => {
        const { asFragment } = render(<Switch/>);
        expect(asFragment()).toMatchSnapshot();
      });

    it('should pass', () => {
        expect('test').toBe('test');
    })

    it('can customize the color by providing color props', () => {
        const switchColorProps: SwitchProps = {
            color: 'info',
            onClick: jest.fn()
        }

        // const wrapper = render(<Switch {...switchSizeProps}/> );
        // const inputElement = wrapper.getByRole('checkbox') as HTMLElement;
        const {getByRole} = render(<Switch {...switchColorProps}/> );
        const switchColorElement = getByRole('checkbox') as HTMLElement; 
        expect(switchColorElement).toBeInTheDocument();
        expect(switchColorElement.tagName).toBe('INPUT'); 
        expect(switchColorProps.onClick).toHaveBeenCalledTimes(0);
        fireEvent.click(switchColorElement);
        expect(switchColorProps.onClick).toHaveBeenCalledTimes(1);
        const NextSiblingOfSwitchColorElement = (switchColorElement.nextSibling as HTMLElement)
        expect(NextSiblingOfSwitchColorElement.tagName).toBe('SPAN'); 
        expect(NextSiblingOfSwitchColorElement).toHaveClass('slider round info')
    }) 
    
    it('can choose different sizes of the switch by providing a size prop', () => {
        const switchSmallProps: SwitchProps = {
            sizes: 'sm',
            label: 'small',
            onClick: jest.fn()
        }

        const {getByLabelText} = render(<Switch {...switchSmallProps}/> );
        const switchSmallElement = getByLabelText('small') as HTMLElement; 
        expect(switchSmallElement).toBeInTheDocument();
        expect(switchSmallElement.tagName).toBe('INPUT'); 
        expect(switchSmallProps.onClick).toHaveBeenCalledTimes(0);
        fireEvent.click(switchSmallElement);
        expect(switchSmallProps.onClick).toHaveBeenCalledTimes(1);
        const NextSiblingOfSwitchSmallElement = (switchSmallElement.nextSibling as HTMLElement)
        expect(NextSiblingOfSwitchSmallElement.tagName).toBe('SPAN'); 
        expect(NextSiblingOfSwitchSmallElement).toHaveClass('slider round primary sm')
    }) 

    it('can decide whether or not to provide a label and the content of the label', () => { 
        const switchLabelProps: SwitchProps = {
            label: 'testLabel',
            onClick: jest.fn()
        }

        const {getByText} = render(<Switch {...switchLabelProps}/> );
        const switchLabelElement = getByText(/testLabel/i) as HTMLElement; 
        expect(switchLabelElement).toBeInTheDocument();
        expect(switchLabelElement.tagName).toBe('SPAN');
        expect(switchLabelElement).toHaveClass('switch-label')
        const FirstChildOfParentEleOfSwitchLabelElement = (switchLabelElement.parentElement?.firstChild as HTMLElement);
        expect(FirstChildOfParentEleOfSwitchLabelElement.tagName).toBe('INPUT');
        expect(switchLabelProps.onClick).toHaveBeenCalledTimes(0);
        fireEvent.click(FirstChildOfParentEleOfSwitchLabelElement);
        expect(switchLabelProps.onClick).toHaveBeenCalledTimes(1);

    })
    
    it('Users want to control whether the switch is disabled by providing props', () => {
        const switchDisabledProps: SwitchProps = {
            disabled: true,
            onClick: jest.fn()
        }

        const {getByRole} = render(<Switch {...switchDisabledProps}/> );
        const switchDisabledElement = getByRole('checkbox') as HTMLElement; 
        expect(switchDisabledElement).toBeInTheDocument();
        expect(switchDisabledElement.tagName).toBe('INPUT'); 
        expect(switchDisabledProps.onClick).toHaveBeenCalledTimes(0);
        fireEvent.click(switchDisabledElement);
        expect(switchDisabledProps.onClick).toHaveBeenCalledTimes(0);
        const NextSiblingOfSwitchDisabledElement = (switchDisabledElement.nextSibling as HTMLElement)
        expect(NextSiblingOfSwitchDisabledElement.tagName).toBe('SPAN'); 
        expect(NextSiblingOfSwitchDisabledElement).toHaveClass('slider round primary disabled')
    }) 

    it('Users can decide whether on or off the switch by providing props externally', () => {
        const switchToggleProps: SwitchProps = {
            toggle: 'on',
            onClick: jest.fn()
        }

        const {getByRole} = render(<Switch {...switchToggleProps}/> );
        const switchToggleElement = getByRole('checkbox') as HTMLElement; 
        expect(switchToggleElement).toBeInTheDocument();
        expect(switchToggleElement.tagName).toBe('INPUT'); 
        expect(switchToggleProps.onClick).toHaveBeenCalledTimes(0);
        fireEvent.click(switchToggleElement);
        expect(switchToggleProps.onClick).toHaveBeenCalledTimes(1);
        const NextSiblingOfSwitchToggleElement = (switchToggleElement.nextSibling as HTMLElement)
        expect(NextSiblingOfSwitchToggleElement.tagName).toBe('SPAN'); 
        expect(NextSiblingOfSwitchToggleElement).toHaveClass('slider round primary')
    }) 

    it('Users can provide some callback function as props, callback will be triggered whenever the state is changed', () => {
        const handleChange = jest.fn()

        const {getByRole} = render(<Switch onChange={handleChange}/> );
        const switchCallbackElement = getByRole('checkbox') as HTMLElement; 
        expect(switchCallbackElement).toBeInTheDocument();
        expect(switchCallbackElement.tagName).toBe('INPUT'); 
        expect(handleChange).toHaveBeenCalledTimes(0);
        fireEvent.click(switchCallbackElement);
        expect(handleChange).toHaveBeenCalledTimes(1);
        const NextSiblingOfSwitchCallbackElement = (switchCallbackElement.nextSibling as HTMLElement)
        expect(NextSiblingOfSwitchCallbackElement.tagName).toBe('SPAN'); 
        expect(NextSiblingOfSwitchCallbackElement).toHaveClass('slider round primary')
    }) 

    it('should render correct switch based on different props', () => {
        const switchDiffProps: SwitchProps = {
            className: 'test',
            color: 'success',
            sizes: 'sm',
            label: 'testLabel',
            onChange: jest.fn(),
            onClick: jest.fn()
        }
        const {getByRole} = render(<Switch {...switchDiffProps}/> );
        const switchDiffElement = getByRole('checkbox') as HTMLElement; 
        expect(switchDiffElement).toBeInTheDocument();
        expect(switchDiffElement.tagName).toBe('INPUT'); 
        expect(switchDiffProps.onClick).toHaveBeenCalledTimes(0);
        fireEvent.click(switchDiffElement);
        expect(switchDiffProps.onClick).toHaveBeenCalledTimes(1);
        expect(switchDiffProps.onChange).toHaveBeenCalledTimes(1);
        fireEvent.click(switchDiffElement);
        expect(switchDiffProps.onChange).toHaveBeenCalledTimes(2);
        const NextSiblingOfSwitchDiffElement = (switchDiffElement.nextSibling as HTMLElement)
        expect(NextSiblingOfSwitchDiffElement.tagName).toBe('SPAN'); 
        expect(NextSiblingOfSwitchDiffElement).toHaveClass('slider round success sm test')
    }) 
})

render(<div />)





