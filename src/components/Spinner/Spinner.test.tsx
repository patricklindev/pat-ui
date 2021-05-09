import React from 'react';
import { render } from '@testing-library/react';
import Spinner, { SpinnerProps } from './Spinner';

describe('Spinner', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Spinner />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render with different props', () => {
    const spinnerProps: SpinnerProps = {
      size: 'lg',
      color: 'light',
      className: 'test',
    };
    const { getByTestId } = render(<Spinner {...spinnerProps} />);
    const spinnerElement = getByTestId('spinner-element');
    expect(spinnerElement).toBeInTheDocument();
    expect(spinnerElement).toHaveClass('spinner spinner-lg spinner-light test');
  });
});
