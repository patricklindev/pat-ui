import React, { FC, CSSProperties, useState, ReactElement } from 'react';
import { ITreeNodeProps } from './TreeNode';

export interface ITreeProps {
  /** Set tree trunk's title */
  title?: string;
  /** children must be React Element */
  children?: ReactElement<ITreeNodeProps> | ReactElement<ITreeNodeProps>[];
  /** set customized css class */
  className?: string;
  /** set tree to be disabled */
  disabled?: boolean;
  /** set customized css style */
  style?: CSSProperties;
}

/**
 * A tree allows user to view a hierarchical structure of a topic.
 *
 * ```js
 * import { Tree } from 'pat-ui'
 * ```
 */
const Tree: FC<ITreeProps> = (props) => {
  const { title, className, children, style } = props;

  const [isTreeNodeOpen, setIsTreeNodeOpen] = useState(false);

  const toggleTreeView = () => {
    setIsTreeNodeOpen(!isTreeNodeOpen);
  };

  return (
    <ul className={className ? `tree ${className}` : `tree`} style={style}>
      <li>
        <span
          onClick={toggleTreeView}
          className={isTreeNodeOpen ? `caret caret-down` : `caret`}
        >
          {title}
        </span>
      </li>
      <div
        className={
          isTreeNodeOpen
            ? `tree__nodes open ${className}`
            : `tree__nodes ${className}`
        }
      >
        {children}
      </div>
    </ul>
  );
};

Tree.defaultProps = {
  title: '',
};

export default Tree;
