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
      {show ?
        <Dialog
          //   style={{"width":"2000px"}}
          dialogType='simple'
          showDialog={show}
          onMouseDown={action('Dialog closed')}
          closeHandlerProps={() => setshow(false)}
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
        </Dialog> : null}
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
      {show ? <Dialog
        onMouseDown={action('Dialog closed')}
        showDialog={show}
        dialogType='alert'
        dialogTitle='Vestibulum porta quam in euismod fringilla'
        closeHandlerProps={() => {
          setshow(false)
        }}
        dialogParagraph={exampPara}
      >
      
            <Button btnType="link"> Disagree</Button>
            <Button btnType="link" onClick={() => setshow(false)}> Agree and Close</Button>
         
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
          showDialog={show}
          dialogType='form'
          dialogTitle='Subscribe'
          dialogParagraph={exampPara}
          onMouseDown={action('Dialog closed')}
          closeHandlerProps={() => {
            //   alert("send alert when closing the Dialog")
            setshow(false)
          }} >
            <input onChange={(e)=> setinputvalue(e.target.value)} value={inputValue}placeholder="Enter email here"></input>
          <div >
            <Button btnType="link"> Disagree</Button>
            <Button btnType="link" onClick={() => {
              console.log(inputValue)
              alert(`The Value is: ${inputValue}`)
              setshow(false)}}> Agree and Close</Button>
          </div>
        </Dialog> :
        <Button
          onMouseDown={action('Dialog opened')}
          onClick={() => setshow(show => !show)}>Show</Button>
      }
    </div>)
};