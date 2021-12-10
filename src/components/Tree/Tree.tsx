import React, {
  FC,
  CSSProperties,
  useState,
  ReactElement,
  HTMLAttributes,
} from 'react';
import { classNames } from '../../utils/classNames';
import { ITreeNodeProps } from './TreeNode';

export type ButtonColor = 'primary' | 'secondary' | 'danger' | 'info' | 'link';

export interface ITreeProps {
  /** Set tree's title */
  title?: string;
  /** Set tree's color */
  buttonColor?: string;
  /** Set globally unique key for each tree node */
  key?: string;
  /** children must be React Element */
  children?: ReactElement<ITreeNodeProps> | ReactElement<ITreeNodeProps>[];
  /** set customized css class */
  className?: string;
  /** set tree to be disabled */
  disabled?: boolean;
  /** set customized css style */
  style?: CSSProperties;
  /** set customized css style */
  clickTitle?: Function;
}

type NativeTreeProps = ITreeProps & HTMLAttributes<HTMLDivElement>;

/**
 * A tree allows user to view a hierarchical structure of a topic.
 *
 * ```js
 * import { Tree } from 'pat-ui'
 * ```
 */
const Tree: FC<NativeTreeProps> = (props) => {
  const {
    title,
    buttonColor,
    key,
    className,
    children,
    style,
    clickTitle,
    ...rest
  } = props;

  const [isTreeNodeOpen, setIsTreeNodeOpen] = useState(false);

  const toggleTreeView = () => {
    setIsTreeNodeOpen(!isTreeNodeOpen);
  };

  let treeStyle = classNames('tree', {
    [`tree-${buttonColor}`]: true,
  });
  if (className) {
    treeStyle += ' ' + className;
  }

  let caretStyle = classNames('caret', {
    [`caret-${buttonColor}`]: true,
  });

  return (
    <div className={treeStyle} style={style} {...rest}>
      <div className="tree__title">
        <span
          onClick={toggleTreeView}
          className={isTreeNodeOpen ? `${caretStyle} caret-down` : caretStyle}
        ></span>
        <span
          onClick={() => (clickTitle ? clickTitle() : null)}
          className={`tree__title`}
        >
          {title}
        </span>
      </div>
      <div className={isTreeNodeOpen ? `tree__nodes open` : `tree__nodes`}>
        {children
          ? React.Children.map(children, (child: React.ReactElement) => {
              return React.cloneElement(
                child,
                { key, onClick: clickTitle, parent: title },
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
