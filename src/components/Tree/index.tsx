import { FC } from 'react';
import Tree, { ITreeProps } from './Tree';
import TreeNode, { ITreeNodeProps } from './TreeNode';

export type PatTreeComponent = FC<ITreeProps> & {
  Node: FC<ITreeNodeProps>;
};

const TransTree = Tree as PatTreeComponent;
TransTree.Node = TreeNode;

export default TransTree;
