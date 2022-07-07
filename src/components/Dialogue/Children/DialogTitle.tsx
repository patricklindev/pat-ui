import React, { FC, ReactNode } from 'react'

export interface DialogTitleProps {
  children?: ReactNode
};

export const DialogTitle: FC<DialogTitleProps> = props => {
  const { children } = props;

  return (
    <h3 className='modal-title'>{children}</h3>
  );
}
