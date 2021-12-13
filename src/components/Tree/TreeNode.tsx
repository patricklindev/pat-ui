import React, { FC, CSSProperties, ReactNode, HTMLAttributes } from 'react';
import { classNames } from '../../utils/classNames';

interface ITreeNodeProps {
  /** get parent's title */
  parent?: string;
  /** change tree size */
  treeSize?: string;
  /** will change caret color */
  treeColor?: string;
  /** will change text color */
  textColor?: string;
  /** children must be React Element */
  children?: ReactNode;
  /** set customized css class */
  className?: string;
  /** set customized css style */
  cssStyle?: CSSProperties;
  /** pass an onClick handler */
  onClick?: Function;
}

export type NativeTreeNodeProps = ITreeNodeProps &
  HTMLAttributes<HTMLDivElement>;

const TreeNode: FC<NativeTreeNodeProps> = (props) => {
  const {
    parent,
    treeSize,
    treeColor,
    textColor,
    className,
    children,
    cssStyle,
    onClick,
    ...rest
  } = props;

  let treeNodeClassNames = 'tree__node';
  if (className) {
    treeNodeClassNames = ['tree__node', className].join(' ');
  }

  let caretClassNames = classNames('tree__node_caret', {
    [`tree__node_caret-${treeColor}`]: true,
  });

  let treeTitleStyle = classNames('tree__title', {
    [`tree__title-${textColor}`]: true,
  });

  return (
    <div
      className={treeNodeClassNames}
      style={cssStyle}
      onClick={onClick ? onClick : () => {}}
      {...rest}
    >
      <span className={caretClassNames}></span>
      <span className={treeTitleStyle}>{children}</span>
    </div>
  );
};

TreeNode.defaultProps = {};

export default TreeNode;
