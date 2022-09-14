import React, {
    FC,
    CSSProperties,
    useState,
    Children,
    ReactElement,
    cloneElement,
    ReactNode,
  } from 'react';


  export interface DialogProps {
    // Boilerplate values for this component, will add more later
    selectedValue?: any;
    open?: boolean;
    onClose?: (val: any) => void;
 }

 // there will be 3 different designs for dialogs: 
 // Simple Dialogs
 // alert
 // form dialogs
  const Dialog: FC<DialogProps> = (props) => {
    const {selectedValue, open, onClose} = props;
    // do logic in following lines

    return (
        <></>
    )
  }
  export default Dialog;