import React from 'react';
import {action} from '@storybook/addon-actions';
import Message, {messageType, iconType} from './Message';

import { faCircleNotch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default {
    title: 'Basic Message',
    component: Message,
};

const messageStyle: React.CSSProperties = {
    marginRight: '5px',
    marginTop: '5px',
};

export const DefaultMessage = () => (
   <Message msgType={messageType.Basic} >
    <div className="header">
      Changes in Service
    </div>
    <div className="content">
      <p>We just updated our privacy policy here to better service our customers. 
        We recommend reviewing the changes.</p>
    </div>
   </Message>
);

export const DiffTypeMessage = () => (
    <div>
        <Message
        style={messageStyle}
        msgType={messageType.Basic}
        >
        <div className="header">
          Changes in Service
        </div>
        <div className="content">
          <p>We just updated our privacy policy here to better service our customers. 
            We recommend reviewing the changes.</p>
        </div>
        </Message>
        <Message
        style={messageStyle}
        msgType={messageType.List}
        >
        <div className="header">
            New Site Features
        </div>
        <div className="content">
            <ul className="list">
            <li>You can now have cover images on blog pages</li>
            <li>Drafts will now auto-save while writing</li>
            </ul>
        </div>
        </Message>
    
        <Message
        style={messageStyle}
        msgType={messageType.Icon}
        >
        <FontAwesomeIcon className="circle-icon" icon={faCircleNotch} />
        <div className="spinner-message">
        <div className="header">
            Just one second
        </div>
        <div className="content">
            <p>We're fetching that content for you.</p>
        </div>
        </div>
        </Message>

        <Message
        style={messageStyle}
        msgType={messageType.Dismiss}
        >
        <FontAwesomeIcon className="remove-icon" icon={faTimes}
        onClick={() => {
          const element = document.querySelector('.remove-message');
          return element?.remove();
        }}/>
        <div className="header">
        Welcome back!
        </div>
        <div className="content">
        <p>This is a special notification which you can dismiss if you're bored with it.</p>
        </div>
        </Message>
    </div>
  );