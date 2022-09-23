import React, {
  FC,
  CSSProperties,
  useState,
  useCallback,
  useRef,
  ReactNode,
  useEffect,
} from 'react';
import { createPortal } from 'react-dom';

export interface DialogProps {
  // the on/off switch of the component
  open?: boolean;

  // this attribute allows user to drag the dialog or not
  draggable?: boolean;

  // classes allows style overwritting
  classes?: object | string;

  // children must be ReactNode
  children?: ReactNode;

  // Callback function fired when the component requests to be closed.
  onClose?: (val: any) => void;

  // props for setting width of the modal
  maxWidth?: string | boolean;

  // props for setting full screen component
  fullScreen?: boolean;

  // custom styling
  style?: CSSProperties;
}

/**
 * Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.
 *
 * ```js
 * import { Dialog } from 'pat-ui'
 * ```
 */
const Dialog: FC<DialogProps> = (props) => {
  const {
    open,
    onClose,
    children,
    draggable,
    classes,
    maxWidth,
    fullScreen,
    style,
  } = props;

  // do logic in following lines

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
        onClose('Modal Closed');
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

  const sizingWidth = (width: string | boolean) => {
    switch (width) {
      case false:
        return 'auto';
      case 'xs':
        return '10%';
      case 'sm':
        return 'auto';
      case 'md':
        return '60%';
      case 'lg':
        return '80%';
      case 'xl':
        return '100%';
      default:
        return 'auto';
    }
  };
  const widthOutput = sizingWidth(maxWidth as string | boolean);
  const widthOption: React.CSSProperties = {
    width: widthOutput,
  };

  // fullview logic
  const fullView: React.CSSProperties = {
    position: fullScreen ? 'absolute' : undefined,
    top: fullScreen ? '0px' : undefined,
    right: fullScreen ? '0px' : undefined,
    bottom: fullScreen ? '0px' : undefined,
    left: fullScreen ? '0px' : undefined,
  };

  // Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
  return (
    <>
      {visible
        ? createPortal(
            <>
              {/* HTML for where the dialog modal will be displayed on screen */}
              <div className="window-container">
                {/* HTML for the modal container */}
                <div className="dialog-container">
                  {/* The Modal  */}
                  <div
                    ref={wrapperRef}
                    className={
                      classes ? (classes as unknown as string) : 'modal'
                    }
                    style={{ ...widthOption, ...fullView, ...style }}
                    draggable={draggable as boolean}
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
