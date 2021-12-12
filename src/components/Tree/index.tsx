import { FC } from 'react';
import Tree, { NativeTreeProps } from './Tree';
import TreeNode, { NativeTreeNodeProps } from './TreeNode';

export type PatTreeComponent = FC<NativeTreeProps> & {
  Node: FC<NativeTreeNodeProps>;
};

const TransTree = Tree as PatTreeComponent;
TransTree.Node = TreeNode;

export default TransTree;
