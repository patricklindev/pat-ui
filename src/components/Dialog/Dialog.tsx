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
import { action } from '@storybook/addon-actions';

export interface DialogProps {
  // the on/off switch of the component
  open?: boolean;

  // this attribute allows user to drag the dialog or not
  draggable?: boolean;

  // classes allows style overwritting
  classes?: object | string;

  // children must be React Element
  children?: string | ReactElement<any> | ReactElement<any>[];

  // Callback function fired when the component requests to be closed.
  onClose?: (val: any) => void;
}

// there will be 3 different designs for dialogs:
// Simple Dialogs
// alert
// form dialogs
const Dialog: FC<DialogProps> = (props) => {
  const { open, onClose, children, draggable, classes } = props;

  // do logic in following lines
  useEffect(() => {
    // console.log('current onclose: ', onClose);
  }, [onClose]);

  const [visible, setVisible] = useState<boolean>(open as boolean);
  useEffect(() => {
    setVisible(open as boolean);
  }, [open]);
  // use wrapper to get reference to the dialog container
  const wrapperRef = useRef<any>(null);

  // the logic that is used to let us pass value from Dialog via onClose()
  const closeModal = useCallback(
    ({ target }) => {
      if (
        wrapperRef &&
        wrapperRef.current &&
        !wrapperRef.current.contains(target) &&
        onClose
      ) {
        onClose('test passing Value');
      }
    },
    [onClose]
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

  // access children prop and even perform more operations
  // with props.children
  useEffect(() => {
    if (props.children) {
      console.log(
        'children props: ',
        props.children,
        ' and its types: ',
        typeof props.children
      );
    }
  }, [props.children]);

  return (
    <>
      {visible
        ? createPortal(
            <>
              {/* HTML for where the dialog modal will be displayed on screen */}
              <div className="window-container">
                {/* HTML for the modal container */}
                <div className="modal-container">
                  {/* The Modal  */}
                  {/* `${Math.floor(pgValue)}%` */}
                  <div
                    ref={wrapperRef}
                    className={
                      classes ? (classes as unknown as string) : 'modal'
                    }
                    draggable={draggable}
                  >
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
