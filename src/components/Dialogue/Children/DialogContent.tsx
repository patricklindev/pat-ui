import React, { FC, ReactNode } from 'react'

export interface DialogContentProps {
  children?: ReactNode;
  className?: string;
};

export const DialogContent: FC<DialogContentProps> = props => {
  let myClass;
  const { children, className } = props;


  if (className) myClass = `modal-content ${className}`

  return (
    <div className={myClass}>{children}</div>
  );
}
