import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Switch from './Switch';

describe('Switch', () => {

  const renderSwitch = (props: any) => {
    return render(<Switch {...props} />);
  };

  it('should render with the default props', () => {
    const { container } = renderSwitch({ onChange: jest.fn() });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with the default props and checked', () => {
    const { container } = renderSwitch({ checked: true, onChange: jest.fn() });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with the checked props and disabled', () => {
    const { container } = renderSwitch({ checked: true, disabled: true, onChange: jest.fn() });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with the label', () => {
    const label = 'Test Label';
    const { getByText } = renderSwitch({ label, onChange: jest.fn() });
    expect(getByText(label)).toBeInTheDocument();
  });

  it('should render with the label and checked', () => {
    const label = 'Test Label';
    const { getByText } = renderSwitch({ label, checked: true, onChange: jest.fn() });
    expect(getByText(label)).toBeInTheDocument();
  });

  it('should render with the label and disabled', () => {
    const label = 'Test Label';
    const { getByText } = renderSwitch({ label, disabled: true, onChange: jest.fn() });
    expect(getByText(label)).toBeInTheDocument();
  });

  it('should render with the label and checked and disabled', () => {
    const label = 'Test Label';
    const { getByText } = renderSwitch({ label, checked: true, disabled: true, onChange: jest.fn() });
    expect(getByText(label)).toBeInTheDocument();
  });

  it('should render with the primary color', () => {
    const { container } = renderSwitch({ color: 'primary', onChange: jest.fn() });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with the primary color and checked', () => {
    const { container } = renderSwitch({ color: 'primary', checked: true, onChange: jest.fn() });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with the secondary color', () => {
    const { container } = renderSwitch({ color: 'secondary', onChange: jest.fn() });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with the small size', () => {
    const { container } = renderSwitch({ size: 'small', onChange: jest.fn() });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with the small size and disabled and no label', () => {
    const { container } = renderSwitch({ size: 'small', disabled: true });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with the small size and checked', () => {
    const { container } = renderSwitch({ size: 'small', checked: true, onChange: jest.fn() });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with the small size and primary color', () => {
    const { container } = renderSwitch({ size: 'small', color: 'primary', onChange: jest.fn() });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with the small size and secondary color', () => {
    const { container } = renderSwitch({ size: 'small', color: 'secondary', onChange: jest.fn() });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should call the onChange function when clicked', () => {
    const onChange = jest.fn();
    const { container } = renderSwitch({ onChange });
    fireEvent.click(container.firstChild as Element);
    expect(onChange).toHaveBeenCalled();
  });

  it('Use can decide whether on or off the switch by providing props externally', () => {
    const onChange = jest.fn();
    const { container } = renderSwitch({ onChange, checked: true });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Users can provide some callback function as props, callback will be triggered whenever the state is changed', () => {
    const onChange = jest.fn();
    const { container } = renderSwitch({ onChange });
    fireEvent.click(container.firstChild as Element);
    expect(onChange).toHaveBeenCalled();
  });
});
