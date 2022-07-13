import React, { FC, ReactNode } from 'react'

export interface DialogActions {
  children?: ReactNode;
  className?: string;
};

export const DialogActions: FC<DialogActions> = props => {
  let myClass = 'modal-content';
  const { children, className } = props;


  if (className) myClass = `modal-content ${className}`

  return (
    <div className={myClass}>{children}</div>
  );
}

export default DialogActions;
