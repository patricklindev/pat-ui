import React, { FC, CSSProperties, ReactNode, HTMLAttributes } from 'react';

export interface ITreeNodeProps {
  /** children must be React Element */
  children?: ReactNode;
  /** set customized css class */
  className?: string;
  /** set customized css style */
  cssStyle?: CSSProperties;
  /** set customized css style */
  onClick?: Function;
}

type NativeTreeProps = ITreeNodeProps & HTMLAttributes<HTMLDivElement>;

const TreeNode: FC<NativeTreeProps> = (props) => {
  const { className, children, cssStyle, ...rest } = props;

  let classNames = 'tree__node';
  if (className) {
    classNames = ['tree__node', className].join(' ');
  }

  return (
    <div
      className={classNames}
      style={cssStyle}
      onClick={props.onClick}
      {...rest}
    >
      {children}
    </div>
  );
};

TreeNode.defaultProps = {};

export default TreeNode;
