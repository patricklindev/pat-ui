import React from 'react';
import { action } from '@storybook/addon-actions';
import Dialog from './index';
import Button from '../Button';
import Icon from '../Icon';

export default {
  title: 'Dialog',
  component: Dialog,
};

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
    >
      <h2>Vestibulum porta quam in euismod fringilla </h2>
      <p> Nullam gravida imperdiet neque, eget efficitur tortor dictum vel. Nam nec condimentum nisi. Quisque nec ultrices elit. Nam viverra augue maximus cursus lacinia. Pellentesque ut dui vitae ex hendrerit blandit eget vitae lectus. </p>

      <a href='#'>Disagree</a>
      <a href='#'>Agree</a>

    </Dialog>
  </div>
);


export const DialogForm = () => {
  const exampPara: string = "Sed fringilla tortor arcu, vel malesuada dui molestie vitae. In efficitur odio eget odio tempus vehicula vitae vitae sem."
  return (
    <div>
      <Dialog
        dialogType='form'
        dialogTitle='Subscribe'
        dialogParagraph={exampPara}
        buttonOneText="agree"
        buttonTwoText='disagree'
      >
      </Dialog>
    </div>)
};