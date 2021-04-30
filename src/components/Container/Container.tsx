import React from 'react';
import { HTMLAttributes } from 'react';
import { classNames } from '../../utils/classNames';

interface IContainerProps {
  children?: React.ReactNode;
}

type ContainerProps = IContainerProps & HTMLAttributes<HTMLDivElement>;

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  ...rest
}) => {
  let classes = classNames('container')
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
