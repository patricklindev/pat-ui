import React, { FC, CSSProperties, ReactNode } from 'react';

export interface ITreeNodeProps {
  /** children must be React Element */
  children?: ReactNode;
  /** set customized css class */
  className?: string;
  /** set customized css style */
  cssStyle?: CSSProperties;
}

const TreeNode: FC<ITreeNodeProps> = (props) => {
  const { className, children, cssStyle } = props;

  let classNames = 'tree__node';
  if (className) {
    classNames = ['tree__node', className].join(' ');
  }

  return (
    <li className={classNames} style={cssStyle}>
      {children}
    </li>
  );
};

TreeNode.defaultProps = {};

export default TreeNode;
