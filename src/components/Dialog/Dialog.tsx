import React, {
    FC,
    CSSProperties,
    useState,
    Children,
    ReactElement,
    cloneElement,
    ReactNode,
  } from 'react';
  import { RiCloseLine } from 'react-icons/ri';


  export interface DialogProps {
    // Boilerplate values for this component, will add more later
    selectedValue?: any;
    open?: boolean;
    classes?: object;
    onClose?: (val: any) => void;
    onBackdropClick?: (val: any) => void;
    
 }

 // there will be 3 different designs for dialogs: 
 // Simple Dialogs
 // alert
 // form dialogs
  const Dialog: FC<DialogProps> = (props) => {
    const {selectedValue, open, onClose, onBackdropClick} = props;
    // do logic in following lines
    const [ visible, setVisible] =useState<boolean>(false);

    return (
        <>
        <div className="darkBG" onClick={() => setVisible(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Dialog</h5>
          </div>
          <button className="closeBtn" onClick={() => setVisible(false)}>
            <RiCloseLine style={{ marginBottom: '-3px' }} />
          </button>
          <div className="modalContent">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className="deleteBtn" onClick={() => setVisible(false)}>
                Delete 
              </button>
              <button
                className="cancelBtn"
                onClick={() => setVisible(false)}
              >
                Cancel 
              </button>
            </div>
          </div>
        </div>
      </div>
        </>
    )
  }

  Dialog.defaultProps = {
    open: false,
  }

  export default Dialog;