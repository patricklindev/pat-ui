import React, { FC, ReactNode } from 'react'

export interface DialogContentInfoProps {
  children?: ReactNode;
  className?: string;
};

export const DialogContentInfo: FC<DialogContentInfoProps> = props => {
  let myClass;
  const { children, className } = props;


  if (className) myClass = `modal-content ${className}`

  return (
    <p className={myClass}>{children}</p>
  );
}
