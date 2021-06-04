import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Bread from './Breadcrumbs';
import BreadOption from './BreadcrumbsOption';

describe('Breadcrumb', () => {
    it(' should match snapshot', () => {
        const { asFragment } = render(<Bread>default bread</Bread>)
        expect(asFragment()).toMatchSnapshot();
    })

    it(' should render default Breadcrumbs', () => {
        const breadProps = {
            className: 'test',
        }
        const wrapper = render(<Bread { ...breadProps }>default bread</Bread>);
        const element = wrapper.queryByRole('bread') as HTMLElement;
        // const element = wrapper.queryByText('⮞ default bread') as HTMLElement;
        expect(element).toBeInTheDocument()
        expect(element.tagName).toBe('UL')
        expect(element).toHaveClass('bread')
        console.log(element.tagName)
    })

    it(' should render primary Breadcrumbs', () => {
        const breadProps = {
            className: 'test',
        }
        const wrapper = render(<Bread {...breadProps}>primary sm bread</Bread>);
        // const element = wrapper.queryByText('⮞ primary sm bread') as HTMLElement;
        // expect(element).toBeInTheDocument()
        // expect(element.tagName).toBe('UL')
        // expect(element).toHaveClass('bread test')
    })

    it(' should render BreadOption', () => {
        const breadOptionProps = {
            value: 'val',
            onClick: jest.fn(),
            className: 'test',
        }

        const wrapper = render(<BreadOption {...breadOptionProps}>breadoption default</BreadOption>);
        const element = wrapper.queryByText('breadoption default') as HTMLElement;
        expect(element).toBeInTheDocument()
        expect(element.tagName).toBe('LI')
        expect(element).toHaveClass('bread__option test')
        expect(breadOptionProps.onClick).toHaveBeenCalledTimes(0)
        fireEvent.click(element)
        expect(breadOptionProps.onClick).toHaveBeenCalledTimes(1)
    })

    it(' should render divider slash', () => {
        const wrapper = render(<BreadOption>About</BreadOption>);
        const element = wrapper.queryByText('About') as HTMLElement;
        expect(element).toBeInTheDocument();
    })
})