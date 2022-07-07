import React, { FC, ReactNode } from 'react';

export interface ModalContainerProps {
  dlgOnClick: () => void;
  children?: ReactNode;
};

export const ModalContainer: FC<ModalContainerProps> = (props) => {
  const {
    children,
    dlgOnClick
  } = props;

  return (
    // change onClick to e => e.stopPropagation() later
    <div className='modal-box' onClick={e => e.stopPropagation()}>
      {children}
    </div>
  );
};

export default ModalContainer;
