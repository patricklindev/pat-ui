import React, { FC, ReactNode } from 'react'

export interface DialogTitleProps {
  children?: ReactNode;
  className?: string;
};

export const DialogTitle: FC<DialogTitleProps> = props => {
  const { children, className } = props;

  return (
    <h3 className={`modal-title ${className}`}>{children}</h3>
  );
}
