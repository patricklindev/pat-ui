import React from 'react';
import { HTMLAttributes } from 'react';
import { classNames } from '../../utils/classNames';

export type ContainerAlignment = 'left' | 'center' | 'right';

interface IContainerProps {
  children?: React.ReactNode;
  maxWidth?: number;
  align?: ContainerAlignment;
}

type ContainerProps = IContainerProps & HTMLAttributes<HTMLDivElement>;

export const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth,
  align,
  className,
  ...rest
}) => {
  let classes = classNames('container', {
    [`container-${align}`]: !!align,
  });
  if (className) classes += ' ' + className;

  let container = (
    <div className={classes} {...(rest as ContainerProps)}>
      {console.log(classes)}
      {children}
    </div>
  );
  return container;
};

export default Container;
