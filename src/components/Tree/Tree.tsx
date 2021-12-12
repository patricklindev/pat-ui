import React, {
  FC,
  CSSProperties,
  useState,
  ReactElement,
  HTMLAttributes,
} from 'react';
import { classNames } from '../../utils/classNames';
import { NativeTreeNodeProps } from './TreeNode';

export type TreeColor = 'primary' | 'secondary' | 'danger' | 'info' | 'warning';
export type TreeSize = 'lg' | 'sm';

interface ITreeProps {
  /** Set tree's title */
  title?: string;
  /** Set tree's title */
  treeSize?: string;
  /** Set tree's title */
  textColor?: string;
  /** Set tree's color */
  treeColor?: string;
  /** set tree to be disabled */
  disabled?: boolean;
  /** Set globally unique key for each tree node */
  key?: string;
  /** children must be React Element */
  children?:
    | ReactElement<NativeTreeNodeProps>
    | ReactElement<NativeTreeNodeProps>[]
    | ReactElement<NativeTreeProps>
    | ReactElement<NativeTreeProps>[];
  /** set customized css class */
  className?: string;
  /** set customized css style */
  style?: CSSProperties;
  /** set customized css style */
  onClick?: Function;
}

export type NativeTreeProps = ITreeProps & HTMLAttributes<HTMLDivElement>;

/**
 * A tree allows user to view a hierarchical structure of a topic.
 *
 * ```js
 * import { Tree } from 'pat-ui'
 * ```
 */
const Tree: FC<NativeTreeProps> = (props) => {
  const {
    key,
    title,
    treeSize,
    textColor,
    treeColor,
    disabled,
    className,
    children,
    style,
    onClick,
    ...rest
  } = props;

  const [isTreeNodeOpen, setIsTreeNodeOpen] = useState(false);

  const toggleTreeView = () => {
    setIsTreeNodeOpen(!isTreeNodeOpen);
  };

  let treeStyle = classNames('tree', {
    [`tree-${treeColor}`]: true,
    [`tree-${treeSize}`]: true,
    [`disabled`]: !!disabled,
  });
  if (className) {
    treeStyle += ' ' + className;
  }

  let caretStyle = classNames('tree__caret', {
    [`tree__caret-${treeColor}`]: true,
    [`disabled`]: !!disabled,
  });

  let treeTitleStyle = classNames('tree__title', {
    [`tree__title-${textColor}`]: true,
  });

  let treeNodesStyle = classNames('tree__nodes', {
    [`open`]: isTreeNodeOpen,
  });

  return (
    <div className={treeStyle} style={style} {...rest}>
      <div>
        <span
          onClick={disabled ? () => {} : toggleTreeView}
          className={
            isTreeNodeOpen ? `${caretStyle} tree__caret-down` : caretStyle
          }
        ></span>
        <span
          onClick={disabled ? () => {} : onClick}
          className={treeTitleStyle}
        >
          {title}
        </span>
      </div>
      <div className={treeNodesStyle}>
        {children
          ? React.Children.map(children, (child: React.ReactElement) => {
              return React.cloneElement(
                child,
                {
                  key,
                  treeColor,
                  treeSize,
                  textColor,
                  parent: title,
                  onClick,
                },
                child.props.children
              );
            })
          : children}
      </div>
    </div>
  );
};

Tree.defaultProps = {
  title: '',
};

export default Tree;
