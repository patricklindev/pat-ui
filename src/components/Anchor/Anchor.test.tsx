import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import Anchor, { PatAnchorProps } from './Anchor';

describe('Anchor', () => {
  it('should render deafult link', () => {
    const anchorProps = {
      onClick: jest.fn(),
      href: '#',
    };
    const wrapper = render(<Anchor {...anchorProps}>Default Anchor</Anchor>);
    const element = wrapper.queryByText('Default Anchor') as HTMLElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('A');
    expect(element).toHaveClass('link link-always link-default link-button');
    expect(anchorProps.onClick).toHaveBeenCalledTimes(0);
    fireEvent.click(element);
    expect(anchorProps.onClick).toHaveBeenCalledTimes(1);
  });
  it('should render primary link', () => {
    const anchorProps: PatAnchorProps = {
      anchorType: 'primary',
      onClick: jest.fn(),
      href: '#',
    };
    const wrapper = render(<Anchor {...anchorProps}>Primary Anchor</Anchor>);
    const element = wrapper.queryByText('Primary Anchor') as HTMLElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('A');
    expect(element).toHaveClass('link link-always link-primary link-button');
    expect(anchorProps.onClick).toHaveBeenCalledTimes(0);
    fireEvent.click(element);
    expect(anchorProps.onClick).toHaveBeenCalledTimes(1);
  });
  it('should render secondary h1 link', () => {
    const anchorProps: PatAnchorProps = {
      anchorType: 'secondary',
      variant: 'h1',
      onClick: jest.fn(),
      href: '#',
    };
    const wrapper = render(<Anchor {...anchorProps}>Secondary Anchor</Anchor>);
    const element = wrapper.queryByText('Secondary Anchor') as HTMLElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('A');
    expect(element).toHaveClass('link link-always link-secondary link-h1');
    expect(anchorProps.onClick).toHaveBeenCalledTimes(0);
    fireEvent.click(element);
    expect(anchorProps.onClick).toHaveBeenCalledTimes(1);
  });
});
