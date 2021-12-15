import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import Anchor, { PatAnchorProps } from './Anchor';

describe('Anchor', () => {
  test('should render deafult anchor', () => {
    const anchorProps = {
      href: '#',
    };
    const wrapper = render(<Anchor {...anchorProps}>Default Anchor</Anchor>);
    const element = wrapper.queryByText('Default Anchor') as HTMLElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('A');
    expect(element).toHaveClass(
      'anchor anchor-always anchor-default anchor-inherit'
    );
  });
  test('should render primary anchor', () => {
    const anchorProps: PatAnchorProps = {
      anchorType: 'primary',
      href: '#',
    };
    const wrapper = render(<Anchor {...anchorProps}>Primary Anchor</Anchor>);
    const element = wrapper.queryByText('Primary Anchor') as HTMLElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('A');
    expect(element).toHaveClass(
      'anchor anchor-primary anchor-always  anchor-inherit'
    );
  });
  test('should render secondary h1 anchor', () => {
    const anchorProps: PatAnchorProps = {
      anchorType: 'secondary',
      variant: 'h1',
      href: '#',
    };
    const wrapper = render(<Anchor {...anchorProps}>Secondary Anchor</Anchor>);
    const element = wrapper.queryByText('Secondary Anchor') as HTMLElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('A');
    expect(element).toHaveClass(
      'anchor anchor-secondary anchor-always anchor-h1'
    );
  });
});
