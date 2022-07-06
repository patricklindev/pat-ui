import React, { useState } from 'react';
import Dialog from './index';
import Icon from '../Icon';
import { action } from '@storybook/addon-actions';
import Button from '../Button';

export default {
  title: 'Dialog',
  component: Dialog,
  argTypes: { onClick: { action: 'clicked' } },
};

const exampPara: string = "Sed fringilla tortor arcu, vel malesuada dui molestie vitae. In efficitur odio eget odio tempus vehicula vitae vitae sem."


export const DialogSimple = () => {
  const [show, setshow] = useState(false)

  return (
    <div>

      <Button
        onMouseDown={action('Dialog opened')}
        onClick={() => {
          setshow(show => !show)
        }
        }>Show</Button>
      <Dialog
        dialogType='simple'
        showDialog={show}
        onMouseDown={action('Dialog closed')}
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
  )
};

export const DialogAlert = () => {
  const [show, setshow] = useState(false)
  return (
    <div>

      <Button
        onMouseDown={action('Dialog opened')}
        onClick={() => { setshow(show => !show) }}>Show</Button>


      <Dialog
        onMouseDown={action('Dialog closed')}
        showDialog={show}
        dialogType='alert'
        buttonOneText='agree'
        buttonTwoText='disagree'
        dialogTitle='Vestibulum porta quam in euismod fringilla'
        closeHandlerProps={() => {
          setshow(false)
        }}
        dialogParagraph={exampPara}
      >

      </Dialog>
    </div>
  )
};


export const DialogForm = () => {
  const [show, setshow] = useState(false)
  return (
    <div>
      {show ?
        <Dialog
          id='example'
          showDialog={show}
          dialogType='form'
          dialogTitle='Subscribe'
          dialogParagraph={exampPara}
          buttonOneText="agree"
          buttonTwoText='disagree'
          onMouseDown={action('Dialog closed')}
          closeHandlerProps={() => {
            setshow(false)
            alert("send alert when closing the Dialog")
          }
          }
        >
        </Dialog> :
        <Button 
        onMouseDown={action('Dialog opened')}
        onClick={() => setshow(show => !show)}>Show</Button>

      }
    </div>)
};


