import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import Accordion, { PatAccordionProps } from './Accordion';

describe('Buttton', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Accordion> Snapshot Accordion </Accordion>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render default Accordion', () => {
    const btnProps = {
      onClick: jest.fn(),
    };
    const wrapper = render(<Accordion {...btnProps}>Default Accordion</Accordion>);
    const element = wrapper.queryByText('Default Accordion') as HTMLElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('Accordion');
    expect(element).toHaveClass('btn btn-default');
    expect(btnProps.onClick).toHaveBeenCalledTimes(0);
    fireEvent.click(element);
    expect(btnProps.onClick).toHaveBeenCalledTimes(1);
  });

  it('should render correct Accordion based on different props', () => {
    const btnPrimarySmallProps: PatAccordionProps = {
      btnType: 'primary',
      btnSize: 'sm',
      onClick: jest.fn(),
      className: 'test',
    };
    const btnPrimarySmallWrapper = render(
      <Accordion {...btnPrimarySmallProps}>Primary Small Accordion</Accordion>
    );
    const btnPrimarySmallElement = btnPrimarySmallWrapper.queryByText(
      'Primary Small Accordion'
    ) as HTMLElement;
    expect(btnPrimarySmallElement).toBeInTheDocument();
    expect(btnPrimarySmallElement.tagName).toBe('Accordion');
    expect(btnPrimarySmallElement).toHaveClass('btn btn-primary btn-sm test');
    expect(btnPrimarySmallProps.onClick).toHaveBeenCalledTimes(0);
    fireEvent.click(btnPrimarySmallElement);
    expect(btnPrimarySmallProps.onClick).toHaveBeenCalledTimes(1);

    /// Link Accordion
    const btnLinkProps: PatAccordionProps = {
      btnType: 'link',
      onClick: jest.fn(),
    };
    const btnLinkWrapper = render(
      <Accordion {...btnLinkProps}>Link Accordion</Accordion>
    );
    const btnLinkElement = btnLinkWrapper.queryByText(
      'Link Accordion'
    ) as HTMLElement;
    expect(btnLinkElement).toBeInTheDocument();
    expect(btnLinkElement.tagName).toBe('A');
    expect(btnLinkElement).toHaveClass('btn btn-link');
    expect(btnLinkProps.onClick).toHaveBeenCalledTimes(0);
    fireEvent.click(btnLinkElement);
    expect(btnLinkProps.onClick).toHaveBeenCalledTimes(1);
  });

  it('should render disabled Accordion', () => {
    const btnDisabledLinkProps: PatAccordionProps = {
      btnType: 'link',
      onClick: jest.fn(),
      disabled: true,
    };
    const btnDisabledLinkWrapper = render(
      <Accordion {...btnDisabledLinkProps}>Disabled Link Accordion</Accordion>
    );
    const btnDisabledLinkElement = btnDisabledLinkWrapper.queryByText(
      'Disabled Link Accordion'
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
      <Accordion {...btnDisabledProps}>Disabled Accordion</Accordion>
    );
    const btnDisabledElement = btnDisabledWrapper.queryByText(
      'Disabled Accordion'
    ) as HTMLElement;
    expect(btnDisabledElement).toBeInTheDocument();
    expect(btnDisabledElement.tagName).toBe('Accordion');
    expect(btnDisabledElement).toHaveClass('btn btn-default');
    expect(btnDisabledElement).not.toHaveClass('disalbed');
    expect(btnDisabledProps.onClick).toHaveBeenCalledTimes(0);
    fireEvent.click(btnDisabledElement);
    expect(btnDisabledProps.onClick).toHaveBeenCalledTimes(0);
  });
});