import React from 'react';

import { render } from '@testing-library/react';
import Tree from './index';

describe('Tree', () => {
  it('should render a tree with 1 node', () => {
    const treeProps = {
      title: 'tree title',
    };

    const wrapper = render(<Tree {...treeProps}></Tree>);
    const element = wrapper.queryByText('tree title');
    expect(element).not.toBeNull();
    expect(element).toBeInTheDocument();
    expect(element?.tagName).toBe('SPAN');
  });

  it('should render a tree with three nodes', () => {
    const treeProps = {
      title: 'tree title',
      onClick: jest.fn(),
    };

    const wrapper = render(
      <Tree {...treeProps}>
        <Tree.Node>1</Tree.Node>
        <Tree.Node>12</Tree.Node>
        <Tree.Node>123</Tree.Node>
      </Tree>
    ).container.firstChild;

    expect(wrapper).toHaveClass('tree');
    expect(wrapper?.firstChild?.childNodes.length).toBe(2);
    expect(wrapper?.lastChild?.childNodes.length).toBe(3);
  });

  it('should render a tree with a custom class', () => {
    const treeProps = {
      title: 'tree title',
      className: 'custom',
      onChange: jest.fn(),
    };

    const wrapper = render(
      <Tree {...treeProps}>
        <Tree.Node>1</Tree.Node>
        <Tree.Node>12</Tree.Node>
        <Tree.Node>123</Tree.Node>
      </Tree>
    ).container.firstChild;

    expect(wrapper).toHaveClass('tree custom');
    expect(wrapper?.firstChild?.childNodes.length).toBe(2);
  });

  it('should render a disabled tree with a custom class', () => {
    const treeProps = {
      title: 'select',
      className: 'custom',
      disabled: true,
      onChange: jest.fn(),
    };

    const wrapper = render(
      <Tree {...treeProps}>
        <Tree.Node>1</Tree.Node>
        <Tree.Node>12</Tree.Node>
        <Tree.Node>123</Tree.Node>
      </Tree>
    ).container.firstChild;

    expect(wrapper).toHaveClass('tree custom');
    expect(wrapper?.firstChild?.childNodes.length).toBe(2);
    expect(wrapper?.firstChild?.firstChild).toHaveClass('disabled');
  });
});
