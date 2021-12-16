import React from 'react';
import { render } from '@testing-library/react';
import Box from './Box';
import Button from '../Button';
//shallow testing
/* 
not just testing js, but also testing the DOM 
*/

describe('Box', () => {
  it('should render default Box with div tag as root and text as children', () => {
    const wrapper = render(<Box boxType="default">default box</Box>);
    const element = wrapper.queryByText('default box');

    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('DIV');
    expect(element).toHaveClass('box box-default');
  });

  it('should render default Box with div tag as root and Button as child', () => {
    const wrapper = render(
      <Box boxType="default">
        <Button
          data-testid="test-child"
          btnType="default"
          disabled={false}
          onClick={function noRefCheck() {}}
        >
          Default Button
        </Button>
      </Box>
    );

    const element = wrapper.getByTestId('test-child');

    expect(element).toBeInTheDocument();
  });

  it('should render Box with span tag as root and paragraph as child', () => {
    const wrapper = render(
      <Box
        data-testid="test-span"
        boxType="rootComponentWrapped"
        rootComponent="span"
        boxInlineStyle={{ backgroundColor: 'teal' }}
      >
        {<p>content1</p>}
      </Box>
    );
    const element = wrapper.getByTestId('test-span');
    console.log(element);
    expect(element.tagName).toBe('SPAN');
  });
});
