import React, { useState } from 'react';
import Dialog from './index';
import Icon from '../Icon';
import { action } from '@storybook/addon-actions';
import Button from '../Button';
import { DialogTitle, DialogActions, DialogContents } from './Dialog';

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
      {show ?

        <Dialog
          dialogType='simple'
          onMouseDown={action('Dialog closed')}
          closeHandlerProps={() => setshow(false)}
        >
          <DialogTitle>
            <h2>Hi </h2>
          </DialogTitle>
          <DialogContents>
            <p>
              <Icon
                disabled={false}
                loading={false}
                name="users"
              /> username@gmail.com </p>

            <div>
              <p>   <Icon
                disabled={false}
                loading={false}
                name="users"
              /> username@gmail.com </p>
            </div>

            <div>
              <p>  <Icon
                disabled={false}
                loading={false}
                name="users"
              /> user02@gmail.com </p>
            </div>
            <div>
              <p>   <Icon
                disabled={false}
                loading={false}
                name="plus"
              /> Add acount </p>
            </div>
          </DialogContents>

        </Dialog> : null
      }
    </div >
  )
};

export const DialogAlert = () => {
  const [show, setshow] = useState(false)
  return (
    <div>
      <Button
        onMouseDown={action('Dialog opened')}
        onClick={() => { setshow(show => !show) }}>Show</Button>
      {show ?

        <Dialog
          onClick={action('Dialog closed')}
          dialogType='alert'
          closeHandlerProps={() => {
            setshow(false)
          }}
        >
          <DialogTitle><h3>Vestibulum porta quam in euismod fringilla</h3></DialogTitle>
          <DialogContents>
            {exampPara}
          </DialogContents>
          <DialogActions>
            <Button btnType="link"> Disagree</Button>
            <Button btnType="link" onClick={() => setshow(false)}> Agree and Close</Button>
          </DialogActions>
        </Dialog> : null}
    </div>
  )
};


export const DialogForm = () => {
  const [show, setshow] = useState(false)
  const [inputValue, setinputvalue] = useState("")
  return (
    <div>
      {show ?
        <Dialog
          id='example'
          dialogType='form'
          dialogTitle='Subscribe'
          dialogParagraph={exampPara}
          onClick={action('Dialog closed')}
          closeHandlerProps={() => {
            setshow(false)
          }} >
          <input onChange={(e) => setinputvalue(e.target.value)} value={inputValue} placeholder="Enter email here"></input>
          <div >
            <a onClick={action('Dialog closed')}> Disagree</a>
            <a onClick={() => {
              alert(`The Value is: ${inputValue}`)
              setshow(false)
            }}> Agree and Close</a>
          </div>
        </Dialog> :
        <Button
          onMouseDown={action('Dialog opened')}
          onClick={() => setshow(show => !show)}>Show</Button>
      }
    </div>)
};