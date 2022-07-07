import React, { FC, useRef, useEffect } from 'react';

export type dialogueType = 'basic' | 'alert' | 'form' | 'list';

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

  return props.isOpen ? <>ModalContainer coming soon.</> : null;
};

// Dialogue.defaultProps = {
//   dialogueType: 'basic'
// }

export default Dialogue;
