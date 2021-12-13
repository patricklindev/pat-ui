import React from 'react';
import Tree from './index';

export default {
  title: 'Tree',
  component: Tree,
};

export const DefaultTree = () => (
  <div>
    <Tree title="Tree">
      <Tree.Node>Tree Node</Tree.Node>
      <Tree title="SubTree">
        <Tree.Node>SubTree Node</Tree.Node>
      </Tree>
    </Tree>
  </div>
);
export const TreeSizes = () => (
  <div>
    <Tree title="Large Tree" treeSize="lg">
      <Tree.Node>Tree Node</Tree.Node>
      <Tree title="SubTree">
        <Tree.Node>SubTree Node</Tree.Node>
      </Tree>
    </Tree>
    <Tree title="Medium Tree (default)">
      <Tree.Node>Tree Node</Tree.Node>
      <Tree title="SubTree">
        <Tree.Node>SubTree Node</Tree.Node>
      </Tree>
    </Tree>
    <Tree title="Small Tree" treeSize="sm">
      <Tree.Node>Tree Node</Tree.Node>
      <Tree title="SubTree">
        <Tree.Node>SubTree Node</Tree.Node>
      </Tree>
    </Tree>
  </div>
);
export const DisabledTree = () => (
  <div>
    <Tree title="Disabled Tree" disabled>
      <Tree.Node>Tree Node</Tree.Node>
    </Tree>
  </div>
);
export const ColoredTree = () => (
  <div>
    <Tree title="Colored Tree" treeColor="danger" textColor="info">
      <Tree.Node>treeColor = 'danger' (default is 'primary')</Tree.Node>
      <Tree.Node>textColor = 'info'</Tree.Node>
    </Tree>
  </div>
);
