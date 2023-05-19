import React from 'react';
import { shallow } from 'enzyme';
import Alert, { AlertProps } from './Alert';

describe('Alert', () => {
  const defaultProps: AlertProps = {
    altType: 'standard',
    altIcon: 'success',
    altSuffix: undefined,
    altTitle: 'This is an alert title',
    altTextStyle: 'one-line',
    onClose: jest.fn(),
    onClick: jest.fn(),
  };

  it('renders with defaults', () => {
    const wrapper = shallow(<Alert />);
    expect(wrapper.find('.alert')).toHaveLength(1);
  });

  it('renders with custom props', () => {
    const customProps: AlertProps = {
      altType: 'filled',
      altIcon: 'error',
      altSuffix: <button>OK</button>,
      altTitle: 'Custom title',
      altTextStyle: 'two-line-bold',
      className: 'custom-class',
      onClose: jest.fn(),
      onClick: jest.fn(),
    };
    const wrapper = shallow(<Alert {...customProps}>Custom content</Alert>);
    expect(wrapper.find('.alert-filled')).toHaveLength(1);
    expect(wrapper.find('.alert-error')).toHaveLength(1);
    expect(wrapper.find('button.alert-suffix')).toHaveLength(1);
    expect(wrapper.find('.alert-title').text()).toEqual('Custom title');
    expect(wrapper.find('.alert-text-container').hasClass('alert-two-line-bold')).toBe(true);
    expect(wrapper.find('.alert-text-container').text()).toEqual('Custom titleCustom content');
    expect(wrapper.hasClass('custom-class')).toBe(true);
  });

  it('calls onClose when close button is clicked', () => {
    const wrapper = shallow(<Alert {...defaultProps} />);
    wrapper.find('button.alert-suffix').simulate('click');
    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  it('calls onClick when button is clicked', () => {
    const wrapper = shallow(<Alert {...defaultProps} />);
    wrapper.find('div.alert').simulate('click');
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
});