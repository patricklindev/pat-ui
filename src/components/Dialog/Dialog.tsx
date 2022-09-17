import React, {
  FC,
  CSSProperties,
  useState,
  useCallback,
  useRef,
  Children,
  ReactElement,
  cloneElement,
  ReactNode,
  useEffect,
} from 'react';
import { createPortal } from 'react-dom';
import { IDialogOptionProps } from './DialogOption';
import { action } from '@storybook/addon-actions';

export interface DialogProps {
  // Boilerplate values for this component, will add more later
  selectedValue?: any;
  open?: boolean;
  draggable?: boolean;
  classes?: object;
  /** children must be React Element */
  children?: string | ReactElement<any> | ReactElement<IDialogOptionProps>[];

  //  function used to pass a selected value into
  onClose?: (val: any) => void;
  toggleModal?: () => void;
}

// there will be 3 different designs for dialogs:
// Simple Dialogs
// alert
// form dialogs
const Dialog: FC<DialogProps> = (props) => {
  const { selectedValue, open, onClose, toggleModal, children, draggable } =
    props;

  // do logic in following lines

  const wrapperRef = useRef<any>(null);

  const closeModal = useCallback(
    ({ target }) => {
      if (
        wrapperRef &&
        wrapperRef.current &&
        !wrapperRef.current.contains(target) &&
        toggleModal
      ) {
        toggleModal();
      }
    },
    [toggleModal]
  );

  // the logic that allows modal to be closed
  useEffect(() => {
    document.addEventListener('click', closeModal, { capture: true });
    return () => {
      document.removeEventListener('click', closeModal, { capture: true });
    };
  }, [closeModal]);

  // logic that prevent the user from scrolling when clicked
  useEffect(() => {
    if (open) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = '';
    }
  }, [open]);

  return (
    <>
      {open
        ? createPortal(
            <>
              {/* HTML for where the dialog modal will be displayed on screen */}
              <div className="window-container">
                {/* HTML for the modal container */}
                <div className="modal-container">
                  {/* The Modal  */}
                  <div ref={wrapperRef} className="modal" draggable={draggable}>
                    {children}
                  </div>
                </div>
              </div>
            </>,
            // set the "container" to document.body so that we can trigger the close toggle
            document.body
          )
        : null}
    </>
  );
};

Dialog.defaultProps = {
  open: false,
  draggable: false,
};

export default Dialog;
