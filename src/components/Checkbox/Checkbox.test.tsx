import React from 'react';

import { render, fireEvent, screen } from '@testing-library/react';
import Checkbox, { PatCheckboxProps } from './Checkbox';

describe('Checkbox', () => {
  /* Okay */
  it('should match snapshot checkbox', () => {
    const { asFragment } = render(<Checkbox label="Snapshot Checkbox" />);
    expect(asFragment()).toMatchSnapshot();
  });

  /* Okay */
  it('should render default checkbox', () => {
    const checkboxProps = {
      onClick: jest.fn(),
    };
    const wrapper = render(
      <Checkbox {...checkboxProps} label="Default Checkbox" />
    );
    const outWrapper = screen.queryByTestId('wrapper');
    const container = screen.queryByTestId('container') as HTMLElement;
    const checkbox = screen.queryByTestId('checkbox');
    const span = screen.queryByTestId('span');
    expect(outWrapper).toBeInTheDocument();
    expect(container).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
    expect(span).toBeInTheDocument();
    expect(container).toHaveClass('checkbox checkbox-default');

    expect(checkboxProps.onClick).toHaveBeenCalledTimes(0);
    fireEvent.click(container);
    expect(checkboxProps.onClick).toHaveBeenCalledTimes(1);
  });

  /* Okay */
  it('should render correct default small checkbox', () => {
    const checkboxPrimarySmallProps: PatCheckboxProps = {
      checkboxColor: 'primary',
      checkboxSize: 'small',
      onClick: jest.fn(),
    };

    const checkboxPrimarySmallWrapper = render(
      <Checkbox {...checkboxPrimarySmallProps} label="Primary Small Checkbox" />
    );
    const outWrapper = screen.queryByTestId('wrapper');
    const container = screen.queryByTestId('container') as HTMLElement;
    const checkbox = screen.queryByTestId('checkbox');
    const span = screen.queryByTestId('span');
    expect(outWrapper).toBeInTheDocument();
    expect(container).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
    expect(span).toBeInTheDocument();
    expect(container).toHaveClass('checkbox checkbox-primary checkbox-small');

    expect(checkboxPrimarySmallProps.onClick).toHaveBeenCalledTimes(0);
    fireEvent.click(container);
    expect(checkboxPrimarySmallProps.onClick).toHaveBeenCalledTimes(1);
  });

  /* Okay */
  it('shoud render correct secondary medium checkbox ', () => {
    /// secondary medium checkbox
    const checkboxSecondaryMediumProps: PatCheckboxProps = {
      checkboxColor: 'secondary',
      checkboxSize: 'medium',
      onClick: jest.fn(),
    };
    const checkboxLinkWrapper = render(
      <Checkbox
        {...checkboxSecondaryMediumProps}
        label="Secondary Medium Checkbox"
      />
    );
    const outWrapper2 = checkboxLinkWrapper.queryByTestId('wrapper');
    const container2 = checkboxLinkWrapper.queryByTestId(
      'container'
    ) as HTMLElement;
    const checkbox2 = checkboxLinkWrapper.queryByTestId('checkbox');
    const span2 = checkboxLinkWrapper.queryByTestId('span');
    expect(outWrapper2).toBeInTheDocument();
    expect(container2).toBeInTheDocument();
    expect(checkbox2).toBeInTheDocument();
    expect(span2).toBeInTheDocument();
    expect(container2).toHaveClass(
      'checkbox checkbox-secondary checkbox-medium'
    );

    expect(checkboxSecondaryMediumProps.onClick).toHaveBeenCalledTimes(0);
    fireEvent.click(container2);
    expect(checkboxSecondaryMediumProps.onClick).toHaveBeenCalledTimes(1);
  });

  /* Okay */
  it('should render disabled checkbox', () => {
    const checkboxDisabledProps: PatCheckboxProps = {
      checkboxColor: 'default',
      onClick: jest.fn(),
      disabled: true,
    };
    const checkboxDisabledWrapper = render(
      <Checkbox {...checkboxDisabledProps} label="Disabled Default Checkbox" />
    );
    const outWrapper = screen.queryByTestId('wrapper');
    const container = screen.queryByTestId('container') as HTMLElement;
    const checkbox = screen.queryByTestId('checkbox');
    const span = screen.queryByTestId('span');
    expect(outWrapper).toBeInTheDocument();
    expect(container).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
    expect(span).toBeInTheDocument();
    expect(container).toHaveClass('checkbox checkbox-default disabled');
    expect(checkbox).toHaveAttribute('disabled', '');

    expect(checkboxDisabledProps.onClick).toHaveBeenCalledTimes(0);
    fireEvent.click(container);
    expect(checkboxDisabledProps.onClick).toHaveBeenCalledTimes(0);
  });

  it('should render indeterminate checkbox', () => {
    const checkboxIndeterminateProps: PatCheckboxProps = {
      checkboxColor: 'default',
      onClick: jest.fn(),
      indeterminate: true,
    };
    const checkboxIndeterminateWrapper = render(
      <Checkbox
        {...checkboxIndeterminateProps}
        label="Indeterminate Default Checkbox"
      />
    );
    const outWrapper = screen.queryByTestId('wrapper');
    const container = screen.queryByTestId('container') as HTMLElement;
    const checkbox = screen.queryByTestId('checkbox');
    const span = screen.queryByTestId('span');
    expect(outWrapper).toBeInTheDocument();
    expect(container).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
    expect(span).toBeInTheDocument();
    expect(container).toHaveClass(
      'checkbox checkbox-default checkbox-indeterminate'
    );

    expect(checkboxIndeterminateProps.onClick).toHaveBeenCalledTimes(0);
    fireEvent.click(container);
    expect(checkboxIndeterminateProps.onClick).toHaveBeenCalledTimes(1);
  });
});
