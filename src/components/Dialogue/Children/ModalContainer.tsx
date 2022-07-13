import React, { FC, ReactNode } from 'react';

export interface ModalContainerProps {
  className?: string;
  children?: ReactNode;
};

export const ModalContainer: FC<ModalContainerProps> = (props) => {
  const {
    className,
    children,
  } = props;

  return (
    // change onClick to e => e.stopPropagation() later
    <div className={`modal-box ${className}`} onClick={e => e.stopPropagation()}>
      {children}
    </div>
  );
};

export default ModalContainer;
