import React, { FC, useRef, useEffect } from 'react';

import ModalContainer from './Children/ModalContainer';

export interface DlgMessageProps {
  // set dialogue message content
  children?: React.ReactNode;
  // set on click action
  dlgOnClick: () => void;
  // set is open
  isOpen?: boolean;
}

export const Dialogue: FC<DlgMessageProps> = (props) => {
  const { isOpen, children, dlgOnClick } = props;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const overlayRef = useRef(null);

  const handleOverlayClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target === overlayRef.current) {
      dlgOnClick();
    }
  };

  return isOpen ? (
    <div className="modal">
      <div
        className="modal-overlay"
        onClick={handleOverlayClick}
        ref={overlayRef}
      ></div>
      <ModalContainer>
        {children}
      </ModalContainer>
    </div>
  ) : null;
};

// Dialogue.defaultProps = {
//   dialogueType: 'basic'
// }

export default Dialogue;
