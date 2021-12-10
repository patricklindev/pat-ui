import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import Link, { PatLinkProps } from './Link';

describe('Link', () => {
  it('should render deafult link', () => {
    const linkProps = {
      onClick: jest.fn(),
      href: '#',
    };
    const wrapper = render(<Link {...linkProps}>Default Link</Link>);
    const element = wrapper.queryByText('Default Link') as HTMLElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('BUTTON');
    expect(element).toHaveClass('link link-always link-default link-button');
    expect(linkProps.onClick).toHaveBeenCalledTimes(0);
    fireEvent.click(element);
    expect(linkProps.onClick).toHaveBeenCalledTimes(1);
  });
  it('should render primary link', () => {
    const linkProps: PatLinkProps = {
      linkType: 'primary',
      onClick: jest.fn(),
      href: '#',
    };
    const wrapper = render(<Link {...linkProps}>Primary Link</Link>);
    const element = wrapper.queryByText('Primary Link') as HTMLElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('BUTTON');
    expect(element).toHaveClass('link link-always link-primary link-button');
    expect(linkProps.onClick).toHaveBeenCalledTimes(0);
    fireEvent.click(element);
    expect(linkProps.onClick).toHaveBeenCalledTimes(1);
  });
  it('should render secondary h1 link', () => {
    const linkProps: PatLinkProps = {
      linkType: 'secondary',
      variant: 'h1',
      onClick: jest.fn(),
      href: '#',
    };
    const wrapper = render(<Link {...linkProps}>Secondary Link</Link>);
    const element = wrapper.queryByText('Secondary Link') as HTMLElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('H1');
    expect(element).toHaveClass('link link-always link-secondary link-h1');
    expect(linkProps.onClick).toHaveBeenCalledTimes(0);
    fireEvent.click(element);
    expect(linkProps.onClick).toHaveBeenCalledTimes(1);
  });
});
