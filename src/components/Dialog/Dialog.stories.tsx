import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import Dialog from './index';
import Button from '../Button';
import Icon from '../Icon';

export default {
  title: 'Dialog',
  component: Dialog,
};

const exampPara: string = "Sed fringilla tortor arcu, vel malesuada dui molestie vitae. In efficitur odio eget odio tempus vehicula vitae vitae sem."


export const DialogSimple = () => (
  <div>
    <Dialog
      dialogType='simple'
    >
      <h2>Hi </h2>

      <div>
        <Icon
          disabled={false}
          loading={false}
          name="users"
        /><p>username@gmail.com </p>
      </div>

      <div>
        <Icon
          disabled={false}
          loading={false}
          name="users"
        /><p>user02@gmail.com </p>
      </div>
      <div>
        <Icon
          disabled={false}
          loading={false}
          name="plus"
        /><p>Add acount </p>
      </div>
    </Dialog>
  </div>
);

export const DialogAlert = () => (
  <div>
    <Dialog
      dialogType='alert'
      buttonOneText='agree'
      buttonTwoText='disagree'
      dialogTitle='Vestibulum porta quam in euismod fringilla'
      dialogParagraph={exampPara}
    >
     
    </Dialog>
  </div>
);


export const DialogForm = () => {
  return (
    <div>
      <Dialog
        dialogType='form'
        dialogTitle='Subscribe'
        dialogParagraph={exampPara}
        buttonOneText="agree"
        buttonTwoText='disagree'
        closeHandlerProps={ ()=>alert("send alert when closing the Dialog") }
      >
      </Dialog>
    </div>)
};

// export const DialogFormInUse = () => {
//   const exampPara: string = "Sed fringilla tortor arcu, vel malesuada dui molestie vitae. In efficitur odio eget odio tempus vehicula vitae vitae sem."
//   const [showFormModal, setShowFormModal] = useState(false)
//   const [showAlertModal, setShowAlertModal] = useState(false)
//   const [showSimpleModal, setshowSimpleModal] = useState(false)

//   return (
//     <div>
//       <Button onClick={()=>setShowFormModal(showFormModal=>!showFormModal)}>Show Form</Button>
//       <Button onClick={()=>setShowAlertModal(showAlertModal=>!showAlertModal)}>Show Alert</Button>
//       <Button onClick={()=>setshowSimpleModal(showSimpleModal=>!showSimpleModal)}>Show Form</Button>

//       {showFormModal ? <Dialog
//         dialogType='form'
//         dialogTitle='Subscribe'
//         dialogParagraph={exampPara}
//         buttonOneText="agree"
//         buttonTwoText='disagree'
//       >
//       </Dialog> : null}

// {showAlertModal?
//       <Dialog
//       dialogType='alert'
//     >
//       <h2>Vestibulum porta quam in euismod fringilla </h2>
//       <p> Nullam gravida imperdiet neque, eget efficitur tortor dictum vel. Nam nec condimentum nisi. Quisque nec ultrices elit. Nam viverra augue maximus cursus lacinia. Pellentesque ut dui vitae ex hendrerit blandit eget vitae lectus. </p>

//       <a href='#'>Disagree</a>
//       <a href='#'>Agree</a>

//     </Dialog>:null}

// {showSimpleModal? <Dialog
//       dialogType='simple'
//     >
//       <h2>Hi </h2>

//       <div>
//         <Icon
//           disabled={false}
//           loading={false}
//           name="users"
//         /><p>username@gmail.com </p>
//       </div>

//       <div>
//         <Icon
//           disabled={false}
//           loading={false}
//           name="users"
//         /><p>user02@gmail.com </p>
//       </div>
//       <div>
//         <Icon
//           disabled={false}
//           loading={false}
//           name="plus"
//         /><p>Add acount </p>
//       </div>
//     </Dialog>:null}



//     </div>)
// };