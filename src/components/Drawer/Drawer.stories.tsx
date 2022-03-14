import React, { useState } from 'react';
import { Drawer } from './Drawer';
import Button from '.././Button/Button';

export default {
  title: 'Drawer',
  component: Drawer,
};
 
export const persistentDrawer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        margin: '2.5rem auto 0 auto',
        width: '500px',
        lineHeight: '5rem',
        border: 'solid 1px #D3D3D3',
        borderRadius: '10px',
        textAlign: 'center',
      }}
    >
      <Drawer
        open={isOpen}
        variant={'persistent'}
        onToggleCallback={handleToggle}
      >
        <div style={{ textAlign: 'left', marginLeft: '1rem' }}>
          <h5>Inbox</h5>
          <h5>All Mail </h5>
          <h5>Send Email</h5>
          <hr></hr>
          <h5>Spam</h5>
          <h5>Trash</h5>
        </div>
      </Drawer>
      <Button
        btnType="primary"
        disabled={false}
        onClick={handleToggle}
        style={{
          fontWeight: 'bold',
          lineHeight: '50px',
          alignSelf: 'center',
          padding: '0 10px',
        }}
      >
        Open/Close
      </Button>
    </div>
  );
};

export const temporaryDrawer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [anchor, setAnchor] = useState<string>('left');
  
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleAnchor = (direction: string) => {
    setAnchor(direction);
  };

  return (
    <div style={{ marginTop: '2.5rem' }}>
      <Drawer
        open={isOpen}
        variant={'temporary'}
        onToggleCallback={handleToggle}
        anchor={anchor}
      >
        <div style={{ textAlign: 'left', marginLeft: '1rem' }}>
          <h5>Inbox</h5>
          <h5>All Mail </h5>
          <h5>Send Email</h5>
          <hr></hr>
          <h5>Spam</h5>
          <h5>Trash</h5>
        </div>
      </Drawer>
      <div
        style={{
          margin: '0 auto',
          width: '500px',
          lineHeight: '5rem',
          border: 'solid 1px #D3D3D3',
          borderRadius: '10px',
          textAlign: 'center',
        }}
      >
        <Button
          btnType="primary"
          disabled={false}
          onClick={() => {
            handleToggle();
            handleAnchor('left');
          }}
          style={{
            fontWeight: 'bold',
            height: '50px',
            alignSelf: 'center',
            padding: '0 10px',
            width: '5rem',
            lineHeight: '50px',
            margin: '0 0.5rem',
          }}
        >
          Left
        </Button>
        <Button
          btnType="primary"
          disabled={false}
          onClick={() => {
            handleToggle();
            handleAnchor('right');
          }}
          style={{
            fontWeight: 'bold',
            height: '50px',
            alignSelf: 'center',
            padding: '0 10px',
            width: '5rem',
            lineHeight: '50px',
            margin: '0 0.5rem',
          }}
        >
          Right
        </Button>
        <Button
          btnType="primary"
          disabled={false}
          onClick={() => {
            handleToggle();
            handleAnchor('top');
          }}
          style={{
            fontWeight: 'bold',
            height: '50px',
            alignSelf: 'center',
            padding: '0 10px',
            width: '5rem',
            lineHeight: '50px',
            margin: '0 0.5rem',
          }}
        >
          Top
        </Button>
        <Button
          btnType="primary"
          disabled={false}
          onClick={() => {
            handleToggle();
            handleAnchor('bottom');
          }}
          style={{
            fontWeight: 'bold',
            height: '50px',
            alignSelf: 'center',
            padding: '0 10px',
            width: '5rem',
            lineHeight: '50px',
            margin: '0 0.5rem',
          }}
        >
          Bottom
        </Button>
      </div>
    </div>
  );
};
