// ./Alert.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Alert, { AlertProps } from './Alert';

describe('Alert', () => {
  const defaultProps: AlertProps = {
    altType: 'standard',
    altIcon: 'success',
    altSuffix: undefined,
    altTitle: undefined,
    altTextStyle: 'one-line',
    onClose: jest.fn(),
    onClick: jest.fn()
  };

  it('renders without error', () => {
    render(<Alert {...defaultProps}>Alert content</Alert>);
  });

  it('displays the alert content', () => {
    const { getByText } = render(<Alert {...defaultProps}>Alert content</Alert>);
    expect(getByText('Alert content')).toBeInTheDocument();
  });

  it('applies the custom className', () => {
    const { container } = render(<Alert {...defaultProps} className="custom-class">Alert content</Alert>);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('applies the alert type class', () => {
    const { container } = render(<Alert {...defaultProps} altType="filled">Alert content</Alert>);
    expect(container.firstChild).toHaveClass('alert-filled-success');
  });

  it('applies the alert icon class', () => {
    const { container } = render(<Alert {...defaultProps} altIcon="error">Alert content</Alert>);
    expect(container.firstChild).toHaveClass('alert-standard-error');
  });

  it('applies the alert text style class', () => {
    const { container } = render(<Alert {...defaultProps} altTextStyle="two-line">Alert content</Alert>);
    expect(container.firstChild).toHaveClass('alert-two-line');
  });

  it('displays the alert title', () => {
    const { getByText } = render(<Alert {...defaultProps} altTitle="Alert Title">Alert content</Alert>);
    expect(getByText('Alert Title')).toBeInTheDocument();
  });

  it('renders a button suffix with close icon', () => {
    const onCloseMock = jest.fn();
    const { getByTestId } = render(<Alert {...defaultProps} onClose={onCloseMock}>Alert content</Alert>);
    const suffixElement = getByTestId('alert-suffix');
    expect(suffixElement).toBeInTheDocument();
    fireEvent.click(suffixElement);
    expect(onCloseMock).toHaveBeenCalled();
  });

  it('renders a button suffix with custom button icon', () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(<Alert {...defaultProps} onClose={onClickMock}>Alert content</Alert>);
  
    const suffixElement = getByTestId('alert-suffix');
    expect(suffixElement).toBeInTheDocument();
  
    fireEvent.click(suffixElement);
    expect(onClickMock).toHaveBeenCalled();
  });
});
