import React, { FC, ReactNode } from 'react';

export interface DlgListProps {
  children?: ReactNode;
};


export const DialogList: FC<DlgListProps> = props => {
  const { children } = props;

  return (
    <ul className='modal-list'>
      {children}
    </ul>
  );
};
