import React from 'react';
import Tree from './index';

export default {
  title: 'Tree',
  component: Tree,
};

export const DefaultTree = () => (
  <div>
    <Tree
      title="Web Applications"
      treeColor="info"
      treeSize="lg"
      textColor="danger"
      // onClick={() => console.log('Tree title')}
    >
      <Tree.Node onClick={() => console.log('Tree node')}>React</Tree.Node>
      <Tree title="Front End">
        <Tree title="JavaScript">
          <Tree.Node>React</Tree.Node>
          <Tree.Node>Angular</Tree.Node>
          <Tree.Node>Vue</Tree.Node>
        </Tree>
        <Tree title="CSS">
          <Tree.Node>Bootstrap</Tree.Node>
        </Tree>
      </Tree>
      <Tree title="Back End">
        <Tree title="Frameworks">
          <Tree.Node>Express (JavaScript)</Tree.Node>
          <Tree.Node>Elixir (Phoenix)</Tree.Node>
          <Tree.Node>Django (Python)</Tree.Node>
        </Tree>
      </Tree>
    </Tree>
  </div>
);
