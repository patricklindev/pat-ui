import React from 'react';

import {render, fireEvent} from '@testing-library/react';
import Button, {ButtonType, ButtonSize} from './Button';

describe('Buttton', () => {
  it('should match snapshot', () => {
    const {asFragment} = render(<Button> Snapshot Button </Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render default button', () => {
    const btnProps = {
      onClick: jest.fn(),
    };
    const wrapper = render(<Button {...btnProps}>Default Button</Button>);
    const element = wrapper.queryByText('Default Button') as HTMLElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('BUTTON');
    expect(element).toHaveClass('btn btn-default');
    expect(btnProps.onClick).toHaveBeenCalledTimes(0);
    fireEvent.click(element);
    expect(btnProps.onClick).toHaveBeenCalledTimes(1);
  });

  it('should render correct button based on different props', () => {
    const btnPrimarySmallProps = {
      btnType: ButtonType.Primary,
      btnSize: ButtonSize.Small,
      onClick: jest.fn(),
      className: 'test',
    };
    const btnPrimarySmallWrapper = render(
      <Button {...btnPrimarySmallProps}>Primary Small Button</Button>
    );
    const btnPrimarySmallElement = btnPrimarySmallWrapper.queryByText(
      'Primary Small Button'
    ) as HTMLElement;
    expect(btnPrimarySmallElement).toBeInTheDocument();
    expect(btnPrimarySmallElement.tagName).toBe('BUTTON');
    expect(btnPrimarySmallElement).toHaveClass('btn btn-primary btn-sm test');
    expect(btnPrimarySmallProps.onClick).toHaveBeenCalledTimes(0);
    fireEvent.click(btnPrimarySmallElement);
    expect(btnPrimarySmallProps.onClick).toHaveBeenCalledTimes(1);

    /// Link Button
    const btnLinkProps = {
      btnType: ButtonType.Link,
      onClick: jest.fn(),
    };
    const btnLinkWrapper = render(
      <Button {...btnLinkProps}>Link Button</Button>
    );
    const btnLinkElement = btnLinkWrapper.queryByText(
      'Link Button'
    ) as HTMLElement;
    expect(btnLinkElement).toBeInTheDocument();
    expect(btnLinkElement.tagName).toBe('A');
    expect(btnLinkElement).toHaveClass('btn btn-link');
    expect(btnLinkProps.onClick).toHaveBeenCalledTimes(0);
    fireEvent.click(btnLinkElement);
    expect(btnLinkProps.onClick).toHaveBeenCalledTimes(1);
  });

  it('should render disabled button', () => {
    const btnDisabledLinkProps = {
      btnType: ButtonType.Link,
      onClick: jest.fn(),
      disabled: true,
    };
    const btnDisabledLinkWrapper = render(
      <Button {...btnDisabledLinkProps}>Disabled Link Button</Button>
    );
    const btnDisabledLinkElement = btnDisabledLinkWrapper.queryByText(
      'Disabled Link Button'
    ) as HTMLElement;
    expect(btnDisabledLinkElement).toBeInTheDocument();
    expect(btnDisabledLinkElement.tagName).toBe('A');
    expect(btnDisabledLinkElement).toHaveClass('btn btn-link disabled');
    expect(btnDisabledLinkProps.onClick).toHaveBeenCalledTimes(0);
    fireEvent.click(btnDisabledLinkElement);
    expect(btnDisabledLinkProps.onClick).toHaveBeenCalledTimes(0);

    const btnDisabledProps = {
      onClick: jest.fn(),
      disabled: true,
    };
    const btnDisabledWrapper = render(
      <Button {...btnDisabledProps}>Disabled Button</Button>
    );
    const btnDisabledElement = btnDisabledWrapper.queryByText(
      'Disabled Button'
    ) as HTMLElement;
    expect(btnDisabledElement).toBeInTheDocument();
    expect(btnDisabledElement.tagName).toBe('BUTTON');
    expect(btnDisabledElement).toHaveClass('btn btn-default');
    expect(btnDisabledElement).not.toHaveClass('disalbed');
    expect(btnDisabledProps.onClick).toHaveBeenCalledTimes(0);
    fireEvent.click(btnDisabledElement);
    expect(btnDisabledProps.onClick).toHaveBeenCalledTimes(0);
  });
});
