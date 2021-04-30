import React, { useState } from 'react';
import Snackbar, { SnackbarProps } from './Snackbar';
import Button from '../Button/Button';



const btnStyle = {
  margin: '4px',
}


export default {
  title: 'Snackbar',
  component: Snackbar,
};

export const SimpleSnackbar = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);
  return (
    <div>
      <Snackbar pos='top-center' open={showSnackbar}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div>Simple Snackbar</div>
          <div style={{fontSize: '30px', cursor: 'pointer'}} onClick={() => {setShowSnackbar(false)}}>&times;</div>
        </div>
      </Snackbar>
      <Button onClick={() => setShowSnackbar(true)}>Open Simple Snackbar</Button>
    </div>
  )
}


export const DiffPosSnackbar = () => {
  const [showIndex, setShowIndex] = useState(0);

  return (
    <div>
      <div>
        <Button style={btnStyle} onClick={() => {
          setShowIndex(0);
        }}>
          top left snackerbar
        </Button>
        <Button style={btnStyle} onClick={() => {
          setShowIndex(1);
        }}>
          top center snackerbar
        </Button>
        <Button style={btnStyle} onClick={() => {
          setShowIndex(2);
        }}>
          top right snackerbar
        </Button>
      </div>
      <div>
        <Button style={btnStyle} onClick={() => {
          setShowIndex(3);
        }}>
          bottom left snackerbar
        </Button>
        <Button style={btnStyle} onClick={() => {
          setShowIndex(4);
        }}>
          bottom center snackerbar
        </Button>
        <Button style={btnStyle} onClick={() => {
          setShowIndex(5);
        }}>
          bottom right snackerbar
        </Button>
      </div>
      <Snackbar pos='top-left' open={showIndex === 0}>Top Left Snackbar</Snackbar>
      <Snackbar pos='top-center' open={showIndex === 1}>Top Center Snackbar</Snackbar>
      <Snackbar pos='top-right' open={showIndex === 2}>Top Right Snackbar</Snackbar>
      <Snackbar pos='bottom-left' open={showIndex === 3}>Bottom Left Snackbar</Snackbar>
      <Snackbar pos='bottom-center' open={showIndex === 4}>Bottom Center Snackbar</Snackbar>
      <Snackbar pos='bottom-right' open={showIndex === 5}>Bottom Right Snackbar</Snackbar>
    </div>  
  )
};

export const DiffColorSnackbar = () => {
  const [showIndex, setShowIndex] = useState(0);

  return (
    <div>
      <div>
        <Button style={btnStyle} onClick={() => {
          setShowIndex(0);
        }}>
          Danger Snackbar
        </Button>
        <Button style={btnStyle} onClick={() => {
          setShowIndex(1);
        }}>
          Warning Snackbar
        </Button>
        <Button style={btnStyle} onClick={() => {
          setShowIndex(2);
        }}>
          Information Snackbar
        </Button>
        <Button style={btnStyle} onClick={() => {
          setShowIndex(3);
        }}>
          Success Snackbar
        </Button>
      </div>        
      <Snackbar severity="error" open={showIndex === 0}>This is an error message!</Snackbar>
      <Snackbar severity='warning' open={showIndex === 1}>This is an warning message!</Snackbar>
      <Snackbar severity='info' open={showIndex === 2}>This is an information message!</Snackbar>
      <Snackbar severity='success' open={showIndex === 3}>This is an success message!</Snackbar>
    </div>  
  )
};

export const AutoDisappearSnackbar = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);
  return (
    <div>
      <Snackbar pos='top-center' open={showSnackbar} onClose={() => setShowSnackbar(false)} autoHideDuration={3000}>
        This Snackbar will disapper in 3 seconds!
      </Snackbar>
      <Button onClick={() => setShowSnackbar(true)}>Open Auto Disappear Snackbar</Button>
    </div>
  )
}



