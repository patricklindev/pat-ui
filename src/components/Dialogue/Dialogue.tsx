import React, { FC, useRef, useEffect } from 'react';

import { FaUserCircle } from 'react-icons/fa';
import { IoAddCircle } from 'react-icons/io5';

export type dialogueType =
  | 'basic'
  | 'alert'
  | 'form'
  | 'list';

export interface DlgMessageProps {
  // set class
  className?: string;
  // set dialogue type
  dlgType?: dialogueType;
  // set dialogue message content
  children?: React.ReactNode;
  // set on click action
  dlgOnClick: () => void;
  // set is open
  isOpen?: boolean;
  // set title
  title?: string;
  // check if it's a list
  dlgList?: boolean;
  // set bullet point
  dlgBulletPoint?: string;
  // set bullet content
  dlgListContent?: string;
}

export const Dialogue: FC<DlgMessageProps> = (props) => {
  const {
    className,
    children,
    title,
    dlgOnClick
    // ...rest
  } = props;

  useEffect(() => {
    if (props.isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [props.isOpen])

  const overlayRef = useRef(null);

  const handleOverlayClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target === overlayRef.current) {
      dlgOnClick()
    }
  };


  if (props.dlgList) {
    return props.isOpen ? (
      <div className='modal'>
        <div className='modal-overlay' onClick={handleOverlayClick} ref={overlayRef}>

        </div>
        {className ? (
          <div onClick={e => e.stopPropagation()} className={`modal-box ${className}`}>
            <h3 className='modal-title'>
              {title}
            </h3>
            <ul className='modal-list'>
              <li onClick={dlgOnClick} className='list-content'>
                <span className='dlg-icon'>
                  <FaUserCircle />
                </span>
                {props.dlgListContent}
              </li>
              <li onClick={dlgOnClick} className='list-content'>
                <span className='dlg-icon'>
                  <FaUserCircle />
                </span>
                {props.dlgBulletPoint}
              </li>
              <li onClick={dlgOnClick} className='list-content'>
                <span className='dlg-icon'>
                  <IoAddCircle />
                </span>
                Add Account
              </li>
            </ul>
          </div>
        ) : <div className='test'></div>}
      </div>
    ) : null;
  }

  let dialogue = (
    <h4>Nothing is populated yet</h4>
  )

  return dialogue;
};

// Dialogue.defaultProps = {
//   dialogueType: 'basic'
// }

export default Dialogue;
