import React from 'react';
import Tree from './index';

export default {
  title: 'Tree',
  component: Tree,
};

export const DefaultTree = () => (
  <div>
    <Tree title="Web Applications">
      <Tree title="Front End">
        <Tree title="JavaScript">
          <Tree.Node>React</Tree.Node>
          <Tree.Node>Angular</Tree.Node>
          <Tree.Node>Vue</Tree.Node>
        </Tree>
        <Tree title="CSS">
          <Tree.Node>Bootstrap</Tree.Node>
          <Tree.Node>Bulma</Tree.Node>
          <Tree.Node>Semantic UI</Tree.Node>
        </Tree>
      </Tree>
      <Tree title="Back End">
        <Tree title="Frameworks">
          <Tree.Node>Express (JavaScript)</Tree.Node>
          <Tree.Node>Elixir (Phoenix)</Tree.Node>
          <Tree.Node>Django (Python)</Tree.Node>
        </Tree>
        <Tree title="Cloud Platforms">
          <Tree.Node>AWS</Tree.Node>
          <Tree.Node>GCP</Tree.Node>
          <Tree.Node>Azure</Tree.Node>
        </Tree>
      </Tree>
    </Tree>
  </div>
);
