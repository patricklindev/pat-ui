import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import Text, { InputProps } from './Text';

describe('Text', () => {
    // it('should render default text', () => {
    //     const btnProps = {
    //       onClick: jest.fn(),
    //     };
    //     const wrapper = render(<Text {...btnProps}>Default Text</Text>);
    //     const element = wrapper.queryByText('Default Button') as HTMLElement;
    //     expect(element).toBeInTheDocument();
    //     expect(element.tagName).toBe('BUTTON');
    //     expect(element).toHaveClass('btn btn-default');
    //     expect(btnProps.onClick).toHaveBeenCalledTimes(0);
    //     fireEvent.click(element);
    //     expect(btnProps.onClick).toHaveBeenCalledTimes(1);
    //   });
});