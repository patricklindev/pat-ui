import React from 'react';

import { fireEvent, render } from '@testing-library/react';
import Tree from './index';

describe('Tree', () => {
  it('should render a tree with 1 node', () => {
    const treeProps = {
      title: 'tree title',
    };

    const wrapper = render(
      <Tree {...treeProps}>
        <Tree.Node>Tree Node</Tree.Node>
      </Tree>
    );
    const mainTree = wrapper.queryByText('tree title');
    const treeNode = wrapper.queryByText('Tree Node');

    expect(mainTree).not.toBeNull();
    expect(mainTree).toBeInTheDocument();
    expect(mainTree?.tagName).toBe('SPAN');

    expect(treeNode).not.toBeNull();
    expect(treeNode).toBeInTheDocument();
    expect(treeNode?.tagName).toBe('SPAN');
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

  it('should render an opened tree with 1 node', () => {
    const treeProps = {
      title: 'tree title',
    };

    const wrapper = render(
      <Tree {...treeProps}>
        <Tree.Node>Tree Node</Tree.Node>
      </Tree>
    );
    const mainTree = wrapper.queryByText('tree title');
    const treeNode = wrapper.queryByText('Tree Node');
    const treeToggle = wrapper.queryByTitle(
      'Tree toggle button'
    ) as HTMLElement;
    // open the tree
    fireEvent.click(treeToggle);

    expect(treeToggle?.getAttribute('class')?.includes('tree__caret-down'));

    expect(mainTree).not.toBeNull();
    expect(mainTree).toBeInTheDocument();
    expect(mainTree?.tagName).toBe('SPAN');

    expect(treeNode).not.toBeNull();
    expect(treeNode).toBeInTheDocument();
    expect(treeNode?.tagName).toBe('SPAN');
  });

  it('should render an opened tree with 1 subtree', () => {
    const treeProps = {
      title: 'maintree',
    };

    const wrapper = render(
      <Tree {...treeProps}>
        <Tree title="subtree">
          <Tree.Node>SubTree Node</Tree.Node>
        </Tree>
      </Tree>
    );
    const treeTitle = wrapper.queryByText('maintree');
    const subTreeTitle = wrapper.queryByText('subtree');

    expect(treeTitle).not.toBeNull();
    expect(treeTitle).toBeInTheDocument();
    expect(treeTitle?.tagName).toBe('SPAN');

    expect(subTreeTitle).not.toBeNull();
    expect(subTreeTitle).toBeInTheDocument();
    expect(subTreeTitle?.tagName).toBe('SPAN');
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
