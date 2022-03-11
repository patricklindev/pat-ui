import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Checkbox, { NativeCheckboxProps } from './Checkbox';

describe('Checkbox', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Checkbox />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render default checkbox', () => {
    const wrapper = render(<Checkbox />);
    const spanElement = wrapper.queryByTestId('span wrapper') as HTMLElement;
    expect(spanElement).toBeInTheDocument();
    expect(spanElement).toHaveClass('checkbox-container checkbox-medium');
    const rippleElement = wrapper.queryByTestId(
      'ripple container'
    ) as HTMLElement;
    expect(rippleElement).toBeInTheDocument();
    expect(rippleElement).toHaveClass(
      'ripple-container ripple-container-color-default'
    );
    const svgElement = wrapper.queryByTestId('svg unchecked') as HTMLElement;
    expect(svgElement).toBeInTheDocument();
  });

  it('should render primary color', () => {
    const primaryColorWrapper = render(<Checkbox checkColor="primary" />);
    const primaryRippleElement = primaryColorWrapper.queryByTestId(
      'ripple container'
    ) as HTMLElement;
    expect(primaryRippleElement).toBeInTheDocument();
    expect(primaryRippleElement).toHaveClass(
      'ripple-container ripple-container-color-primary'
    );
  });

  it('should render seconday color', () => {
    const secondaryColorWrapper = render(<Checkbox checkColor="secondary" />);
    const secondRippleElement = secondaryColorWrapper.queryByTestId(
      'ripple container'
    ) as HTMLElement;
    expect(secondRippleElement).toBeInTheDocument();
    expect(secondRippleElement).toHaveClass(
      'ripple-container ripple-container-color-secondary'
    );
  });

  it('should render small size checkbox', () => {
    const smallWrapper = render(<Checkbox checkSize="small" />);
    const smallElement = smallWrapper.queryByTestId(
      'span wrapper'
    ) as HTMLElement;
    expect(smallElement).toBeInTheDocument();
    expect(smallElement).toHaveClass('checkbox-container checkbox-small');
  });

  it('should render unchecked checkbox', () => {
    const wrapper = render(<Checkbox isChecked={false} />);
    const checkedSVG = wrapper.queryByTestId('svg unchecked') as HTMLElement;
    expect(checkedSVG).toBeInTheDocument();
  });

  it('should render checked checkbox', () => {
    const wrapper = render(<Checkbox isChecked={true} />);
    const checkedSVG = wrapper.queryByTestId('svg checked') as HTMLElement;
    expect(checkedSVG).toBeInTheDocument();
  });

  it('should render checkbox with label', () => {
    const wrapper = render(<Checkbox label="test" />);
    const element = wrapper.queryByText('test') as HTMLElement;
    expect(element).toBeInTheDocument();
  });

  it('should call cb function passed to onChange', () => {
    const checkProps = {
      onChange: jest.fn(),
    };
    const wrapper = render(<Checkbox {...checkProps} />);
    const element = wrapper.queryByTestId('input element');
    expect(element).toBeInTheDocument();
    expect(checkProps.onChange).toHaveBeenCalledTimes(0);
    element && fireEvent.click(element);
    expect(checkProps.onChange).toHaveBeenCalledTimes(1);
  });
});
